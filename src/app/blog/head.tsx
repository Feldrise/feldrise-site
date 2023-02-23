/**
 * The head of pages
 * @return {JSX.Element} The code for the head of pages
 */
export default function Head(): JSX.Element {
	return (
		<>
			<title>Feldrise Blog</title>
			<meta
				name="description"
				content="Bienvenue sur le blog de Feldrise."
			/>

			<meta content="width=device-width, initial-scale=1" name="viewport" />

			<meta property="og:title" content='Feldrise Blog' />
			<meta
				property="og:description"
				content="Bienvenue sur le blog de Feldrise."
			/>
			<meta property="og:url" content='https://feldrise.com/blog/' />
			<meta property="og:image" content="https://feldrise.com/logo-feldrise/icon-white-logo.png" />
		</>
	);
}
