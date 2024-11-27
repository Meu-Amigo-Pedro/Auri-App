import styled from 'styled-components'

export const Wrapper = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: absolute;
  animation: fadeIn .3s;
  z-index: 1000000;
`
