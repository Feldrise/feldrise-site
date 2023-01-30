/**
 * The head of pages
 * @return {JSX.Element} The code for the head of pages
 */
export default function Head(): JSX.Element {
	return (
		<>
			<title>Feldrise - La solution CTO en Bretagne</title>
			<meta
				name="description"
				content="Feldrise est une agence digitale Bretonne proposant un accompagnement complet dans la réalisation technique de votre projet."
			/>

			<meta content="width=device-width, initial-scale=1" name="viewport" />

			<meta property="og:title" content="Feldrise - La solution CTO en Bretagne" />
			<meta
				property="og:description"
				content="Feldrise est une agence digitale Bretonne proposant un accompagnement complet dans la réalisation technique de votre projet."
			/>
			<meta property="og:url" content="https://feldrise.com" />
			<meta property="og:image" content="https://feldrise.com/logo-feldrise/icon-white-logo.png" />

			<meta name="facebook-domain-verification" content="ylonayle0d7wqblo6448bmnog1cxz8" />
		</>
	);
}
