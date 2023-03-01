require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile, getFileStream, deletePhoto } = require('../s3');
const uploadImage = require('../../utils/uploadImg');
const Note = require('../../models/Note');

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
	async uploadFile(req, res) {
		try {
			const fileStream = fs.createReadStream(req.path);

			const uploadParams = {
				Bucket: bucketName,
				Body: fileStream,
				Key: req.filename,
			};

			const result = await s3.upload(uploadParams).promise();

			return res.send({ imagePath: `/images/${result.key}` });
		} catch (error) {
			console.error(error);
			return res.status(500).send({ error: 'Failed to upload file' });
		}
	},

	async getFileStream(req, res) {
		try {
			const key = req.params.key;
			const downloadParams = {
				Key: key,
				Bucket: bucketName,
			};

			const readStream = s3.getObject(downloadParams).createReadStream();
			return readStream.pipe(res);
		} catch (error) {
			console.error(error);
			return res.status(500).send({ error: 'Failed to download file' });
		}
	},

	async deletePhoto(req, res) {
		try {
			const deleteParams = {
				Bucket: bucketName,
				Key: req.params.key,
			};

			await s3.deleteObject(deleteParams).promise();

			return res.send({ message: 'File deleted successfully' });
		} catch (error) {
			console.error(error);
			return res.status(500).send({ error: 'Failed to delete file' });
		}
	},
};

// router.post('/image', upload.single('image'), async function (req, res) {
// 	const result = await uploadImage(req.file);
// 	res.send({ imagePath: `/images/${result.key}` });
// 	const userData = await Note.create({
// 		user_id: req.session.user_id,
// 		title: req.body.title,
// 		description: req.body.description,
// 		key: result.key,
// 	});
// });

// creates a method to delete previously made notes based on their unique id.
// router.delete('/notes/:key', async (req, res) => {
//   try {
//     const noteData = await Note.destroy({
//       where: {
//         key: req.params.key,
//       },
//     });
//     deletePhoto(req.params.key);

//     if (!noteData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(noteData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
