/* eslint-disable react-hooks/exhaustive-deps */
import PlaceButton from '../../atoms/place-button'
import { Text } from '../../atoms/text/styles'
import Header from '../../molecules/header'
import MallIcon from '../../icons/mall'
import { useRouter } from 'next/router'
import * as S from './styles'
import { Place } from '@/core/entities/place'
import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'

interface Props {
  places: Place[]
}

const ChoosePlace = ({ places }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (!!places.length) return

    router.push('/place')
  }, [places])

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />} 
        title=''
      />

      <S.WrapperTitle>
        <Text
          as='h1'
          size={3.2}
          fontFamily='Public Sans'
          weight={700}
          lineHeight={4}
        >
          Selecione um local
        </Text>

        <Text
          as='h2'
          size={1.8}
          fontFamily='Public Sans'
          color='#9f9e9e'
          weight={200}
        >
          Aonde estamos?
        </Text>
      </S.WrapperTitle>

      <S.Container>
        {!places.length && (
          <CircularProgress color='inherit' style={{ width: '8rem', height: '8rem' }} />
        )}
        {(places ?? []).map((place, index) => (
          <PlaceButton 
            key={`${place.id}-${index}`}
            placeLogo={place.logo}
            placeName={place.name}
            isSelected={false}
            onClick={() => { router.push(`/place/${place.id}`) }}
          />
        ))}
      </S.Container>
    </S.GlobalContainer>
  )
}

export default ChoosePlace