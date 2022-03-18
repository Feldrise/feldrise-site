import type {NextPage} from 'next';
import Section from '../components/organisms/Section';
import 'swiper/css';
import 'swiper/css/navigation';
import Project from '../components/molecules/Project';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, FreeMode} from 'swiper';

const Home: NextPage = () => {
	return (
		<Section className="my-20">
			<Swiper
				modules={[FreeMode, Autoplay]}
				direction="vertical"
				slidesPerView={2}
				loop={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
					reverseDirection: true,
				}}
				freeMode={{
					enabled: true,
					sticky: false,
					momentum: true,
				}}
				className="h-screen overflow-hidden"
			>
				{[0].map((project, index) =>
					<SwiperSlide key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<Project
							name="Pluctis"
							desc="Janvier 2021 - Mars 2021"
						/>
						<Project
							name="Pluctis"
							desc="Janvier 2021 - Mars 2021"
							className="lg:mt-12"
						/>
					</SwiperSlide>
				)}
			</Swiper>
		</Section>
	);
};

export default Home;
