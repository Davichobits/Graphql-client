import { useContext } from "react";
import { AuthContext } from "./context/authContext.tsx";
import { ToastContainer } from "react-toastify";
import { Nav } from "./components/Nav.tsx";
import { Users } from "./pages/Users.tsx";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from './pages/Home.tsx'
//auth
import { Profile } from "./pages/auth/Profile.tsx";
import { Login } from "./pages/auth/Login.tsx";
import { Resgister } from "./pages/auth/Resgister.tsx";
import { CompleteRegistration } from "./pages/auth/CompleteRegistration.tsx";
import { PasswordForgot } from "./pages/auth/PasswordForgot.tsx";
import { PasswordUpdate } from "./pages/auth/PasswordUpdate.tsx";
//posts
import { Posts } from "./pages/posts/Posts.tsx";
import { SingleUser } from "./pages/posts/SingleUser.tsx";
//Routes
import { PrivateRoutes } from "./components/PrivateRoutes.tsx";
import { PublicRoutes } from "./components/PublicRoutes.tsx";
import { Route, Switch } from "react-router-dom";

function App() {

  const client = new ApolloClient({
    uri: import.meta.env.VITE_REACT_APP_GRAPHQL_ENDPOINT,
  })
  return (
    <ApolloProvider client={client}>
      <Nav />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/register" component={Resgister} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/complete-registration" component={CompleteRegistration} />
        <Route exact path="/password/forgot" component={PasswordForgot} />
        <Route exact path="/password/update" component={PasswordUpdate} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/user/:username" component={SingleUser} />
      </Switch>
    </ApolloProvider>
  )
}

export default App
