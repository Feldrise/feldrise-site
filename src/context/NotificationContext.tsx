import {createContext} from 'react';

export type NotificationType = 'success' | 'error';

export interface INotification {
	id: number;
	message: string;
	type: NotificationType;
	duration: number;
}

type State = [
    INotification[],
	(message: string, type: NotificationType, timeout: number) => void,
];

const NotificationContext = createContext<State>([[], () => {
	return;
}]);

export default NotificationContext;
