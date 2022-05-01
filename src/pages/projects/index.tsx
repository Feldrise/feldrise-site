import type {NextPage} from 'next';
import Link from 'next/link';
import Section from '../../components/organisms/Section';
import 'swiper/css';
import 'swiper/css/navigation';
import Project from '../../components/molecules/Project';
import 'swiper/css';
import cx from 'classnames';

interface IProjectInfo {
	name: string;
	value: string;
}

interface IProjectTech {
	name: string;
	icon: string;
}

interface IProject {
	label: string;
	name: string;
	url: string;
	images: string[];
	desc: string;
	infos?: IProjectInfo[];
	techs?: IProjectTech[];
}

export const projects: IProject[] = [
	{
		label: 'MyDemenageur',
		name: 'mydemenageur',
		url: 'https://mydemenageur.com',
		images: [
			'/images/projects/mydemenageur/main.webp',
			'/images/projects/mydemenageur/1.webp',
			'/images/projects/mydemenageur/2.webp',
		],
		desc: 'La plateform d\'aide au déménagements et services liés.',
		infos: [
			{
				name: 'Client',
				value: 'SOLID\'R (MyDemenageur & MyJugaad)',
			},
			{
				name: 'Rôle',
				value: 'Développeur fullstack & CTO',
			},
			{
				name: 'Type',
				value: 'Plateform complête',
			},
		],
		techs: [
			{
				name: 'Flutter & Dart',
				icon: '/images/icons/flutter.svg',
			},
			{
				name: 'NextJS',
				icon: '/images/icons/nextjs.svg',
			},
			{
				name: '.NET Core 5',
				icon: '/images/icons/netcore.svg',
			},
		],
	},
];

const Projects: NextPage = () =>
	(
		<Section className="my-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<Link key={project.name} href="/projects/[name]" as={`/projects/${project.name}`} passHref>
						<Project
							name={project.label}
							image={project.images[0]}
							desc={project.desc}
							className={cx(
								index % 2 !== 0 && 'mt-20',
							)}
						/>
					</Link>
				))}
			</div>
		</Section>
	);

export default Projects;
