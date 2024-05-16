import Perfil from '../../components/ListaProdutosPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'

import { useParams } from 'react-router-dom'
import { useGetRestauranteIdQuery } from '../../services/api'

type RestauratsParams = {
  id: string
}

const Restaurantes = () => {
  const { id } = useParams() as RestauratsParams
  const { data: restaurantsID } = useGetRestauranteIdQuery(id)

  return (
    <>
      <HeaderPerfil />
      <Banner restaurante={restaurantsID} />
      <Perfil perfils={restaurantsID} />
    </>
  )
}

export default Restaurantes
