import React, {useContext, useState} from 'react';
import Field from '../../atoms/Contact/Field';
import Button from '../../atoms/Button';
import FieldGroup from './FieldGroup';
import axios from 'axios';
import {FieldValues, useForm} from 'react-hook-form';
import {GoogleReCaptchaProvider, GoogleReCaptcha} from 'react-google-recaptcha-v3';
import NotificationContext from '../../../context/NotificationContext';

export interface IContactFormData extends FieldValues {
	fullName: string;
	society: string;
	email: string;
	phone: string;
	message: string;
}

const Form = () => {
	const {register, handleSubmit, reset} = useForm<IContactFormData>();
	const [captchaToken, setCaptchaToken] = useState<string>();

	const [, addNotification] = useContext(NotificationContext);

	// eslint-disable-next-line @typescript-eslint/ban-types
	const onSubmit = (data: IContactFormData) => {
		axios.post('/api/mail', {
			captchaToken,
			email: data.email,
			fullName: data.fullName,
			phone: data.phone,
			society: data.society,
			message: data.message,
		}).then(() => {
			addNotification('Le message a bien été envoyé.', 'success', 5000);
			reset();
		}).catch(() => {
			addNotification('Une erreur est survenue, veuillez réessayer.', 'error', 5000);
		});
	};

	const onCaptchaVerify = (token: string) => {
		setCaptchaToken(token);
	};

	return (
		<GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_SITE}>
			<form className="w-full p-8 flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
				<FieldGroup>
					<Field label="Nom et prénom" placeholder="Clément Tine" name="fullName" register={register} required/>
					<Field label="Société" placeholder="Microsoft" name="society" register={register}/>
				</FieldGroup>
				<FieldGroup>
					<Field label="Mail" placeholder="clementine@gmail.com" name="email" register={register} required/>
					<Field label="Téléphone" placeholder="0666708090" name="phone" register={register}/>
				</FieldGroup>
				<Field
					label="Le sujet de votre message"
					type="rich"
					placeholder="Bonjour, je souhaite créer une application..."
					inputClassName="min-h-[200px]"
					name="message"
					register={register}
					required
				/>
				<GoogleReCaptcha onVerify={onCaptchaVerify}/>
				<Button type="submit">Envoyer mon message</Button>
			</form>
		</GoogleReCaptchaProvider>
	);
};

export default Form;
