import { Place } from "@/core/entities/place";

export interface IPlaceGateway {
  getAll: () => Promise<Place[]>
}