require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
	region,
	accessKeyId,
	secretAccessKey,
});

const s3Controller = {
	async getFile(req, res) {
		const key = req.params.key;
		console.log(key);
		await function getFileStream(fileKey) {
			const downloadParams = {
				Key: fileKey,
				Bucket: bucketName,
			};
			console.log(downloadParams);
			return s3.getObject(downloadParams).createReadStream();
		};
		const readStream = getFileStream(key);

		readStream.pipe(res);
	},
};

module.exports = s3Controller;
