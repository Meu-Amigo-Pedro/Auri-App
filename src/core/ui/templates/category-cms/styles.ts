import styled from 'styled-components'

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5rem;
  width: 100%;

  #go-back-tap {
    position: fixed;
    left: 4rem;
  }

  #go-back {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.8rem;
    font-family: 'Public Sans';
    font-weight: 500;
    text-decoration: none;
    color: #000;
  }
`

export const WrapperTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .4rem;
`

export const WrapperCreateCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerColorPicker = styled.div`
  display: flex;
  align-items: start;
  padding: 2rem;
  gap: 2rem;
`

export const ColorPickerBox = styled.div<{ color: string }>`
  width: 8rem;
  height: 8rem;
  border-radius: .8rem;
  background-color: ${props => props.color};
`