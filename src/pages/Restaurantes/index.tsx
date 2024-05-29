import Perfil from '../../components/ListaProdutosPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'

import { useParams } from 'react-router-dom'
import { useGetRestauranteQuery } from '../../services/api'
import Loader from '../../components/Loader'

type RestauratsParams = {
  id: string
}

const Restaurantes = () => {
  const { id } = useParams() as RestauratsParams
  const { data: restaurantsID } = useGetRestauranteQuery(id)

  if (restaurantsID) {
    return (
      <>
        <HeaderPerfil />
        <Banner restaurante={restaurantsID} />
        <Perfil perfils={restaurantsID} />
      </>
    )
  }
  return <Loader />
}

export default Restaurantes
