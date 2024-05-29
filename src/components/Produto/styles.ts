import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  color: ${cores.vermelho};
  margin-bottom: 48px;
  justify-content: center;
  align-items: center;
  min-width: 260px;
`
export const ImgPrato = styled.div`
  max-width: 472px;
  width: 100%;
  min-height: 217px;
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 6px;
  }
`

export const Container = styled.div`
  background-color: ${cores.branco};
  width: 100%;
`
export const Borda = styled.div`
  border-left: 1px solid ${cores.vermelho};
  border-right: 1px solid ${cores.vermelho};
  border-bottom: 1px solid ${cores.vermelho};
`

export const ContainerPrato = styled.div`
  max-width: 472px;
  width: 100%;
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

  margin: 8px 7px 16px 7px;
`
export const Nota = styled.h3`
  font-size: 18px;
`

export const Descricao = styled.p`
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  padding: 0px 8px;
  line-height: 22px;
  font-weight: 400;
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
  margin: 16px 8px 8px 8px;
  cursor: pointer;
`
export const Button = styled.button`
  color: ${cores.vermelho};
  padding: 4px;
  background-color: ${cores.bege};
  font-weight: bold;
  border: none;
  width: 100%;
  cursor: pointer;
`
