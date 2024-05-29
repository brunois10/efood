import styled from 'styled-components'
import { cores } from '../../styles'
import { Button } from '../Produto/styles'

type InputProps = {
  maxWidth?: string
}

export const CheckoutContainer = styled.form`
  color: ${cores.bege};

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  ${Button} {
    margin-bottom: 8px;
  }

  .d-flex {
    display: flex;
    gap: 32px;
  }

  .button-container {
    margin-top: 16px;
  }

  small {
    display: block;
    margin-bottom: 8px;
    color: ${cores.branco};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div<InputProps>`
  input {
    width: 100%;
    max-width: ${(props) => props.maxWidth || 'auto'};
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px;
    background-color: ${cores.bege};
    border: none;
    height: 32px;

    &.error {
      border: 1px solid red;
      background-color: ${cores.vermelho};
    }
  }
`
