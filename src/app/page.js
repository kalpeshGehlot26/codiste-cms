import HomePage from "./component/Home/homepage";
import jsonData from "./data/schema";

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
