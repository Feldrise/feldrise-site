import type {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';

interface ICaptchaResponse {
    success: boolean;
}

const middleware = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const response: ICaptchaResponse = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
			secret: process.env.CAPTCHA_SECRET,
			response: req.body.captchaToken,
		});
		console.log(req.body.captchaToken);

		if (!response.success) {
			res.send(401);
		}
	} catch (e) {
		res.status(500);
	}
};

export default middleware;
