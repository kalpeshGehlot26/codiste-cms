"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BlogSlider = () => {
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
                rewind: true,
                autoScroll: {
                    speed: 2,
                },
            }}
        >
            <SplideTrack>
                <SplideSlide className="splide__slide p-2">
                    <div className="position-relative">
                        <img className="img-fluid rounded p-0" alt="Blockchain" src="assets/images/blogs/Blog1.jpg" />
                        <div className="blogboxbg">
                            <div className="blogfont-pos">
                                <p>Blockchain</p>
                                <h4>
                                    Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Deleniti, deserunt.
                                </h4>
                                <a href="#" className="blogfont-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide p-2">
                    <div className="position-relative">
                        <img className="img-fluid rounded p-0" alt="" src="assets/images/blogs/Blog2.jpg" />
                        <div className="blogboxbg">
                            <div className="blogfont-pos">
                                <p>Blockchain</p>
                                <h4>
                                    Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Deleniti, deserunt.
                                </h4>
                                <a href="#" className="blogfont-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide p-2">
                    <div className="position-relative">
                        <img className="img-fluid rounded p-0" alt="" src="assets/images/blogs/Blog3.jpg" />
                        <div className="blogboxbg">
                            <div className="blogfont-pos">
                                <p>Blockchain</p>
                                <h4>
                                    Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Deleniti, deserunt.
                                </h4>
                                <a href="#" className="blogfont-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide p-2">
                    <div className="position-relative">
                        <img className="img-fluid rounded p-0" alt="" src="assets/images/blogs/Blog4.jpg" />
                        <div className="blogboxbg">
                            <div className="blogfont-pos">
                                <p>Blockchain</p>
                                <h4>
                                    Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Deleniti, deserunt.
                                </h4>
                                <a href="#" className="blogfont-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide p-2">
                    <div className="position-relative">
                        <img className="img-fluid rounded p-0" alt="" src="assets/images/blogs/Blog5.jpg" />
                        <div className="blogboxbg">
                            <div className="blogfont-pos">
                                <p>Blockchain</p>
                                <h4>
                                    Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Deleniti, deserunt.
                                </h4>
                                <a href="#" className="blogfont-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide p-2">
                    <div className="position-relative">
                        <img className="img-fluid rounded p-0" alt="" src="assets/images/blogs/Blog6.jpg" />
                        <div className="blogboxbg">
                            <div className="blogfont-pos">
                                <p>Blockchain</p>
                                <h4>
                                    Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Deleniti, deserunt.
                                </h4>
                                <a href="#" className="blogfont-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide p-2">
                    <div className="position-relative">
                        <img className="img-fluid rounded p-0" alt="" src="assets/images/blogs/Blog6.jpg" />
                        <div className="blogboxbg">
                            <div className="blogfont-pos">
                                <p>Blockchain</p>
                                <h4>
                                    Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Deleniti, deserunt.
                                </h4>
                                <a href="#" className="blogfont-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </SplideTrack>
        </Splide>
    );
};

export default BlogSlider;
