"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CaseStudySlider = () => {
    return (
        <Splide
            hasTrack={false}
            options={{
                type: 'loop',
                drag: 'free',
                focus: 'center',
                pagination: true,
                autoplay: false,
                interval: 2000, 
                perPage: 4,
                arrows: false,
                autoScroll: {
                    speed: 2,
                },
            }}
        >
            <SplideTrack>
                <SplideSlide className="splide__slide p-2">
                    <div className="card">
                        <img
                            src="assets/images/counter.png"
                            className="card-position"
                            alt="Machine Learning Estimation"
                        />
                        <div className="card-body">
                            <p className="card-text">Website </p>
                            <h5 className="card-title">
                                Machine Learning Estimation
                            </h5>
                            <a href="#" className=" mt-3 case-btn">
                                CASE STUDY
                            </a>
                        </div>
                    </div>
                </SplideSlide>

               
            </SplideTrack>
        </Splide>
    );
}

export default CaseStudySlider