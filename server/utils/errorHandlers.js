const path = require('path');
const BUILD_PATH = path.resolve('../../client');

const handle404Error = (req, res, next) => {
	res.sendFile(path.resolve(BUILD_PATH, 'index.html'));
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
};

const handleErrors = (err, req, res, next) => {
	res.status(err.status || 500);
	next(err);
	res.json({
		error: {
			message: err.message,
		},
	});
};

module.exports = {
	handle404Error,
	handleErrors,
};
