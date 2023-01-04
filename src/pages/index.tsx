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
import Head from 'next/head';
import Contact from '../components/organisms/Contact';

interface IReview {
	author: string;
	company: string;
	content: string;
	profilePicture?: string;
}

const reviews: IReview[] = [
	{
		author: 'Galien',
		company: 'Capago',
		content: `Nous avons travaillé avec Victor pour le développement de notre application.
				  Il a su répondre parfaitement à nos demandes ainsi qu\'être une véritable force
				  de proposition tout au long du projet. Sérieux et compétent, je recommande
				  fortement Victor.`,
		profilePicture: '/images/reviews/galien.jpeg',
	},
	{
		author: 'Yohann HUCHET',
		company: 'Vet-Design',
		content: `Feldrise est très compétent, à l'écoute et de bons conseils. Passionné ils aiment être challengé pour aboutir au résultat demandé.
				  N'hesitez pas à travailler avec eux.`,
		profilePicture: '/images/reviews/yohann.jpeg',
	},
];

const Home: NextPage = () => {
	const [, setNavBarClass] = useContext(NavBarContext);

	useEffect(() => {
		// Set the NavBar to fixed specially for this page.
		setNavBarClass('fixed');
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Head>
				<title>Feldrise - La solution CTO en Bretagne</title>
				<meta
					name="description"
					content="Feldrise est une agence digitale Bretonne proposant un accompagnement complet dans la réalisation technique de votre projet."
				/>

				<meta property="og:title" content="Feldrise - La solution CTO en Bretagne" />
				<meta
					property="og:description"
					content="Feldrise est une agence digitale Bretonne proposant un accompagnement complet dans la réalisation technique de votre projet."
				/>
				<meta property="og:url" content="https://feldrise.com" />
				<meta property="og:image" content="https://feldrise.com/images/logo-white-small.png" />

				<meta name="facebook-domain-verification" content="ylonayle0d7wqblo6448bmnog1cxz8" />
			</Head>
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
							<h1 className="mr-6 font-bold text-4xl inline">Digital Agency</h1>
							<h2 className="italic text-2xl inline">CTO as a service<br/>basée à Rennes</h2>
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
							<h2 className='hidden'>Nos offres</h2>
							<Card
								mesh="sphere"
								content={(
									<>
										<div>
											<h3 className="mb-2 text-center">Workshops</h3>
											<br/>
											<p>
												Feldrise vous propose un Workshop pour vous expliquer comment
												s&apos;architecture un produit informatique et comment efficacement le développer
											</p>
										</div>
										<Button className="!w-full my-4 px-0" href="/offers#offer1">
											Voir l&apos;offre
										</Button>
									</>
								)}
							/>
							<Card
								mesh="torus"
								content={(
									<>
										<div>
											<h3 className="mb-2 text-center">Petit Audit</h3>
											<br/>
											<p>
												Feldrise se propose d&apos;intervenir pendant quelques jours dans votre entreprise
												afin de vous aider à voir plus clair dans les perspectives d&apos;évolutions de votre projet
											</p>
										</div>
										<Button className="!w-full my-4 px-0" href="/offers#offer2">
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
											<br/>
											<p>
												Parce que nous sommes convaincus de l&apos;intérêt d&apos;internaliser votre équipe,
												nous vous accompagnons dans toutes les étapes de ce processus
											</p>
										</div>
										<Button className="!w-full my-4 px-0" href="/offers#offer3">
											Voir l&apos;offre
										</Button>
									</>
								)}
							/>
						</div>
					</Section>
					<Section className="flex flex-col items-center">
						<ValueBanner
							className="pt-28"
							values={[
								{
									image: '/images/icons/moderne.webp',
									text: 'Moderne',
								},
								{
									image: '/images/icons/bienveillance.png',
									text: 'Bienveillance',
								},
								{
									image: '/images/icons/flexibility.png',
									text: 'Flexible',
								},
								{
									image: '/images/icons/diversity.png',
									text: 'Travail d\'équipe',
								},
								{
									image: '/images/icons/organized.png',
									text: 'Organisé',
								},
							]}
						/>
						<a
							className="pb-28"
							href="https://www.flaticon.com/authors/freepik"
							target="_blank"
							rel="noreferrer"
							title="freepik icons"
						>Icones créées par Freepik - Flaticon</a>

						<div className="flex flex-col md:flex-row gap-8">
							<PortraitImage className="hidden lg:block"/>
							<div className="flex flex-col justify-center gap-4">
								<p className="leading-10">
									Chez Feldrise, les maîtres-mots sont{' '}
									<Highlight>bienveillance</Highlight> <Highlight>écoute</Highlight> et <Highlight>tolérance</Highlight>.
									Le client doit pouvoir se sentir à l’aise, compris et comprendre immédiatement l&apos;intérêt de passer par nous.
								</p>
								<Button href="/offers">Voir les offres</Button>
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
								{reviews.map((review, index) => (
									<SwiperSlide key={index} className="m-auto">
										<div className="h-full px-8 md:px-0 flex justify-center items-center gap-4">
											<div className="p-12 col-span-2 rounded-2xl bg-white text-black">
												<p>
													<span className='text-3xl text-primary'>{review.author}</span>
													&nbsp;-&nbsp;
													{review.company}
												</p>
												<div className='bg-primary my-2 h-1 w-1/3' />
												<p className="mt-6">
													{review.content}
												</p>
											</div>
											{review.profilePicture &&
												<PortraitImage image={review.profilePicture} className="hidden lg:block"/>
											}
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<button className="prevSwipe absolute top-1/2 -translate-y-1/2 md:-translate-x-20 z-20">
								<FontAwesomeIcon icon={faChevronLeft} className="text-3xl text-secondary"/>
							</button>
							<button className="nextSwipe absolute top-1/2 right-0 -translate-y-1/2 md:translate-x-20 z-20">
								<FontAwesomeIcon icon={faChevronRight} className="text-3xl text-secondary"/>
							</button>
						</div>
					</Section>
				</div>
			</div>
			<Contact/>
		</>
	);
};

export default Home;
