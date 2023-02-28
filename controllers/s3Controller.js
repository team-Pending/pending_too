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

module.exports = {
	// Uploads file to s3
	uploadFile(req, res) {
		const fileStream = fs.createReadStream(req.path);

		const uploadParams = {
			Bucket: bucketName,
			Body: fileStream,
			Key: req.filename,
		};
		return s3.upload(uploadParams).promise();
	},
	// downloads a file from s3
	getFileStream(req, res) {
		const downloadParams = {
			Key: req.params.key,
			Bucket: bucketName,
		};

		return s3.getObject(downloadParams).createReadStream();
	},
	deletePhoto(req, res) {
		const deleteParams = {
			Bucket: bucketName,
			Key: req.params.key,
		};

		return s3.deleteObject(deleteParams, function (err, data) {
			if (err) console.log(err, err.stack);
			else console.log(data);
		});
	},
};
