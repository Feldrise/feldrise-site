import type {NextPage} from 'next';
import Section from '../components/organisms/Section';
import Value from '../components/atoms/Offers/Value';
import GeometricObject from '../components/atoms/Offers/GeometricObject';
import React from 'react';
import Card from '../components/atoms/Offers/Card';
import Button from '../components/atoms/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faEuro} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

const Offers: NextPage = () => {
	const offer1Ref = React.useRef<HTMLElement>(null);
	const offer2Ref = React.useRef<HTMLElement>(null);
	const offer3Ref = React.useRef<HTMLElement>(null);

	const scrollIntoView = (ref: React.RefObject<HTMLElement>) => {
		if (!ref.current) return;

		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<>
			<Head>
				<title>Feldrise - Les offres</title>
				<meta
					name="description"
					content="Feldrise prpose plusieurs offres pour vous accompagner. Du petit audit jusqu'à une
							 intervention d'un mois, nous aurons forcément quelque chose à vous proposer."
				/>

				<meta property="og:title" content="Feldrise - La solution CTO en Bretagne" />
				<meta
					property="og:description"
					content="Feldrise prpose plusieurs offres pour vous accompagner. Du petit audit jusqu'à une
							 intervention d'un mois, nous aurons forcément quelque chose à vous proposer."
				/>
				<meta property="og:url" content="https://feldrise.com" />
				<meta property="og:image" content="https://feldrise.com/images/logo-white-small.png" />
			</Head>
			<Section className="flex flex-col gap-4">
				<h2>Nos offres</h2>
				<p>
					Feldrise vous propose plusieurs d&apos;offres, pour répondre à tous les besoins.
					Que vous souhaitiez simplement découvrir nos services ou que vous ayez besoin d&apos;un plus grand accompagnement,
					nous avons ce qu&apos;il vous faut. Bien sûr, prendre contact avec nous est et sera toujours gratuit !
				</p>
				{/* LA LISTE DES OFFRES */}
				<div className="py-4 flex flex-col lg:flex-row items-center lg:items-start gap-7">
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
								<Button className="!w-full my-4 px-0" onClick={() => scrollIntoView(offer1Ref)}>
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
								<Button className="!w-full my-4 px-0" onClick={() => scrollIntoView(offer2Ref)}>
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
								<Button className="!w-full my-4 px-0" onClick={() => scrollIntoView(offer3Ref)}>
									Voir l&apos;offre
								</Button>
							</>
						)}
					/>
				</div>
			</Section>

			{/* OFFRE 1 */}
			<Section
				className="border-y-2 border-primary backdrop-brightness-0 mt-16 py-16 w-full flex flex-col gap-4"
				style={{
					backgroundImage: 'url("/images/cat-background.svg")',
					backgroundSize: 'cover',
				}}
				ref={offer1Ref}
				id="offer1"
			>
				<h2>Offre 1 : Le Workshop</h2>
				<div className='height-4'/>
				<h3>Contenu</h3>
				<p>
					Lors de ce Workshop, nous vulgarisons le développement informatique afin de vous
					montrer les différents enjeux que peuvent rencontrer vos développeurs ou même les
					prestataires avec qui vous travaillez.<br/>Nous abordons ensuite tout ce qu&apos;il faut
					savoir pour travailler au mieux avec vos prestataires et l&apos;intérêt d&apos;internaliser
					votre développement.
				</p>
				<Value
					content='Une vulgarisation des technologies du moment et leur utilisation'
				/>
				<Value
					content='Une réflexion sur les différentes architectures et la scalabilité d&apos;un projet'
				/>
				<Value
					content='Comment internaliser mon développement ? Comment travailler efficacement avec mes prestataires externes ?'
				/>
				<div className="height-16" />
				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="w-full col-span-2 flex flex-col gap-4">
						<h3>Pourquoi ?</h3>
						<h4>Des connaissances</h4>
						<p>
							Nous vous apportons quelques connaissances utiles qui vous aideront pour mieux comprendre
							votre environnement et comment fonctionne le développement informatique.
						</p>
						<h4>Un plus pour votre entreprise</h4>
						<p>
							Bien comprendre comment travailler avec vos prestataires ou même comment travaillent vos
							développeurs vous permet une meilleure cohésion au sein de votre entreprise.
						</p>
					</div>
					<div className="w-full items-center mt-8 lg:mt-0 flex flex-col gap-4">
						<Button
							className="h-fit !bg-primary !text-white hover:!bg-primary-dark"
							onClick={() => document.querySelector('#contact')?.scrollIntoView({
								behavior: 'smooth',
								block: 'center',
							})}
						>
							Contact <FontAwesomeIcon icon={faEnvelope} className="text-3xl"/>
						</Button>
						<div className="h-[260px]">
							<GeometricObject
								mesh="sphere"
								scale={2}
								shadowOffsetY={3}
							/>
						</div>
					</div>
				</div>
			</Section>

			{/* OFFRE 2 */}
			<Section
				className="border-y-2 border-primary py-16 w-full flex flex-col gap-4"
				ref={offer2Ref}
				id="offer2"
			>
				<h2>Offre 2 : Le petit audit</h2>
				<p className="w-1/4 p-2 bg-secondary rounded-xl">
					À partir de 234€ HT la journée
				</p>
				<div className='height-4'/>
				<h3>Contenu</h3>
				<p>
					Lors de ce petit audit qui dure entre 1 et 3 jours, nous vous proposeront 3 axes majeurs
				</p>
				<Value
					content="Une rencontre avec vous et vos équipes pour identifier votre activité et quels sont les axes d'améliorations"
				/>
				<Value
					content="Une construction ensemble d'un plan d'actions pour les différents intervenants de votre entreprise"
				/>
				<Value
					content="Une mise en pratique de ce que nous vous proposons, notamment la réflexion sur les bonnes pratiques
							applicable et comment les appliquer de manière concrète sur vos problèmes, les nouveaux outils que vous
							pouvez utiliser et nous vous accompagnerons dans la résolution d'un premier problème"
				/>
				<div className="height-16" />
				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="w-full col-span-2 flex flex-col gap-4">
						<h3>Pourquoi ?</h3>
						<h4>Des résultats</h4>
						<p>
							Nous vous aidons à créer un plan d&apos;action claire pour la suite de votre entreprise,
							et nous vous aidons même à organiser votre prévisionnel sur le budget futur.
						</p>
						<h4>Un plus pour votre entreprise</h4>
						<p>
							Nous vous aidons à créer une vision commune pour motiver vos troupes et surtout réduire votre temps de développement.
							Vous pouvez ainsi vous lancer dans la suite en sachant parfaitement à quoi vous attendre.
						</p>
					</div>
					<div className="w-full items-center mt-8 lg:mt-0 flex flex-col gap-4">
						<Button
							className="h-fit !bg-primary !text-white hover:!bg-primary-dark"
							onClick={() => document.querySelector('#contact')?.scrollIntoView({
								behavior: 'smooth',
								block: 'center',
							})}
						>
							Contact <FontAwesomeIcon icon={faEnvelope} className="text-3xl"/>
						</Button>
						<div className="h-[260px]">
							<GeometricObject
								scale={2}
								shadowOffsetY={3}
							/>
						</div>
					</div>
				</div>
			</Section>

			{/* OFFRE 3 */}
			<Section
				className="border-y-2 border-primary backdrop-brightness-0 py-16 w-full flex flex-col gap-4"
				style={{
					backgroundImage: 'url("/images/cat-background.svg")',
					backgroundSize: 'cover',
				}}
				ref={offer3Ref}
				id="offer3"
			>
				<h2>Offre 3 : L&apos;accompagnement </h2>
				<p>
					Nous vous aidons pour développer votre entreprise en internalisant le développement.
					Parce que nous savons par expérience qu&apos;un prestataire externe peut se révéler très cher pour votre
					entreprise, et qu&apos;une équipe interne vous permet d&apos;améliorer constamment votre activité et
					surtout d&apos;améliorer les performances de votre entreprise.
				</p>
				<div className='height-4'/>
				<h3>Contenu</h3>
				<p>
					Nous vous proposons le support d&apos;un CTO de Feldrise pour vous accompagner dans les changements de votre entreprise.
				</p>
				<Value
					content="Nous formons les personnes avec qui vous travaillez déjà pour intégrer une équipe de développeurs performants"
				/>
				<Value
					content={'Si vous n’avez pas d\'équipe : nous vous aidons dans le recrutement de vos futurs' +
					' éléments clés (stagiaires, apprentis, employés...)\n' +
					' - On vous accompagne dans les recherches et pouvons même vous proposer des profils\n' +
					' - On fait les entretiens avec vous pour que tout se déroule au mieux\n' +
					' - Une fois recrutés, nous les formons pour qu\'ils soient rapidement opérationnels et efficaces'}
				/>
				<div className="height-16" />
				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="w-full col-span-2 flex flex-col gap-4">
						{/* <h3>Pourquoi ?</h3>
						<h4>Des résultats</h4>
						<p>
							Nous vous aidons à créer un plan d&apos;action claire pour la suite de votre entreprise,
							et nous vous aidons même à organiser votre prévisionnel sur le budget futur.
						</p> */}
						<div className="w-full p-8 bg-secondary rounded-xl">
							<div className='grid grid-cols-4'>
								<h3 className='col-span-3'>Et le prix ?</h3>
								<span className='self-end text-center'><FontAwesomeIcon icon={faEuro} className="w-[32px] h-[32px]"/></span>
							</div>
							<div className="bg-white my-4 w-1/3 h-1" />
							<p>
								Nous vous proposons 30 jours (séparables par tranches de 2h pour plus de flexibilité) répartissables sur 1 an au prix de 3500€
								{' '}HT
							</p>
						</div>
					</div>
					<div className="w-full items-center flex flex-col mt-8 lg:mt-0 gap-4">
						<Button
							className="h-fit !bg-primary !text-white hover:!bg-primary-dark"
							onClick={() => document.querySelector('#contact')?.scrollIntoView({
								behavior: 'smooth',
								block: 'center',
							})}
						>
							Contact <FontAwesomeIcon icon={faEnvelope} className="text-3xl"/>
						</Button>
						<div className="h-[260px]">
							<GeometricObject
								mesh='cylinder'
								scale={2}
								shadowOffsetY={3}
							/>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
};

export default Offers;
