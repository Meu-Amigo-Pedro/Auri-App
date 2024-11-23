/* eslint-disable @typescript-eslint/no-explicit-any */
export class Base64Converter {
  convert (data: Blob | File): PromiseLike<ArrayBuffer | string> {
    return new Promise((resolve, reject) => {
      if (!data) reject(new Error('Failed to solve'))
      const reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result as any)
      }
      reader.onerror = () => { reject(new Error('Não foi possível converter o arquivo')) }
      reader.readAsDataURL(data)
    })
  }

  static fromUrl (url: string): PromiseLike<ArrayBuffer | string> {
    return new Promise((resolve, reject) => {
      fetch(url).then(response => {
        if (!response.ok) {
          reject(new Error('Failed to solve url'))
        }

        response.arrayBuffer().then(buffer => {
          const blob = new Blob([buffer], { type: response.headers.get('content-type') || 'application/octet-stream' })

          const reader = new FileReader()
          reader.onload = () => {
            resolve(reader.result as any)
          }
          reader.onerror = () => { reject(new Error('Não foi possível converter o arquivo')) }
          reader.readAsDataURL(blob)
        })
      })
    })
  }
}

export const base64Converter = new Base64Converter()