import { useState } from 'react'
import BrandButton from '@/core/ui/atoms/brand-button'
import CinemarkIcon from '@/core/ui/icons/cinemark'
import MallIcon from '@/core/ui/icons/mall'
import McDonaldsIcon from '@/core/ui/icons/mc-donalds'
import NikeIcon from '@/core/ui/icons/nike'
import RennerIcon from '@/core/ui/icons/renner'
import Header from '@/core/ui/molecules/header'
import * as S from './styles'
import Text from '@/core/ui/atoms/text'

type BrandId = 'renner' | 'mc-donalds' | 'nike' | 'cinemark'

type BrandsType = {
  id: BrandId
  label: string
  icon: JSX.Element
}

const ChooseBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState<BrandsType | null>(null)

  const brands: BrandsType[] = [
    { id: 'renner', label: 'à Renner', icon: <RennerIcon /> },
    { id: 'mc-donalds', label: 'ao Mc Donalds', icon: <McDonaldsIcon /> },
    { id: 'nike', label: 'à Nike', icon: <NikeIcon /> },
    { id: 'cinemark', label: 'ao Cinemark', icon: <CinemarkIcon /> }
  ]

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />} 
        title='Shopping A3' 
      />
      
      <S.Container>
        <S.WrapperBrandButtons>
          {brands.map((brand, index) => (
            <BrandButton
              key={`${brand.id}-${index}`}
              isSelected={brand.id === selectedBrand?.id}
              brandIcon={brand.icon}
              onClick={() => { setSelectedBrand(brand) }}  
            />
          ))}
        </S.WrapperBrandButtons>

        <S.WrapperTitleAndSubTitle>
          <Text
            as='h2'
            size={3.2}
            fontFamily='Public Sans'
            weight={700}
            lineHeight={4}
          >
            Bem Vindo ao Shopping A3
          </Text>

          <Text
            size={1.6}
            fontFamily='Public Sans'
            weight={400}
            lineHeight={2.4}
          >
            Aonde vai dessa vez?
          </Text>

          <Text
            size={1.2}
            fontFamily='Public Sans'
            weight={300}
            color='#b0b0b0'
          >
            {selectedBrand && `Então vamos ${selectedBrand.label}? Ótimo!`}
            {!selectedBrand && 'Selecione uma marca acima'}
          </Text>
        </S.WrapperTitleAndSubTitle>

        {selectedBrand && (
          <S.ConfirmButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {}}
          >
            Confirmar
          </S.ConfirmButton>
        )}
      </S.Container>
    </S.GlobalContainer>
  )
}

export default ChooseBrand