import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { checkout, close, remove } from '../../store/reducers/cart'

import {
  ButtonTrash,
  BuyButton,
  Card,
  CartBuy,
  CartContainer,
  Description,
  ImageFood,
  Overlay,
  Prices,
  SideBar,
  Teste,
  VoidCart,
} from './styles'

import { getTotalPrice } from '../../utils'
import Trash from '../../assets/images/lixo.png'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, items, isCheckout } = useSelector(
    (state: RootReducer) => state.cart,
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const startCheckout = () => {
    dispatch(checkout())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <CartBuy className={isCheckout ? 'is-cartbuy' : ''}>
              <Teste>
                {items.map((item, key) => (
                  <Card key={key}>
                    <ImageFood src={item.foto} alt={item.nome} />
                    <Description>
                      <h3>{item.nome}</h3>
                      <span>R$ {item.preco}</span>
                    </Description>
                    <ButtonTrash
                      onClick={() => removeItem(item.id)}
                      src={Trash}
                      alt="Lixo"
                    />
                  </Card>
                ))}
              </Teste>
              <Prices>
                <p>Valor total</p>
                <p>R$ {getTotalPrice(items)}</p>
              </Prices>
              <BuyButton onClick={startCheckout}>
                Continuar com a entrega
              </BuyButton>
            </CartBuy>
            {isCheckout && <Checkout />}
          </>
        ) : (
          <VoidCart>
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </VoidCart>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
