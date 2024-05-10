import Perfil from '../../components/ListaProdutosPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Restaurantes = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<restauranteData>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  return (
    <>
      <HeaderPerfil />
      <Banner restaurante={restaurante} />
      <Perfil perfils={restaurante} />
    </>
  )
}

export default Restaurantes
