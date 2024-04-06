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

const HeaderPerfil = () => (
  <Fundo style={{ backgroundImage: `url(${ImagemDeFundo})` }}>
    <Container>
      <Header>
        <Restaurante>Restaurante</Restaurante>
        <LogoImg src={logo} />
        <Carrinho>0 produto(s) no carrinho</Carrinho>
      </Header>
    </Container>
  </Fundo>
)

export default HeaderPerfil
