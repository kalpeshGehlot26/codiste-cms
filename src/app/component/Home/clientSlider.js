"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import clientLogo from "../../data/clientLogo";

const ClientSlider = () => {
    return (
        <Splide
            data-aos="fade-up" data-aos-duration="3000"
            hasTrack={false}
            options={{
                type: "loop",
                drag: "free",
                pagination: true,
                autoplay: true,
                interval: 2000,
                perPage: 5,
                perMove: 1,
                arrows: false,
                autoScroll: {
                    speed: 2,
                },
                breakpoints: {
                    1400: {
                        perPage: 4,
                    },
                    1000: {
                        perPage: 3,
                    },
                    600: {
                        perPage: 2,
                        pagination: false,
                        arrows: true,
                    },
                    400: {
                        perPage: 1,
                        pagination: false,
                        arrows: true,
                    }
                }
            }}
        >
            <SplideTrack>
                {
                    clientLogo?.map((logo, index) => {
                        return (
                            <SplideSlide className="splide__slide" key={index}>
                                <img className="img-fluid" src={logo.url} alt={logo.alt} loading="lazy" />
                            </SplideSlide>
                        )
                    })
                }
            </SplideTrack>
        </Splide>
    );
};

export default ClientSlider;
