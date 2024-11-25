import { motion } from "motion/react";
import styled, { css } from "styled-components";

export type ButtonVariant = 'blue' | 'gray' | 'red'

export const ButtonContainer = styled(motion.div)<{ variant?: ButtonVariant, width: string }>`
  cursor: pointer;

  width: ${props => props.width};
  height: 4rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.2rem;

  ${(props) => {
    switch (props.variant) {
      case 'red':
        return css`
          border: #FA4032 .2rem solid;
          background-color: #FFFFFF;
          color: #FA4032;
        `

      case 'blue':
        return css`
          background-color: #2B8FE3;
          color: #FFFFFF;
        `

      case 'gray':
        return css`
          background-color: #F0F2F5;
          color: #121417;
        `
    }
  }}

  span {
    font-family: Public Sans, sans-serif;
    font-size: 1.4rem;
    line-height: 2.1rem;
    font-weight: 600;
  }
`