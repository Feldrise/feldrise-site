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
	name: string
	images: string[];
	desc: string;
	infos?: IProjectInfo[];
	techs?: IProjectTech[];
}

export const projects: IProject[] = [
	{
		label: 'Pluctis',
		name: 'pluctis',
		images: [
			'/images/projects/pluctis.png',
			'/images/projects/pluctis.png',
			'/images/projects/pluctis.png',
		],
		desc: 'Janvier 2021 - Mars 2021',
		infos: [
			{
				name: 'Terminé',
				value: '01 avril 2022',
			},
			{
				name: 'Client',
				value: 'Pluctis Inc.',
			},
			{
				name: 'Rôle',
				value: 'Développeur fullstack',
			},
			{
				name: 'Type',
				value: 'App mobile',
			},
		],
		techs: [
			{
				name: 'Flutter & Dart',
				icon: '/images/icons/flutter.svg',
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
