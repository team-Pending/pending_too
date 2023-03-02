const { gql } = require('apollo-server-express');

const Response = gql`
	type Response {
		success: Boolean!
		message: String!
	}
`;

module.exports = Response;
