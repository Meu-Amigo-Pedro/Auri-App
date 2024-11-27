/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Text from '../text'
import * as S from './styles'

interface Props {
  data: any
  onClick: () => void
}

const ChooseButton = ({ data, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <S.Image
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={data.picture}
          alt='Imagem de categoria'
        />
      </S.Image>

      <Text
        size={1.6}
        weight={500}
        lineHeight={2.4}
        fontFamily='Public Sans'
      >
        {data.name}
      </Text>
    </S.Container>
  )
}

export default ChooseButton