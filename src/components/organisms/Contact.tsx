import React from 'react';
import Section from './Section';
import dynamic from 'next/dynamic';
import {CONTACT_MAIL} from '../../constants/app';

const Calendly = dynamic(() => import('../molecules/CalendlyButton'), {
	ssr: false,
});

const Contact = () => {
	return (
		<Section
			className="py-8 flex flex-col justify-center items-center" style={{
				backgroundImage: 'url("/images/cat-background.svg")',
				backgroundSize: 'cover',
			}}
			id="contact"
		>
			{/* <h2 className="px-8 py-4 bg-primary rounded-lg text-2xl text-center">
				Vous avez un projet ? Nous serons ravis d’en parler avec vous !
			</h2>
			<Form/> */}
			<div className='bg-neutral w-full flex flex-col items-center justify-center text-center border border-secondary rounded-2xl py-16 px-8 md:px-16'>
				<h2 className='text-xl'>Vous avez un projet ? Nous serons ravis d’en parler avec vous !</h2>
				<div className='h-16' />
				<Calendly />

				<div className='h-2' />
				<a className='text-secondary' href={`mailto:${CONTACT_MAIL}`}>Ou nous envoyer un message</a>
			</div>
		</Section>
	);
};

export default Contact;
