import Produto from '../Produto'
import { Cardapio, Container } from './styles'

type Props = {
  restaurants: restauranteData[]
}

const ListaDeProduto = ({ restaurants }: Props) => (
  <>
    <Container>
      <Cardapio>
        {restaurants.map((restaurante) => (
          <Produto
            key={restaurante.id}
            id={restaurante.id}
            titulo={restaurante.titulo}
            destacado={restaurante.destacado}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
          />
        ))}
      </Cardapio>
    </Container>
  </>
)

export default ListaDeProduto
