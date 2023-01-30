'use client';

import {PopupButton} from 'react-calendly';
import cx from 'classnames';

interface ICalendlyButtonProps {
	className?: string;
    buttonStyle?: 'primary' | 'secondary';
}

/**
 * The button to make an appointment
 * @param {ICalendlyButtonProps} props The props of the button
 * @return {JSX.Element} The button to make an appointment
 */
export default function CalendlyButton(props: ICalendlyButtonProps): JSX.Element {
	let className = cx(
		'w-fit px-8 py-2 duration-300 rounded-md text-xl text-center',
		props.className
	);

	if (props.buttonStyle == 'secondary') {
		className += ' bg-white text-primary hover:bg-primary-dark hover:text-white';
	} else {
		className += ' bg-primary hover:bg-primary-dark';
	}

	return (
		<div className={className}>
			<PopupButton
				url="https://calendly.com/feldrise-victor/45min?primary_color=aa33ff"
				rootElement={document.body}
				text="Prendre rendez-vous"
			/>
		</div>
	);
}
