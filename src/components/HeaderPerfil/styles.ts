import styled from 'styled-components'
import { cores } from '../../styles'

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
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
`

export const LogoImg = styled.img`
  width: 125px;
  height: 58px;
  margin-left: 341px;
  margin-right: 193px;
`
export const Restaurante = styled.h2`
  font-size: 18px;
  font-weight: 900;
  width: 109px;
  height: 21px;
  text-align: center;
`
export const Carrinho = styled.h2`
  font-size: 18px;
  text-align: right;
  width: 256px;
  font-weight: 900;
  height: 21px;
`
