// ApolloCliente para conectarnos a una API GraphQL, InMemoryCache para cachear los datos y createHttpLink para definir el endpoint
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

// Endpoint de la API GraphQL
const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/',
})

// Creamos el cliente Apollo y lo exportamos
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
