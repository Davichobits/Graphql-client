import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from './pages/Home.tsx'



function App() {

  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  })
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App
