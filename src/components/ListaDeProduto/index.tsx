import Produto from '../Produto'
import { Cardapio, Container } from './styles'
import Restaurante from '../../models/Restaurantes'

export type Props = {
  restaurantes: Restaurante[]
}

const ListaDeProduto = ({ restaurantes }: Props) => (
  <>
    <Container>
      <Cardapio>
        {restaurantes.map((restaurante) => (
          <Produto
            key={restaurante.id}
            prato={restaurante.prato}
            imagem={restaurante.imagem}
            descricao={restaurante.descricao}
            destaque={restaurante.destaque}
            culinaria={restaurante.culinaria}
            nota={restaurante.nota}
          />
        ))}
      </Cardapio>
    </Container>
  </>
)

export default ListaDeProduto
