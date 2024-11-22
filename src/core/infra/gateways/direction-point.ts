import { inject, injectable } from "inversify"
import { IDirectionPointGateway } from "./contracts/direction-point"
import { IHttpClient } from "../http/contracts/http-client"
import { DirectionPoint } from "@/core/entities/direction-point"
import { DirectionPointDTO, MutateDirectionPointDTO } from "./dtos/direction-point"

@injectable()
export class DirectionPointGateway implements IDirectionPointGateway {
  private readonly BASE_URL: string = process.env.NEXT_PUBLIC_AURI_API!

  constructor (
    @inject('HttpClient') private readonly httpClient: IHttpClient
  ) {}

  async create (directionPoint: DirectionPoint): Promise<void> {
    await this.httpClient.post({
      url: `${this.BASE_URL}/direction-point`,
      data: MutateDirectionPointDTO.toDTO(directionPoint)
    })
  }

  async update (directionPoint: DirectionPoint): Promise<void> {
    await this.httpClient.put({
      url: `${this.BASE_URL}/direction-point`,
      params: {
        id: directionPoint.id
      },
      data: MutateDirectionPointDTO.toDTO(directionPoint)
    })
  }

  async delete (directionPoint: DirectionPoint): Promise<void> {
    await this.httpClient.delete({
      url: `${this.BASE_URL}/direction-point`,
      params: {
        id: directionPoint.id
      }
    })
  }

  async getByMap (mapId: string): Promise<DirectionPoint[]> {
    const dtos = await this.httpClient.delete({
      url: `${this.BASE_URL}/direction-point`,
      params: {
        mapId
      }
    }) as DirectionPointDTO[]
    
    return dtos.map(x => DirectionPointDTO.toDirectionPoint(DirectionPointDTO.toDTO(x)))
  }
}