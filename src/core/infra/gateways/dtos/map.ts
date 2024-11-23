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

  static fromMap (map: Map): MapDTO {
    return {
      floor: map.floor,
      id: map.id,
      picture: map.picture,
      pictureWithGrid: map.pictureWithGrid,
      placeId: map.placeId
    }
  }
}

export class UpdateMapDTO {
  picture!: string
  floor!: string

  static fromMap (map: Map): UpdateMapDTO {
    return {
      floor: map.floor,
      picture: map.picture
    }
  }
}