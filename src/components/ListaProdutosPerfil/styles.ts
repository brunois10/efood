import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0px 120px 0px;
  margin: auto;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 24px;
    padding-right: 24px;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`
export const Background = styled.div`
  width: 100%;
  background-color: ${cores.corFundo};
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
