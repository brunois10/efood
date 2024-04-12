import { Container, Lista } from './styles'
import ProdutoPerfil from '../ProdutosPerfil'

import { restauranteData } from '../../pages/Restaurantes'

export type Props = {
  perfils: restauranteData | undefined
}

const Perfil = ({ perfils }: Props) => (
  <>
    <Container>
      <Lista>
        {perfils?.cardapio.map((perfil) => (
          <li key={perfil.id}>
            <ProdutoPerfil
              nome={perfil.nome}
              foto={perfil.foto}
              descricao={perfil.descricao}
              id={perfil.id}
              preco={perfil.preco}
              porcao={perfil.porcao}
              visivel={false}
            />
          </li>
        ))}
      </Lista>
    </Container>
  </>
)

export default Perfil
