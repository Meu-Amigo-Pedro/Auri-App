import InfinityAccept from '@/core/ui/icons/infinity-accept'
import InfinityClose from '@/core/ui/icons/infinity-close'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar'
import Slide, { SlideProps } from '@mui/material/Slide'
import { motion } from 'framer-motion'
import Text from '../../atoms/text'
import { useState } from 'react'
import * as S from './styles'

export type SnackType = 'error' | 'success' | 'loading'

interface Props {
  message: string

  type: SnackType

  onClose?: () => void

  props?: SnackbarProps
}

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />
}

const SnackBar = ({ message, type, onClose: _onClose, props }: Props) => {
  const [open, setOpen] = useState(true)

  return (
    <Snackbar
      open={open}
      autoHideDuration={3500}
      onClose={() => { setOpen(false) }}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      {...props}
    >
      <S.Wrapper type={type}>
        <motion.div
          onClick={_onClose}
          whileTap={{ scale: 0.95 }}
          className="container-snack"
        >
          {type === 'loading' && (
            <CircularProgress style={{ width: '2.5rem', height: '2.5rem' }} />
          )}
          {type === 'error' && (
            <InfinityClose 
              width="2.5rem" 
              height="2.5rem" 
              viewBox="-3 -3 15 15" 
              propsPath={{ stroke: '#FF0000' }}
            />
          )}
          {type === 'success' && (
            <InfinityAccept propsPath={{ stroke: '#33B74A' }} />
          )}
          <Text
            size={1.5}
            weight={500}
            lineHeight={1.8}
            color='#000'
          >
            {message}
          </Text>
        </motion.div>
      </S.Wrapper>
    </Snackbar>
  )
}

export default SnackBar