import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  ButtonTrash,
  BuyButton,
  Card,
  CartContainer,
  Description,
  ImageFood,
  Overlay,
  Prices,
  SideBar,
  Teste,
} from './styles'

import { getTotalPrice } from '../../utils'
import Trash from '../../assets/images/lixo.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <Teste>
          {items.map((item) => (
            <Card key={item.id}>
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
        <BuyButton>Continuar com a entrega</BuyButton>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
