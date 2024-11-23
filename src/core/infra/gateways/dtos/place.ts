import { Place } from "@/core/entities/place"
import { MapDTO, UpdateMapDTO } from "./map"

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

export class CreatePlaceDTO {
  name!: string
  logoBase64!: string
  
  static fromPlace (place: Place): CreatePlaceDTO {
    return {
      logoBase64: place.logo,
      name: place.name
    }
  }
}

export class UpdatePlaceDTO {
  name!: string
  logoBase64!: string
  maps: UpdateMapDTO[] = []

  static fromPlace (place: Place): UpdatePlaceDTO {
    return {
      logoBase64: place.logo,
      maps: place.maps.map(UpdateMapDTO.fromMap),
      name: place.name
    }
  }
}