import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
//import Head from 'next/head'
//import dynamic from 'next/dynamic'
//import faviconImage from '../public/'
/*
const ShineeProvider = dynamic(
  () => import('../context/ShineeContext'),
  { ssr: false }
)
*/

/*
const HeadComponent = () => {
  return (
    <Head>
      <title>DataBeasts</title>
      <meta name="description" content="Interact With Your DataBeasts" />
      <link rel="icon" href={faviconImage.src} />
      <title>DataBeasts</title>
      <meta name="title" content="DataBeasts" />
      <meta name="description" content="View and share your DataBeasts collection." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.databeasts.xyz/" />
      <meta property="og:title" content="DataBeasts" />
      <meta property="og:description" content="View and share your DataBeasts collection." />
      <meta property="og:image" content="https://github.com/justinsingh/databeasts/blob/main/public/databeasts_title_meta_image.png?raw=true" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.databeasts.xyz/" />
      <meta property="twitter:title" content="DataBeasts" />
      <meta property="twitter:description" content="View and share your DataBeasts collection." />
      <meta property="twitter:image" content="https://github.com/justinsingh/databeasts/blob/main/public/databeasts_title_meta_image.png?raw=true" />
    </Head>
  )
}
*/

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colors = {
  black: '#200'
}
const theme = extendTheme({
  colors,
  config
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
