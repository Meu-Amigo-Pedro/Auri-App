import { Place } from "@/core/entities/place";

export interface IPlaceGateway {
  getAll: () => Promise<Place[]>
  getOne: (id: string) => Promise<Place>
  create: (place: Place) => Promise<void>
  update: (place: Place) => Promise<void>
  delete: (place: Place) => Promise<void>
}