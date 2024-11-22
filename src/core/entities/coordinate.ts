export class Coordinate {
  id!: string
  x!: number
  y!: number

  static Empty () {
    return new Coordinate()
      .withX(0)
      .withY(0)
  }

  withX (given: number) {
    this.x = given

    return this
  }

  withY (given: number) {
    this.y = given

    return this
  }
}