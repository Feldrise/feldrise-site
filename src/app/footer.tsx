import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faFacebookF} from '@fortawesome/free-brands-svg-icons';

/**
 * The footer compononent
 * @return {JSX.Element} The footer
 */
export default function Footer(): JSX.Element {
	return (
		<footer className="w-full max-w-desktop py-12 flex justify-between items-center">
			<span className="text-xl">
				Copyright © 2022 <span className='text-primary'>Feldrise</span>
				&nbsp;x&nbsp;
				<a className='text-secondary' href="https://suiramdev.com/" rel="noreferrer" target="_blank">suiramdev</a></span>
			<div className="flex gap-4">
				<a href="https://fr.linkedin.com/in/feldrise" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedinIn} className="text-3xl"/>
				</a>
				<a href="https://fr-fr.facebook.com/feldrisepage" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faFacebookF} className="text-3xl"/>
				</a>
			</div>
		</footer>
	);
}
