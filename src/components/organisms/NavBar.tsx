import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBarBtn from '../atoms/NavBarBtn';

const NavBar = () => {
	return (
		<div className="px-28 py-8 flex justify-between">
			<Link href="/">
				<a>
					<Image src="/images/logo-surrounded.svg" alt="Website's logo" width={115} height={115}
						className="hover:cursor-pointer"/>
				</a>
			</Link>
			<div className="flex items-center gap-8">
				<NavBarBtn href="#">Projets</NavBarBtn>
				<NavBarBtn href="#">À propos</NavBarBtn>
				<NavBarBtn href="#">Contact</NavBarBtn>
			</div>
			<Link href="#">
				<a>
					<Image src="/images/icons/letter.svg" alt="Contact button's logo" width={115} height={115}
						className="hover:cursor-pointer"/>
				</a>
			</Link>
		</div>
	);
};

export default NavBar;
