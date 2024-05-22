import { Background, Container, Lista } from './styles'
import ProdutoPerfil from '../ProdutosPerfil'

export type Props = {
  perfils: restauranteData | undefined
}

const Perfil = ({ perfils }: Props) => (
  <>
    <Background>
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
                prato={perfil}
              />
            </li>
          ))}
        </Lista>
      </Container>
    </Background>
  </>
)

export default Perfil
