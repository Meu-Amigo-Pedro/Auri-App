import { Map } from "@/core/entities/map"

export class MapDTO {
  id!: string
  placeId!: string
  floor!: string
  picture!: string
  pictureWithGrid!: string

  static toMap (dto: MapDTO): Map {
    return new Map()
      .withId(dto.id)
      .withPlaceId(dto.placeId)
      .withFloor(dto.floor)
      .withPicture(dto.picture)
      .withPictureWithGrid(dto.pictureWithGrid)
  }
}