export class Category {
  id!: string
  name!: string
  placeId!: string
  picture!: string
  colour!: string
  order!: number

  withId (id: string) {
    this.id = id
    return this
  }

  withName (name: string) {
    this.name = name
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

  withColour (colour: string) {
    this.colour = colour
    return this
  }

  withOrder (order: number) {
    this.order = order
    return this
  }
}