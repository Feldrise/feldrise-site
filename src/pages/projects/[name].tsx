import type {NextPage} from 'next';
import Section from '../../components/organisms/Section';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import NavIndicator from '../../components/atoms/NavIndicator';
import {useRouter} from 'next/router';
import Infos from '../../components/atoms/Projects/Infos';
import Image from 'next/image';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import {projects} from './index';

const Project: NextPage = () => {
	const router = useRouter();
	const projectName = router.query.name ? router.query.name.toString() : 'N/A';
	const project = projects.find((project) => project.name === projectName);

	return (
		<>
			<Section className="py-8">
				<NavIndicator navs={[
					'Feldrise',
					'Projets',
					project?.label || 'N/A',
				]}/>
			</Section>
			<Section className="my-12 flex flex-col md:flex-row justify-between gap-20">
				<div className="flex flex-col justify-between gap-8">
					<div>
						<h1>{project?.label || 'N/A'}</h1>
						{project?.infos && <Infos className="my-4" content={project.infos}/>}
					</div>
					{project?.techs &&
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Technos utilisées</h2>
							<div className="flex gap-2">
								{project.techs.map((project, index) =>
									<div
										className="w-[125px] p-4 flex flex-col justify-between gap-4 bg-white rounded-2xl text-sm text-black text-center"
										key={index}
									>
										<div className="relative w-full h-full flex justify-center items-center">
											<Image src={project.icon} width={32} height={32} alt={`Technologie ${project.name}`}/>
										</div>
										<span>{project.name}</span>
									</div>
								)}
							</div>
							<a className="text-3xl text-secondary hover:text-primary duration-300" href={project.url} target="_blank" rel="noreferrer">
								Site du projet
							</a>
						</div>
					}
				</div>
				{project?.images &&
					<Swiper
						pagination={{
							el: '.pagination',
							clickable: true,
							renderBullet: (index, className) => `
								<button class="relative w-[125px] h-[75px] rounded-xl overflow-hidden ${className}">
									<Image src="${project.images[index]}" layout="fill" alt="Image exemple phare"/>
								</button>
							`,
						}}
						modules={[Pagination]}
						className="flex-1 flex flex-col gap-4"
					>
						{project.images.map((value, index) =>
							<SwiperSlide className="rounded-2xl overflow-hidden" key={index}>
								<Image src={value} layout="fill" alt="Image exemple phare"/>
							</SwiperSlide>
						)}
						<div className="pagination flex justify-center gap-4"/>
					</Swiper>
				}
			</Section>
		</>
	);
};

export default Project;
