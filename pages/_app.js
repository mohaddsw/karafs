
import Layout from '../layout/Container/container'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}