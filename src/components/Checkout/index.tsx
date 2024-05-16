import { useDispatch, useSelector } from 'react-redux'

import {
  returnCart,
  paymentCart,
  finishCheckout,
  returnCheckout,
} from '../../store/reducers/cart'

import {
  ButtonCart,
  ButtonCheckout,
  ContainerButton,
  ContainerCheckout,
  ContainerDelivery,
  ContainerPayment,
  InputGroup,
  Title,
} from './styles'
import { RootReducer } from '../../store'

const Checkout = () => {
  const { isPayment, isFinish } = useSelector(
    (state: RootReducer) => state.cart,
  )
  const dispatch = useDispatch()

  const backCart = () => {
    dispatch(returnCart())
  }

  const runPayment = () => {
    dispatch(paymentCart())
  }

  const returnAdress = () => {
    dispatch(returnCheckout())
  }

  const submitCheckout = () => {
    dispatch(finishCheckout())
  }

  return (
    <>
      {isFinish && (
        <ContainerCheckout className="is-finish">
          <Title>Pedido realizado - OrderID</Title>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <ButtonCheckout>Concluir</ButtonCheckout>
        </ContainerCheckout>
      )}
      {!isPayment && !isFinish && (
        <ContainerDelivery className="is-checkout">
          <Title>Entrega</Title>
          <InputGroup>
            <label>Quem irá receber</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Endereço</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Cidade</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>CEP</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Número</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Complemento (opcional)</label>
            <input type="text" />
          </InputGroup>
          <ContainerButton>
            <ButtonCart onClick={runPayment}>
              Continuar com o pagamento
            </ButtonCart>
            <ButtonCart onClick={backCart}>Voltar para o carrinho</ButtonCart>
          </ContainerButton>
        </ContainerDelivery>
      )}
      {isPayment && !isFinish && (
        <ContainerPayment className="is-payment">
          <Title>Pagamento - Valor a pagar R$ 190,90</Title>
          <InputGroup>
            <label>Nome no cartão</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Número do cartão</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>CVV</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Mês de vencimento</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Ano de vencimento</label>
            <input type="text" />
          </InputGroup>
          <ContainerButton>
            <ButtonCart onClick={submitCheckout}>
              Finalizar pagamento
            </ButtonCart>
            <ButtonCart onClick={returnAdress}>
              Voltar para a edição de endereço
            </ButtonCart>
          </ContainerButton>
        </ContainerPayment>
      )}
    </>
  )
}
export default Checkout
