import {useContext, useEffect} from 'react';
import type {NextPage} from 'next';
import NavBarContext from '../context/NavBarContext';

const Home: NextPage = () => {
	const [, setNavBarClass] = useContext(NavBarContext);

	useEffect(() => {
		// Set the NavBar to fixed specially for this page.
		setNavBarClass('fixed');
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
		</div>
	);
};

export default Home;
