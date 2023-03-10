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

// Uploads file to s3
function uploadFile(file) {
	const fileStream = fs.createReadStream(file.path);
	let timestamp = new Date().getTime();
	const uploadParams = {
		Bucket: bucketName,
		Body: fileStream,
		Key: `${timestamp}${file.filename}`,
	};

	return s3.upload(uploadParams).promise();
}
exports.uploadFile = uploadFile;

const deleteFile = async (key) => {
	const deleteParams = {
		Bucket: bucketName,
		Key: key,
	};

	return s3.deleteObject(deleteParams, function (err, data) {
		if (err) console.log(err, err.stack);
		else console.log(data);
	});
};
exports.deleteFile = deleteFile;
