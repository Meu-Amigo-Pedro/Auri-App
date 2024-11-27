/* eslint-disable @typescript-eslint/no-explicit-any */
import { Color, ColorResult, SketchPicker } from 'react-color'
import * as S from './styled'
import { useClickOutside } from '../../hooks/use-click-outside'
import { useRef } from 'react'

interface Props {
  color: Color
  position: { top: string, left: string }
  onChange: (color: ColorResult) => any
  onClose: () => void
}

const ColorPicker = ({
  onChange,
  onClose,
  color,
  position: { top, left }
}: Props) => {
  const colorPickerRef = useRef<HTMLDivElement>(null)

  useClickOutside(colorPickerRef, onClose, [], [colorPickerRef])

  return (
    <S.Wrapper 
      className='container-color-picker' 
      ref={colorPickerRef}
      style={{ top, left }}
      onClick={(evt) => { evt.stopPropagation() }} 
    >
      <SketchPicker
        className="color-picker"
        color={color}
        onChangeComplete={onChange}
        presetColors={[
          'rgba(0, 166, 81, 0.6)',
          'rgba(255, 242, 0, 0.6)',
          'rgba(237, 28, 36, 0.6)',
          'rgba(255, 255, 255, 1)',
          'rgba(0, 0, 0, 1)'
        ]}
      />
    </S.Wrapper>
  )
}

export default ColorPicker
