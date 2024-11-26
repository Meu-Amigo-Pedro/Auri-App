import { DirectionPoint } from '@/core/entities/direction-point'
import { CoordinateDTO } from './coordinate'

export class DirectionPointDTO {
  id!: string
  name: string | null = null
  coordinate!: CoordinateDTO
  isStartPoint: boolean = false
  placeId!: string
  mapId!: string

  static toDTO (data: DirectionPointDTO): DirectionPointDTO {
    return {
      coordinate: CoordinateDTO.toDTO(data.coordinate),
      id: data.id,
      isStartPoint: data.isStartPoint,
      name: data.name,
      mapId: data.mapId,
      placeId: data.placeId
    }
  }

  static toDirectionPoint (dto: DirectionPointDTO): DirectionPoint {
    const directionPoint = new DirectionPoint()

    directionPoint.id = dto.id
    directionPoint.name = dto.name
    directionPoint.isStartPoint = dto.isStartPoint
    directionPoint.coordinate = CoordinateDTO.toCoordinate(dto.coordinate)
    directionPoint.placeId = dto.placeId
    directionPoint.mapId = dto.mapId

    return directionPoint
  } 
}

export class MutateDirectionPointDTO {
  name: string | null = null
  coordX: number = 0
  coordY: number = 0
  isStartPoint: boolean = false
  placeId!: string
  mapId!: string

  static toDTO (directionPoint: DirectionPoint): MutateDirectionPointDTO {
    return {
      coordX: directionPoint.coordinate.x,
      coordY: directionPoint.coordinate.y,
      isStartPoint: directionPoint.isStartPoint,
      mapId: directionPoint.mapId,
      name: directionPoint.name,
      placeId: directionPoint.placeId
    }
  }
}