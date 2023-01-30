interface ISectionTitle {
	title: string,
	alignment?: 'start' | 'end'
}

/**
 * The title for a section
 * @param {ISectionTitle} props The title
 * @return {JSX.Element} The component for the section title
 */
export default function SectionTitle(props: ISectionTitle): JSX.Element {
	return (
		<div className="w-full py-8 md:py-12 bg-primary flex items-center justify-center">
			<div className={`grow max-w-desktop px-8 flex ${props.alignment == 'end' ? 'justify-end' : 'justify-start'}`}>
				<h2 className="uppercase text-5xl font-bold">{props.title}</h2>
			</div>
		</div>
	);
}
