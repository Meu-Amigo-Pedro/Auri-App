import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.2rem;
`

export const Image = styled(motion.div)`
  width: 17.6rem;
  height: 17.6rem;

  border-radius: 1.2rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .8rem;
  }
`