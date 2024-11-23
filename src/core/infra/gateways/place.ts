import { Place } from "@/core/entities/place"
import { IPlaceGateway } from "./contracts/place"
import { inject, injectable } from "inversify"
import { IHttpClient } from "../http/contracts/http-client"
import { CreatePlaceDTO, PlaceDTO, UpdatePlaceDTO } from "./dtos/place"

@injectable()
export class PlaceGateway implements IPlaceGateway {
  private readonly BASE_URL: string = process.env.NEXT_PUBLIC_AURI_API!

  constructor (
    @inject('HttpClient') private readonly httpClient: IHttpClient
  ) {}

  async create (place: Place): Promise<void> {
    await this.httpClient.post({
      url: `${this.BASE_URL}/places`,
      data: CreatePlaceDTO.fromPlace(place)
    })
  }
  async update (place: Place): Promise<void> {
    await this.httpClient.post({
      url: `${this.BASE_URL}/places`,
      params: { id: place.id },
      data: UpdatePlaceDTO.fromPlace(place)
    })
  }
  async delete (place: Place): Promise<void> {
    await this.httpClient.post({
      url: `${this.BASE_URL}/places`,
      params: { id: place.id },
    })
  }

  async getAll (): Promise<Place[]> {
    const dtos = await this.httpClient.get({
      url: `${this.BASE_URL}/place`
    })

    return dtos.map(PlaceDTO.toPlace)
  }
}