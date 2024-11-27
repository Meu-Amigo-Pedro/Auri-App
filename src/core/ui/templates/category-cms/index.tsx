/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import ArrowLeftIcon from '../../icons/arrow-left'
import { Place } from '@/core/entities/place'
import Header from '../../molecules/header'
import Tap from '../../atoms/animation/tap'
import MallIcon from '../../icons/mall'
import Text from '@/core/ui/atoms/text'
import * as S from './styles'
import Link from 'next/link'
import { Category } from '@/core/entities/category'
import { ImageInput } from '../../atoms/image-input'
import { Input } from '../../atoms/input'
import useMutableEntity from '../../hooks/use-mutable-entity'
import ColorPicker from '../../molecules/color-picker'
import { useEffect, useRef, useState } from 'react'
import { ColorResult } from 'react-color'
import { Button } from '../../atoms/button'
import { useCreateCategory, useDeleteCategory } from '../../queries/category'
import SnackBar from '../../molecules/snackbar'
import { useRouter } from 'next/router'

interface Props {
  place: Place
  category?: Category
}

const CategoryCms = ({ place, category: givenCategory }: Props) => {
  const router = useRouter()
  
  const colorPickerRef = useRef<HTMLDivElement>(null)
  const [colorPickerSelected, setColorPickerSelected] = useState(false)
  
  const isEditing = !!givenCategory

  const _category = givenCategory ?? Category.Create(place.id)

  const category = useMutableEntity(_category)

  const { createCategory, isSuccess: isSuccessCreate, isLoading: isLoadingCreate } = useCreateCategory()
  const { deleteCategory, isSuccess: isSuccessDelete, isLoading: isLoadingDelete } = useDeleteCategory()

  const getPosition = (position: 'top' | 'left') => {
    if (!colorPickerRef || !colorPickerRef.current)
      return ''
    
    if (position === 'left')
      return `${(colorPickerRef.current.getBoundingClientRect().left + 480) / 16}rem`

    return `${(colorPickerRef.current.getBoundingClientRect().top - 50) / 16}rem`
  }

  const goBackHandle = () => {
    router.push(`/place/${place.id}/category/choose`)
  }

  useEffect(() => {
    if (!isSuccessCreate) return
    
    goBackHandle()
  }, [isSuccessCreate])

  useEffect(() => {
    if (!isSuccessDelete) return

    goBackHandle()
  }, [isSuccessDelete])

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />}
        title={place.name}
      />

      <S.WrapperTitle>
        <Tap id='go-back-tap'>
          <Link id='go-back' href={`/place/${place.id}/category/choose`}>
            <ArrowLeftIcon />
            Voltar
          </Link>
        </Tap>

        <S.WrapperTitleAndSubtitle>
          <Text
            as='h1'
            size={3.2}
            fontFamily='Public Sans'
            weight={700}
            lineHeight={4}
          >
            {isEditing && 'Editando categoria'}
            {!isEditing && 'Crie uma categoria'}
          </Text>

          {!isEditing && (
            <Text
              as='h2'
              size={1.6}
              fontFamily='Public Sans'
              weight={400}
              lineHeight={2.4}
              color="#121417"
            >
              A categoria deve ter relação com o local
            </Text>
          )}
        </S.WrapperTitleAndSubtitle>
      </S.WrapperTitle>

      <S.WrapperCreateCategory>
        <ImageInput 
          id="category-picture-input"
          defaultImage={category?.picture ?? '/black.png'}
          onChange={(picture) => { 
            category.withPicture(picture) 
          }}
        />
        <Input
          value={category.name}
          placeholder="Nome da categoria"
          onChange={(given) => { 
            category.withName(given) 
          }}
        />

        <S.ContainerColorPicker>
          <Button 
            label='Confirmar'
            variant='blue'
            onClick={() => {
              createCategory({ category })
            }}
            width='10rem'
          />

          {isEditing && (
            <Button 
              label='Deletar'
              variant='red'
              onClick={() => {
                deleteCategory({ category })
              }}
              width='10rem'
            />
          )}

          <S.ColorPickerBox 
            ref={colorPickerRef}
            color={category.colour}
            onClick={() => { setColorPickerSelected(true) }}
          />
          {colorPickerSelected && (
            <ColorPicker 
              color={category.colour}
              onClose={() => { setColorPickerSelected(false) }}
              onChange={(color: ColorResult) => { 
                category.withColour(color.hex)
              }}
              position={{ 
                left: getPosition('left'), 
                top: getPosition('top')
              }}
            />
          )}
        </S.ContainerColorPicker>
      </S.WrapperCreateCategory>

      {isLoadingCreate && (
        <SnackBar 
          message='Criando...'
          type='loading'
        />
      )}

      {isLoadingDelete && (
        <SnackBar 
          message='Deletando...'
          type='loading'
        />
      )}

      {isSuccessCreate && (
        <SnackBar 
          message='Criação concluída'
          type='success'
        />
      )}

      {isSuccessDelete && (
        <SnackBar 
          message='Deleção concluída'
          type='success'
        />
      )}
    </S.GlobalContainer>
  )
}

export default CategoryCms