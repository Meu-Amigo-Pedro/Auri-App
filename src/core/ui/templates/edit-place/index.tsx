/* eslint-disable react-hooks/exhaustive-deps */
import { useGetPlace, useUpdatePlace } from "../../queries/place"
import useMutableEntity from "../../hooks/use-mutable-entity"
import { useEffect, useMemo, useState } from "react"
import { ImageInput } from "../../atoms/image-input"
import ArrowLeftIcon from "../../icons/arrow-left"
import { Text } from "../../atoms/text/styles"
import { Place } from "@/core/entities/place"
import Header from "../../molecules/header"
import { Button } from "../../atoms/button"
import Tap from "../../atoms/animation/tap"
import { Input } from "../../atoms/input"
import { Snackbar } from "@mui/material"
import MallIcon from "../../icons/mall"
import AddMap from "./add-map"
import * as S from "./styled"
import Link from "next/link"

interface Props {
  place: Place
}

const EditPlace = ({ place: _place }: Props) => {
  const [addingMap, setAddingMap] = useState(false)

  const oldPlace = useMemo(() => _place, [])

  const place = useMutableEntity(_place)

  const { data: updatedPlace } = useGetPlace(place.id)

  const { updatePlace, isSuccess } = useUpdatePlace()

  useEffect(() => {
    if (!updatedPlace) return

    place
      .withName(updatedPlace.name)
      .withLogo(updatedPlace.logo)
      .insertMaps(updatedPlace.maps)
  }, [updatePlace])

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />} 
        title={_place.name}
      />

      <S.WrapperTitle>
        <Tap id='go-back-tap'>
          <Link id='go-back' href='/'>
            <ArrowLeftIcon />
            Voltar
          </Link>
        </Tap>

        <Text
          as='h1'
          size={3.2}
          fontFamily='Public Sans'
          weight={700}
          lineHeight={4}
        >
          Editando local
        </Text>
      </S.WrapperTitle>

      <S.WrapperEditPlace>

        <S.Container>
          <S.Section>
            <Text 
              as='span'
              size={1.6}
              fontFamily='Public Sans'
              weight={400}
              lineHeight={2.4}
              color='#637887'
            >
              Logo
            </Text>
            <ImageInput 
              defaultImage={place.logo}
              onChange={(logo) => { place.withLogo(logo) }}
              id="place-logo-input"
            />
            <Input 
              value={place.name}
              onChange={(given) => { place.withName(given) }}
            />
            <S.ButtonsArea>
              <Button 
                label="Cancelar"
                onClick={() => {
                  place
                    .withName(oldPlace.name)
                    .withLogo(oldPlace.logo)
                }}
                variant="gray"
              />
              <Button 
                label="Confirmar"
                onClick={() => {
                  updatePlace({ place })
                }}
              />
            </S.ButtonsArea>
          </S.Section>
        </S.Container>

        {!addingMap &&
          <S.Container>
            {!!place.maps.length &&
              <S.MapsList hasOnlyOneChild={place.maps.length === 1}>
                {place.maps.map(map => 
                  <li key={map.id}>
                    <span>
                      {map.floor}
                    </span>

                    <div className="icons-area">
                      <span>X</span>
                    </div>
                  </li>
                )}
              </S.MapsList>
            }

            <Button 
              label="Adicionar mapa"
              width="12rem"
              onClick={() => { 
                setAddingMap(true) 
              }}
            />
          </S.Container>
        }
      </S.WrapperEditPlace>

      {isSuccess && <Snackbar autoHideDuration={2000} message={'Atualização concluída'}/>}

      {addingMap && 
        <AddMap 
          close={() => { 
            setAddingMap(false) 
          }}
          place={oldPlace}
        />
      }
    </S.GlobalContainer>
  )
}

export default EditPlace