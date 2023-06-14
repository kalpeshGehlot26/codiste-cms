import HomePage from "./component/Home/homepage";
import jsonData from "./data/schema";


export const metadata = {
	title: "Leading Blockchain and Software Development Company | Codiste",
	description:
		"Codiste a leading blockchain and software development company offers tailored expertise for advanced tech solutions. Discover innovation to business solutions.",
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
