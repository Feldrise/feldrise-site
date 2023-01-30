/**
 * The head of pages
 * @return {JSX.Element} The code for the head of pages
 */
export default function Head(): JSX.Element {
	return (
		<>
			<title>Feldrise - Les projets accompangés</title>
			<meta
				name="description"
				content="Vous trouverez une liste de projets que Feldrise a pu accompanger jusqu'a présent."
			/>

			<meta property="og:title" content="Feldrise - La solution CTO en Bretagne" />
			<meta
				property="og:description"
				content="Vous trouverez une liste de projets que Feldrise a pu accompanger jusqu'a présent."
			/>
			<meta property="og:url" content="https://feldrise.com" />
			<meta property="og:image" content="https://feldrise.com/logo-feldrise/icon-white-logo.png" />
		</>
	);
}
