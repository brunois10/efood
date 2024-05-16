import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListaDeProduto from '../../components/ListaDeProduto'

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
  return <Footer />
}

export default Home
