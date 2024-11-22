import { Coordinate } from "@/core/entities/coordinate"

export class CoordinateDTO {
  id!: string
  x!: number
  y!: number

  static toDTO (data: CoordinateDTO): CoordinateDTO {
    return {
      id: data.id,
      x: data.x,
      y: data.y
    }
  }

  static toCoordinate (dto: CoordinateDTO): Coordinate {
    const coordinate = new Coordinate()
      .withX(dto.x)
      .withY(dto.y)

    coordinate.id = dto.id

    return coordinate
  }
}