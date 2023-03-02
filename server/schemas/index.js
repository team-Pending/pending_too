const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const { gql } = require('apollo-server');

const Object = require('./object');
const Response = require('./response');

const Query = gql`
	type Query {
		fetchBuckets: [String!]!
		fetchObjects(bucketName: String): [Object!]!
	}
`;

const Mutation = gql`
	type Mutation {
		createBucket(bucketName: String!): Response
		uploadObject(file: Upload!, bucketName: String!): Object
		uploadObjects(files: [Upload!]!, bucketName: String!): [Object!]!
		deleteObject(bucketName: String!, key: String!): Response
		deleteObjects(bucketName: String!, objectKeys: [String!]!): Response

		deleteBucket(bucketName: String!): Response
	}
`;

module.exports = { typeDefs, resolvers, Object, Response, Query, Mutation };
