import React from 'react';
import Image from 'next/image';
import NavLink from '../atoms/NavBar/NavLink';
import {MdEmail} from 'react-icons/md';
import cx from 'classnames';
import NavBarContext from '../../context/NavBarContext';

const NavBar = () => {
	/* Define NavBar's position based on the context.
	On the landing page, for example, it had to be on top of the hero. */
	const [navBarClass] = React.useContext(NavBarContext);

	return (
		<div className={cx(
			navBarClass,
			'w-full top-0 py-8 flex justify-center items-center gap-20'
		)}>
			<div>
				<Image src="/images/logo-white.svg" width={300} height={75} alt="Website's logo"/>
			</div>
			<div className="flex gap-8">
				<NavLink href="/">Accueil</NavLink>
				<NavLink href="/">Projets</NavLink>
				<NavLink href="/">A propos</NavLink>
			</div>
			<div>
				<NavLink href="/" className="bg-primary text-white hover:bg-primary-dark">
					Contact <MdEmail className="text-3xl"/>
				</NavLink>
			</div>
		</div>
	);
};

export default NavBar;
