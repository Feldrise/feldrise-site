import Button from '@/components/button';
import CalendlyButton from '@/components/calendly-button';
import Image from 'next/image';
import OfferCard from './components/offer-card';
import PortraitImage from './components/portrait_image';
import ProjectCard from './components/project_card';
import SectionTitle from './components/section_title';

/**
 * The home page of the site
 * @return {JSX.Element} The home page of the site
 */
export default function Home(): JSX.Element {
	return (
		<div className='w-full'>
			<main className='flex justify-center items-center flex-col'>
				{/* Le header */}
				<section className='w-full py-12 md:py-32 flex justify-center items-center flex-col bg-header bg-cover bg-center gap-16'>
					<div className='grow max-w-desktop px-8'>
						<div className='py-[36px] px-10 bg-neutral rounded-md lg:w-1/2 flex flex-col items-start'>
							<Image
								src={'/logo-feldrise/white-logo.svg'}
								alt='Logo de Feldrise'
								width={263} height={92}
								style={{
									width: 'auto',
									height: '92px',
								}}
							/>
							<h1 className='text-2xl font-bold'>La solution CTO pour les startups et les PME</h1>
							<div className='h-12' />
							<p>
								Parcequ’un projet digital ne se réalise pas seul, nous sommes là pour vous aider à innover et atteindre vos
								objectifs grâce à l’expertise de nos CTO.
							</p>
							<div className='h-12' />
							<div className='w-full flex flex-col items-center md:flex-row gap-4'>
								<CalendlyButton />
								<Button buttonStyle='secondary'>
									En savoir plus
								</Button>
							</div>
						</div>
					</div>
					<div className='w-full bg-neutral flex flex-col justify-center items-center py-12'>
						<div className='grow w-full max-w-desktop px-8'>
							<div className='flex flex-col items-start justify-start gap-8'>
								<h2
									className='text-4xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]'
									style={{
										textDecorationSkipInk: 'none',
									}}
								>
									Les projets accompagnés par Feldrise
								</h2>
								<div className='w-full flex flex-col md:flex-row gap-4 items-center justify-center'>
									{/* Néo Voice */}
									<ProjectCard
										image='/images/projects/neovoice.webp'
										projectTitle='Néo Voice'
										site='https://neovoice.fr'
										color='bg-[#E21D54]'
										textColor='text-white' />

									{/* My Pool Process */}
									<ProjectCard
										image='/images/projects/mypoolprocess.webp'
										projectTitle='My Pool Process'
										site='https://mypoolprocess.fr'
										color='bg-[#0054AC]'
										textColor='text-white' />

									{/* Logi Soap */}
									<ProjectCard
										image='/images/projects/logisoap.webp'
										projectTitle='Logi Soap'
										site='https://logisoap.com'
										color='bg-[#03035A]'
										textColor='text-white' />
								</div>
								<div className='w-full flex flex-col items-center md:flex-row gap-4'>
									<Button>
										Découvrir tous les projets
									</Button>
									<CalendlyButton buttonStyle='secondary' />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Ce que nous proposons */}
				<section className='w-full'>
					<div className='h-4' />
					<SectionTitle title='Pourquoi un CTO externalisé ?' alignment='end' />
					<div className='w-full flex justify-center items-center my-4'>
						<div className='grow max-w-desktop flex'>
							<div className='w-full grow hidden md:flex flex-col items-center justify-center gap-4'>
								<div
									className='w-full h-full p-4 grow bg-me bg-cover bg-center flex flex-col items-center justify-end'
								>
									<p className='bg-neutral py-4 px-8 rounded-md'>Victor - CTO chez Feldrise</p>
								</div>
								<div
									className='w-full h-full p-4 grow bg-me bg-cover bg-center flex flex-col items-center justify-end'
								>
									<p className='bg-neutral py-4 px-8 rounded-md'>Victor - CTO chez Feldrise</p>
								</div>
							</div>
							<div className='grow flex flex-col gap-8 px-8 lg:px-20 py-8 lg:py-16'>
								<p>
									Lorsqu&apos;on lance un produit digital, les choix techniques sont capitaux pour le futur du projet.
									Mais c&apos;est loin d&apos;être le seul défi que vous allez rencontrer !<br/>
									C&apos;est pour cela que nous avons créé Feldrise. Comment recruter mon équipe ? Comment gérer les développeurs
									de mon équipe ? Qui sera là pour répondre à leurs questions ?<br/>
									<br/>
									Feldrise vous propose un accompagnement sur mesure par l&apos;un de nos CTO pour répondre à tous ces challenges
									et vous permettre d&apos;internaliser le développement de votre solution.
								</p>
								<div className='w-full flex flex-col items-center md:flex-row gap-4'>
									<Button href='https://github.com/Feldrise/Feldrise/blob/master/manifeste-cto.md'>
										Lire le manifeste du CTO
									</Button>
									<Button buttonStyle='secondary'>
										Les projets accompagnés
									</Button>
								</div>

								{/* L'accompagnement */}
								<div className='flex flex-col border border-primary rounded-md p-4 gap-10'>
									<h3
										className='text-3xl font-bold underline decoration-primary decoration-[5px] underline-offset-[-5px]'
										style={{
											textDecorationSkipInk: 'none',
										}}
									>
										Comment fonctionne l&apos;accompagnement ?
									</h3>

									{/* #1 */}
									<div className='flex flex-col gap-4'>
										<h4 className='text-2xl font-bold'><span className='py-2 px-4 bg-primary rounded-md'>1</span> La prise de contact</h4>
										<p>
											L&apos;accompagnement commence dès les premiers échanges ! Votre projet et situation étant unique, le but des
											premiers échanges est de déterminer quels seront vos besoin et comment nos CTO peuvent y répondre.
										</p>
									</div>

									{/* #2 */}
									<div className='flex flex-col gap-4'>
										<h4 className='text-2xl font-bold'><span className='py-2 px-4 bg-primary rounded-md'>2</span> La mise en route</h4>
										<p>
											La deuxième étape consiste à lancer la machine. Cela se traduit souvent par le recrutement de l&apos;équipe quand
											cela est nécessaire, puis la mise en place des différents outils nécessaires au projet et au déroulement de
											l&apos;accompagnement. C’est aussi pendant les débuts que pourra être fourni les formations nécessaires pour rendre
											votre équipe opérationnelle le plus rapidement possible.
										</p>
									</div>

									{/* #3 */}
									<div className='flex flex-col gap-4'>
										<h4 className='text-2xl font-bold'><span className='py-2 px-4 bg-primary rounded-md'>3</span> Le suivi du projet</h4>
										<p>
											Maintenant que l&apos;équipe est opérationnelle, il faut que le projet avance ! C’est ici que tout devient
											intéressant : grâce aux outils mise en place et des méthodes flexible, nos CTO assurent un suivi du projet
											pour être prêt à intervenir quand c&apos;est nécessaire.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full'>
					<SectionTitle title='Nos offres et tarifs' />
					<div className='w-full flex justify-center items-center'>
						<div className='grow max-w-4xl flex flex-col gap-8 py-8 lg:py-20 px-8'>
							<div className='grow flex flex-col md:flex-row items-stretch justify-evenly gap-8'>
								<OfferCard
									image='bg-offer1'
									price='Gratuit'
									title='Le rendez-vous'
								>
									Prendre rendez-vous avec un de nos CTO sera toujours gratuit. Pendant 30 minutes,
									nous discuterons de vous, votre projet et là où vous en êtes.
								</OfferCard>

								<OfferCard
									image='bg-offer2'
									price='Sur devis'
									title="L'accompagnement"
								>
									Parce que cette aventure est unique, un tarif sera déterminé sur mesure pour répondre
									au mieux à votre besoin.
								</OfferCard>
							</div>
							<div className='flex flex-col md:flex-row items-center justify-start gap-8 bg-primary rounded-md px-8 py-16'>
								<h2 className='grow text-5xl'>Trouver un CTO chez Feldrise</h2>
								<CalendlyButton buttonStyle='secondary' />
							</div>
						</div>
					</div>
				</section>

				<section className='w-full flex justify-center items-center bg-cats bg-cover'>
					<div className='max-w-desktop flex flex-col items-center justify-center py-8 px-24 gap-16'>
						<h2
							className='text-5xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]'
							style={{
								textDecorationSkipInk: 'none',
							}}
						>
							Ils en parlent mieux que nous
						</h2>

						<div className="h-full flex justify-center items-center gap-4">
							<div className="p-12 col-span-2 rounded-2xl bg-white text-black">
								<p>
									<span className='text-3xl text-primary'>Yohann HUCHET</span>
									&nbsp;-&nbsp;
									Vet-Design
								</p>
								<div className='bg-primary my-2 h-1 w-1/3' />
								<p className="mt-6">
									Feldrise est très compétent, à l&apos;écoute et de bons conseils. Passionné ils aiment être challengé pour aboutir
									au résultat demandé. N&apos;hesitez pas à travailler avec eux.
								</p>
							</div>
							<PortraitImage image="/images/reviews/yohann.jpeg" className="hidden lg:block"/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
