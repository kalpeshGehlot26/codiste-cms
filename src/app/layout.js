// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import "../style.css"
import "../external.css"
import { Inter } from "next/font/google";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata  = {
	title: "Blockchain Service Provider",
	description: "Discover innovative tech solutions for business with our leading blockchain and software development company. We offer a wide range of services and expertise to cater to your unique needs.",
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
					{children}
				<Footer />
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
			</body>
		</html>
	);
}
