import React from "react";
import EventSlider from "../component/career/eventSlider";
import EmployeeSlider from "../component/career/employeeSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";

export const metadata = {
	title: "Explore Career Opportunities with Blockchain Development Company | Codiste",
	description: "As a blockchain development company, we're rapidly growing and seeking innovative team members to join us. Explore exciting career opportunities now!!"
};

const Career = () => {
	return (
		<div>
			<div className="container container-fluid py-4 firstsec ">
				<div className=" d-flex align-items-center flex-column justify-content-center about-mainsec">
					<h1 className="all-head text-center my-3 ">
						Ready to Do Something Great? Explore Career
						Opportunities
					</h1>
				</div>
			</div>
			<div className="container container-fluid ">
				<div className="row careermain">
					<div className="col-xl-6 col-md-5 col-sm-12 mb-5">
						<img className='img-fluid d-flex align-items-center justify-content-center' src="assets/images/main/Career_.png"
							alt="Team" />

					</div>
					<div className="col-xl-6 col-md-7 col-sm-12 mb-5 ">

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
						<h1>Why Join Codiste?</h1>
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
				<h1 className="all-head text-center">
					Beyond the Code: Exploring Life at Codiste
				</h1>
				<p className="secondsec-p text-center mb-5">A Peek into Codiste's Dynamic Culture</p>
				<div className="row mt-5">
					<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
						<div className="service-block p-4 h-100">
							<img src="assets/images/career/coworking.png" />
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
							<img src="assets/images/career/balance.png" />
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
							<img src="assets/images/career/increase.png" />
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
							<img src="assets/images/career/Collaborative Environment.png" />
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

			<div className="container container-fluid  firstsec">
				<h1 className="all-head text-center">
					Codiste Reflections Through the Lens!
				</h1>
				<EventSlider />
			</div>
			<div className="py-5">
				<div className="container container-fluid  firstsec">
					<h1 className="all-head text-center">
						Our People, Our Success: The Codiste Team Speaks Out
					</h1>
					<EmployeeSlider />
				</div>
			</div>


			<div className="firstsec bg-color">
				<div className="container container-fluid mb-5  py-5">
					<div className="mb-5">
						<h1 className="all-head text-center">Discover Your Dream Job: Current Openings at Codiste</h1>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6 col-12 pb-3 ">
							<div className="service-block p-4 h-100 d-flex flex-column justify-content-between">
								<div>
									<h3 className="secondsec-head">
										Business Development Executive
									</h3>
									<p className="secondsec-p">
										No. of vacancy: 1 <br />
										Experience Required : 4 to 5 yrs
									</p>
								</div>
								<div>
									<a href="#apply-now" className="apply-btn">Apply Now</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 pb-3 ">
							<div className="service-block p-4 h-100 d-flex flex-column justify-content-between">
								<div><h3 className="secondsec-head">Content Writer </h3>
									<p className="secondsec-p">
										No of vacancy : 1<br />
										Experience: 2+ years
									</p>
								</div>
								<div>
									<a href="#apply-now" className="apply-btn">Apply Now</a>
								</div>

							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 pb-3 ">
							<div className="service-block p-4 h-100 d-flex flex-column justify-content-between">
								<div>
									<h3 className="secondsec-head">
										Mernstack developer
									</h3>
									<p className="secondsec-p">
										No of vacancy : 1 <br />
										Experience : 2 -3 yrs
									</p>
								</div>
								<div>
									<a href="#apply-now" className="apply-btn">Apply Now</a>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-lg-5 py-0" id="apply-now">
				<h1 className="text-center all-head mb-5">	Are you a professional techie?</h1>
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec" >
							<h1 className="">
								Apply now Our HR team will reach out for the further process.
							</h1>


						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									Apply for your dream job
								</h2>
								<CaseStudyForm />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Career;
