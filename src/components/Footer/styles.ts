import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.div`
  background-color: ${cores.bege};
  width: 100%;
  height: 298px;
  display: grid;
  justify-content: center;
  text-align: center;
`

export const LogoImg = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 40px;
`
export const ContainerRedes = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
`

export const RedesSociais = styled.img`
  width: 24px;
  height: 24px;
`
export const FooterTexto = styled.h2`
  width: 480px;
  font-weight: 400;
  font-size: 10px;
  line-height: 11.75px;
  color: ${cores.vermelho};
`
