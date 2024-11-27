import { motion } from 'framer-motion'
import styled, { css } from 'styled-components';

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1500;
`

export const Container = styled(motion.div)<{ positionX: number, positionY: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .8rem;
  background-color: #fff;
  
  box-shadow: 0 .8rem .6rem 0 rgba(0, 0, 0, 0.2);

  width: 24rem;
  height: 10rem;

  position: absolute;
  top: ${props => props.positionX / 16}rem;
  left: ${props => props.positionY / 16}rem;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 1.5rem;
`

export const Item = styled(motion.div)<{ isTheLastItem: boolean }>`
  width: 100%;
  padding: 1rem;
  cursor: pointer;

  ${props => !props.isTheLastItem && css`
    border-bottom: #2e2e2e .2rem solid;
  `}
`