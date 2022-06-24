import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const ContactButton = () =>
	<Button
		className="h-fit !bg-primary !text-white hover:!bg-primary-dark"
		onClick={() => document.querySelector('#contact')?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		})}
	>
		Contact <FontAwesomeIcon icon={faEnvelope} className="text-3xl"/>
	</Button>;

export default ContactButton;
