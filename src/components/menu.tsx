'use client';

import React from 'react';
import cx from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CalendlyButton from './calendly-button';
import Image from 'next/image';

interface IRoute {
	name: string;
	href: string;
}

const routes: IRoute[] = [
	{
		name: 'Accueil',
		href: '/',
	},
	{
		name: 'Projets',
		href: '/projects',
	},
	{
		name: 'Le Blog',
		href: '/blog',
	},
];

/**
 * The menu component
 * @return {JSX.Element} The menu
 */
export default function Menu(): JSX.Element {
	const [showSlider, setShowSlider] = React.useState<boolean>(false);

	return (
		<>
			<header
				className='fixed top-0 w-full min-h-[90px] bg-neutral py-8 flex justify-center items-center z-40'
			>
				<div className='max-w-desktop px-8 grow flex justify-between items-center'>
					<Link href="/" className="hidden 2xl:block">
						<Image src="/logo-feldrise/white-logo.svg" width={197} height={48} alt="Website's logo"/>
					</Link>
					<Link href="/" className="block 2xl:hidden">
						<Image src="/logo-feldrise/icon-white-logo.svg" width={75} height={48} alt="Website's logo"/>
					</Link>
					<div className="flex gap-8">
						<CalendlyButton />
						<button
							className="block"
							onClick={() => setShowSlider(true)}
						>
							<FontAwesomeIcon icon={faBars} className="text-4xl"/>
						</button>
					</div>
				</div>
			</header>
			<div className={cx(
				showSlider ? 'translate-x-0' : 'translate-x-full',
				'fixed top-0 right-0 min-w-[400px] h-full flex flex-col',
				'bg-neutral shadow-2xl shadow-black z-50',
				'duration-300',
			)}>
				<button
					className="w-fit px-4 py-4"
					onClick={() => setShowSlider(false)}
				>
					<FontAwesomeIcon icon={faXmark} className="text-3xl"/>
				</button>
				{routes.map((route, index) =>
					<Link href={route.href} key={index} className={cx(
						'relative !py-4 text-white text-center text-2xl hover:bg-primary',
						'after:content-[\'\'] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[90%] after:h-1',
						'after:bg-primary',
					)}
					onClick={() => setShowSlider(false)}
					>
						{route.name}
					</Link>
				)}
			</div>
		</>
	);
}
