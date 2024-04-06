import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  width: 100%;
  background-color: ${cores.corFundo};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 171px 120px 171px;
`

export const Cardapio = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
