import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const BannerImg = styled.div`
  width: 100%;
  max-height: 280px;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
`
export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Titulos = styled.div`
  max-width: 1024px;
  width: 100%;
  color: ${cores.branco};
  display: grid;
  align-items: center;
  gap: 156.5px;
  padding: 25px 0px 32px 0px;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 24px;
  }
`

export const Culinaria = styled.h3`
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
`
export const NomeRestaurante = styled.h4`
  max-width: 676px;
  width: 100%;
  font-size: 32px;
  line-height: 38px;
  font-weight: 900;
`
