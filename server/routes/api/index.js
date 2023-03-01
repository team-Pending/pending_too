const router = require('express').Router();
const s3Routes = require('./s3');

router.use('/s3', s3Routes);

module.exports = router;
