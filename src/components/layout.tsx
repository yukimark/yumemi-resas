import { Header } from './base/header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{ children }</main>
    </>
  )
}
