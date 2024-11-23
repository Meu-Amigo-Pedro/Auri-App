import * as S from './styled'

interface Props {
  label: string

  onClick: () => void

  variant?: S.ButtonVariant

  width?: string
}

export const Button = ({ label, onClick, width, variant = 'blue' }: Props) => {
  return (
    <S.ButtonContainer
      width={width ?? '8.4rem'}
      variant={variant}
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
    >
      <span>{label}</span>
    </S.ButtonContainer>
  )
}