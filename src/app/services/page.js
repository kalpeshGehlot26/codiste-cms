import React from "react";
import ServicePageContent from "./ServicePageContent";

export const metadata = {
	title: "Leading Blockchain and AI Development Services Provider Company",
	description: "Capitalize on the synergy of blockchain and AI development, as we provide tailored solutions for tokenization, decentralized data and AI-powered Solution",
	images: "https://www.codiste.com/assets/images/main/firstsecimg.png",
	openGraph: {
		title: "Leading Blockchain and AI Development Services Provider Company",
		description: "Capitalize on the synergy of blockchain and AI development, as we provide tailored solutions for tokenization, decentralized data and AI-powered Solution",
		images: "https://www.codiste.com/assets/images/main/firstsecimg.png",
		url: 'https://www.codiste.com/services/'
	},
	alternates: {
		canonical: 'https://www.codiste.com/services',
	}
};

const page = () => {
	return (
		<div>
			<ServicePageContent />
		</div>
	);
};

export default page;
