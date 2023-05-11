// "use client";
import HomePage from "./component/homepage";
import Header from "./component/header";
import Footer from "./component/footer";
import { Suspense } from "react";
// import { useEffect, useState } from "react";

export default function Home() {

	// const [hydrated, setHydrated] = useState(false);
    // useEffect(() => {
    //     setHydrated(true);
    // }, []);

    // if (!hydrated) {
    //     // Returns null on first render, so the client and server match
    //     return null;
    // }

	return (
		<main>
			<Suspense  >
				<Header />
					<HomePage />
				<Footer />
			</Suspense>
		</main>
	);
}
