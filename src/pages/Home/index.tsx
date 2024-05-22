import Header from '../../components/Header'
import ListaDeProduto from '../../components/ListaDeProduto'
import Loader from '../../components/Loader'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantesQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <ListaDeProduto restaurants={restaurants} />
      </>
    )
  }
  return <Loader />
}

export default Home
