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
                focus: 'center',
                pagination: true,
                autoplay: true,
                interval: 2000, 
                perPage: 3,
                arrows: false,
                autoScroll: {
                    speed: 2,
                },
            }}
        >
            <SplideTrack>
                {
                    eventItems?.map((event, index) => {
                        return (
                            <SplideSlide className="splide__slide" key={index}>
                                <img className="img-fluid career-compnyimg" alt={event.alt} src={event.url} />
                            </SplideSlide>
                        )
                    })
                }
                
            </SplideTrack>
        </Splide>
    );
};

export default EventSlider;
