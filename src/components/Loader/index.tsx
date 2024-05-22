import ClipLoader from 'react-spinners/ClipLoader'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClipLoader color={cores.vermelho} />
  </Container>
)

export default Loader
