/* eslint-disable react-hooks/exhaustive-deps */
import PlaceButton from '../../atoms/place-button'
import { Text } from '../../atoms/text/styles'
import Header from '../../molecules/header'
import MallIcon from '../../icons/mall'
import { useRouter } from 'next/router'
import * as S from './styles'
import { Place } from '@/core/entities/place'
import { CircularProgress } from '@mui/material'
import { createRef, useEffect } from 'react'
import { Button } from '../../atoms/button'
import { useModals } from '../../context/modals/context'

interface Props {
  places: Place[]
}

const ChoosePlace = ({ places }: Props) => {
  const openModal = useModals((state) => state.open)
  const router = useRouter()

  const placesRef = places.map(() => createRef<HTMLDivElement>())

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

      <S.ContainerCreatePlaceButton>
        <Button 
          label='Criar local'
          variant='blue'
          onClick={() => {
            router.push('/place')
          }}
        />
      </S.ContainerCreatePlaceButton>

      <S.Container>
        {!places.length && (
          <CircularProgress color='inherit' style={{ width: '8rem', height: '8rem' }} />
        )}
        {(places ?? []).map((place, index) => {
          const ref = placesRef[index]

          return (
            <PlaceButton 
              key={`${place.id}-${index}`}
              ref={ref}
              placeLogo={place.logo}
              placeName={place.name}
              isSelected={false}
              onClick={() => { 
                openModal('place-options', { 
                  place,
                  position: {
                    x: (ref.current?.getBoundingClientRect().top ?? 0) + 460,
                    y: (ref.current?.getBoundingClientRect().left ?? 0) + 485
                  } 
                })
              }}
            />
          )
        })}
      </S.Container>
    </S.GlobalContainer>
  )
}

export default ChoosePlace