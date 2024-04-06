import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  color: ${cores.bege};
  background-color: ${cores.vermelho};
`
export const ImgPrato = styled.img`
  width: 304px;
  height: 167px;
  background-color: ${cores.vermelho};
  padding-top: 8px;
`

export const Container = styled.div`
  background-color: ${cores.vermelho};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  padding: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 0px 8px 8px 8px;
`
export const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
`

export const Botao = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${cores.bege};
  border: none;
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
