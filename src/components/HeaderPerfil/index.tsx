import {
  Carrinho,
  Container,
  Fundo,
  LogoImg,
  Restaurante,
  Header,
} from './styles'
import ImagemDeFundo from './../../assets/images/fundo.png'
import logo from './../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  return (
    <Fundo style={{ backgroundImage: `url(${ImagemDeFundo})` }}>
      <Container>
        <Header>
          <Restaurante>Restaurante</Restaurante>
          <Link to="/">
            <LogoImg src={logo} />
          </Link>
          <Carrinho role="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </Carrinho>
        </Header>
      </Container>
    </Fundo>
  )
}

export default HeaderPerfil
