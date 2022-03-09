import type {NextPage} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

const Home: NextPage = () => {
	return (
		<div>
			<section className="relative h-screen bg-hero">
				<div className={cx(
					'absolute top-1/2 left-0 -translate-y-1/2 p-12 flex flex-col gap-6',
					'bg-white rounded-r-2xl shadow-lg shadow-black/30'
				)}>
					<div className="relative w-full h-[75px]">
						<Image src="/images/logo-dark.svg" layout="fill" objectFit="contain" objectPosition="left" alt="Hero's background"/>
					</div>
					<div>
						<span className="mr-6 font-bold text-4xl">Digital Agency</span>
						<span className="italic text-2xl">basée à Rennes</span>
					</div>
					<Link href="/">
						<a className={cx(
							'w-fit px-8 py-4',
							'rounded-lg bg-primary font-medium text-white text-2xl hover:bg-primary-dark transition-colors'
						)}>Voir les projets</a>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
