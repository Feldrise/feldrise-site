import {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from '../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') return;

	const {firstName, lastName, phone, email, experience, projectTitle, projectDescription} = req.body;

	const result = await prisma.grizouContestEntry.create({
		data: {
			firstName: firstName,
			lastName: lastName,
			phone: phone,
			email: email,
			experience: experience,
			projectTitle: projectTitle,
			projectDescription: projectDescription,
		},
	});

	res.json(result);
};

export default handler;
