const router = require('express').Router();
const { getFile } = require('../../controllers/s3Controller');

router.route('/:key').get(
	// (req, res) => {
	// 	console.log('hi');
	// 	res.send('hi');
	// });
	getFile
);

module.exports = router;
