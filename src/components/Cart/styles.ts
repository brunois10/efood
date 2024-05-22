import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Teste = styled.div`
  max-height: 380px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  z-index: 1;
`

export const SideBar = styled.aside`
  z-index: 1;
  padding: 32px 0px 16px 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${cores.vermelho};
  height: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    width: 300px;
  }
`

export const Card = styled.li`
  max-width: 344px;
  width: 100%;
  max-height: 100px;
  height: 100%;
  display: flex;
  background-color: ${cores.bege};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 280px;
    max-height: 350px;
  }

  button {
    width: 16px;
    height: 16px;
  }
`

export const ImageFood = styled.img`
  width: 80px;
  height: 80px;
  margin: 8px 8px 12px 8px;
  object-fit: cover;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cores.vermelho};
  margin-top: 8px;

  h3 {
    width: 224px;
    font-size: 18px;
    line-height: 21px;
    text-align: start;
    font-weight: 900;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 14px;
      width: 150px;
    }
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 10px;
    }
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 8px 16px 0;
  color: ${cores.bege};

  @media (max-width: ${breakpoints.desktop}) {
    padding-right: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: start;
  }
`
export const ButtonTrash = styled.img`
  width: 16px;
  height: 16px;
  margin: 76px 8px 8px 0px;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 10px;
  }
`

export const BuyButton = styled.button`
  max-width: 344px;
  height: 24px;
  width: 100%;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  background-color: ${cores.bege};
  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.desktop}) {
    width: 280px;
  }
`
export const VoidCart = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: start;
  color: ${cores.bege};
`
export const CartBuy = styled.div`
  display: block;

  &.is-cartbuy {
    display: none;
  }
`
