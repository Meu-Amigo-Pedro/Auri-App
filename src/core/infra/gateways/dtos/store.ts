import { Store } from '@/core/entities/store'
import { CoordinateDTO } from './coordinate'

export class StoreDTO {
  id!: string
  name!: string
  categoryId!: string
  placeId!: string
  picture!: string
  coordinate!: CoordinateDTO
  order!: number
  floor!: string

  static toStore (dto: StoreDTO): Store {
    return new Store()
      .withId(dto.id)
      .withName(dto.name)
      .withCategoryId(dto.categoryId)
      .withPlaceId(dto.placeId)
      .withPicture(dto.picture)
      .withCoordinate(CoordinateDTO.toCoordinate(dto.coordinate))
      .withOrder(dto.order)
      .withFloor(dto.floor)
  }

  static toDTO (store: Store): StoreDTO {
    return {
      id: store.id,
      name: store.name,
      categoryId: store.categoryId,
      placeId: store.placeId,
      picture: store.picture,
      coordinate: CoordinateDTO.toDTO(store.coordinate),
      order: store.order,
      floor: store.floor
    }
  }
}

export class CreateStoreDTO {
  name!: string
  categoryId!: string
  placeId!: string
  pictureBase64!: string
  coordX!: number
  coordY!: number
  floor!: string
  order!: number

  static toDTO (store: Store): CreateStoreDTO {
    return {
      name: store.name,
      categoryId: store.categoryId,
      placeId: store.placeId,
      pictureBase64: store.picture,
      coordX: store.coordinate.x,
      coordY: store.coordinate.y,
      floor: store.floor,
      order: store.order
    }
  }
}

export class UpdateStoreDTO {
  name!: string
  categoryId!: string
  placeId!: string
  pictureBase64!: string
  coordX!: number
  coordY!: number
  floor!: string
  order!: number

  static toDTO (store: Store): UpdateStoreDTO {
    return {
      name: store.name,
      categoryId: store.categoryId,
      placeId: store.placeId,
      pictureBase64: store.picture,
      coordX: store.coordinate.x,
      coordY: store.coordinate.y,
      floor: store.floor,
      order: store.order
    }
  }
}