import '../styles/globals.css';
import type {AppProps} from 'next/app';

/**
 * The application object
 * @param {{Component, pageProps}} param0 the params for the app
 * @return {AppProps} the actual HTML app
 */
function MyApp({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
