import React from "react";
import "assets/css/App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Create an Apollo Client and specify the connection to your GraphQL API
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('id_token') ? `Bearer ${localStorage.getItem('id_token')}` : "",
  },
});

let user = true;

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <BrowserRouter>
            <Switch>
              <Route path={`/auth`}>
                <AuthLayout />
              </Route>
              {!user && <Redirect to="/auth/sign-in" />}
              {user && <>
                <Route path={`/admin`}>
                  <AdminLayout />
                </Route>
                <Redirect from="/" to="/admin/overview" />
              </>}
            </Switch>
          </BrowserRouter>
        </React.StrictMode>
      </ChakraProvider>
    </ApolloProvider>
  );
}