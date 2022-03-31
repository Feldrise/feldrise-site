import type {NextPage} from 'next';
import Link from 'next/link';
import Section from '../../components/organisms/Section';
import 'swiper/css';
import 'swiper/css/navigation';
import Project from '../../components/molecules/Project';
import 'swiper/css';
import cx from 'classnames';

const Projects: NextPage = () =>
	(
		<Section className="my-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{Array.from(new Array(10)).map((_, index) => (
					<Link key={index} href="/projects/[name]" as="/projects/pluctis" passHref>
						<Project
							name="Pluctis"
							desc="Janvier 2021 - Mars 2021"
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
