/* eslint-disable react-hooks/exhaustive-deps */
import { useCreatePlace, useDeletePlace, useGetPlace, useUpdatePlace } from "../../queries/place"
import useMutableEntity from "../../hooks/use-mutable-entity"
import { useEffect, useMemo, useState } from "react"
import { ImageInput } from "../../atoms/image-input"
import ArrowLeftIcon from "../../icons/arrow-left"
import SnackBar from "../../molecules/snackbar"
import { Text } from "../../atoms/text/styles"
import { Place } from "@/core/entities/place"
import Header from "../../molecules/header"
import { Button } from "../../atoms/button"
import Tap from "../../atoms/animation/tap"
import { Input } from "../../atoms/input"
import MallIcon from "../../icons/mall"
import AddMap from "./add-map"
import * as S from "./styled"
import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
  place?: Place
}

const PlaceCms = ({ place: givenPlace }: Props) => {
  const router = useRouter()
  const [addingMap, setAddingMap] = useState(false)

  const isEditing = !!givenPlace
  const _place = isEditing ? givenPlace : Place.Create()

  const oldPlace = useMemo(() => _place, [])

  const place = useMutableEntity(_place)

  const { data: updatedPlace } = useGetPlace(place.id)

  const { createPlace, isSuccess: isSuccessCreate, isLoading: isLoadingCreate } = useCreatePlace()
  const { updatePlace, isSuccess: isSuccessUpdate, isLoading: isLoadingUpdate } = useUpdatePlace()
  const { deletePlace, isSuccess: isSuccessDelete, isLoading: isLoadingDelete } = useDeletePlace()

  useEffect(() => {
    if (!updatedPlace) return

    place
      .withName(updatedPlace.name)
      .withLogo(updatedPlace.logo)
      .insertMaps(updatedPlace.maps)
  }, [updatePlace])

  useEffect(() => {
    if (!isSuccessCreate) return

    router.push('/')
  }, [isSuccessCreate])

  useEffect(() => {
    if (!isSuccessDelete) return

    router.push('/')
  }, [isSuccessDelete])

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />} 
        title={_place.name}
      />

      <S.WrapperTitle>
        {isEditing && (
          <Tap id='go-back-tap'>
            <Link id='go-back' href='/'>
              <ArrowLeftIcon />
              Voltar
            </Link>
          </Tap>
        )}

        <S.WrapperTitleAndSubtitle>
          <Text
            as='h1'
            size={3.2}
            fontFamily='Public Sans'
            weight={700}
            lineHeight={4}
          >
            {isEditing && 'Editando local'}
            {!isEditing && 'Adicione um Local'}
          </Text>

          {!isEditing && (
            <Text
              as='h2'
              size={1.6}
              fontFamily='Public Sans'
              weight={400}
              lineHeight={2.4}
              color="#121417"
            >
              Esse local pode ser um shopping, uma faculdade ou qualquer tipo de ambiente fechado.
            </Text>
          )}
        </S.WrapperTitleAndSubtitle>
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
                  if (!isEditing) {
                    createPlace({ place })
                    return
                  }

                  updatePlace({ place })
                }}
              />
              <Button 
                label="Deletar"
                variant="red"
                onClick={() => {
                  deletePlace({ place })
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

      {isLoadingCreate && (
        <SnackBar 
          message='Criando local...'
          type='loading'
        />
      )}

      {isLoadingUpdate && (
        <SnackBar 
          message='Atualizando local...'
          type='loading'
        />
      )}

      {isLoadingDelete && (
        <SnackBar 
          message='Deletando local...'
          type='loading'
        />
      )}

      {isSuccessCreate && (
        <SnackBar 
          message='Criação concluída'
          type='success'
        />
      )}

      {isSuccessUpdate && (
        <SnackBar 
          message='Atualização concluída'
          type='success'
        />
      )}

      {isSuccessDelete && (
        <SnackBar 
          message='Deleção concluída'
          type='success'
        />
      )}

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

export default PlaceCms