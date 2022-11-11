import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import NavBarContext from '../../context/NavBarContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import Button from '../atoms/Button';
import Section from '../organisms/Section';
import Link from 'next/link';
import {useRouter} from 'next/router';

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
		name: 'Offres',
		href: '/offers',
	},
	{
		name: 'Le Blog',
		href: '/blog',
	},
];

const NavBar = () => {
	const router = useRouter();
	/* Define NavBar's position based on the context.
	On the landing page, for example, it had to be on top of the hero. */
	const [navBarClass, setNavBarClass] = React.useContext(NavBarContext);
	const [showSlider, setShowSlider] = React.useState<boolean>(false);

	React.useEffect(() => {
		setNavBarClass('sticky');
	}, [router.route]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Section
				className={cx(
					navBarClass,
					'w-full top-0 px- py-8 flex justify-between items-center',
					'bg-gradient-to-b from-black to-black/0 z-40'
				)}
			>
				<Link href="/" className="hidden 2xl:block">
					<Image src="/images/logo-white.svg" width={300} height={75} alt="Website's logo"/>
				</Link>
				<Link href="/" className="block 2xl:hidden">
					<Image src="/images/logo-white-small.svg" width={75} height={75} alt="Website's logo"/>
				</Link>
				<div className="hidden xl:flex px-8 gap-8">
					{routes.map((route, index) =>
						<Link href={route.href} key={index} className={cx(
							'px-7 py-2 flex justify-center items-center gap-2',
							'bg-white rounded-lg text-black text-lg font-bold text-center hover:bg-primary hover:text-white',
						)}>
							{route.name}
						</Link>
					)}
				</div>
				<div className="flex gap-8">
					<Button
						className="!bg-primary !text-white hover:!bg-primary-dark"
						onClick={() => {
							if (document.querySelector('#contact')) {
								document.querySelector('#contact')?.scrollIntoView({
									behavior: 'smooth',
									block: 'center',
								});
							} else {
								router.push('/contact');
							}
						}}
					>
						Contact <FontAwesomeIcon icon={faEnvelope} className="text-3xl"/>
					</Button>
					<button
						className="block xl:hidden"
						onClick={() => setShowSlider(true)}
					>
						<FontAwesomeIcon icon={faBars} className="text-4xl"/>
					</button>
				</div>
			</Section>
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
};

export default NavBar;
