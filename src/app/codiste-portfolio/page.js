"use client";
import React, { useState } from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import caseStudyItems from "../data/caseStudyItems";
import CaseStudyList from "../component/CaseStudyList/caseStudyList";
import Link from "next/link";

const metadata = {
	title: "Showcasing Our Blockchain Development Solutions | Portfolio | Codiste",
	description:
		"Explore our portfolio and see what we delivered to figure out how it helped drive forward the development of tech and software solutions for various industries.",
};

const CodistePortfolio = () => {

	const [caseStudyCount, setCaseStudyCount] = useState(3);
	const [totalCount, setTotalCount] = useState(null);

	return (
		<div>

			<div className="bg-color py-lg-3">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">Our Portfolio</h1>
									<p className="all-p me-5 my-4">Discover how our expertise and innovation have helped businesses like yours
										achieve success. Explore our case studies and see what we delivered to figure out how it helped drive forward the
										development of tech & software solutions for various industries.
									</p>
									<Link href="/contact" className="book-btn">
										Let's Connect
									</Link>
								</div>
								<div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0"><img className='img-fluid' alt='OurPortfolio' src="assets/images/Our Portfolio.png" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<ClientSlider />

			<div className="container container-fluid py-5" id="caseStudyList">
				<div className="text-center">
					<h2 className="all-head mb-5">
						Innovation in Action: Real-World Case Studies from
						Codiste
					</h2>
				</div>
				<CaseStudyList
					caseStudyItems={caseStudyItems}
					caseStudyCount={caseStudyCount}
					setTotalCount={setTotalCount}
				/>
				{totalCount > caseStudyCount ? (

					<div className="text-center">
						<button className="book-btn"
							onClick={() =>
								setCaseStudyCount(
									(prevState) => prevState + 3
								)
							}>Explore More</button>
					</div>

				) : null}
			</div>

			<div className="container container-fluid py-5">
				<h2 className="text-center all-head">Let’s Get Started </h2>
				<section className="steps steps-area">
					<div className="container">
						<ul className="timeline">
							<li className="timeline-box">
								<h4>Customer Enquiry</h4>
								<p>
									The prospect contacts us to discuss their
									project requirements, challenges, and goals.
								</p>
								<span>1</span>
							</li>
							<li className="timeline-box">
								<h4>Codiste Reverts</h4>
								<p>
									Our team responds to the client,
									acknowledging their request and scheduling a
									call to discuss the project further.
								</p>
								<span>2</span>
							</li>
							<li className="timeline-box ">
								<h4>Project Discussion</h4>
								<p>
									Our experts meet with the potential client
									to better understand the project's scope and
									objectives. This includes analyzing existing
									systems, identifying potential risks, and
									developing a project roadmap.
								</p>
								<span>3</span>
							</li>
							<li className="timeline-box ">
								<h4>Cost Estimation and Delivery Dates</h4>
								<p>
									Codiste provides the client with a detailed
									project plan, including cost estimates and
									delivery dates, based on the scope and
									requirements discussed in the previous step.
								</p>
								<span>4</span>
							</li>
							<li className="timeline-box ">
								<h4>Development</h4>
								<p>
									Our experienced professionals start working
									on the project's development, adhering to
									the project plan while maintaining clear
									communication with the client.
								</p>
								<span>5</span>
							</li>
							<li className="timeline-box ">
								<h4>Project Delivery</h4>
								<p>
									After thorough testing and quality assurance
									checks, we deliver and deploy the final
									product to the client, ensuring that it
									meets all the specified requirements and is
									ready for use.
								</p>
								<span>6</span>
							</li>
						</ul>
					</div>
				</section>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className="row  d-flex align-items-center">
							<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec p-5">
								<h1>
									Ready to take your business to the next level?
								</h1>
								<h2 >
									Fill out our lead form to contact our team and
									learn how Codiste can help you drive growth and
									success.
								</h2>
							</div>
							<div className="col-lg-6 col-md-12 ">
								<div className="need-block h-100">
									<h2 className="">
										How Can We <b>Help?</b>{" "}
									</h2>
									<CaseStudyForm />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

		</div>
	);
};

export default CodistePortfolio;
