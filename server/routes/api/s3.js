const router = require('express').Router();

const { uploadFile, getFileStream, deletePhoto } = require('../../controllers/s3Controller');

router.route('/').post(uploadFile);

router.route('/:key').get(getFileStream).delete(deletePhoto);

module.exports = router;
