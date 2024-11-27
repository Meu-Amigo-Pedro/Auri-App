/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'

interface Props {
  id?: string
  children: any
}

const Tap = ({ id, children }: Props) => {
  return (
    <S.Container
      id={id}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </S.Container>
  )
}

export default Tap