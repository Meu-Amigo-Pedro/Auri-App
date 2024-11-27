import { Store } from '@/core/entities/store';
import { IStoreGateway } from './contracts/store';
import { inject, injectable } from 'inversify';
import { IHttpClient } from '../http/contracts/http-client';
import { CreateStoreDTO, StoreDTO, UpdateStoreDTO } from './dtos/store';

@injectable()
export class StoreGateway implements IStoreGateway {
  private readonly BASE_URL: string = process.env.NEXT_PUBLIC_AURI_API!

  constructor (
    @inject('HttpClient') private readonly httpClient: IHttpClient
  ) {}
  
  async getAll (placeId: string, categoryId: string): Promise<Store[]> {
    const dtos = await this.httpClient.get({
      url: `${this.BASE_URL}/store`,
      params: { placeId, categoryId }
    })

    return dtos.map(StoreDTO.toStore)
  }
  
  async create (store: Store): Promise<void> {
    await this.httpClient.post({
      url: `${this.BASE_URL}/store`,
      data: CreateStoreDTO.toDTO(store)
    })
  }
  
  async update (store: Store): Promise<void> {
    await this.httpClient.put({
      url: `${this.BASE_URL}/store`,
      data: UpdateStoreDTO.toDTO(store)
    })
  }
  
  async delete (storeId: string): Promise<void> {
    await this.httpClient.delete({
      url: `${this.BASE_URL}/store`,
      params: { id: storeId }
    })
  }
}