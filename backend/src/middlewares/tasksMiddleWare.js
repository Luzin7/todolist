const validateBody = (req, res, next) => {
	const { body } = req;

	if (body.title === undefined) {
		res.status(400).json({ message: 'title is undefined' });
	}

	if (body.title === '') {
		res.status(400).json({ message: 'title cannot bem empty' });
	}

	next();
};

const validateStatus = (req, res, next) => {
	const { body } = req;

	if (body.status === undefined) {
		res.status(400).json({ message: 'status is undefined' });
	}

	if (body.status === '') {
		res.status(400).json({ message: 'status cannot be empty' });
	}

	next();
};

module.exports = {
	validateBody,
	validateStatus,
};
