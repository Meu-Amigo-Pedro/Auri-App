import * as S from './styled'

interface Props {
  label: string

  onClick: () => void

  variant?: S.ButtonVariant
}

export const Button = ({ label, onClick, variant = 'blue' }: Props) => {
  return (
    <S.ButtonContainer
      variant={variant}
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
    >
      <span>{label}</span>
    </S.ButtonContainer>
  )
}