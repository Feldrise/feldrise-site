import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer, {Transporter} from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import ConcoursGrizouMailTemplate from '../../../emails/concours-grizou.html';
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

		/* const sentMail: SMTPTransport.SentMessageInfo = */
		await transporter.sendMail({
			from: process.env.MAIL_USER,
			to: req.body.email,
			replyTo: `"${process.env.MAIL_NAME}" <${process.env.MAIL_USER}>`,
			subject: `Participation au concours Grizou`,
			text: `Bonjour ${req.body.name} !\n
			Merci pour votre participation au concours ! Pour aller plus loin, nous avons besoins que vous repondiez à ce questionnaire : 
			https://3g9wwgz3rgx.typeform.com/to/fXpEtCxz`,
			html: ConcoursGrizouMailTemplate.replaceAll('{{fullname}}', req.body.name),
		});

		/* if (process.env.NODE_ENV !== 'production') {
			console.log(nodemailer.getTestMessageUrl(sentMail));
		}*/

		res.status(200).send('ok');
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
};

export default handler;
