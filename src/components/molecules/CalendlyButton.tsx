import {PopupButton} from 'react-calendly';
import Button from '../atoms/Button';

const Calendly = () => {
	return (
		<Button>
			<PopupButton
				url="https://calendly.com/feldrise-victor/45min?primary_color=aa33ff"
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				rootElement={document.getElementById('__next')!}
				text="Prendez rendez-vous"
			/>
		</Button>
	);
};

export default Calendly;
