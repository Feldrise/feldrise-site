import React, {useContext, useEffect} from 'react';
import type {NextPage} from 'next';
import Image from 'next/image';
import cx from 'classnames';
import NavBarContext from '../context/NavBarContext';
import Section from '../components/organisms/Section';
import ValueBanner from '../components/organisms/ValueBanner';
import Button from '../components/atoms/Button';
import Highlight from '../components/atoms/Highlight';
import PortraitImage from '../components/atoms/PortraitImage';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation} from 'swiper';
import 'swiper/css/navigation';
import Card from '../components/atoms/Offers/Card';

const Home: NextPage = () => {
	const [, setNavBarClass] = useContext(NavBarContext);

	useEffect(() => {
		// Set the NavBar to fixed specially for this page.
		setNavBarClass('fixed');
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="flex flex-col">
			<div className="relative h-screen bg-hero bg-right lg:bg-cover">
				<div className={cx(
					'absolute top-1/2 left-0 -translate-y-1/2 p-12 flex flex-col gap-6',
					'bg-white rounded-r-2xl shadow-lg shadow-black/30 text-black'
				)}>
					<div className="relative w-full h-[75px]">
						<Image src="/images/logo-dark.svg" layout="fill" objectFit="contain" objectPosition="left" alt="Hero's background"/>
					</div>
					<div>
						<span className="mr-6 font-bold text-4xl">Digital Agency</span>
						<span className="italic text-2xl">basée à Rennes</span>
					</div>
					<Button className="text-white" href="/offers">Voir les offres</Button>
				</div>
			</div>
			<div className="py-8 flex flex-col gap-20">
				<Section>
					<p className="leading-10 mb-8">
						L&apos;agence dispose d&apos;un panel de connaissances étendues<br/>
						et de <Highlight>6 années d&apos;expériences</Highlight>{' '}
						sur de nombreux projets,<br/>ce qui en fait une référence dans le milieu.
					</p>
					<div className="py-4 flex flex-col lg:flex-row items-center lg:items-start gap-7">
						<Card
							mesh="torus"
							content={(
								<>
									<div>
										<h3 className="mb-2 text-center">Petit Audit</h3>
										<p>
											Feldrise se propose d&apos;intervenir pendant quelques jours afin de vous aider à voir
											plus clair dans les perspéctives d&apos;évolutions de votre projet
										</p>
									</div>
									<Button className="!w-full my-4 px-0" href="/offers#offer1">
										Voir l&apos;offre
									</Button>
								</>
							)}
						/>
						<Card
							mesh="cylinder"
							content={(
								<>
									<div>
										<h3 className="mb-2 text-center">Grand Accompagnement</h3>
										<p>
											Parce que nous sommes convaincu de l&apos;intérêt d&apos;internaliser votre équipe,
											nous vous accompagnons dans toutes les étapes de ce processus.
										</p>
									</div>
									<Button className="!w-full my-4 px-0" href="/offers#offer2">
										Voir l&apos;offre
									</Button>
								</>
							)}
						/>
					</div>
				</Section>
				<Section className="flex flex-col items-center">
					<ValueBanner
						className="py-28"
						values={[
							{
								image: '/images/icons/flutter.svg',
								text: 'Flutter & Dart',
							},
							{
								image: '/images/icons/flutter.svg',
								text: 'Flutter & Dart',
							},
							{
								image: '/images/icons/flutter.svg',
								text: 'Flutter & Dart',
							},
							{
								image: '/images/icons/flutter.svg',
								text: 'Flutter & Dart',
							},
							{
								image: '/images/icons/flutter.svg',
								text: 'Flutter & Dart',
							},
						]}
					/>
					<div className="flex flex-col md:flex-row gap-8">
						<PortraitImage className="hidden lg:block"/>
						<div className="flex flex-col justify-center gap-4">
							<p className="leading-10">
								Chez Feldrise, les maîtres mots sont{' '}
								<Highlight>bienveillance, écoute et tolérance.</Highlight>
								<br/>Le client doit pouvoir se sentir à l’aise, compris et comprendre immédiament l&apos;interêt de passer par nous.
							</p>
							<Button>A propos de Feldrise</Button>
						</div>
					</div>
				</Section>
				<Section>
					<div className="relative">
						<Swiper
							modules={[Navigation, Autoplay]}
							spaceBetween={50}
							navigation={{
								nextEl: '.nextSwipe',
								prevEl: '.prevSwipe',
							}}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
							}}
							loop={true}
						>
							{[0, 1].map((review, index) => (
								<SwiperSlide key={index}>
									<div className="h-full flex justify-center items-center gap-4">
										<div className="p-12 col-span-2 rounded-2xl bg-white text-black">
											<Image src="/images/icons/microsoft.png" width={180} height={40} alt="Logo de microsoft"/>
											<p className="my-8">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Dictum pretium morbi varius nisi aliquet amet lorem. Arcu,
												pellentesque ullamcorper interdum aliquet leo viverra.
											</p>
											<p>Martin Matin, CEO de Microsoft</p>
										</div>
										<PortraitImage className="hidden lg:block"/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<button className="prevSwipe absolute top-1/2 -translate-y-1/2 -translate-x-20">
							<FontAwesomeIcon icon={faChevronLeft} className="text-3xl text-secondary"/>
						</button>
						<button className="nextSwipe absolute top-1/2 right-0 -translate-y-1/2 translate-x-20">
							<FontAwesomeIcon icon={faChevronRight} className="text-3xl text-secondary"/>
						</button>
					</div>
				</Section>
			</div>
		</div>
	);
};

export default Home;
