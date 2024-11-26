import { DirectionPoint } from '@/core/entities/direction-point';

export interface IDirectionPointGateway {
  create (directionPoint: DirectionPoint): Promise<void>
  update (directionPoint: DirectionPoint): Promise<void>
  delete (directionPoint: DirectionPoint): Promise<void>
  getByMap (mapId: string): Promise<DirectionPoint[]>
}