import '@fontsource/dm-sans'
import './index.css'

import { AppProps } from 'next/app'
import { Chakra } from 'systems/Core'
import { ApolloProvider } from '@apollo/client'
import { client } from 'systems/Api'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Chakra>
        <Component {...pageProps} />
      </Chakra>
    </ApolloProvider>
  )
}

export default App
