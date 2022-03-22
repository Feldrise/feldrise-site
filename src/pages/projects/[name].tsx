import type {NextPage} from 'next';
import Section from '../../components/organisms/Section';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import NavIndicator from '../../components/NavIndicator';
import {useRouter} from 'next/router';
import Infos from '../../components/atoms/Projects/Infos';
import Image from 'next/image';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';

const Home: NextPage = () => {
	const router = useRouter();
	const projectName = router.query.name ? router.query.name.toString() : 'N/A';

	return (
		<>
			<Section className="py-8">
				<NavIndicator navs={[
					'Feldrise',
					'Projets',
					projectName,
				]}/>
			</Section>
			<Section className="my-12 flex flex-col md:flex-row justify-between gap-20">
				<div className="flex flex-col justify-between">
					<div>
						<h1>{projectName}</h1>
						<Infos
							className="my-4"
							content={[
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
							]}
						/>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold">Technos utilisées</h2>
						<div className="flex gap-2">
							{[0, 1, 2].map((value) =>
								<div
									className="w-[125px] p-4 flex flex-col justify-between gap-4 bg-white rounded-2xl text-sm text-black text-center"
									key={value}
								>
									<div className="relative w-full h-full flex justify-center items-center">
										<Image src="/images/icons/flutter.svg" width={32} height={32} alt="Technologie flutter"/>
									</div>
									<span>Flutter & Dart</span>
								</div>
							)}
						</div>
						<a className="text-3xl text-secondary hover:text-primary duration-300">Voir l&apos;app</a>
					</div>
				</div>
				<Swiper
					pagination={{
						el: '.pagination',
						clickable: true,
						renderBullet: (index, className) => {
							return `
								<button class="relative w-[125px] h-[75px] rounded-xl overflow-hidden ${className}">
									<Image src="/images/hero.png" layout="fill" alt="Image exemple phare"/>
								</button>
							`;
						},
					}}
					modules={[Pagination]}
					className="flex-1 flex flex-col gap-4"
				>
					{[0, 1, 2].map((value) =>
						<SwiperSlide className="rounded-2xl overflow-hidden" key={value}>
							<Image src="/images/hero.png" layout="fill" alt="Image exemple phare"/>
						</SwiperSlide>
					)}
					<div className="pagination flex justify-center gap-4"/>
				</Swiper>
			</Section>
		</>
	);
};

export default Home;
