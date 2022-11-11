import type {NextPage} from 'next';
import Link from 'next/link';
import Section from '../../components/organisms/Section';
import 'swiper/css';
import 'swiper/css/navigation';
import Project from '../../components/molecules/Project';
import 'swiper/css';
import cx from 'classnames';
import Head from 'next/head';
import Contact from '../../components/organisms/Contact';

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
		desc: 'La plateforme d\'aide au déménagement et services liés.',
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
		<>
			<Head>
				<title>Feldrise - Les projets accompangés</title>
				<meta
					name="description"
					content="Vous trouverez une liste de projets que Feldrise a pu accompanger jusqu'a présent."
				/>

				<meta property="og:title" content="Feldrise - La solution CTO en Bretagne" />
				<meta
					property="og:description"
					content="Vous trouverez une liste de projets que Feldrise a pu accompanger jusqu'a présent."
				/>
				<meta property="og:url" content="https://feldrise.com" />
				<meta property="og:image" content="https://feldrise.com/images/logo-white-small.png" />
			</Head>
			<Section className="my-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<h1 className='hidden'>Les projets accompagnés par Feldrise</h1>
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
			<Contact/>
		</>
	);

export default Projects;
