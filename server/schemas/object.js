const { gql } = require('apollo-server-express');

const Object = gql`
	type Object {
		url: String!
		key: String!
	}
`;

module.exports = Object;
