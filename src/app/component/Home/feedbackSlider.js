"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const FeedbackSlider = () => {
    return (
        <Splide
            hasTrack={false}
            options={{
                type: 'loop',
                drag: 'free',
                pagination: true,
                autoplay: true,
                interval: 2000,
                perPage: 1,
                arrows: false,
                rewind: true,
                autoScroll: {
                    speed: 2,
                },
            }}
        >
            <SplideTrack>
                <SplideSlide className="splide__slide">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="img-fluid my-4 client-logohome p-0 w-auto" alt="DiveWallet" src="assets/images/client-logos/DiveWallet Logo.png" />
                        </div>
                        <p className="secondsec-p">
                            I am pleased to say that working with Codiste Pvt Ltd has been a positive experience for our community. The project is now complete, and the feedback we have received on the platform has been overwhelmingly positive. Throughout the project, Codiste maintained open communication lines, regularly updating us on progress and following the agreed timeline. They delivered an app with impressive functionalities and accepted every challenge we gave them. Overall, we are satisfied with the outcome of the project and would recommend Codiste for their expertise, professionalism, and commitment to delivering high-quality work.
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-center"><img className="img-fluid my-4 client-logohome p-0 w-auto" alt="DiveWallet" src="assets/images/client-logos/bonfire.png" /></div>
                        <p className="secondsec-p">
                            They truly do everything up to a very high standard. Codiste pvt ltd has successfully delivered a functional app praised in many publications for its neatness and speed. They have frequently communicated via Slack and managed the project efficiently using Jira. Their extensive knowledge and humble attitude have been hallmarks of their work.
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="img-fluid my-4 client-logohome p-0  w-auto" alt="DiveWallet" src="assets/images/client-logos/Medizen.png" />
                        </div>
                        <p className="secondsec-p">
                            Codiste pvt ltd delivered the project within the given timeline and budget. Their communication and collaboration were outstanding using Slack, Lucidhart, and Miro. The team was reliable, well-organized, and proactive.
                        </p>
                    </div>
                </SplideSlide>
            </SplideTrack>
        </Splide>
    );
};

export default FeedbackSlider;
