import 'reflect-metadata'
import { Container } from 'inversify'
import { IHttpClient } from './infra/http/contracts/http-client'
import { AxiosHttpClient } from './infra/http/axios'
import { IPlaceGateway } from './infra/gateways/contracts/place'
import { PlaceGateway } from './infra/gateways/place'
import { IDirectionPointGateway } from './infra/gateways/contracts/direction-point'
import { DirectionPointGateway } from './infra/gateways/direction-point'
import { ICategoryGateway } from './infra/gateways/contracts/category'
import { CategoryGateway } from './infra/gateways/category'
import { IStoreGateway } from './infra/gateways/contracts/store'
import { StoreGateway } from './infra/gateways/store'

const iocContainer = new Container({ defaultScope: 'Singleton' })

iocContainer.bind<IHttpClient>('HttpClient').to(AxiosHttpClient)
iocContainer.bind<IPlaceGateway>('PlaceGateway').to(PlaceGateway)
iocContainer.bind<ICategoryGateway>('CategoryGateway').to(CategoryGateway)
iocContainer.bind<IStoreGateway>('StoreGateway').to(StoreGateway)
iocContainer.bind<IDirectionPointGateway>('DirectionPointGateway').to(DirectionPointGateway)

export { iocContainer }