import React, {FormEvent} from 'react';
import Field from '../../atoms/Contact/Field';
import Button from '../../atoms/Button';
import FieldGroup from './FieldGroup';

const Form = () => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<form className="w-full p-8 flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
			<FieldGroup>
				<Field name="Nom et prénom" placeholder="Clément Tine" required/>
				<Field name="Société" placeholder="Microsoft" required/>
			</FieldGroup>
			<FieldGroup>
				<Field name="Mail" placeholder="clementine@gmail.com" required/>
				<Field name="Téléphone" placeholder="0666708090" required/>
			</FieldGroup>
			<Field
				name="Le sujet de votre message" type="rich"
				placeholder="Bonjour, je souhaite créer une application..."
				inputClassName="min-h-[200px]"
				required
			/>
			<Button type="submit">Envoyer mon message</Button>
		</form>
	);
};

export default Form;
