import { Category } from '@/core/entities/category';
import { ICategoryGateway } from './contracts/category';
import { inject, injectable } from 'inversify';
import { IHttpClient } from '../http/contracts/http-client';
import { CategoryDTO, CreateCategoryDTO, UpdateCategoryDTO } from './dtos/category';

@injectable()
export class CategoryGateway implements ICategoryGateway {
  private readonly BASE_URL: string = process.env.NEXT_PUBLIC_AURI_API!

  constructor (
    @inject('HttpClient') private readonly httpClient: IHttpClient
  ) {}
  
  async getAll (placeId: string): Promise<Category[]> {
    const dtos = await this.httpClient.get({
      url: `${this.BASE_URL}/category`,
      params: { placeId }
    })

    return dtos.map(CategoryDTO.toCategory)
  }
  
  async create (category: Category): Promise<void> {
    await this.httpClient.post({
      url: `${this.BASE_URL}/category`,
      data: CreateCategoryDTO.toDTO(category)
    })
  }
  
  async update (category: Category): Promise<void> {
    await this.httpClient.put({
      url: `${this.BASE_URL}/category`,
      data: UpdateCategoryDTO.toDTO(category),
      params: { placeId: category.placeId }
    })
  }
  
  async delete (categoryId: string): Promise<void> {
    await this.httpClient.delete({
      url: `${this.BASE_URL}/category`,
      params: { categoryId }
    })
  }
}