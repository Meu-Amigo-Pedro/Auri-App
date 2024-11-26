/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDirectionPointGateway } from '@/core/infra/gateways/contracts/direction-point'
import { useDeps } from '../hooks/use-deps'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { DirectionPoint } from '@/core/entities/direction-point'
import { AxiosError } from 'axios'

export const useGetDirectionPoints = (mapId: string) => {
  const directionPointGateway = useDeps<IDirectionPointGateway>('DirectionPointGateway')

  const { data, isLoading, error, isSuccess } = useQuery(
    ['getDirectionPoints', mapId],
    async () => await directionPointGateway.getByMap(mapId)
  )

  return {
    data,
    error,
    isLoading,
    isSuccess
  }
}

type CreateDirectionPoint = {
  directionPoint: DirectionPoint
}

export const useCreateDirectionPoint = () => {
  const directionPointGateway = useDeps<IDirectionPointGateway>('DirectionPointGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, CreateDirectionPoint, typeof directionPointGateway.create>(
    async ({ directionPoint }) => {
      await directionPointGateway.create(directionPoint)
    },
    {
      onSuccess: (_, { directionPoint }) => {
        queryClient.invalidateQueries(['getDirectionPoints', directionPoint.mapId])
      }
    }
  )

  return {
    createDirectionPoint: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type UpdateDirectionPoint = {
  directionPoint: DirectionPoint
}

export const useUpdateDirectionPoint = () => {
  const directionPointGateway = useDeps<IDirectionPointGateway>('DirectionPointGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, UpdateDirectionPoint, typeof directionPointGateway.update>(
    async ({ directionPoint }) => {
      await directionPointGateway.update(directionPoint)
    },
    {
      onSuccess: (_, { directionPoint }) => {
        queryClient.invalidateQueries(['getDirectionPoints', directionPoint.mapId])
      }
    }
  )

  return {
    updateDirectionPoint: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type DeleteDirectionPoint = {
  directionPoint: DirectionPoint
}

export const useDeleteDirectionPoint = () => {
  const directionPointGateway = useDeps<IDirectionPointGateway>('DirectionPointGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, DeleteDirectionPoint, typeof directionPointGateway.delete>(
    async ({ directionPoint }) => {
      await directionPointGateway.delete(directionPoint)
    },
    {
      onSuccess: (_, { directionPoint }) => {
        queryClient.invalidateQueries(['getDirectionPoints', directionPoint.mapId])
      }
    }
  )

  return {
    deleteDirectionPoint: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}