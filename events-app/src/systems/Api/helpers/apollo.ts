import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const URI = process.env.NEXT_PUBLIC_STRAPI_URL
const httpLink = new HttpLink({ uri: URI })

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})