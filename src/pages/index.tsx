import {useContext, useEffect} from 'react';
import type {NextPage} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import NavBarContext from '../context/NavBarContext';

const Home: NextPage = () => {
	const [, setNavBarClass] = useContext(NavBarContext);

	useEffect(() => {
		// Set the NavBar to fixed specially for this page.
		setNavBarClass('fixed');
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<section className="relative h-screen bg-hero">
				<div className={cx(
					'absolute top-1/2 left-0 -translate-y-1/2 p-12 flex flex-col gap-6',
					'bg-white rounded-r-2xl shadow-lg shadow-black/30 text-black'
				)}>
					<div className="relative w-full h-[75px]">
						<Image src="/images/logo-dark.svg" layout="fill" objectFit="contain" objectPosition="left" alt="Hero's background"/>
					</div>
					<div>
						<span className="mr-6 font-bold text-4xl">Digital Agency</span>
						<span className="italic text-2xl">basée à Rennes</span>
					</div>
					<Link href="/">
						<a className={cx(
							'w-fit px-8 py-4',
							'rounded-lg bg-primary font-medium text-white text-2xl hover:bg-primary-dark transition-colors'
						)}>Voir les projets</a>
					</Link>
				</div>
			</section>
			<section className="container lg:px-section-lg py-8 flex items-center">
				<p className="text-2xl leading-10">
					L&apos;agence dispose d&apos;un pannel de connaissances étendues<br/>
					et de <span className="relative px-4 py-2 bg-secondary">6 années d&apos;expériences</span>{' '}
                    sur de nombreux projets,<br/>ce qui en fait une référence dans le milieu.
				</p>
			</section>
		</div>
	);
};

export default Home;
