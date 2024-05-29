import Header from '../../components/Header'
import ListaDeProduto from '../../components/ListaDeProduto'
import Loader from '../../components/Loader'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantesQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <ListaDeProduto restaurants={restaurants} />
      </>
    )
  }
  if (isLoading) {
    return <Loader />
  }
}

export default Home
