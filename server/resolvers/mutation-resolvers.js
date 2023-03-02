require('dotenv').config();
const s3 = require('../utils/config');
const { promisify } = require('util');
const { extname } = require('path');

const bucketName = process.env.AWS_BUCKET_NAME;

class MutationResolver {
	constructor() {
		this.s3 = s3;
	}

	//create a bucket.
	async createBucket(bucketName) {
		//create an object to hold the name of the bucket.
		const params = {
			Bucket: bucketName,
		};

		//promisify the createBucket() function so that we can use async/await syntax.
		let create_bucket = promisify(this.s3.createBucket.bind(this.s3));

		//call the function to create the bucket.
		await create_bucket(params).catch(console.log);

		//return response to client.
		return {
			success: true,
			message: 'Bucket created successfully.',
		};
	}

	//upload object.
	async uploadObject(file, bucketName) {
		// create an object to hold the name of the bucket, key, body, and acl of the object.
		const params = {
			Bucket: bucketName,
			Key: '',
			Body: '',
			ACL: 'public-read',
		};

		// obtain the read stream function and the filename from the file.
		let { createReadStream, filename } = await file;

		// read the data from the file.
		let fileStream = createReadStream();

		// in case of an error, log it.
		fileStream.on('error', (error) => console.error(error));

		// set the body of the object as data to read from the file.
		params.Body = fileStream;

		// get the current time stamp.
		let timestamp = new Date().getTime();

		// get the file extension.
		let file_extension = extname(filename);

		// set the key as a combination of the folder name, timestamp, and the file extension of the object.
		params.Key = `images/${timestamp}${file_extension}`;

		// promisify the upload() function so that we can use async/await syntax.
		let upload = promisify(this.s3.upload.bind(this.s3));

		// upload the object.
		let result = await upload(params).catch(console.log);

		// structure the response.
		let object = {
			key: params.Key,
			url: result.Location,
		};

		// return the response to the client.
		return object;
	}

	//upload objects.
	async uploadObjects(files, bucketName) {}

	//delete object.
	async deleteObject(bucketName, key) {}

	//delete objects.
	async deleteObjects(bucketName, objectKeys) {}

	//delete bucket.
	async deleteBucket(bucketName) {}
}

module.exports = MutationResolver;
