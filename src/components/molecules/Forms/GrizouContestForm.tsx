import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {useContext} from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import NotificationContext from '../../../context/NotificationContext';
import Button from '../../atoms/Button';
import Field from '../../atoms/Forms/GrizouContestField';
import FieldGroup from './FieldGroup';

export interface IGrizouContestEntry extends FieldValues {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	experience: string
	projectTitle: string
	projectDescription: string
}

interface IGrizouContestFormProps {
	onSuccess: () => void;
}

const GrizouContestForm = (props: IGrizouContestFormProps) => {
	const {onSuccess} = props;

	const {register, handleSubmit, reset} = useForm<IGrizouContestEntry>();

	const [, addNotification] = useContext(NotificationContext);

	const onSubmit = (data: IGrizouContestEntry) => {
		axios.post('/api/grizou-contest', {
			firstName: data.firstName,
			lastName: data.lastName,
			phone: data.phone,
			email: data.email,
			experience: data.experience,
			projectTitle: data.projectTitle,
			projectDescription: data.projectDescription,
		}).then(() => {
			addNotification('Votre participation a bien été enregistrée.', 'success', 5000);
			onSuccess();
			reset();
		}).catch(() => {
			addNotification('Une erreur est survenue, veuillez réessayer', 'error', 5000);
		});
	};

	return (
		<form className='w-full flex flex-col justify-center items-center gap-4' onSubmit={handleSubmit(onSubmit)}>
			<div className='w-full py-4 px-4 mb-6 bg-amber-500 rounded-xl text-black font-bold text-center'>
				<p className='uppercase'>
					<FontAwesomeIcon className='text-2xl' icon={faCalendar} />{'  '}
					Vous avez jusqu&apos;au 15 janvier pour remplir le formulaire{'  '}
					<FontAwesomeIcon className='text-2xl' icon={faCalendar} />
				</p>
			</div>
			<FieldGroup>
				<Field label='Nom' placeholder='Clément' name='lastName' register={register} required/>
				<Field label='Prénom' placeholder='Tine' name='firstName' register={register} required/>
			</FieldGroup>
			<FieldGroup>
				<Field label='Téléphone' placeholder='0601020304' name='phone' register={register} required/>
				<Field label='Email' placeholder='clementine@mail.com' name='email' type='email' register={register} required/>
			</FieldGroup>
			<Field label='Titre du projet' placeholder='Le projet du siecle' name='projectTitle' register={register} required/>
			<Field
				label='Décrivez votre expérience'
				type='rich'
				placeholder="J'ai x expérience qui m'a permis x"
				inputClassName='min-h-[100px]'
				name='experience'
				register={register}
				required
			/>
			<Field
				label='Décrivez nous votre projet'
				type='rich'
				placeholder="Mon projet consiste à..."
				inputClassName='min-h-[240px]'
				name='projectDescription'
				register={register}
				required
			/>
			<Button type='submit'>Participer au concours</Button>
		</form>
	);
};

export default GrizouContestForm;

