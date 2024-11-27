import { Store } from '@/core/entities/store';

export interface IStoreGateway {
  getAll: (placeId: string, categoryId: string) => Promise<Store[]>
  create: (store: Store) => Promise<void>
  update: (store: Store) => Promise<void>
  delete: (storeId: string) => Promise<void>
}