import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Fundo = styled.div`
  width: 100%;
  height: 186px;
  background-size: cover;
  background-repeat: no-repeat;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 82px 171px;
  color: ${cores.vermelho};
  height: 186px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

export const LogoImg = styled.img`
  width: 125px;
  height: 58px;
  margin-left: 341px;
  margin-right: 193px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`
export const Restaurante = styled.h2`
  font-size: 18px;
  font-weight: 900;
  width: 109px;
  height: 21px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`
export const Carrinho = styled.h2`
  font-size: 18px;
  text-align: right;
  width: 256px;
  font-weight: 900;
  height: 21px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`
