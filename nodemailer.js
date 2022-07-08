var nodemailer = require('nodemailer')

let yourEmail = 'testemail@gmail.com'
let theirEmail = 'testemail@gmail.com'

let emailSubject = 'Welcome!'

let transporter = nodemailer.createTransport({
	sendmail: true,
	newline: 'unix',
	path: '/usr/sbin/sendmail',
})

transporter.sendMail(
	{
		from: yourEmail,
		to: theirEmail,
		subject: emailSubject,
		html: { path: 'dist/index.html' },
	},
	(err, info) => {
		console.log(info.envelope)
		console.log(info.messageId)
	}
)
