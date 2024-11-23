import { motion } from "motion/react";
import styled from "styled-components";

export type ButtonVariant = 'blue' | 'gray'

export const ButtonContainer = styled(motion.div)<{ variant?: ButtonVariant}>`
  cursor: pointer;

  width: 8.4rem;
  height: 4rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.2rem;

  background-color: ${props => props.variant === 'blue' ? '#2B8FE3' : '#F0F2F5'};

  span {
    font-family: Public Sans, sans-serif;
    font-size: 1.4rem;
    line-height: 2.1rem;
    font-weight: 600;

    color: ${props => props.variant === 'blue' ? '#FFFFFF' : '#121417'};
  }
`