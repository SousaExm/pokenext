// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/global'
import { Layout } from './components/Layout'
 

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyle/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
