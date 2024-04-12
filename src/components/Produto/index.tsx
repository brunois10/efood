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
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Produto = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
}: Props) => {
  return (
    <Card>
      <Container>
        <ImgPrato style={{ backgroundImage: `url(${capa})` }}>
          <DivTag>
            {destacado && <Tag>Destaque da semana</Tag>}
            <Tag>{tipo}</Tag>
          </DivTag>
        </ImgPrato>
        <Borda>
          <ContainerPrato>
            <Titulo>{titulo}</Titulo>
            <Avaliacao>
              <Nota>{avaliacao}</Nota>
              <ImgEstrela src={estrela} alt="Estrela de avaliação" />
            </Avaliacao>
          </ContainerPrato>
          <Descricao>{descricao}</Descricao>
          <Link to={`/restaurantes/${id}`}>
            <Botao>Saiba mais</Botao>
          </Link>
        </Borda>
      </Container>
    </Card>
  )
}

export default Produto
