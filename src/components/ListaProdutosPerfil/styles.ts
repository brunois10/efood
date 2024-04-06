import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 100%;
  background-color: ${cores.corFundo};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 171px 120px 171px;
`
export const Cardapio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
