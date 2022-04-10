import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import NavBar from '../components/organisms/NavBar';
import NavBarContext from '../context/NavBarContext';
import Footer from '../components/organisms/Footer';
import Contact from '../components/organisms/Contact';
import NotificationContext, {INotification, NotificationType} from '../context/NotificationContext';
import Notifications from '../components/organisms/Notifications';

/**
 * The application object
 * @param {{Component, pageProps}} param0 the params for the app
 * @return {AppProps} the actual HTML app
 */
const MyApp = ({Component, pageProps}: AppProps) => {
	const [navBarClass, setNavBarClass] = React.useState<string>('');
	const [notifications, setNotifications] = React.useState<INotification[]>([]);

	const addNotification = (message: string, type: NotificationType, duration: number) => {
		const notification = {
			id: Math.floor((Math.random() * 101) + 1),
			message,
			type,
			duration,
		};

		setNotifications((prev) => [...prev, notification]);
		setTimeout(() => {
			setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
		}, duration);
	};

	return <NotificationContext.Provider value={[notifications, addNotification]}>
		<NavBarContext.Provider value={[navBarClass, setNavBarClass]}>
			<Notifications/>
			<NavBar/>
			<Component {...pageProps} />
			<Contact/>
			<Footer/>
		</NavBarContext.Provider>
	</NotificationContext.Provider>;
};

export default MyApp;
