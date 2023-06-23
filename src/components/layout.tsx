import { Header } from './base/header'
import styled from 'styled-components'

const ContentsBox = styled.div`
  width: 1000px;
  margin: 0 auto;
`

export function Layout({ children }) {
  return (
    <>
      <ContentsBox>
        <Header />
        <main>{ children }</main>
      </ContentsBox>
    </>
  )
}
