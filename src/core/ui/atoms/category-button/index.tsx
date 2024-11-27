/* eslint-disable @next/next/no-img-element */
import { Category } from '@/core/entities/category'
import Text from '../text'
import * as S from './styles'

interface Props {
  category: Category
  onClick: () => void
}

const CategoryButton = ({ category, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <S.Image
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={category.picture}
          alt='Imagem de categoria'
        />
      </S.Image>

      <Text
        size={1.6}
        weight={500}
        lineHeight={2.4}
        fontFamily='Public Sans'
      >
        {category.name}
      </Text>
    </S.Container>
  )
}

export default CategoryButton