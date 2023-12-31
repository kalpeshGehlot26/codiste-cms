import HomePage from "./component/Home/homepage";
import jsonData from "./data/schema";


export const metadata = {
	title: "Top Blockchain and AI Development Company | Codiste",
	description: "Leverage the decentralized and immutable nature of blockchain tech in conjunction with the advanced algo of AI development to revolutionize business operations.",
	images: "https://www.codiste.com/assets/images/featuredImg.webp",
	openGraph: {
		title: "Top Blockchain and AI Development Company | Codiste",
		description: "Leverage the decentralized and immutable nature of blockchain tech in conjunction with the advanced algo of AI development to revolutionize business operations.",
		images: "https://www.codiste.com/assets/images/featuredImg.webp",
		url: 'https://www.codiste.com/'
	},
	alternates: {
		canonical: 'https://www.codiste.com/',
	}
};

export default function Home() {
	return (
		<main>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.home) }}
			/>

			<HomePage />
		</main>
	);
}
