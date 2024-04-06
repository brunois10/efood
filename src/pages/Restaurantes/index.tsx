import pizza from './../../assets/images/image 3.png'
import Perfil from '../../components/ListaProdutosPerfil'
import Menu from '../../models/Cardapio'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'

const lojas: Menu[] = [
  {
    id: 1,
    prato: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 2,
    prato: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 3,
    prato: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 4,
    prato: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 5,
    prato: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 6,
    prato: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
]

const Restaurantes = () => (
  <>
    <HeaderPerfil />
    <Banner />
    <Perfil perfils={lojas} />
  </>
)

export default Restaurantes
