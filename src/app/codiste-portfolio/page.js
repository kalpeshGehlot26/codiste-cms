import React from "react";
import ClientSlider from "../component/Home/clientSlider";

export const metadata = {
	title: "Showcasing Our Blockchain Development Solutions | Portfolio | Codiste",
	description:
		"Explore our portfolio and see what we delivered to figure out how it helped drive forward the development of tech and software solutions for various industries.",
};

const CodistePortfolio = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec d-flex align-items-center">
							<div className="col-lg-6 col-sm-12 mb-5 mb-lg-0">
								<h1 className="all-head">Our Portfolio</h1>
								<p className="all-p me-5">
									Discover how our expertise and innovation
									have helped businesses like yours achieve
									success. Explore our case studies and see
									what we delivered to figure out how it
									helped drive forward the development of tech
									& software solutions for various industries.
								</p>
								<button className="book-btn">
									Explore More
								</button>
							</div>
							<div className="col-lg-6 col-sm-12 firstsecimg ">
								<img
									className="img-fluid"
									src="assets/images/Portfolio.png"
								/>
							</div>
						</div>
					</section>
				</div>
			</div>

			<ClientSlider />

			<div class="container container-fluid py-5">
				<div class="text-center">
					<h2 class="all-head mb-5">
						Innovation in Action: Real-World Case Studies from
						Codiste
					</h2>
				</div>
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
						<div>
							<img
								class="img-fluid"
								src="assets/images/counter.png"
								alt=""
							/>
						</div>
						<h5 class="mt-3">Machine Learning Estimation</h5>
						<a href="#" class=" mt-3 case-btn">
							Read More
						</a>
					</div>
				</div>
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
									requirements discussed in the previous step
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
								<h4>Project Kickoff </h4>
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

			<div className="container container-fluid py-5">
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec p-5">
							<h1>
								Ready to take your business to the next level?
							</h1>
							<h2 className="">
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
										<option>Service*</option>
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
										placeholder="Message*"
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

export default CodistePortfolio;
