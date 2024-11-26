import { GlobalStyle } from '@/core/ui/styles/global';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const Modals = dynamic(async () => import('@/core/ui/context/modals/index'), {
  ssr: false
})

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false }
    }
  }), [])
  
  return (
    <>
      <QueryClientProvider
        client={queryClient}
      >
          <GlobalStyle />
          <Modals />
          <div style={{ position: 'relative' }}>
            <Component {...pageProps} />        
          </div>
      </QueryClientProvider>
    </>
  );
}
