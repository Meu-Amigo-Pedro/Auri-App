import { useModals } from '@/core/ui/context/modals/context'
import * as S from './styles'
import { Place } from '@/core/entities/place'
import Text from '@/core/ui/atoms/text'
import { useRouter } from 'next/router'

type Options = { 
  label: string,
  onSelect: () => void
}

interface Props {
  place: Place
  position: { 
    x: number
    y: number
  }
}

const PlaceConfigModal = ({ place, position }: Props) => {
  const router = useRouter()
  const close = useModals((state) => state.close)
  
  const options: Options[] = [
    {
      label: 'Escolher Local',
      onSelect: () => {
        router.push(`/place/${place.id}/category`)
        close()
      }
    },
    {
      label: 'Editar Local',
      onSelect: () => {
        router.push(`/place/${place.id}`)
        close()
      }
    }
  ]

  return (
    <S.GlobalContainer onClick={close}>
      <S.Container 
        onClick={evt => { evt.stopPropagation() }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        positionX={position.x}
        positionY={position.y}
      >
        <S.List>
          {options.map((option, index) => (
            <S.Item 
              key={index} 
              isTheLastItem={(options.length - 1) === index} 
              whileTap={{ scale: 0.9 }}
              onClick={option.onSelect}
            >
              <Text
                size={1.8}
                weight={400}
                fontFamily='Public Sans'
              >
                {option.label}
              </Text>
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.GlobalContainer>
  )
}

export default PlaceConfigModal