"use client";
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
      }, []);

	return (
		<div>
			<InlineWidget url="https://calendly.com/nishantbijanicodiste" />
		</div>
	);
};

export default Calendly;