import {
  BannerImg,
  Container,
  Culinaria,
  NomeRestaurante,
  Titulos,
} from './style'
import ImagemPrato from './../../assets/images/image1.png'

const Banner = () => (
  <BannerImg style={{ backgroundImage: `url(${ImagemPrato})` }}>
    <Container>
      <Titulos>
        <Culinaria>Italiana</Culinaria>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </Titulos>
    </Container>
  </BannerImg>
)

export default Banner
