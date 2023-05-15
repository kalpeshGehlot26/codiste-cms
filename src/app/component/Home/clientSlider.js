"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import clientLogo from "../../data/clientLogo";

const ClientSlider = () => {
	return (
		<Splide
			hasTrack={false}
			options={{
				type: "loop",
				drag: "free",
				focus: "center",
                pagination: true,
                autoplay: true,
                interval: 2000,
                perPage: 5,
                arrows: false,
                autoScroll: {
                  speed: 2,
                },
			}}
		>
			<SplideTrack>
                {
                    clientLogo?.map((logo, index) => {
                        return (
                            <SplideSlide className="splide__slide" key={index}>
                                <img className="img-fluid" src={logo.url} alt={logo.alt} />
                            </SplideSlide>
                        )
                    })
                }
			</SplideTrack>
		</Splide>
	);
};

export default ClientSlider;