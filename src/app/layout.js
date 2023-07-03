// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import "../style.css"
import "../external.css"
import { Inter } from "next/font/google";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Analytics from './component/Analytics';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Top Blockchain and AI Development Company | Codiste",
	description: "Leverage the decentralized and immutable nature of blockchain tech in conjunction with the advanced algo of AI development to revolutionize business operations.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
				<meta property="og:image" content="assets/images/featuredImg.webp" />
				<meta property="og:url" content="https://codiste.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Codiste - A leading Blockchain and AI Development Company" />
				<meta property="og:description" content="Empowering Businesses with Blockchain, AI, AR/VR, Metaverse, NFT Marketplace, and Cryptocurrency development Solutions for business future success." />
			</head>
			<body className={inter.className}>
				<Header />
				<Analytics>
					{children}
				</Analytics>
				<Footer />
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
				<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
			</body>
		</html>
	);
}
