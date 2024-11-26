import { Place } from '@/core/entities/place'
import * as S from './styles'
import Header from '../../molecules/header'
import MallIcon from '../../icons/mall'
import Text from '../../atoms/text'
import { useGetCategories } from '../../queries/category'
import CategoryButton from '../../atoms/category-button'
import { CircularProgress } from '@mui/material'

interface Props {
  place: Place
}

const ChooseCategory = ({ place }: Props) => {
  const { data: categories, isSuccess, isLoading } = useGetCategories(place.id)

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />}
        title={place.name}
      />

      <S.Container>
        <S.CategoryHeader>
          <Text
            as='h2'
            size={2.2}
            fontFamily='Public Sans'
            weight={700}
          >
            Categorias
          </Text>
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

          {(categories ?? []).map((category, index) => (
            <CategoryButton 
              key={`${category.id}-${index}`}
              category={category}
            />
          ))}
      </S.Container>
    </S.GlobalContainer>
  )
}

export default ChooseCategory