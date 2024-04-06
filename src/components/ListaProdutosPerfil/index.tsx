import { Cardapio, Container } from './styles'
import Menu from '../../models/Cardapio'
import ProdutoPerfil from '../ProdutosPerfil'

export type Props = {
  perfils: Menu[]
}

const Perfil = ({ perfils }: Props) => (
  <>
    <Container>
      <Cardapio>
        {perfils.map((perfil) => (
          <ProdutoPerfil
            key={perfil.id}
            prato={perfil.prato}
            imagem={perfil.imagem}
            descricao={perfil.descricao}
          />
        ))}
      </Cardapio>
    </Container>
  </>
)

export default Perfil
