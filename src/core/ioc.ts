import { Container } from 'inversify'
import 'reflect-metadata'
import { IHttpClient } from './infra/http/contracts/http-client'
import { AxiosHttpClient } from './infra/http/axios'
import { IPlaceGateway } from './infra/gateways/contracts/place'
import { PlaceGateway } from './infra/gateways/place'
import { IDirectionPointGateway } from './infra/gateways/contracts/direction-point'
import { DirectionPointGateway } from './infra/gateways/direction-point'

const iocContainer = new Container({ defaultScope: 'Singleton' })

iocContainer.bind<IHttpClient>('HttpClient').to(AxiosHttpClient)
iocContainer.bind<IPlaceGateway>('PlaceGateway').to(PlaceGateway)
iocContainer.bind<IDirectionPointGateway>('DirectionPointGateway').to(DirectionPointGateway)

export { iocContainer }