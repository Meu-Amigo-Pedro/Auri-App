import * as S from './styles'
import Header from '../../molecules/header'
import MallIcon from '../../icons/mall'
import Text from '../../atoms/text'
import { CircularProgress } from '@mui/material'
import { Button } from '../../atoms/button'
import { Option } from '../modals/select-options'
import Tap from '../../atoms/animation/tap'
import Link from 'next/link'
import ArrowLeftIcon from '../../icons/arrow-left'
import { useRouter } from 'next/router'
import { createRef } from 'react'
import ChooseButton from '../../atoms/choose-button'
import { useModals } from '../../context/modals/context'

interface Props<T> {
  headerTitle: string
  goBackLabel: string
  title: string
  createButtonLabel: string
  createButtonRoute: string
  isLoadingData: boolean
  isSucessData: boolean,
  data: T[],
  dataDoesntExistLabel: string
  options: Option<T>[]
}

const DefaultChoosePage = <T,>({ 
  headerTitle,
  goBackLabel,
  title,
  createButtonLabel,
  createButtonRoute,
  isLoadingData,
  isSucessData,
  data,
  dataDoesntExistLabel,
  options
}: Props<T>) => {
  const router = useRouter()
  const openModal = useModals((state) => state.open)

  const refs = data.map(() => createRef<HTMLDivElement>())

  return (
    <S.GlobalContainer>
      <Header 
        icon={<MallIcon />}
        title={headerTitle}
      />

      <S.Container>
        <Tap id='go-back-tap'>
          <Link id='go-back' href='/'>
            <ArrowLeftIcon />
            {goBackLabel}
          </Link>
        </Tap>

        <S.WrapperTitle>
          <Text
            as='h2'
            size={2.2}
            fontFamily='Public Sans'
            weight={700}
          >
            {title}
          </Text>

          <Button 
            variant='blue'
            label={createButtonLabel}
            onClick={() => {
              router.push(createButtonRoute)
            }}
            width='20rem'
          />
        </S.WrapperTitle>

          {isLoadingData && (
            <S.ResponseContainer>
              <CircularProgress color='inherit' style={{ width: '8rem', height: '8rem' }} />
            </S.ResponseContainer>
          )}

          {!data.length && isSucessData && (
            <S.ResponseContainer>
              <Text
                as='h2'
                size={1.8}
                weight={300}
                fontFamily='Public Sans'
                color='#a6a4a4'
              >
                {dataDoesntExistLabel}
              </Text>
            </S.ResponseContainer>
          )}

        <S.WrapperButton>
          {data.map((data, index) => {
            const ref = refs[index]

            return (
              <ChooseButton 
                key={index}
                data={data}
                onClick={() => { 
                  openModal('select-options', {
                    options,
                    data,
                    position: {
                      x: (ref.current?.getBoundingClientRect().top ?? 0) + 460,
                      y: (ref.current?.getBoundingClientRect().left ?? 0) + 485
                    }
                  })
                }}
              />
            )
          })}
        </S.WrapperButton>
      </S.Container>
    </S.GlobalContainer>
  )
}

export default DefaultChoosePage