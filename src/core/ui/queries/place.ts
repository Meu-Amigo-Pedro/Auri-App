import { IPlaceGateway } from "@/core/infra/gateways/contracts/place"
import { useDeps } from "../hooks/use-deps"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { Place } from "@/core/entities/place"
import { AxiosError } from "axios"

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

export const useGetPlace = (id: string) => {
  const placeGateway = useDeps<IPlaceGateway>('PlaceGateway')

  const { data, isLoading, error, isSuccess } = useQuery(
    ['getPlace', id],
    async () => await placeGateway.getOne(id),
    { 
      retry: true,
      enabled: !!id
    }
  )

  return {
    data,
    error,
    isLoading,
    isSuccess
  }
}


type CreatePlace = {
  place: Place
}

export const useCreatePlace = () => {
  const placeGateway = useDeps<IPlaceGateway>('PlaceGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, CreatePlace, typeof placeGateway.create>(
    async ({ place }) => {
      await placeGateway.create(place)
    },
    {
      onSuccess: (_, { place }) => {
        queryClient.invalidateQueries(['getPlace', place.id])
        queryClient.invalidateQueries(['getPlaces'])
      }
    }
  )

  return {
    createPlace: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type UpdatePlace = {
  place: Place
}

export const useUpdatePlace = () => {
  const placeGateway = useDeps<IPlaceGateway>('PlaceGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, UpdatePlace, typeof placeGateway.update>(
    async ({ place }) => {
      await placeGateway.update(place)
    },
    {
      onSuccess: (_, { place }) => {
        queryClient.invalidateQueries(['getPlace', place.id])
        queryClient.invalidateQueries(['getPlaces'])
      }
    }
  )

  return {
    updatePlace: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type DeletePlace = {
  place: Place
}

export const useDeletePlace = () => {
  const placeGateway = useDeps<IPlaceGateway>('PlaceGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, DeletePlace, typeof placeGateway.delete>(
    async ({ place }) => {
      await placeGateway.delete(place)
    },
    {
      onSuccess: (_, { place }) => {
        queryClient.invalidateQueries(['getPlace', place.id])
        queryClient.invalidateQueries(['getPlaces'])
      }
    }
  )

  return {
    deletePlace: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}