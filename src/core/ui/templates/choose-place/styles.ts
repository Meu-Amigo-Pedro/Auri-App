import styled from 'styled-components'

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem;
  gap: 3.5rem;
`

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  width: 100%;
  position: relative;
`

export const ContainerCreatePlaceButton = styled.div`
  position: fixed;
  right: 10rem;
`