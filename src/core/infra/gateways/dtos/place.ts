import { Place } from "@/core/entities/place"
import { MapDTO } from "./map"

export class PlaceDTO {
  id!: string
  name!: string
  logo!: string
  maps!: MapDTO[]

  static toPlace (dto: PlaceDTO): Place {
    return new Place()
      .withId(dto.id)
      .withName(dto.name)
      .withLogo(dto.logo)
      .insertMaps(dto.maps.map(MapDTO.toMap))
  }
}