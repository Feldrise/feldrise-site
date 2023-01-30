import CalendlyButton from '@/components/calendly-button';
import {CONTACT_MAIL} from '@/constants/app';
import Image from 'next/image';

const SideBar = () => {
	return (
		<>
			<div className='flex flex-col items-center text-center'>
				<div className='rounded-full border border-8 border-primary w-[128px] h-[128px]'>
					<Image
						src='/logo-feldrise/icon-white-logo.svg'
						alt='Logo de Feldrise'
						width={128} height={128} />
				</div>
				<div className='h-4' />

				<p>Vous souhaitez allez plus loin ? Nous sommes là pour répondre à vos problématiques.</p>
				<div className='h-6' />
				<CalendlyButton />

				<div className='h-2' />
				<a className='text-secondary' href={`mailto:${CONTACT_MAIL}?subject=Demande de contact depuis le site`}>Ou nous envoyer un message</a>
			</div>
		</>
	);
};

export default SideBar;
