import Head from "next/head";
import HomePage from "./component/Home/homepage";
import Script from "next/script";

export default function Home() {
	const jsonData = {
		"@context": "https://schema.org",
		"@type": "Corporation",
		name: "Codiste Pvt Ltd",
		alternateName: "codiste",
		url: "https://codiste.com/",
		logo: "https://codiste.com/",
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+91 94290 05987",
			contactType: "technical support",
			areaServed: "US",
			availableLanguage: "en",
		},
		sameAs: [
			"https://twitter.com/codistepvtltd",
			"https://www.instagram.com/codistepvtltd/",
			"https://www.youtube.com/@YourTechPartnerCodiste",
			"https://in.linkedin.com/company/codiste-pvt-ltd",
		],
	};

	return (
		<main>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
			/>

			<HomePage />
		</main>
	);
}
