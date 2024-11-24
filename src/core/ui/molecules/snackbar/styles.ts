import styled from 'styled-components'
import { SnackType } from '.'

export const Wrapper = styled.div<{ type: SnackType }>`
  background-color: #2e2e2e;

  .container-snack {
    width: 40rem;
    height: 6rem;
    display: flex;
    align-items: center;
    border-radius: .6rem;
    gap: 1.5rem;
    padding: 2rem;
    box-shadow: 0rem 0,9rem 0.4rem -0.8rem rgba(255,255,255,0.2);
    cursor: pointer;

    span {
      color: #fff;
    }
  }
`
