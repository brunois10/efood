import Footer from './components/Footer'
import { GlobalCss, Container } from './styles'

import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/restaurantes/:id',
    element: <Restaurantes />,
  },
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Container>
        <RouterProvider router={rotas} />
        <Footer />
        <Cart />
      </Container>
    </Provider>
  )
}

export default App
