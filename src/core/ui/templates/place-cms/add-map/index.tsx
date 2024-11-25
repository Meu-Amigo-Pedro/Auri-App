/* eslint-disable react-hooks/exhaustive-deps */
import { Place } from "@/core/entities/place"
import { Text } from '../../../atoms/text/styles'
import * as S from './styled'
import { ImageInput } from "../../../atoms/image-input"
import useMutableEntity from "../../../hooks/use-mutable-entity"
import { useUpdatePlace } from "../../../queries/place"
import { Input } from "../../../atoms/input"
import { Button } from "../../../atoms/button"
import { useEffect } from "react"
import { Map } from "@/core/entities/map"
import SnackBar from "@/core/ui/molecules/snackbar"

interface Props {
  place: Place

  close: () => void
}

const AddMap = ({ place, close }: Props) => {
  const map = useMutableEntity(Map.ofPlace(place.id))

  const { updatePlace, isSuccess, isLoading } = useUpdatePlace()

  useEffect(() => {
    if (!isSuccess) return

    close()
  }, [isSuccess])

  return (
    <S.GlobalContainer id="add-map">
      <S.WrapperTitle>
        <Text
          as='h1'
          size={3.2}
          fontFamily='Public Sans'
          weight={700}
          lineHeight={4}
        >
          Adicionando mapa
        </Text>
      </S.WrapperTitle>

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
            Imagem
          </Text>
          <ImageInput 
            defaultImage={map.picture}
            onChange={(picture) => { map.withPicture(picture) }}
            id="new-map-picture"
          />
          <Input 
            value={map.floor}
            onChange={(given) => { map.withFloor(given) }}
          />
          <S.ButtonsArea>
            <Button 
              label="Cancelar"
              variant="gray"
              onClick={close}
            />
            <Button 
              label="Confirmar"
              variant="blue"
              onClick={() => {
                place.addMap(map)

                updatePlace({ place })
              }}
            />
          </S.ButtonsArea>
        </S.Section>
      </S.Container>

      {isLoading && (
        <SnackBar 
          message='Atualizando...'
          type='loading'
        />
      )}

      {isSuccess && (
        <SnackBar 
          message='Atualização concluída'
          type='success'
        />
      )}
    </S.GlobalContainer>
  )
}

export default AddMap