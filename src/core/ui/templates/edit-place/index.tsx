import { Place } from "@/core/entities/place"
import { Text } from '../../atoms/text/styles'
import * as S from './styled'
import Header from "../../molecules/header"
import MallIcon from "../../icons/mall"
import { ImageInput } from "../../atoms/image-input"
import useMutableEntity from "../../hooks/use-mutable-entity"
import { useUpdatePlace } from "../../queries/place"
import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"
import { Snackbar } from "@mui/material"

interface Props {
  place: Place
}

const EditPlace = ({ place: _place }: Props) => {
  const place = useMutableEntity(_place)

  const { updatePlace, isSuccess } = useUpdatePlace()

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />} 
        title={_place.name}
      />

      <S.WrapperTitle>
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
                  .withName(_place.name)
                  .withLogo(_place.logo)
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

      {isSuccess && <Snackbar autoHideDuration={2000} message={'Atualização concluída'}/>}
    </S.GlobalContainer>
  )
}

export default EditPlace