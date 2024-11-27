import styled from 'styled-components'

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  padding: 2rem 11rem;

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

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0rem 2rem 11rem;
`

export const ResponseContainer = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0rem 2rem 11rem;
  gap: 1.2rem;
`