import '../styles/globals.css';
import type {AppProps} from 'next/app';
import NavBar from '../components/organisms/NavBar';

/**
 * The application object
 * @param {{Component, pageProps}} param0 the params for the app
 * @return {AppProps} the actual HTML app
 */
function MyApp({Component, pageProps}: AppProps) {
	return <>
		<NavBar/>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
