import Footer from './components/Footer'
import { GlobalCss, Container } from './styles'

import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantes/:id" element={<Restaurantes />} />
        </Routes>
        <Container>
          <Cart />
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
