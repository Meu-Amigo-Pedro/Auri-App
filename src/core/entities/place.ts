import { Map } from './map'

export class Place {
  id!: string
  name!: string
  logo!: string
  maps!: Map[]

  withId (id: string) {
    this.id = id
    return this
  }

  withName (name: string) {
    this.name = name
    return this
  }

  withLogo (logo: string) {
    this.logo = logo
    return this
  }

  insertMaps (maps: Map[]) {
    this.maps = maps
    return this
  }

  addMap (map: Map) {
    this.maps.push(map)
    return this
  }
}