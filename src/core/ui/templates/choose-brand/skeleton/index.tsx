import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import * as S from '../styles'

const ChooseBrandSkeleton = () => {
  return (
    <Stack spacing={1}>
      <S.GlobalContainer>
        <Skeleton variant='rectangular' width='100%' height='4.8rem' />
        
        <S.Container>
          <Skeleton variant='rectangular' width='100rem' height='24rem' />

          <S.WrapperTitleAndSubTitle>
            <Skeleton variant='text' width='41rem' height='4rem' />
            <Skeleton variant='text' width='15rem' height='2.4rem' />
            <Skeleton variant='text' width='15rem' height='1.3rem' />
          </S.WrapperTitleAndSubTitle>
        </S.Container>
      </S.GlobalContainer>
    </Stack>
  )
}

export default ChooseBrandSkeleton