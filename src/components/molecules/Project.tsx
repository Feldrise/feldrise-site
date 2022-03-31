import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface IProjectProps {
	name: string;
	desc: string;
	image: string;
	className?: string;
	href?: string;
}

const Project = (props: IProjectProps) =>
	(
		<a
			className={cx(
				props.className,
				'relative h-[400px] p-8 flex flex-col justify-end',
			)}
			href={props.href}
		>
			<div className={cx(
				'absolute top-0 left-0 w-full h-full',
				'after:content-[""] after:absolute after:w-full after:h-full',
				'after:bg-gradient-to-b after:from-neutral after:via-neutral/0 after:to-neutral',
			)}>
				<Image
					src={props.image}
					layout="fill"
					alt="Project's image"
				/>
			</div>
			<div className="flex flex-col gap-4 z-10">
				<span className="text-3xl">{props.name}</span>
				<span className="text-xl">{props.desc}</span>
			</div>
		</a>
	);

export default Project;
