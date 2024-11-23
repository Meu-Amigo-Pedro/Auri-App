import * as S from './styled'

interface Props {
  onChange: (given: string) => void

  value: string
}

export const Input = ({ onChange, value }: Props) => {
  return (
    <S.InputContainer type='text' value={value} onChange={(evt) => { onChange(evt.target.value) }} />
  )
}