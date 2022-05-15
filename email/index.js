const { Router } = require('express');
const router = new Router();
const nodemailer = require('nodemailer');
const htmlEmail = require('./email-html')


router.post('/', (req, res) => {
	const transport = nodemailer.createTransport({
		service: 'gmail', auth: { user: process.env.EMAIL, pass: process.env.PASS }
	});
	const mailList = ['dm2developers@gmail.com', 'maicolduque01@gmail.com', 'dieguinosorio@gmail.com', 'mateoduque1040@gmail.com']
	const mailOptions = {
		from: `DM2 Developers - Web site <${req.body.email}>`,
		to: mailList,
		subject: req.body.subject,
		html: htmlEmail(req.body.email, req.body.name, req.body.message),
	};
	transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			res.status(500).json({ message: error })
		}
		res.status(200).json({ message: 'Email sent: ID: '+info.messageId })
	});
})

module.exports = router