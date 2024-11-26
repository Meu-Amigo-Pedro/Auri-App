/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { HttpClientInput, IHttpClient } from './contracts/http-client';

export class AxiosHttpClient implements IHttpClient {
  async get ({ url, params }: HttpClientInput): Promise<any> {
    const result = await this.executeErrorHandling(
      async () => await axios.request({
        url,
        params,
        method: 'get'
      })
    )

    return result.data
  }

  async post ({ url, data, params }: HttpClientInput): Promise<any> {
    const result = await this.executeErrorHandling(
      async () => await axios.request({
        url,
        data,
        params,
        method: 'post'
      })
    )

    return result.data
  }
  
  async put ({ url, data, params }: HttpClientInput): Promise<any> {
    const result = await this.executeErrorHandling(
      async () => await axios.request({
        url,
        data,
        params,
        method: 'put'
      })
    )

    return result.data
  }
  
  async delete ({ url, data, params }: HttpClientInput): Promise<any> {
    const result = await this.executeErrorHandling(
      async () => await axios.request({
        url,
        data,
        params,
        method: 'delete'
      })
    )

    return result.data
  }

  private async executeErrorHandling (callback: Function) {
    try {
      return (await callback())
    } catch (error: any) {
      throw new Error(error.response?.data.message)
    }
  }
}