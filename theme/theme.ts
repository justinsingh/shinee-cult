import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
const colors = {
  black: 'black'
}
const fonts = {
  heading: 'Basteleur_Bold',
  body: 'Avara_Black'
}

const theme = extendTheme({
  fonts,
  colors,
  config
})

export default theme;