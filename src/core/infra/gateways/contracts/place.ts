import { Place } from "@/core/entities/place";

export interface IPlaceGateway {
  getAll: () => Promise<Place[]>
  create: (place: Place) => Promise<void>
  update: (place: Place) => Promise<void>
  delete: (place: Place) => Promise<void>
}