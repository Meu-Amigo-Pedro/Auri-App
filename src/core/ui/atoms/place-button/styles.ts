import { motion } from 'framer-motion'
import styled from 'styled-components'

export const GlobalContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.isSelected ? '3' : '2'}rem; 
`

export const Container = styled(motion.div)`
  width: 28rem;
  height: 18rem;
  border-radius: .8rem;
  padding: .5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .8rem;
  }
`