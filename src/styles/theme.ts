import { extendTheme } from '@chakra-ui/react'
import colors from 'tailwindcss/colors'

const config: any = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    ...colors,
    body: colors.blueGray['100'],
    gray: colors.blueGray,
    primary: colors['indigo'],
    secondary: colors['teal'],
  },
  styles: {
    global: {
      body: {
        bg: 'body',
        color: 'gray.700',
        fontSize: [18, 20],
      },
      a: {
        color: 'primary.700',
        _hover: {
          color: 'primary.700',
          textDecoration: 'underline',
        },
      },
      'h1,h2,h3,h4,h5,h6': {
        color: 'gray.800',
        fontWeight: 'bold',
      },
    },
  },
})

export default theme
