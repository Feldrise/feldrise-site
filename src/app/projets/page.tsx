import ProjectCard from "../components/project_card";

/**
 * The projects page
 * @return {JSX.Element} The projects page
 */
export default function Projets(): JSX.Element {
	return (
		<div className='w-full'>
			<main className='flex justify-center items-center flex-col'>
				<section className='w-full py-12 md:py-40 flex justify-center items-center flex-col bg-header-projects bg-cover bg-center'>
					<div className='w-full max-w-desktop px-8 py-16 bg-neutral rounded-md flex justify-center items-center'>
						<h1
							className='text-5xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]'
							style={{
								textDecorationSkipInk: 'none',
							}}
						>
							Les projets accompagnés par Feldrise
						</h1>
					</div>
				</section>

				<section className="w-full flex items-center justify-center">
					<div className='w-full grow max-w-desktop flex flex-col md:flex-row gap-4 items-center justify-center mx-8 my-24'>
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
				</section>
			</main>
		</div>
	);
}
