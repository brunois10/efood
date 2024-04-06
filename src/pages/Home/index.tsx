import Header from '../../components/Header'
import ListaDeProduto from '../../components/ListaDeProduto'

import comidaJaponesa from './../../assets/images/imagem.png'
import comidaItaliana from './../../assets/images/image1.png'
import Restaurante from '../../models/Restaurantes'

const pratos: Restaurante[] = [
  {
    id: 1,
    prato: 'Hioki Sushi',
    imagem: comidaJaponesa,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    destaque: 'Destaque da Semana',
    culinaria: 'Japonesa',
    nota: '4.9',
  },
  {
    id: 2,
    prato: 'La Dolce Vita Trattoria',
    imagem: comidaItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: '',
    culinaria: 'Italiana',
    nota: '4.6',
  },
  {
    id: 3,
    prato: 'La Dolce Vita Trattoria',
    imagem: comidaItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: '',
    culinaria: 'Italiana',
    nota: '4.6',
  },
  {
    id: 4,
    prato: 'La Dolce Vita Trattoria',
    imagem: comidaItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: '',
    culinaria: 'Italiana',
    nota: '4.6',
  },
  {
    id: 5,
    prato: 'La Dolce Vita Trattoria',
    imagem: comidaItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: '',
    culinaria: 'Italiana',
    nota: '4.6',
  },
  {
    id: 6,
    prato: 'La Dolce Vita Trattoria',
    imagem: comidaItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: '',
    culinaria: 'Italiana',
    nota: '4.6',
  },
]

const Home = () => (
  <>
    <Header />
    <ListaDeProduto restaurantes={pratos} />
  </>
)

export default Home
