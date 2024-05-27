import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ContainerDelivery = styled.div`
  display: none;

  &.is-checkout {
    display: block;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${cores.bege};
`

export const InputGroup = styled.div`
  width: 344px;
  display: flex;
  flex-direction: column;
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  margin-bottom: 8px;

  input {
    height: 32px;
    background-color: ${cores.bege};
    border: none;
    color: #4b4b4b;
    margin-top: 8px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-right: 60px;
    }
  }
`
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  &.error {
    border: 1px solid red;
  }
`

export const ButtonCart = styled.button`
  cursor: pointer;
  height: 24px;
  margin-bottom: 8px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  width: 344px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 284px;
  }
`
export const ContainerPayment = styled.div`
  display: none;

  &.is-payment {
    display: block;
  }
`
export const ContainerCheckout = styled.div`
  display: none;
  height: 286px;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${cores.bege};
    margin-bottom: 16px;
  }

  &.is-finish {
    display: block;
  }
`

export const ButtonCheckout = styled.button`
  margin-top: 8px;
  border: none;
  cursor: pointer;
  height: 24px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  width: 344px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 284px;
  }
`
