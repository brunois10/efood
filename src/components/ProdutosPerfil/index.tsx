import { useState } from 'react'
import {
  Botao,
  Card,
  Container,
  ContainerBotao,
  Descricao,
  ImgPrato,
  Titulo,
  ModalContainer,
  ModalContent,
  CloseIcon,
  TextBox,
  Overlay,
} from './styles'
import close from '../../assets/images/fechar.png'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { formataPreco } from '../../utils'

type Props = {
  id: number
  preco?: number
  porcao?: string
  foto: string
  nome: string
  descricao: string
  visivel: boolean
  prato: CardapioType
}

const ProdutoPerfil = ({
  foto,
  nome,
  descricao,
  porcao,
  preco,
  prato,
}: Props) => {
  const [modal, setModal] = useState({
    visivel: false,
  })

  const dispatch = useDispatch()

  const handleModal = () => setModal({ visivel: false })

  const addCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <Container>
          <ImgPrato src={foto} />
        </Container>
        <Titulo>{nome}</Titulo>
        <Descricao>{descricao}</Descricao>
        <ContainerBotao>
          <Botao onClick={() => setModal({ visivel: true })}>
            Adicionar ao carrinho
          </Botao>
        </ContainerBotao>
      </Card>
      <ModalContainer className={modal.visivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <CloseIcon src={close} onClick={handleModal} />
          <img className="imgComida" src={foto} alt="Imagem da comida" />
          <TextBox>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve: de {porcao}</p>
            <button
              onClick={() => {
                addCart()
                handleModal()
              }}
            >
              Adicionar ao carrinho - {formataPreco(preco)}
            </button>
          </TextBox>
        </ModalContent>
        <Overlay
          onClick={() => {
            handleModal()
          }}
        />
      </ModalContainer>
    </>
  )
}

export default ProdutoPerfil
