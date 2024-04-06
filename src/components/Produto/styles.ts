import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  color: ${cores.vermelho};
  margin-bottom: 48px;
`
export const ImgPrato = styled.div`
  width: 472px;
  height: 217px;
  position: relative;
  display: block;
`
export const DivTag = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding: 16px;
`

export const Tag = styled.div`
  font-weight: 700;
  font-size: 12px;
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  height: 26px;
  display: flex;
  align-items: center;
  padding: 6px 4px;
`

export const Container = styled.div`
  background-color: ${cores.branco};
`
export const Borda = styled.div`
  border-left: 1px solid ${cores.vermelho};
  border-right: 1px solid ${cores.vermelho};
  border-bottom: 1px solid ${cores.vermelho};
`

export const ContainerPrato = styled.div`
  width: 472px;
  display: flex;
  justify-content: space-between;
`
export const Avaliacao = styled.div`
  display: flex;
  padding: 8px 7px;
  gap: 8px;
`
export const ImgEstrela = styled.img`
  width: 21px;
  height: 21px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  padding: 8px 7px;
`
export const Nota = styled.h3`
  font-size: 18px;
`

export const Descricao = styled.p`
  font-size: 14px;
  padding: 8px;
`
export const Botao = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${cores.vermelho};
  border: none;
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin: 8px;
  cursor: pointer;
`
