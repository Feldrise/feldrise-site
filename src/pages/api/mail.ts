import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer, {TestAccount, Transporter} from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') return;

	try {
		const testMail: TestAccount = await nodemailer.createTestAccount();

		const transporter: Transporter = nodemailer.createTransport({
			host: testMail.smtp.host,
			port: testMail.smtp.port,
			secure: testMail.smtp.secure,
			auth: {
				user: testMail.user,
				pass: testMail.pass,
			},
		});

		const sentMail: SMTPTransport.SentMessageInfo = await transporter.sendMail({
			from: req.body.email,
			to: 'suiramdev.official@gmail.com',
			subject: 'Message du portfolio',
			text: req.body.message,
		});
		console.log(nodemailer.getTestMessageUrl(sentMail));

		res.status(200);
	} catch (e) {
		res.status(500).send(e);
	}
};

export default handler;
