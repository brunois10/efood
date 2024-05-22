import { Container, Fundo, HeaderBar, LogoImg, Texto } from './styles'
import ImagemDeFundo from './../../assets/images/fundo.png'
import logo from './../../assets/images/logo.png'

const Header = () => (
  <Fundo style={{ backgroundImage: `url(${ImagemDeFundo})` }}>
    <HeaderBar>
      <Container className="container">
        <LogoImg src={logo} alt="" />
      </Container>
      <Container className="container">
        <Texto>Viva experiências gastronômicas no conforto da sua casa</Texto>
      </Container>
    </HeaderBar>
  </Fundo>
)

export default Header
