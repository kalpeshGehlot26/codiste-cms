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
                    <div className="col-auto d-flex">
                        <img className="career-cirimg" src="assets/images/career/chintan-patel.png" style={{width: "150px",height: "150px"}} />
                        <div className="d-flex flex-column justify-content-center">
                            <h4>DiveWallet</h4>
                            <p aria-controls="">CoFounder at Ninza NFT{" "}
                                <br />
                                Bolivar, New York
                            </p>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="secondsec-p">
                            I am pleased to say that working with Codiste Pvt Ltd has been a positive experience for our community. The project is now complete, and the feedback we have received on the platform has been overwhelmingly positive. Throughout the project, Codiste maintained open communication lines, regularly updating us on progress and following the agreed timeline. They delivered an app with impressive functionalities and accepted every challenge we gave them. Overall, we are satisfied with the outcome of the project and would recommend Codiste for their expertise, professionalism, and commitment to delivering high-quality work.
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                    <div className="col-auto d-flex">
                        <img className="career-cirimg" src="assets/images/career/chintan-patel.png" style={{width: "150px",height: "150px"}} />
                        <div className="d-flex flex-column justify-content-center">
                            <h4>E-Commerce Company</h4>
                            <p aria-controls="">Managing Director
                                <br />
                                Australia
                            </p>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="secondsec-p">
                            They communicate clearly and outline the product roadmap for us. It has been very easy to work with them.Since the launch, the client has seen success and has been satisfied with Codiste pvt ltd’s quality product. The team has been prompt and dedicated to their work, pushing the timelines to meet them and deliver effectively. Overall, they’ve stood out for their communication skills.
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                    <div className="col-auto d-flex">
                        <img className="career-cirimg" src="assets/images/career/chintan-patel.png" style={{width: "150px",height: "150px"}} />
                        <div className="d-flex flex-column justify-content-center">
                            <h4>Medizen App</h4>
                            <p aria-controls="">CEO <br />Johannesburg, South Africa
                            </p>
                        </div>
                    </div>
                    <div className="p-3">
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
