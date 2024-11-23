import { Base64Converter } from "@/core/infra/utils/base-64-converter"
import { ChangeEvent, useState } from "react"
import * as S from './styled'

interface Props {
  onChange: (given: string) => void

  defaultImage: string
}

export const ImageInput = ({ defaultImage, onChange }: Props) => {
  const [currentImage, setCurrentImage] = useState(defaultImage)

  const handleChangeFile = async (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files || !evt.target.files[0]) return

    const [file] = evt.target.files

    const save = async (blob: Blob) => {
      setCurrentImage(URL.createObjectURL(blob))
      const converter = new Base64Converter()
      const base64 = await converter.convert(blob) as string

      onChange(base64)
    }

    await save(file)
  }

  return (
    <>
      <S.ImageLabel htmlFor="input-file">
        <S.Image src={currentImage}/>
      </S.ImageLabel>
      <S.FileInput id="input-file" onChange={handleChangeFile} type="file" />
    </>
  )
}