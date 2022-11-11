import Image from 'next/image';
import dynamic from 'next/dynamic';
import {CONTACT_MAIL} from '../../../constants/app';

const Calendly = dynamic(() => import('../CalendlyButton'), {
	ssr: false,
});


const SideBar = () => {
	return (
		<>
			<div className='flex flex-col items-center text-center'>
				<div className='rounded-full border border-8 border-primary w-[128px] h-[128px]'>
					<Image
						src='/images/logo-dark-small.png'
						alt='Logo de Feldrise'
						width={128} height={128} />
				</div>
				<div className='h-4' />

				<p>Vous souhaitez allez plus loin ? Nous sommes là pour répondre à vos problématiques.</p>
				<div className='h-6' />
				<Calendly />

				<div className='h-2' />
				<a className='text-secondary' href={`mailto:${CONTACT_MAIL}`}>Ou nous envoyer un message</a>
			</div>
		</>
	);
};

export default SideBar;
