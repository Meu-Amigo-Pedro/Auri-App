import { Coordinate } from './coordinate'

export class Store {
  id!: string
  name!: string
  categoryId!: string
  placeId!: string
  picture!: string
  coordinate!: Coordinate
  order!: number
  floor!: string

  withId (id: string) {
    this.id = id
    return this
  }

  withName (name: string) {
    this.name = name
    return this
  }
  
  withCategoryId (categoryId: string) {
    this.categoryId = categoryId
    return this
  }

  withPlaceId (placeId: string) {
    this.placeId = placeId
    return this
  }

  withPicture (picture: string) {
    this.picture = picture
    return this
  }

  withCoordinate (coordinate: Coordinate) {
    this.coordinate = coordinate
    return this
  }

  withOrder (order: number) {
    this.order = order
    return this
  }

  withFloor (floor: string) {
    this.floor = floor
    return this
  }
}