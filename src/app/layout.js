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
	title: "Leading Blockchain and Software Development Company | Codiste",
	description:
		"Experience innovative IT services from Codiste, a leading blockchain development company. Specializing in blockchain, metaverse, AI, ML, cryptocurrency and NFT.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
