import Header from '../../components/Header'
import ListaDeProduto from '../../components/ListaDeProduto'

import { useEffect, useState } from 'react'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [destaques, setDestaques] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDestaques(res))
  }, [])

  return (
    <>
      <Header />
      <ListaDeProduto restaurantes={destaques} />
    </>
  )
}

export default Home
