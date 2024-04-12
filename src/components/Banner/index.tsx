import {
  BannerImg,
  Container,
  Culinaria,
  NomeRestaurante,
  Titulos,
} from './style'
import { restauranteData } from '../../pages/Restaurantes'

type BannerProps = {
  restaurante: restauranteData | undefined
}

const Banner = ({ restaurante }: BannerProps) => {
  return (
    <BannerImg
      style={{
        backgroundImage: `url(${restaurante?.capa})`,
      }}
    >
      <Container>
        <Titulos>
          <Culinaria>{restaurante?.tipo}</Culinaria>
          <NomeRestaurante>{restaurante?.titulo}</NomeRestaurante>
        </Titulos>
      </Container>
    </BannerImg>
  )
}
export default Banner
