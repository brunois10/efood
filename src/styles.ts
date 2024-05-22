import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
}

export const GlobalCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}

.container {
  display: flex;
  justify-content: center;
  width: 539px;

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 360px;
    justify-content: center;
    align-items: center;
  }
}
`

export const cores = {
  vermelho: '#E66767',
  branco: '#FFFFFF',
  bege: '#FFEBD9',
  corFundo: '#FFF8F2',
}

export const Container = styled.div`
  width: 1366px;
  width: 100%;
`
