import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer, {Transporter} from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
// import reCaptchaMiddleware from '../../middlewares/reCaptcha';

/*
import * as fs from 'fs';
import path from 'path';

const loadTemplate = (templatePath: string, replacements?: {[key: string]: string}): string => {
	try {
		const content = fs.readFileSync(path.join(__dirname, templatePath), 'utf8');
		for (const key in replacements) {
			if (!replacements.hasOwnProperty(key)) continue; // what the hell is that

			const value = replacements[key];
			content.replaceAll(`{{${key}}}`, value);
		}
		return content;
	} catch (e) {
		console.log(e);
		return '';
	}
};
*/

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') return;
	// await reCaptchaMiddleware(req, res);

	try {
		const transport: SMTPTransport.Options = {
			host: process.env.MAIL_HOST,
			port: parseInt(process.env.MAIL_PORT || '435'),
			secure: process.env.MAIL_SECURE === 'true',
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		};
		/* if (process.env.NODE_ENV !== 'production') {
			const testMail: TestAccount = await nodemailer.createTestAccount();

			transport = {
				host: testMail.smtp.host,
				port: testMail.smtp.port,
				secure: testMail.smtp.secure,
				auth: {
					user: testMail.user,
					pass: testMail.pass,
				},
			};
		}*/

		const transporter: Transporter = nodemailer.createTransport(transport);

		/* const sentMail: SMTPTransport.SentMessageInfo = */ await transporter.sendMail({
			from: process.env.MAIL_USER,
			to: process.env.MAIL_RECEIVER,
			replyTo: `"${req.body.fullName}" <${req.body.email}>`,
			subject: `Demande de contacte de ${req.body.fullName}`,
			text: `Nom Prénom: ${req.body.fullName}\nSociété: ${req.body.society || 'N/A'}
			\nNuméro de téléphone: ${req.body.phone || 'N/A'}\n\nMessage: ${req.body.message}`,
			/*
			html: loadTemplate('templates/mail/contact.html', {
				email: req.body.email,
				fullName: req.body.fullName,
				phone: req.body.phone,
				message: req.body.email,
			}),
			*/
		});

		/* if (process.env.NODE_ENV !== 'production') {
			console.log(nodemailer.getTestMessageUrl(sentMail));
		}*/

		res.status(200);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
};

export default handler;
