import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import FCat from '../atoms/Icons/FCat';

interface Value {
	text: string;
	image?: string;
}

interface IValueBannerProps {
	className?: string;
	values: Value[];
}

const ValueBanner = (props: IValueBannerProps) => {
	return (
		<div className={cx(
			'w-full p-4 flex flex-col md:flex-row justify-center items-center gap-8',
			props.className
		)}>
			{props.values.map((value, index) => (
				<div className="grid grid-cols-[175px_175px] grid-rows-[175px] md:grid-cols-[175px] md:grid-rows-[175px_175px]" key={index}>
					<div className={cx(
						'p-4 flex flex-col justify-between bg-white rounded-2xl text-black text-center',
						index%2 !== 0 && 'order-last'
					)}>
						<div className="relative w-full h-full flex justify-center items-center">
							{value.image && <Image src={value.image} width={96} height={96} alt={`${value.text} image`}/>}
						</div>
						<span>{value.text}</span>
					</div>
					<div className={cx(
						'flex justify-center items-center md:items-start',
						index%2 === 0 && 'md:items-end'
					)}>
						<FCat className={cx(
							'w-[96px] h-[96px] animate-spin',
							index%2 === 0 ? 'fill-primary' : 'fill-secondary'
						)}/>
					</div>
				</div>
			))}
		</div>
	);
};

export default ValueBanner;
