"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import eventItems from "../../data/eventItems";

const EventSlider = () => {
    return (
        <Splide
            hasTrack={false}
            options={{
                type: 'loop',
                drag: 'free',
                pagination: true,
                autoplay: true,
                interval: 2000,
                perPage: 3,
                arrows: false,
                autoScroll: {
                    speed: 2,
                },
                breakpoints: {

                    1000: {
                        perPage: 2,
                    },
                    600: {
                        perPage: 1,
                    },

                }
            }}
        >
            <SplideTrack>
                {
                    eventItems?.map((event, index) => {
                        return (
                            <SplideSlide className="splide__slide" key={index}>
                                <img className="img-fluid career-compnyimg" alt={event.alt} src={event.url} loading="lazy" />
                            </SplideSlide>
                        )
                    })
                }
            </SplideTrack>
        </Splide>
    );
};

export default EventSlider;
