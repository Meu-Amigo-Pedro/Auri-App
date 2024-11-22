import { Coordinate } from "./coordinate"

export class DirectionPoint {
  id!: string
  name: string | null = null
  coordinate: Coordinate = Coordinate.Empty()
  isStartPoint: boolean = false
  placeId!: string
  mapId!: string

  named (given: string) {
    this.name = given ?? null
  }

  toggleStartPoint () {
    this.isStartPoint = !this.isStartPoint

    return this
  }

  associatedWithPlace (placeId: string) {
    this.placeId = placeId

    return this
  }

  associatedWithMap (mapId: string) {
    this.mapId = mapId

    return this
  }
}