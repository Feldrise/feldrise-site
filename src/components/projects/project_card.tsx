import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface IProjectCardProps {
	image: string
	projectTitle: string
	site: string
	color: string
	textColor: string
}

/**
 * The card for a project
 * @param {IProjectCardProps} props Informations about the project
 * @return {JSX.Element} The component for the project's card
 */
export default function ProjectCard(props: IProjectCardProps): JSX.Element {
	const className = cx(
		'w-full px-8 py-2 duration-300 rounded-md text-xl text-center',
		props.color, props.textColor
	);

	return (
		<div className="grow flex flex-col max-w-[500px] items-center gap-4 p-4 rounded-md bg-white">
			<Image
				src={props.image}
				alt={props.projectTitle}
				width={739} height={200} />

			<Link className={className} href={props.site} target='_blank'>
				Voir le site
			</Link>
		</div>
	);
}
