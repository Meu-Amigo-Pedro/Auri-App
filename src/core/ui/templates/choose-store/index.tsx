import { Place } from '@/core/entities/place'
import { useRouter } from 'next/router'
import { Option } from '../modals/select-options'
import { useModals } from '../../context/modals/context'
import DefaultChoosePage from '../default-choose-template'
import { Category } from '@/core/entities/category'
import { Store } from '@/core/entities/store'
import { useGetStores } from '../../queries/store'

interface Props {
  place: Place
  category: Category
}

const ChooseStore = ({ place, category }: Props) => {
  const router = useRouter()
  const closeModal = useModals((state) => state.close)

  const { data: stores, isSuccess, isLoading } = useGetStores(place.id, category.id)

  const options: Option<Store>[] = [
    {
      label: 'Escolher Loja',
      onSelect: () => {
        closeModal()
      }
    },
    {
      label: 'Editar Loja',
      onSelect: (store) => {
        router.push(`/place/${place.id}/category/${category.id}/store/${store.id}`)
        closeModal()
      }
    }
  ]

  return (
    <DefaultChoosePage<Store>
      headerTitle={place.name}
      goBackLabel='Escolher outra categoria'
      title='Lojas'
      createButtonLabel='Criar loja'
      createButtonRoute={`/place/${place.id}/category/${category.id}/store`}
      isLoadingData={isLoading}
      isSucessData={isSuccess}
      data={stores ?? []}
      dataDoesntExistLabel='Não existe lojas disponíveis para essa categoria'
      options={options}
    />
  )
}

export default ChooseStore