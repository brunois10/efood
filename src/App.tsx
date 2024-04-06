import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import { GlobalCss, Container } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Rotas />
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
