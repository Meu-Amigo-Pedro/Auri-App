/* eslint-disable @next/next/no-img-element */
import { ForwardedRef, forwardRef } from 'react'
import Text from '../text'
import * as S from './styles'

interface Props {
  placeLogo: string
  placeName: string
  isSelected: boolean
  onClick: () => void
}

const PlaceButton = ({ placeLogo, placeName, isSelected, onClick }: Props, ref?: ForwardedRef<HTMLDivElement>) => {
  const isSelectedPlace = (scale: number) => !isSelected ? { scale } : {}

  return (
    <S.GlobalContainer isSelected={isSelected}>
      <S.Container
        ref={ref}
        animate={{ scale: isSelected ? 1.3 : 1 }}
        whileHover={isSelectedPlace(1.1)}
        whileTap={isSelectedPlace(0.9)}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={placeLogo}
          alt='Imagem da logo do local'
        />
      </S.Container>
      
      <Text
        as='span'
        size={1.8}
        fontFamily='Inter'
      >
        {placeName}
      </Text>
    </S.GlobalContainer>
  )
}

export default forwardRef(PlaceButton)