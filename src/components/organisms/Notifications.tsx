import React, {useContext} from 'react';
import NotificationContext, {INotification} from '../../context/NotificationContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

const Notifications = () => {
	const [notifications] = useContext(NotificationContext);

	return (
		<div className="fixed top-0 left-0 w-full h-full flex flex-col-reverse pointer-events-none z-50">
			{notifications.map((notification: INotification) => (
				<div
					key={notification.id}
					className={cx(
						'relative max-w-[400px] p-4 m-4 flex items-center gap-4',
						'bg-white text-black text-sm font-semibold rounded-lg shadow-lg overflow-hidden animate-slide-in',
					)}
				>
					{notification.type === 'success' && <FontAwesomeIcon icon={faCircleCheck} className="text-lg text-green-500" />}
					{notification.type === 'error' && <FontAwesomeIcon icon={faCircleXmark} className="text-lg text-red-500" />}
					<span>{notification.message}</span>
					<div
						className={cx(
							'absolute bottom-0 left-0 w-full h-[6px]',
							notification.type == 'success' && 'bg-green-500',
							notification.type == 'error' && 'bg-red-500',
						)}
						style={{
							animation: `progressDown ${notification.duration}ms linear infinite`,
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default Notifications;
