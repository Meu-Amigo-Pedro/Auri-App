/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpClientInput = {
  url: string
  data?: any
  params?: any
}

export interface IHttpClient {
  get: (input: HttpClientInput) => Promise<any>
  post: (input: HttpClientInput) => Promise<any>
  put: (input: HttpClientInput) => Promise<any>
  delete: (input: HttpClientInput) => Promise<any>
}
