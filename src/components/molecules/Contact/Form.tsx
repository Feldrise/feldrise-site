import React from 'react';
import Field from '../../atoms/Contact/Field';
import Button from '../../atoms/Button';
import FieldGroup from './FieldGroup';
import axios from 'axios';
import {FieldValues, useForm} from 'react-hook-form';

export interface IContactFormData extends FieldValues {
	fullName: string;
	society: string;
	email: string;
	phone: string;
	message: string;
}

const Form = () => {
	const {register, handleSubmit} = useForm<IContactFormData>();

	// eslint-disable-next-line @typescript-eslint/ban-types
	const onSubmit = async (data: IContactFormData) => {
		await axios.post('/api/mail', {
			email: data.email,
			message: `
			${data.fullName}\n
			${data.phone}\n\n
			${data.message}
			`,
		});
	};

	return (
		<form className="w-full p-8 flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
			<FieldGroup>
				<Field label="Nom et prénom" placeholder="Clément Tine" name="fullName" register={register} required/>
				<Field label="Société" placeholder="Microsoft" name="society" register={register} required/>
			</FieldGroup>
			<FieldGroup>
				<Field label="Mail" placeholder="clementine@gmail.com" name="email" register={register} required/>
				<Field label="Téléphone" placeholder="0666708090" name="phone" register={register} required/>
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
			<Button type="submit">Envoyer mon message</Button>
		</form>
	);
};

export default Form;
