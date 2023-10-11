// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import "../style.css"
import "../external.css"
import "../Newstyle.css"
import { Inter } from "next/font/google";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Analytics from './component/Analytics';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <meta property="og:image" content="https://www.codiste.com/assets/images/featuredImg.webp" /> */}
				{/* <meta property="og:url" content="https://codiste.com/" /> */}
				{/* <meta property="og:type" content="website" /> */}
				{/* <meta property="og:title" content="Codiste - A leading Blockchain and AI Development Company" /> */}
				{/* <meta property="og:description" content="Empowering Businesses with Blockchain, AI, AR/VR, Metaverse, NFT Marketplace, and Cryptocurrency development Solutions for business future success." /> */}
				{/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}

				{/* <link rel="stylesheet" href="assets/css/style.css" />
				<link rel="stylesheet" href="assets/css/external.css" /> */}
				{/* <link rel="stylesheet" href="assets/css/Newstyle.css" /> */}
				<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=codiste-website"></script>

			</head>
			<body className={inter.className}>
				<Header />
				<Analytics>
					{children}
				</Analytics>
				<Footer />
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
				{/* <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> */}
				{/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
				<script>
					AOS.init();
				</script> */}
			</body>
		</html>
	);
}
