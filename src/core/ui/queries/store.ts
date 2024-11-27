import { IStoreGateway } from '@/core/infra/gateways/contracts/store'
import { useDeps } from '../hooks/use-deps'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Store } from '@/core/entities/store'
import { AxiosError } from 'axios'

export const useGetStores = (placeId: string, categoryId: string) => {
  const storeGateway = useDeps<IStoreGateway>('StoreGateway')

  const { data, isLoading, error, isSuccess } = useQuery(
    ['getStores'],
    async () => await storeGateway.getAll(placeId, categoryId)
  )

  return {
    data,
    error,
    isLoading,
    isSuccess
  }
}

type CreateStore = {
  store: Store
}

export const useCreateStore = () => {
  const storeGateway = useDeps<IStoreGateway>('StoreGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, CreateStore, typeof storeGateway.create>(
    async ({ store }) => {
      await storeGateway.create(store)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getStores'])
      }
    }
  )

  return {
    createStore: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type UpdateStore = {
  store: Store
}

export const useUpdateStore = () => {
  const storeGateway = useDeps<IStoreGateway>('StoreGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, UpdateStore, typeof storeGateway.update>(
    async ({ store }) => {
      await storeGateway.update(store)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getStores'])
      }
    }
  )

  return {
    updateStore: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type DeleteStore = {
  storeId: string
}

export const useDeleteStore = () => {
  const storeGateway = useDeps<IStoreGateway>('StoreGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, DeleteStore, typeof storeGateway.delete>(
    async ({ storeId }) => {
      await storeGateway.delete(storeId)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getStores'])
      }
    }
  )

  return {
    deleteStore: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}