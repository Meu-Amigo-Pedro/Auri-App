import { Place } from '@/core/entities/place'
import * as S from './styles'
import Header from '../../molecules/header'
import MallIcon from '../../icons/mall'
import Text from '../../atoms/text'
import { useGetCategories } from '../../queries/category'
import CategoryButton from '../../atoms/category-button'
import { CircularProgress } from '@mui/material'
import { Button } from '../../atoms/button'
import { useRouter } from 'next/router'
import { Option } from '../modals/select-options'
import { useModals } from '../../context/modals/context'
import { createRef } from 'react'
import Tap from '../../atoms/animation/tap'
import Link from 'next/link'
import ArrowLeftIcon from '../../icons/arrow-left'

interface Props {
  place: Place
}

const ChooseCategory = ({ place }: Props) => {
  const router = useRouter()
  const openModal = useModals((state) => state.open)
  const closeModal = useModals((state) => state.close)

  const { data: categories, isSuccess, isLoading } = useGetCategories(place.id)

  const categoriesRef = (categories ?? []).map(() => createRef<HTMLDivElement>())

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />}
        title={place.name}
      />

      <S.Container>
        <Tap id='go-back-tap'>
          <Link id='go-back' href='/'>
            <ArrowLeftIcon />
            Escolher outro local
          </Link>
        </Tap>

        <S.CategoryHeader>
          <Text
            as='h2'
            size={2.2}
            fontFamily='Public Sans'
            weight={700}
          >
            Categorias
          </Text>

          <Button 
            variant='blue'
            label='Criar categoria'
            onClick={() => {
              router.push(`/place/${place.id}/category`)
            }}
            width='20rem'
          />
        </S.CategoryHeader>

          {isLoading && (
            <S.ResponseContainer>
              <CircularProgress color='inherit' style={{ width: '8rem', height: '8rem' }} />
            </S.ResponseContainer>
          )}

          {!categories?.length && isSuccess && (
            <S.ResponseContainer>
              <Text
                as='h2'
                size={1.8}
                weight={300}
                fontFamily='Public Sans'
                color='#a6a4a4'
              >
                Não existe categorias disponíveis
              </Text>
            </S.ResponseContainer>
          )}

        <S.WrapperCategoriesButton>
          {(categories ?? []).map((category, index) => {
            const ref = categoriesRef[index]
            
            const options: Option[] = [
              {
                label: 'Escolher Categoria',
                onSelect: () => {
                  // router.push(`/place/${place.id}/category/${category.id}`)
                  closeModal()
                }
              },
              {
                label: 'Editar Categoria',
                onSelect: () => {
                  router.push(`/place/${place.id}/category/${category.id}`)
                  closeModal()
                }
              }
            ]

            return (
              <CategoryButton 
                key={`${category.id}-${index}`}
                category={category}
                onClick={() => { 
                  openModal('select-options', {
                    options,
                    position: {
                      x: (ref.current?.getBoundingClientRect().top ?? 0) + 460,
                      y: (ref.current?.getBoundingClientRect().left ?? 0) + 485
                    }
                  })
                }}
              />
            )
          })}
        </S.WrapperCategoriesButton>
      </S.Container>
    </S.GlobalContainer>
  )
}

export default ChooseCategory