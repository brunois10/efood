import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  returnCart,
  paymentCart,
  returnCheckout,
  finishCheckout,
  clear,
  close,
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
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'
import { getTotalPrice } from '../../utils'

const Checkout = () => {
  const { isPayment, items, isFinish } = useSelector(
    (state: RootReducer) => state.cart,
  )
  const navigate = useNavigate()

  const [purchase, { data }] = usePurchaseMutation()

  const finish = () => {
    dispatch(clear())
    dispatch(close())
    navigate('/')
  }

  const dispatch = useDispatch()

  const backCart = () => {
    dispatch(returnCart())
  }

  const activePayment = () => {
    if (
      form.values.receiver &&
      form.values.adress &&
      form.values.city &&
      form.values.zipCode &&
      form.values.number
    ) {
      dispatch(paymentCart())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const activeConfirmed = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cardCode &&
      form.values.expiresYear &&
      form.values.expiresMonth
    ) {
      dispatch(finishCheckout())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const returnAdress = () => {
    dispatch(returnCheckout())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number,
        })),
      })
    },
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      {isFinish && (
        <ContainerCheckout className="is-finish">
          <Title>Pedido realizado - {data?.orderId}</Title>
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
          <ButtonCheckout onClick={finish}>Concluir</ButtonCheckout>
        </ContainerCheckout>
      )}
      <form onSubmit={form.handleSubmit}>
        {!isPayment && !isFinish && (
          <>
            <ContainerDelivery className="is-checkout">
              <Title>Entrega</Title>
              <InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  required
                  id="receiver"
                  name="receiver"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.receiver}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="adress">Endereço</label>
                <input
                  type="text"
                  required
                  id="adress"
                  name="adress"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.adress}
                  className={checkInputHasError('adress') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  required
                  id="city"
                  name="city"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.city}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  type="text"
                  required
                  id="zipCode"
                  name="zipCode"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.zipCode}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  mask="99999-999"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  type="number"
                  required
                  id="number"
                  name="number"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.number}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  required
                  id="complement"
                  name="complement"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.complement}
                />
              </InputGroup>
              <ContainerButton>
                <ButtonCart type="submit" onClick={activePayment}>
                  Continuar com o pagamento
                </ButtonCart>
                <ButtonCart onClick={backCart}>
                  Voltar para o carrinho
                </ButtonCart>
              </ContainerButton>
            </ContainerDelivery>
          </>
        )}
        {isPayment && (
          <ContainerPayment className="is-payment">
            <Title>Pagamento - Valor a pagar R$ {getTotalPrice(items)}</Title>
            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                required
                id="cardName"
                name="cardName"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardName}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                type="text"
                required
                id="cardNumber"
                name="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardNumber}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                type="text"
                required
                id="cardCode"
                name="cardCode"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardCode}
                className={checkInputHasError('cardCode') ? 'error' : ''}
                mask="999"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                type="text"
                required
                id="expiresMonth"
                name="expiresMonth"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.expiresMonth}
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                type="text"
                required
                id="expiresYear"
                name="expiresYear"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.expiresYear}
                className={checkInputHasError('expiresYear') ? 'error' : ''}
                mask="99"
              />
            </InputGroup>
            <ContainerButton>
              <ButtonCart type="submit" onClick={activeConfirmed}>
                Finalizar pagamento
              </ButtonCart>
              <ButtonCart onClick={returnAdress}>
                Voltar para a edição de endereço
              </ButtonCart>
            </ContainerButton>
          </ContainerPayment>
        )}
      </form>
    </>
  )
}

export default Checkout
