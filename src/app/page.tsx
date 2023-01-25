import Button from '@/components/button';
import CalendlyButton from '@/components/calendly-button';
import Image from 'next/image';


/**
 * The home page of the site
 * @return {JSX.Element} The home page of the site
 */
export default function Home(): JSX.Element {
	return (
		<div className='w-full'>
			<main className='flex justify-center items-center flex-col'>
				{/* Le header */}
				<div className="w-full md:h-[calc(100vh-90px)] py-12 flex justify-center items-center bg-header bg-cover bg-center">
					<div className="grow max-w-desktop">
						<div className="py-[36px] px-10 bg-neutral rounded-md mx-8 lg:w-1/2 flex flex-col items-start">
							<Image
								src={'/logo-feldrise/white-logo.svg'}
								alt="Logo de Feldrise"
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
				</div>
			</main>
		</div>
	);
}
