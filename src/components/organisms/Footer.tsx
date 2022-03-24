import React from 'react';
import Section from './Section';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faFacebookF} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<Section className="py-12 flex justify-between items-center">
			<span className="text-xl">Copyright © 2022 Feldrise</span>
			<div className="flex gap-4">
				<a href="https://fr.linkedin.com/in/feldrise" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedinIn} className="text-3xl"/>
				</a>
				<a href="https://fr-fr.facebook.com/feldrisepage" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faFacebookF} className="text-3xl"/>
				</a>
			</div>
		</Section>
	);
};

export default Footer;
