"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import employeeTestimonial from "../../data/employeeTestimonial";

const EmployeeSlider = () => {
    return (
        <Splide
            hasTrack={false}
            options={{
                drag: 'free',
                focus: 'center',
                pagination: true,
                autoplay: true,
                interval: 2000,
                perPage: 1,
                arrows: false,
                autoScroll: {
                    speed: 2,
                },
            }}
        >
            <SplideTrack>
                {
                    employeeTestimonial?.map((testimonial, index) => {
                        return (
                            <SplideSlide className="splide__slide" key={index}>
                                <div className="d-flex career-block p-3 careerslide-height flex-wrap col-10 col-lg-10 col-xxl-8 mx-auto justify-content-between">
                                    <div className="col-12 col-lg-auto flex-column d-flex align-items-center">
                                        <img
                                            className="career-cirimg"
                                            src={testimonial.url}
                                            alt={testimonial.name}
                                            loading="lazy"
                                        />
                                        <span className="aboutall-h">
                                            {testimonial.name}
                                        </span>
                                        <br />{" "}
                                        <span className="secondsec-p">
                                            {testimonial.designation}
                                        </span>
                                    </div>
                                    <div className="col-12 col-lg-7 mt-4  secondsec-p">
                                        <p className="careerblock-margin text-start">
                                            {testimonial.testimonial}
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        );
                    })
                }
            </SplideTrack>
        </Splide>
    );
};

export default EmployeeSlider;
