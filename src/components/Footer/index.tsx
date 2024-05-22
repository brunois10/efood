import {
  ContainerRedes,
  FooterBar,
  FooterTexto,
  LogoImg,
  RedesSociais,
} from './styles'
import logo from './../../assets/images/logo.png'
import instagram from './../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import facebook from './../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from './../../assets/images/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <FooterBar>
    <div className="container">
      <LogoImg src={logo} alt="Logo efood" />
    </div>
    <ContainerRedes className="container">
      <RedesSociais src={instagram} alt="Logo do instagram" />
      <RedesSociais src={facebook} alt="Logo do facebook" />
      <RedesSociais src={twitter} alt="Logo do twitter" />
    </ContainerRedes>
    <div className="container">
      <FooterTexto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterTexto>
    </div>
  </FooterBar>
)

export default Footer
