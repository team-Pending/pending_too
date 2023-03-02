const s3 = require('../utils/config');
const { promisify } = require('util');
const { getUrl } = require('../utils/object');

class QueryResolver {
	constructor() {
		this.s3 = s3;
	}

	//fetching buckets.
	async fetchBuckets() {
		//promisify the listBuckets() so that we can use the async/await syntax.
		const listBuckets = promisify(this.s3.listBuckets.bind(this.s3));

		//get the buckets.
		let result = await listBuckets().catch(console.log);

		//loop through the result extracting only the name of each bucket.
		result = result.Buckets.map((result) => result.Name);

		//return the bucket names as response to the client.
		return result;
	}

	//fetching objects.
	async fetchObjects(bucketName) {}
}

module.exports = QueryResolver;
