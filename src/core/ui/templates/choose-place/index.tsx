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
import { Option } from '../modals/select-options'

interface Props {
  places: Place[]
}

const ChoosePlace = ({ places }: Props) => {
  const openModal = useModals((state) => state.open)
  const closeModal = useModals((state) => state.close)
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

        <S.ContainerCreatePlaceButton>
          <Button 
            label='Adicione um local'
            variant='blue'
            width='20rem'
            onClick={() => {
              router.push('/place')
            }}
          />
        </S.ContainerCreatePlaceButton>
      </S.WrapperTitle>

      <S.Container>
        {!places.length && (
          <CircularProgress color='inherit' style={{ width: '8rem', height: '8rem' }} />
        )}
        {(places ?? []).map((place, index) => {
          const ref = placesRef[index]

          const options: Option[] = [
            {
              label: 'Escolher Local',
              onSelect: () => {
                router.push(`/place/${place.id}/categories`)
                closeModal()
              }
            },
            {
              label: 'Editar Local',
              onSelect: () => {
                router.push(`/place/${place.id}/update`)
                closeModal()
              }
            }
          ]

          return (
            <PlaceButton 
              key={`${place.id}-${index}`}
              ref={ref}
              placeLogo={place.logo}
              placeName={place.name}
              isSelected={false}
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
      </S.Container>
    </S.GlobalContainer>
  )
}

export default ChoosePlace