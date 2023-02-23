import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';

interface IGrizouConsultantProps {
	author: string
	site: string
	image: string
	content: string
}

const GrizouConsultant = (props: IGrizouConsultantProps) => {
	const {author, site, image, content} = props;

	return (
		<div className='w-full flex flex-row py-2'>
			<div className='flex items-start justify-center'>
				<Image
					src={`/grizou-contest/${image}`} alt="Image d'un consultant"
					width={64} height={64}
					className='rounded-full bg-white height-full' />
			</div>
			<div className='w-full pl-8 flex flex-col gap-2'>
				<a
					href={site}
					target="_blank" rel="noreferrer"
				>
					<div className='w-full flex flex-col items-start md:flex-row md:items-center'>
						<h3 className='text-xl pr-4'>{author}</h3>
						<FontAwesomeIcon icon={faGlobe} className="text-xl text-primary"/>
					</div>
				</a>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default GrizouConsultant;
