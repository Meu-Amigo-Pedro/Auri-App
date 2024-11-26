import { Category } from '@/core/entities/category'

export class CategoryDTO {
  id!: string
  name!: string
  placeId!: string
  picture!: string
  colour!: string
  order!: number

  static toCategory (category: CategoryDTO): Category {
    return new Category()
      .withId(category.id)
      .withName(category.name)
      .withPlaceId(category.placeId)
      .withPicture(category.picture)
      .withColour(category.colour)
      .withOrder(category.order)
  }

  static toDTO (category: Category): CategoryDTO {
    return {
      id: category.id,
      name: category.name,
      placeId: category.placeId,
      picture: category.picture,
      colour: category.colour,
      order: category.order
    }
  }
}

export class CreateCategoryDTO {
  name!: string
  pictureBase64!: string
  colour!: string
  placeId!: string
  order!: number

  static toDTO (category: Category): CreateCategoryDTO {
    return {
      name: category.name,
      pictureBase64: category.picture,
      colour: category.colour,
      placeId: category.placeId,
      order: category.order
    }
  }
}

export class UpdateCategoryDTO {
  name!: string
  pictureBase64!: string
  colour!: string
  placeId!: string
  order!: number

  static toDTO (category: Category): UpdateCategoryDTO {
    return {
      name: category.name,
      pictureBase64: category.picture,
      colour: category.colour,
      placeId: category.placeId,
      order: category.order
    }
  }
}