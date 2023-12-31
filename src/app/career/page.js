import React from "react";
import EventSlider from "../component/career/eventSlider";
import EmployeeSlider from "../component/career/employeeSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";

export const metadata = {
	title: "Explore Career Opportunities with Blockchain Development Company | Codiste",
	description: "As a blockchain development company, we're rapidly growing and seeking innovative team members to join us. Explore exciting career opportunities now!!",
	images: "https://www.codiste.com/assets/images/main/Career_.png",
	openGraph: {
		title: "Enterprise-Grade Metaverse Development Company | Codiste",
		description: "Explore our metaverse development services and embark on a journey into the decentralized digital universe. Embrace the power of the Metaverse services now!!",
		images: "https://www.codiste.com/assets/images/main/Career_.png",
		url: 'https://www.codiste.com/career/'
	},
	alternates: {
		canonical: 'https://www.codiste.com/career',
	}
};

const Career = () => {
	return (
		<div>
			<div className="container container-fluid py-4 firstsec">
				<div className=" d-flex align-items-center flex-column justify-content-center about-mainsec">
					<h1 className="all-blog text-center my-3 ">
						Ready to Do Something Great? Explore Career
						Opportunities
					</h1>
				</div>
			</div>

			<div className="container container-fluid">
				<div className="row careermain">
					<div className="col-xl-6 col-md-5 col-sm-12 mb-5 p-4">
						<img className='img-fluid d-flex align-items-center justify-content-center' src="assets/images/main/Career_.png"
							alt="Team" />
					</div>
					<div className="col-xl-6 col-md-7 col-sm-12 mb-5 p-4">
						<h3 className="mb-3">Are you passionate about technology and looking for a dynamic career in the tech
							industry? </h3>
						<p className="secondsec-p mb-5">Our company is at the forefront of innovation, providing advanced software and
							tech solutions that
							empower and help organizations & businesses to succeed. We seek growth-oriented and talented
							individuals to empower our team with technical expertise. With a focus on collaboration &
							creativity, we have exciting opportunities for growth and development in a fast-paced and supportive
							work environment.
						</p>
						<a href="#apply-now" className="book-btn">Explore Opportunities</a>
					</div>
				</div>
			</div>

			<div className="container-fluid p-0">
				<section>
					<div className="blacksec">
						<h2>Why Join Codiste?</h2>
						<p className="my-5">
							Codiste has a dynamic work environment with a blend
							of innovation and collaboration for mutual
							development and growth.
							<br /> Our work culture promotes high-value talent
							by recognizing and appreciating efforts to motivate
							the team for challenges. <br />
							Apart from that, you get to work with industry
							leaders, innovators, and tech professionals in
							developing and <br />
							building with emerging technologies for our global
							clientele.
						</p>
						<a href="#apply-now" className="book-btn">Apply Now</a>
					</div>
				</section>
			</div>

			<div className="container container-fluid firstsec">
				<h2 className="all-blog text-center">
					Beyond the Code: Exploring Life at Codiste
				</h2>
				<p className="secondsec-p text-center mb-5">A Peek into Codiste's Dynamic Culture</p>
				<div className="row mt-5">
					<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
						<div className="service-block p-4 h-100">
							<img src="assets/images/career/coworking.png" alt="Competitive Compensation" />
							<h2 className="secondsec-head mt-4">
								Competitive Compensation
							</h2>
							<p className="secondsec-p">
								Codiste offers a highly competitive compensation
								package to attract and retain top talent,
								including salary, benefits, and bonus
								opportunities.
							</p>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
						<div className="service-block p-4 h-100">
							<img src="assets/images/career/balance.png" alt="Work Life Balance" />
							<h3 className="secondsec-head mt-4">
								Work-life
								<br />
								Balance
							</h3>
							<p className="secondsec-p">
								Codiste values work-life balance and supports
								employees' well-being with flexible work
								arrangements, remote work options, and
								comprehensive health and wellness benefits.
							</p>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
						<div className="service-block p-4 h-100">
							<img src="assets/images/career/increase.png" alt="Opportunity" />
							<h3 className="secondsec-head mt-4">
								{" "}
								Opportunities <br />
								for Growth
							</h3>
							<p className="secondsec-p">
								Our employees have access to a range of
								opportunities for growth and development,
								including professional training, mentoring, and
								career advancement programs.
							</p>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
						<div className="service-block p-4 h-100">
							<img src="assets/images/career/Collaborative Environment.png" alt="Collaborative Environment" />
							<h3 className="secondsec-head mt-4">
								Collaborative Environment
							</h3>
							<p className="secondsec-p">
								From brainstorming sessions to cross-functional
								projects, we encourage open communication and
								teamwork to drive our mission forward and
								achieve our goals.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid  firstsec">
					<h2 className="all-blog text-center">
						Codiste Reflections Through the Lens!
					</h2>
					<EventSlider />
				</div>
			</div>

			<div className="firstsec">
				<div className="container container-fluid mb-5  py-5">
					<div className="mb-5">
						<h2 className="all-blog text-center">Discover Your Dream Job: Current Openings at Codiste</h2>
					</div>
					<div className="row d-flex justify-content-center">
						<div className="col-lg-4 col-md-6 col-12 pb-3 ">
							<div className="service-block p-4 h-100 d-flex flex-column justify-content-between">
								<div>
									<h3 className="secondsec-head">
										Full Stack Developer
									</h3>
									<p className="secondsec-p">
										No. of vacancy: 1 <br />
										Experience Required :3+ years
									</p>
								</div>
								<div>
									<a href="#apply-now" className="apply-btn me-2">Apply Now</a>
									<a href="career/full-stack-developer" className="apply-btn" target="_blank" aria-label="Visit Codiste Pvt Ltd Facebook Profile">Explore Opportunity</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 pb-3 ">
							<div className="service-block p-4 h-100 d-flex flex-column justify-content-between">
								<div><h3 className="secondsec-head">Content Writer </h3>
									<p className="secondsec-p">
										No of vacancy : 1<br />
										Experience: 3+ years
									</p>
								</div>
								<div>
									<a href="#apply-now" className="apply-btn me-2">Apply Now</a>
									<a href="career/content-writer" className="apply-btn" target="_blank" aria-label="Visit Codiste Pvt Ltd Facebook Profile">Explore Opportunity</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 pb-3 ">
							<div className="service-block p-4 h-100 d-flex flex-column justify-content-between">
								<div>
									<h3 className="secondsec-head">
										Business Development Executive
									</h3>
									<p className="secondsec-p">
										No of vacancy : 1 <br />
										Experience Required : 2+ years
									</p>
								</div>
								<div>
									<a href="#apply-now" className="apply-btn me-2">Apply Now</a>
									<a href="career/bde" className="apply-btn" target="_blank" aria-label="Visit Codiste Pvt Ltd Facebook Profile">Explore Opportunity</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<h2 className="all-head text-center">
						Our People, Our Success: The Codiste Team Speaks Out
					</h2>
					<EmployeeSlider />
				</div>
			</div>

			<div className="container container-fluid py-lg-5 py-5" id="apply-now">
				<h2 className="text-center all-head mb-lg-5 mb-0">Are you a professional techie?</h2>
				<section>
					<div className="row d-flex align-items-center">
						<div className="col-lg-6 col-md-12  needsec p-4" >
							<h2 className="">
								Apply now Our HR team will reach out for the further process.
							</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									Apply for your dream job
								</h2>
								<CaseStudyForm text="Contact us" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Career;
