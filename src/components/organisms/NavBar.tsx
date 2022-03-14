import React, {useEffect} from 'react';
import Image from 'next/image';
import NavBarBtn from '../atoms/NavBarBtn';
import {MdEmail} from 'react-icons/md';
import {useRouter} from 'next/router';
import cx from 'classnames';

const NavBar = () => {
	const router = useRouter();
	const [dynamicClass, setDynamicClass] = React.useState<string>('sticky');

	/* Define NavBar's position based on the route.
	On the landing page, for example, it had to be on top of the hero. */
	useEffect(() => {
		switch (router.route) {
		case '/':
			setDynamicClass('fixed');
			break;
		default:
			setDynamicClass('sticky');
			break;
		}
	}, [router.route]);

	return (
		<div className={cx(
			dynamicClass,
			'w-full top-0 py-8 flex justify-center items-center gap-20'
		)}>
			<div>
				<Image src="/images/logo.svg" width={300} height={75} alt="Website's logo"/>
			</div>
			<div className="flex gap-8">
				<NavBarBtn href="/">Accueil</NavBarBtn>
				<NavBarBtn href="/">Projets</NavBarBtn>
				<NavBarBtn href="/">A propos</NavBarBtn>
			</div>
			<div>
				<NavBarBtn href="/" className="bg-primary text-white hover:bg-primary-dark">
					Contact <MdEmail className="text-3xl"/>
				</NavBarBtn>
			</div>
		</div>
	);
};

export default NavBar;
