const router = require('express').Router();
const { getFile } = require('../../controllers/s3Controller');

router.route('/:key').get(getFile);

module.exports = router;
