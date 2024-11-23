# Etapa 1: Construção da aplicação
FROM node:18-alpine AS builder

# Configurar diretório de trabalho
WORKDIR /app

# Copiar arquivos package.json e package-lock.json/yarn.lock
COPY package*.json ./

# Instalar todas as dependências (produção e desenvolvimento)
RUN npm install

# Copiar o restante dos arquivos para o contêiner
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Etapa 2: Apenas dependências de produção
FROM node:18-alpine AS runner

# Configurar diretório de trabalho
WORKDIR /app

# Copiar apenas as dependências de produção
COPY package*.json ./
RUN npm ci --only=production

# Copiar o build gerado e os arquivos públicos
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expor a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
