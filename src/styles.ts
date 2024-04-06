import styled, { createGlobalStyle } from 'styled-components'

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
