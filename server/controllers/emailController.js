require('dotenv').config();
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

const emailController = {
	sendTextEmail(req, res) {
		const sendTo = req.params.email
		const mailData = {
			from: emailAddress,
			to: sendTo,
			subject: "You forgot your password",
			text: "That really sucks for you! HaHa!",
		};

		transporter.sendMail(mailData, (error, info) => {
			if (error) {
				return console.log(error);
			}
			res.status(200).send({ message: 'Mail send', message_id: info.messageId });
		});
	},

	sendAttachmentEmail(req, res) {
		const { to, subject, text } = req.body;
		const mailData = {
			from: emailAddress,
			to: to,
			subject: subject,
			text: text,
			html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
			attachments: [
				{
					// file on disk as an attachment
					filename: 'nodemailer.png',
					path: 'nodemailer.png',
				},
				{
					// file on disk as an attachment
					filename: 'text_file.txt',
					path: 'text_file.txt',
				},
			],
		};

		transporter.sendMail(mailData, (error, info) => {
			if (error) {
				return console.log(error);
			}
			res.status(200).send({ message: 'Mail send', message_id: info.messageId });
		});
	},
};

module.exports = emailController;
