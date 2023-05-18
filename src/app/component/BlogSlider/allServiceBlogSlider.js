"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const AllServiceBlogSlider = ({ items }) => {
    return (
        <Splide
            hasTrack={false}
            options={{
                type: 'loop',
                drag: 'free',
                pagination: true,
                autoplay: true,
                interval: 2000,
                perPage: 4,
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
                    },
                    400: {
                        perPage: 1,
                    }
                }
            }}
            className="slide-pagination">
            <SplideTrack>
                {
                    items?.map((item, index) => {
                        return (
                            <SplideSlide className="splide__slide p-2" key={index}>
                                <div className="position-relative">
                                    <img className="img-fluid rounded p-0" alt={item.title} src={item.image} />
                                    <div className="blogboxbg">
                                        <div className="blogfont-pos">
                                            <p>{item.category}</p>
                                            <h4>{item.title}</h4>
                                            <a className="blogfont-btn" target="_blank" href={item.blogUrl}>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        );
                    })
                }
            </SplideTrack>
        </Splide>
    );
}

export default AllServiceBlogSlider