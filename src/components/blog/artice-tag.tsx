interface ArticleTagProps {
  title: string;
}

const tagBaseStyle = 'text-xs mr-2 py-1.5 px-4 text-black-600 rounded-2xl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const textsStyles: any = {
	Entreprise: `${tagBaseStyle} bg-blue-800 text-blue-100`,
	ReactJS: `${tagBaseStyle} bg-sky-100  text-sky-600`,
	NodeJS: `${tagBaseStyle} bg-green-100  text-green-600`,
	AWS: `${tagBaseStyle} bg-yellow-100  text-yellow-600`,
	NextJS: `${tagBaseStyle}  bg-cyan-100  text-cyan-600`,
	Docker: `${tagBaseStyle}  bg-sky-100  text-sky-600`,
	TypeScript: `${tagBaseStyle}  bg-indigo-100  text-indigo-600`,
	Kubernetes: `${tagBaseStyle}  bg-violet-100  text-violet-600`,
	GCP: `${tagBaseStyle}  bg-rose-100  text-rose-600`,
	ExpressJS: `${tagBaseStyle}  bg-lime-100  text-lime-600`,
};
const ArticleTag = (options: ArticleTagProps) => {
	const {title} = options;

	return <div className={textsStyles[`${title}`]}>{title}</div>;
};

export default ArticleTag;
