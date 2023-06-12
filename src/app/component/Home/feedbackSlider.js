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
                            <img className="img-fluid my-4 client-logohome p-0 w-auto" alt="Ninza NFT" src="assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png" loading="lazy" />
                        </div>
                        <p className="secondsec-p">
                            They communicate clearly and outline the product roadmap for us. It has been very easy to work with them. Made us profitaable on NFT Marketplace and which made amazing journey.
                        </p>
                        <h5>Ninza NFT</h5>
                        <p className="mb-5">CoFounder</p>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-center"><img className="img-fluid my-4 client-logohome p-0 w-auto" alt="BonFire - Bonfire Real-Estate Fractionalized Marketplace" src="assets/images/client-logos/bonfire.png" loading="lazy" /></div>
                        <p className="secondsec-p">
                            They truly do everything up to a very high standard. Codiste pvt ltd has successfully delivered a functional app praised in many publications for its neatness and speed. They have frequently communicated via Slack and managed the project efficiently using Jira. Their extensive knowledge and humble attitude have been hallmarks of their work.
                        </p>
                        <h5>The Real Estate Investment platform</h5>
                        <p className="mb-5">CTO and Co-Founder</p>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="img-fluid my-4 client-logohome p-0  w-auto" alt="Medizen - Pill Reminder and Drug interaction Detection app" src="assets/images/client-logos/Medizen.png" loading="lazy" />
                        </div>
                        <p className="secondsec-p">
                            Codiste pvt ltd delivered the project within the given timeline and budget. Their communication and collaboration were outstanding using Slack, Lucidhart, and Miro. The team was reliable, well-organized, and proactive.
                        </p>
                        <h5>Medizen App</h5>
                        <p className="mb-5">CEO</p>
                    </div>
                </SplideSlide>
            </SplideTrack>
        </Splide>
    );
};

export default FeedbackSlider;
