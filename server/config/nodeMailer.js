const nodemailer = require('nodemailer');
const emailPassword = process.env.EMAIL_PASSWORD;
const emailAddress = process.env.EMAIL_ADDRESS;

const transporter = nodemailer.createTransport({
	port: 465,
	host: 'smtp.gmail.com',
	auth: {
		user: emailAddress,
		pass: emailPassword,
	},
	secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

module.exports = transporter;
