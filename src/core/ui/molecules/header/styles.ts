import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 1000;

  padding : 1.2rem 4rem;

  background-color: #FFFFFF;
  border: #E5E8EB .1rem solid;

  position: sticky;
  top: 0;
  left: 0;
`

export const WrapperTitleAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const Icon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
`