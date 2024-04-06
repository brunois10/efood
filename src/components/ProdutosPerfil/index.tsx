import {
  Botao,
  Card,
  Container,
  ContainerBotao,
  Descricao,
  ImgPrato,
  Titulo,
} from './styles'

type Props = {
  prato: string
  imagem: string
  descricao: string
}

const ProdutoPerfil = ({ prato, imagem, descricao }: Props) => (
  <Card>
    <Container>
      <ImgPrato src={imagem} />
    </Container>
    <Titulo>{prato}</Titulo>
    <Descricao>{descricao}</Descricao>
    <ContainerBotao>
      <Botao>Adicionar ao carrinho</Botao>
    </ContainerBotao>
  </Card>
)

export default ProdutoPerfil
