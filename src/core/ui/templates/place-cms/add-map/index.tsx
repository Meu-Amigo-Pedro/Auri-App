/* eslint-disable react-hooks/exhaustive-deps */
import { Place } from "@/core/entities/place"
import { Text } from '../../../atoms/text/styles'
import * as S from './styled'
import { ImageInput } from "../../../atoms/image-input"
import useMutableEntity from "../../../hooks/use-mutable-entity"
import { useUpdatePlace } from "../../../queries/place"
import { Input } from "../../../atoms/input"
import { Button } from "../../../atoms/button"
import { Snackbar } from "@mui/material"
import { useEffect } from "react"
import { Map } from "@/core/entities/map"

interface Props {
  place: Place

  close: () => void
}

const AddMap = ({ place, close }: Props) => {
  const map = useMutableEntity(Map.ofPlace(place.id))

  const { updatePlace, isSuccess } = useUpdatePlace()

  useEffect(() => {
    if (!isSuccess) return

    close()
  }, [isSuccess])

  useEffect(() => {

  }, [])

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
              onClick={close}
              variant="gray"
            />
            <Button 
              label="Confirmar"
              onClick={() => {
                place.addMap(map)

                updatePlace({ place })
              }}
            />
          </S.ButtonsArea>
        </S.Section>
      </S.Container>

      {isSuccess && <Snackbar autoHideDuration={2000} message={'Atualização concluída'}/>}
    </S.GlobalContainer>
  )
}

export default AddMap