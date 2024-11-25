import styled, { css } from "styled-components"

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .1rem;
  }
`

export const WrapperPlaceAndMapCms = styled.div`
  width: 100%;
`

export const WrapperEditPlace = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4rem;

  width: 100%;
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const MapsList = styled.ul<{ hasOnlyOneChild?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: .8rem;
  width: 20rem;

  box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);

  li {
    span {
      font-family: Public Sans, sans-serif;
      font-size: 1.4rem;
    }

    list-style-type: none;

    cursor: pointer;

    padding: 1rem;
    
    border-bottom: ${props => !props.hasOnlyOneChild ? '.1rem solid black' : 'none'};

    display: flex;
    align-items: center;
    justify-content: space-between;

    .icons-area {
      display: flex;
      align-items: center;
    }
  }

  ${({ hasOnlyOneChild }) => !hasOnlyOneChild && css`
    li:first-child {
      border-radius: .8rem .8rem 0rem 0rem;
    }

    li:last-child {
      border-radius: .0rem .0rem 8rem 8rem;

      border-bottom: none;
    }
  `}
`