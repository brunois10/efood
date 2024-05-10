import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import { GlobalCss, Container } from './styles'
import Rotas from './routes'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Container>
          <Rotas />
          <Footer />
          <Cart />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
