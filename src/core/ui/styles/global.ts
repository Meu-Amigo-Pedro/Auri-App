import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'Public Sans', 'Inter', sans-serif;
    font-weight: 400;
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;

    ::-webkit-scrollbar {
      display: none;
    }
    
    scroll-behavior: auto;
  }

  @media (min-width: 1500px) {
    html {
      font-size: 58.5%;
    }
  }

  @media (min-width: 2560px) {
    html {
      font-size: 77%;
    }
  }

  @media (min-width: 3000px) {
    html {
      font-size: 90%;
    }
  }

  @media (min-width: 3820px) {
    html {
      font-size: 130%;
    }
  }
`;
