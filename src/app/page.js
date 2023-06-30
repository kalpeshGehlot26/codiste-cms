import HomePage from "./component/Home/homepage";
import jsonData from "./data/schema";


export const metadata = {
	title: "Leading Blockchain and Software Development Company | Codiste",
	description:
		"Experience innovative IT services from Codiste, a leading blockchain development company. Specializing in Blockchain, Metaverse, AI, ML, AR&VR,Cryptocurrency and NFT.",
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
