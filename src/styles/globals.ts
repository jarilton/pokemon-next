
import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
    }
    *, input, button {
        font-family: 'Roboto', sans-serif
    }
`

export const ContainerGlobal = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 320px) {
    max-width: 92%;
  }
  @media (min-width: 360px) {
    max-width: 88%;
  }
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1024px) {
    max-width: 95%;
  }
  @media (min-width: 1360px) {
    max-width: 1280px;
  }
`