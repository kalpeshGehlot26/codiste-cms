"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-MEV81K2PQF");

const logPageView = () => {
	ReactGA.send({ page: typeof window !== 'undefined' ? window.location.pathname : "/" });
};

const Analytics = ({ children }) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			logPageView();
		}
	}, []);
	return <>{children}</>;
};

export default Analytics;