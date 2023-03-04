// Laura adding to complete route for auth
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createHttpLink } from "@apollo/client/link/http";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import Navbar from "./components/navbar/Nav";
import ShopCard from "./components/ShopCard/ShopCard";
import About from "./components/About";
import Account from "./components/account/Account";
import "./app.css";
import LoginForm from "./components/account/LoginForm";
import Admin from "./components/admin/Admin.jsx";

// Laura adding regarding pulling auth path
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
  //credentials: 'include'
});

// Construct link that will attach the JWT token to every request.
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <div>
          <Navbar />

          <div className="container">
            <Routes>
              <Route path="/" element={<ShopCard />} />
              <Route path="/about" element={<LoginForm />} />
              <Route path='/account' element={<Account />} />
              <Route path='/admin' element={<Admin />} />
            </Routes>
          </div>

        </div>
      </>
    </ApolloProvider>
  );
}

export default App;