import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Head from 'next/head'
import theme from '../libs/theme'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </Head>

      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
