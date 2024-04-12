import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  color: ${cores.bege};
  background-color: ${cores.vermelho};
  padding: 8px;
`
export const ImgPrato = styled.img`
  width: 304px;
  height: 167px;
  background-color: ${cores.vermelho};
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
  line-height: 19px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  margin-top: 8px;
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
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
  margin-top: 8px;
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  padding: 32px;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  z-index: 2;
  width: 1024px;
  height: 344px;

  .imgComida {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    width: 218px;
    font-size: 14px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 1;
`
