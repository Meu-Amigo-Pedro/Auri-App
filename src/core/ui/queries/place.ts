import { IPlaceGateway } from "@/core/infra/gateways/contracts/place"
import { useDeps } from "../hooks/use-deps"
import { useQuery } from "react-query"

export const useGetPlaces = () => {
  const placeGateway = useDeps<IPlaceGateway>('PlaceGateway')

  const { data, isLoading, error, isSuccess } = useQuery(
    ['getPlaces'],
    async () => await placeGateway.getAll()
  )

  return {
    data,
    error,
    isLoading,
    isSuccess
  }
}