import React from "react";
import EventSlider from "../component/career/eventSlider";
import EmployeeSlider from "../component/career/employeeSlider";

export const metadata = {
	title: "Explore Career Opportunities with Blockchain Development Company | Codiste",
	description: "As a blockchain development company, we're rapidly growing and seeking innovative team members to join us. Explore exciting career opportunities now!!"
};

const Career = () => {
	return (
		<div>
			<div className="container container-fluid py-4 firstsec">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head text-center my-3 ">
						Ready to Do Something Great? Explore Career
						Opportunities
					</h1>
					<p className="secondsec-p text-center">
						Join our team and drive innovation in the rapidly
						growing tech industry. We are dedicated to empowering
						businesses with emerging technologies and are always
						looking for talented individuals to help us shape the
						future of our enterprise software development services.
						Explore exciting career opportunities and make your mark
						with us today.
					</p>
					<button className="book-btn mt-2">Explore Opportunities</button>
				</div>
			</div>

			<div className="container container-fluid ">
				<div className="row">
					<div className="col-xl-6 col-sm-12 mb-5">
						<img
							className="img-fluid d-flex align-items-center justify-content-center"
							style={{height: "400px", width : "auto", margin: "auto"}}
							src="assets/images/main/Career_.png"
							alt=""
						/>
					</div>
					<div className="col-xl-6 col-sm-12 mb-5 ">
						<h1 className="all-head text-center mb-4">Join Our Team</h1>
						<h3 className="mb-3">
							Are you passionate about technology and looking for
							a dynamic career in the tech industry?{" "}
						</h3>
						<p className="secondsec-p">
							Our company is at the forefront of innovation,
							providing advanced software and tech solutions that
							empower and help organizations & businesses to
							succeed. We seek growth-oriented and talented
							individuals to empower our team with technical
							expertise. With a focus on collaboration &
							creativity, we have exciting opportunities for
							growth and development in a fast-paced and
							supportive work environment.
						</p>
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
						<button className="book-btn">Apply Now</button>
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
							<img src="assets/images/career/community.png" />
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
                    Codiste Reflections Through the Lens
				</h1>
                <EventSlider />
			</div>

			<div className="container container-fluid  firstsec">
				<h1 className="all-head text-center">
                    Our People, Our Success: The Codiste Team Speaks Out
				</h1>
                <EmployeeSlider />
			</div>

			<div className="firstsec bg-color">
				<div className="container container-fluid mb-5  py-5">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">Discover Your Dream Job: Current Openings at Codiste</h1>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100 ">
								<h3 className="secondsec-head">
									Business Development Executive
								</h3>
								<p className="secondsec-p">
									No. of vacancy: 1 <br />
									Experience Required : 4 to 5 yrs
								</p>

								<button className="book-btn">Apply Now</button>
							</div>
						</div>
						<div className="col-md-4 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100 ">
								<h3 className="secondsec-head">Content Writer </h3>
								<p className="secondsec-p mt-5">
									No of vacancy : 1<br />
									Experience: 2+ years
								</p>
								<button className="book-btn">Apply Now</button>
							</div>
						</div>
						<div className="col-md-4 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100 ">
								<h3 className="secondsec-head">
									Mernstack developer
								</h3>
								<p className="secondsec-p mt-5">
									No of vacancy : 1 <br />
									Experience : 2 -3 yrs
								</p>
								<button className="book-btn">Apply Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec p-5">
							<h2 className="">
								Are you a professional techie? Fill out the form
							</h2>
							<h1>
								Our team will reach out for the further process.
							</h1>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<div className="">
									<input
										className="need-form"
										type="text"
										id="name"
										name="name"
										placeholder="Name*"
									/>
									<br />
									<input
										className="need-form"
										type="email"
										id="email"
										name="email"
										placeholder="Email*"
									/>
									<br />
									<input
										className="need-form"
										type="number"
										id="number"
										name="number"
										placeholder="Number*"
									/>
									<br />
									<select
										name="services"
										id="_services"
										className="need-form"
									>
										<option>Select Service*</option>
										<option>Blockchain Development</option>
										<option>Machine Learning</option>
										<option>Web Development</option>
										<option>Mobile App Development</option>
										<option>
											Metaverse Enterprise Solution
										</option>
										<option>
											Nft and Crypto Development
										</option>
										<option>Startup Development</option>
									</select>
									<textarea
										className="need-form"
										id="exampleFormControlTextarea1"
										rows="3"
										placeholder="Your Message*"
									></textarea>
									<button className="book-btn">
										Book a Call
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Career;
