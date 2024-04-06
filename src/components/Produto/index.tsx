import {
  Card,
  Container,
  ContainerPrato,
  Descricao,
  ImgPrato,
  Titulo,
  Borda,
  Avaliacao,
  ImgEstrela,
  Nota,
  Tag,
  DivTag,
  Botao,
} from './styles'

import estrela from './../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  prato: string
  imagem: string
  descricao: string
  destaque?: string
  culinaria: string
  nota: string
}

const Produto = ({
  prato,
  imagem,
  descricao,
  destaque,
  culinaria,
  nota,
}: Props) => (
  <Card>
    <Container>
      <ImgPrato style={{ backgroundImage: `url(${imagem})` }}>
        <DivTag>
          {destaque && <Tag>{destaque}</Tag>}
          <Tag>{culinaria}</Tag>
        </DivTag>
      </ImgPrato>
      <Borda>
        <ContainerPrato>
          <Titulo>{prato}</Titulo>
          <Avaliacao>
            <Nota>{nota}</Nota>
            <ImgEstrela src={estrela} alt="Estrela de avaliação" />
          </Avaliacao>
        </ContainerPrato>
        <Descricao>{descricao}</Descricao>
        <Link to="/restaurantes">
          <Botao>Saiba mais</Botao>
        </Link>
      </Borda>
    </Container>
  </Card>
)

export default Produto
