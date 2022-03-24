import React from 'react';
import Section from './Section';
import Form from '../molecules/Contact/Form';

const Contact = () => {
	return (
		<Section
			className="py-8 flex flex-col justify-center items-center" style={{
				backgroundImage: 'url("/images/cat-background.svg")',
				backgroundSize: 'cover',
			}}
			id="contact"
		>
			<h2 className="px-8 py-4 bg-primary rounded-lg text-2xl text-center">
				Vous avez un projet ? Nous serons ravis d’en parler avec vous !
			</h2>
			<Form/>
		</Section>
	);
};

export default Contact;
