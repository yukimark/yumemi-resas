import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

import { Layout } from '../components/layout'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
  h1,
  h2 {
    font-weight: bold;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
