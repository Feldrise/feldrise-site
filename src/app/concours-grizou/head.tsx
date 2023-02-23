/**
 * The head of pages
 * @return {JSX.Element} The code for the head of pages
 */
export default function Head(): JSX.Element {
	return (
		<>
			<title>Feldrise - Le concours Grizou</title>
			<meta
				name="description"
				content="Feldrise s'associe à Vieux Grizou pour un concours d'une valeur de 10k euros pour vous aider à lancer ou améliorer votre business !"
			/>

			<meta content="width=device-width, initial-scale=1" name="viewport" />

			<meta property="og:title" content="Feldrise - Le concours Grizou" />
			<meta
				property="og:description"
				content="Feldrise s'associe à Vieux Grizou pour un concours d'une valeur de 10k euros pour vous aider à lancer ou améliorer votre business !"
			/>
			<meta property="og:url" content="https://feldrise.com" />
			<meta property="og:image" content="https://feldrise.com/logo-feldrise/icon-white-logo.png" />
		</>
	);
}
