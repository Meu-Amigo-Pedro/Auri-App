import PlaceButton from '../../atoms/place-button'
import { useGetPlaces } from '../../queries/place'
import { Text } from '../../atoms/text/styles'
import Header from '../../molecules/header'
import MallIcon from '../../icons/mall'
import * as S from './styles'

const ChoosePlace = () => {
  const { data: places } = useGetPlaces()

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
        {(places ?? []).map((place, index) => (
          <PlaceButton 
            key={`${place.id}-${index}`}
            placeLogo={place.logo}
            placeName={place.name}
            isSelected={false}
            onClick={() => { window.open(`place/${place.id}`)}}
          />
        ))}
      </S.Container>
    </S.GlobalContainer>
  )
}

export default ChoosePlace