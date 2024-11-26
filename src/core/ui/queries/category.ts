import { ICategoryGateway } from '@/core/infra/gateways/contracts/category'
import { useDeps } from '../hooks/use-deps'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Category } from '@/core/entities/category'
import { AxiosError } from 'axios'

export const useGetCategories = (placeId: string) => {
  const categoryGateway = useDeps<ICategoryGateway>('CategoryGateway')
  
  const { data, isLoading, error, isSuccess } = useQuery(
    ['getCategories', placeId],
    async () => await categoryGateway.getAll(placeId)
  )

  return {
    data,
    error,
    isLoading,
    isSuccess
  }
}

type CreateCategory = {
  category: Category
}

export const useCreateCategory = () => {
  const categoryGateway = useDeps<ICategoryGateway>('CategoryGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, CreateCategory, typeof categoryGateway.create>(
    async ({ category }) => {
      await categoryGateway.create(category)
    },
    {
      onSuccess: (_, { category }) => {
        queryClient.invalidateQueries(['getCategories', category.placeId])
      }
    }
  )

  return {
    createCategory: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type UpdateCategory = {
  category: Category
}

export const useUpdateCategory = () => {
  const categoryGateway = useDeps<ICategoryGateway>('CategoryGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, UpdateCategory, typeof categoryGateway.update>(
    async ({ category }) => {
      await categoryGateway.update(category)
    },
    {
      onSuccess: (_, { category }) => {
        queryClient.invalidateQueries(['getCategories', category.placeId])
      }
    }
  )

  return {
    updateCategory: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}

type DeleteCategory = {
  category: Category
}

export const useDeleteCategory = () => {
  const categoryGateway = useDeps<ICategoryGateway>('CategoryGateway')

  const queryClient = useQueryClient()

  const { isLoading, isError, error, isSuccess, mutate } = useMutation<void, AxiosError, DeleteCategory, typeof categoryGateway.delete>(
    async ({ category }) => {
      await categoryGateway.delete(category.id)
    },
    {
      onSuccess: (_, { category }) => {
        queryClient.invalidateQueries(['getCategories', category.placeId])
      }
    }
  )

  return {
    deleteCategory: mutate,
    isLoading,
    isError,
    error,
    isSuccess
  }
}