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

const HeaderPerfil = () => (
  <Fundo style={{ backgroundImage: `url(${ImagemDeFundo})` }}>
    <Container>
      <Header>
        <Restaurante>Restaurante</Restaurante>
        <Link to="/">
          <LogoImg src={logo} />
        </Link>
        <Carrinho>0 produto(s) no carrinho</Carrinho>
      </Header>
    </Container>
  </Fundo>
)

export default HeaderPerfil
