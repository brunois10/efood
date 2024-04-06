import { Fundo, HeaderBar, LogoImg, Texto } from './styles'
import ImagemDeFundo from './../../assets/images/fundo.png'
import logo from './../../assets/images/logo.png'

const Header = () => (
  <Fundo style={{ backgroundImage: `url(${ImagemDeFundo})` }}>
    <HeaderBar>
      <div className="container">
        <LogoImg src={logo} alt="" />
      </div>
      <div className="container">
        <Texto>Viva experiências gastronômicas no conforto da sua casa</Texto>
      </div>
    </HeaderBar>
  </Fundo>
)

export default Header
