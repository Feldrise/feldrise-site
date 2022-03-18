import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface IProjectProps {
	name: string;
	desc: string;
	className?: string;
}

const Project = (props: IProjectProps) => {
	return (
		<a className={cx(
			props.className,
			'relative h-[400px] p-8 flex flex-col justify-end'
		)}>
			<div className={cx(
				'absolute top-0 left-0 w-full h-full',
				'after:content-[""] after:absolute after:w-full after:h-full',
				'after:bg-gradient-to-b after:from-neutral after:via-neutral/0 after:to-neutral'
			)}>
				<Image
					src="/images/hero.png"
					layout="fill"
					alt="Project image"
				/>
			</div>
			<div className="flex flex-col gap-4 z-10">
				<span className="text-3xl">{props.name}</span>
				<span className="text-xl">{props.desc}</span>
			</div>
		</a>
	);
};

export default Project;
