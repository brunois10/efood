import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  width: 100%;
  background-color: ${cores.corFundo};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 171px 120px 171px;
`
export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
