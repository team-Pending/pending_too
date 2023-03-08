// Laura adding to complete route for auth
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AuthProvider } from './utils/auth';
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import Navbar from "./components/navbar/Nav";
import Home from './components/Home';
import ShopCard from './components/ShopCard/ShopCard';
import Account from './components/account/Account';
import './app.css';
import Admin from './components/admin/Admin.jsx';
import LoginForm from './components/account/LoginForm';
import CategoryMenu from './components/CategoryMenu';
// import Cart from "../components/Cart/cart";
import NotFound from './components/NotFound.jsx';
import Placeholder from './components/placeholderData/Placeholder';

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
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<AuthProvider>
				<>
					<div>
						<Navbar />

						<div className="container">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<LoginForm />} />
								<Route path="/account" element={<Account />} />
								<Route path="/admin" element={<Admin />} />
								{/* <Route path="/cart" element={<Cart />} /> */}
								<Route path="/*" element={<NotFound />} />
							    <Route path="/:target" element={<Placeholder />}/>

							</Routes>
						</div>
					</div>
				</>
			</AuthProvider>
		</ApolloProvider>
	);
}

export default App;
