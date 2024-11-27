import { Category } from '@/core/entities/category';

export interface ICategoryGateway {
  getAll: (placeId: string) => Promise<Category[]>
  getOne: (categoryId: string) => Promise<Category>
  create: (category: Category) => Promise<void>
  update: (category: Category) => Promise<void>
  delete: (categoryId: string) => Promise<void>
}