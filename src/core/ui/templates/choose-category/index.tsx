import { Place } from '@/core/entities/place'
import { useGetCategories } from '../../queries/category'
import { useRouter } from 'next/router'
import { Option } from '../modals/select-options'
import { useModals } from '../../context/modals/context'
import DefaultChoosePage from '../default-choose-template'
import { Category } from '@/core/entities/category'

interface Props {
  place: Place
}

const ChooseCategory = ({ place }: Props) => {
  const router = useRouter()
  const closeModal = useModals((state) => state.close)

  const { data: categories, isSuccess, isLoading } = useGetCategories(place.id)

  const options: Option<Category>[] = [
    {
      label: 'Escolher Categoria',
      onSelect: (category) => {
        router.push(`/place/${place.id}/category/${category.id}/stores`)
        closeModal()
      }
    },
    {
      label: 'Editar Categoria',
      onSelect: (category) => {
        router.push(`/place/${place.id}/category/${category.id}`)
        closeModal()
      }
    }
  ]

  return (
    <DefaultChoosePage<Category>
      headerTitle={place.name}
      goBackLabel='Escolher outro local'
      title='Categorias'
      createButtonLabel='Criar categoria'
      createButtonRoute={`/place/${place.id}/category`}
      isLoadingData={isLoading}
      isSucessData={isSuccess}
      data={categories ?? []}
      dataDoesntExistLabel='Não existe categorias disponíveis'
      options={options}
    />
  )
}

export default ChooseCategory