import * as S from './styled'

interface Props {
  onChange: (given: string) => void
  placeholder?: string
  value: string
}

export const Input = ({ onChange, placeholder, value }: Props) => {
  return (
    <S.InputContainer 
      type='text' 
      value={value} 
      placeholder={placeholder}
      onChange={(evt) => { onChange(evt.target.value) }} 
    />
  )
}