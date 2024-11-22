export class Map {
  id!: string
  placeId!: string
  floor!: string
  picture!: string
  pictureWithGrid!: string

  withId (id: string) {
    this.id = id
    return this
  }

  withPlaceId (placeId: string) {
    this.placeId = placeId
    return this
  }

  withFloor (floor: string) {
    this.floor = floor
    return this
  }

  withPicture (picture: string) {
    this.picture = picture
    return this
  }

  withPictureWithGrid (pictureWithGrid: string) {
    this.pictureWithGrid = pictureWithGrid
    return this
  }
}