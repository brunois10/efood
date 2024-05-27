import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Fundo = styled.div`
  width: 100%;
  max-height: 384px;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`
export const HeaderBar = styled.header`
  display: grid;
  justify-content: center;
  grid-gap: 138px;
  width: 100%;
`

export const LogoImg = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 40px;
`

export const Texto = styled.h2`
  font-weight: 900;
  font-size: 36px;
  height: 84px;
  line-height: 42px;
  text-align: center;
  color: ${cores.vermelho};
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 120px;
  }
`
export const Container = styled.div`
  max-width: 539px;
  width: 100%;
`
