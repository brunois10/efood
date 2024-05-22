import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0px 120px 0px;
  margin: auto;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 24px;
    padding-right: 24px;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`

export const Background = styled.div`
  background-color: ${cores.corFundo};
  width: 100%;
`

export const Cardapio = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
