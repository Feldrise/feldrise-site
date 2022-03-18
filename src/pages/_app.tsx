import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import NavBar from '../components/organisms/NavBar';
import NavBarContext from '../context/NavBarContext';
import Footer from '../components/organisms/Footer';

/**
 * The application object
 * @param {{Component, pageProps}} param0 the params for the app
 * @return {AppProps} the actual HTML app
 */
const MyApp = ({Component, pageProps}: AppProps) => {
	const [navBarClass, setNavBarClass] = React.useState<string>('sticky');

	return <NavBarContext.Provider value={[navBarClass, setNavBarClass]}>
		<NavBar/>
		<Component {...pageProps} />
		<Footer/>
	</NavBarContext.Provider>;
};

export default MyApp;
