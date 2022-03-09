import React from 'react';
import Image from 'next/image';
import NavBarBtn from '../atoms/NavBarBtn';
import {MdEmail} from 'react-icons/md';

const NavBar = () => {
	return (
		<div className="sticky top-0 py-8 flex justify-center items-center gap-20">
			<div>
				<Image src="/images/logo.svg" width={300} height={75} alt="Website's logo"/>
			</div>
			<div className="flex gap-8">
				<NavBarBtn href="/">Accueil</NavBarBtn>
				<NavBarBtn href="/">Projets</NavBarBtn>
				<NavBarBtn href="/">A propos</NavBarBtn>
			</div>
			<div>
				<NavBarBtn href="/" className="bg-primary text-white">
					Contact <MdEmail className="text-3xl"/>
				</NavBarBtn>
			</div>
		</div>
	);
};

export default NavBar;
