const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { handle404Error, handleErrors } = require('./utils/errorHandlers');

const PORT = process.env.PORT || 3001;
const app = express();
const BUILD_PATH = path.resolve('../client');
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use(routes);



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	server.applyMiddleware({ app });
	
	db.once('open', () => {
		app.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
		});
	});
	// Catch-all route for 404 errors
	app.use(handle404Error);
	// Error handler middleware
	app.use(handleErrors);
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
