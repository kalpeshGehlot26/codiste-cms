import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "ML Estimation | Machine Learning  Services | Codiste",
	description:
		"HVAC industry is a highly competitive field, and with so many contractors vying for the same projects, it can be difficult to stand out and win",
};

const MLPortfolio = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">
										Machine Learning Estimation
									</h1>
									<p className="all-p me-5 my-4">
										Streamline HVAC project bidding with ML estimation, automating drawing annotation, and generating accurate bills of materials. Save time, differentiate yourself in the industry, and leverage innovative technology for detailed quantity take-offs. They raised CA$100K in funding over 1 round demonstrates a commitment to innovation and potential for growth in the HVAC bidding market, further solidifying their position as leaders in the industry.
									</p>
									<Link
										target="_blank"
										href="/contact"
										className="book-btn"
									>
										Book an Expert Session
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										src="/assets/images/case-ml/MLEstimation.png"
										alt="MLEstimation - AI Tool to Analyse your Building material"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center">
					<h1 className="all-head">Client Requirement</h1>
				</div>

				<div className="container container-fluid">
					<div className="row">
						<div className="col-xl-6 col-sm-12 mb-5 text-center">
							<img
								className="img-fluid"
								style={{ padding: "20px" }}
								loading="lazy" src="/assets/images/case-ml/Problem 05.png"
								alt="Client Requirement"
							/>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<p className="secondsec-p">
								Our client, a HVAC contractor, required a
								software solution that could help them create
								detailed quantity take-offs from construction
								drawings quickly and accurately. They wanted a
								user-friendly interface that was easy to
								navigate and understand, and that would allow
								them to create more accurate and competitive
								bids.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center">
					<h1 className="all-blog">Challenges </h1>
				</div>

				<div className="container container-fluid">
					<div className="row">
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column order-2 order-xl-1">
							<p className="secondsec-p">
								The client faced the challenge of time-consuming
								and tedious manual counting, which took valuable
								time away from other aspects of their business.
								In addition, the accuracy of their quantity
								take-offs was critical to winning projects, and
								any errors could result in underbidding or
								losing bids altogether.
							</p>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5 text-center order-1 order-xl-2">
							<img
								className="img-fluid"
								style={{ padding: "20px" }}
								loading="lazy" src="/assets/images/case-ml/Challange 04.png"
								alt="Challenges"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-color">
				<div className="container container-fluid py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head"> Features of Product</h1>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="diwallet-style">
									<li className="">
										<img
											className="img-fluid"
											alt="Data Extraction Algorithms"
											loading="lazy" src="/assets/images/case-ml/Data Extraction Algorithms.png"
										/>
										<p>
											<span className="fs-3">
												Data Extraction Algorithms
											</span>
											<br />
											<span className="secondsec-p">Advanced algorithms extract data
												from construction drawings to
												provide detailed and accurate
												information about materials and
												equipment needed for a project.</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Detailed & Accurate Project Information"
											loading="lazy" src="/assets/images/case-ml/Detailed & Accurate Project Information.png"
										/>
										<p>
											<span className="fs-3">
												Detailed & Accurate Project
												Information
											</span>
											<br />
											<span className="secondsec-p">		Software provides detailed and
												accurate project resource and cost
												information.</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="User-Friendly Interface"
											loading="lazy" src="/assets/images/case-ml/User-Friendly Interface.png"
										/>
										<p>
											<span className="fs-3">
												User-Friendly Interface
											</span>
											<br />
											<span className="secondsec-p">Software has a user-friendly
												interface for efficient and
												effective use. Helps clients make
												the most out of its functionalities.</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Reduce Time and Cost"
											loading="lazy" src="/assets/images/case-ml/Reduce Time and Cos.png"
										/>
										<p>
											<span className="fs-3">
												Reduce Time and Cost
											</span>
											<br />
											<span className="secondsec-p">	Software saves time and money by
												eliminating manual counting,
												allowing the client to focus on
												other aspects of their business and
												complete projects efficiently.</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Enhanced Bid Precision and Competitiveness"
											loading="lazy" src="/assets/images/case-ml/Enhanced Bid Precision and Competitiveness.png"
										/>
										<p>
											<span className="fs-3">
												Enhanced Bid Precision and
												Competitiveness
											</span>
											<br />
											<span className="secondsec-p">Improved project cost estimation and
												competitive bidding through accurate
												and detailed material and equipment
												information extraction.</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Facility Maintenance Planning"
											loading="lazy" src="/assets/images/case-ml/Facility Maintenance Planning.png"
										/>
										<p>
											<span className="fs-3">
												Facility Maintenance Planning
											</span>
											<br />
											<span className="secondsec-p">Software for Efficient Building
												Maintenance Planning, Prolongs
												Equipment Life and Reduces
												Maintenance Costs.</span>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="d-flex justify-content-center">
							<Link
								className="book-btn"
								href="https://mlestimation.com/"
								target="_blank"
							>
								Live Project
							</Link>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head text-center my-3 ">
						What did we deliver?
					</h1>
					<p className="secondsec-p text-center">
						We delivered a software solution that met the client's
						requirements and addressed their challenges. Our
						software solution provided the client with detailed and
						accurate quantity take-offs from construction drawings,
						saving them time and money, and helping them to create
						more accurate and competitive bids. The user-friendly
						interface made it easy for the client to use and get the
						most out of the software. With our solution, the client
						was able to bid on HVAC projects with confidence,
						knowing they had the most accurate and up-to-date
						information. The software solution was not only useful
						for HVAC contractors but also for architects and
						engineers, as well as building owners and facility
						managers. They could use the software to plan for future
						maintenance and upgrades.
					</p>
				</div>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head">
								Witness How We Drive Soul in Ideas!
							</h1>
						</div>
						<div
							id="carouselExampleDark"
							className="carousel carousel-dark slide carousel-box"
							data-bs-ride="carousel"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="3"
									aria-label="Slide 4"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="4"
									aria-label="Slide 5"
								></button>

							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="ML Estimation-1"
												loading="lazy" src="/assets/images/case-ml/ML Estimation-1.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="ML Estimation-2"
												loading="lazy" src="/assets/images/case-ml/ML Estimation-2.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="ML Estimation-3"
												loading="lazy" src="/assets/images/case-ml/ML Estimation-3.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="ML Estimation-4"
												loading="lazy" src="/assets/images/case-ml/ML Estimation-4.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="ML Estimation-5"
												loading="lazy" src="/assets/images/case-ml/ML Estimation-5.png"
											/>
										</div>
									</div>
								</div>

							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">
									Previous
								</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-4">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center">
						<h1 className="all-blog">Technology Stack</h1>
						<p className="all-p  mb-5 text-center">
							We pride ourselves on our proven track record with
							20+ technologies and delivering innovative,
							customized IT solutions.
						</p>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul className="tech-style">
								<li>
									<img
										className="img-fluid"
										loading="lazy" src="/assets/images/tech/flutter.png"
										alt="flutter"
									/>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between flex-wrap py-3">
					<p>How you transform your ideas into reality?</p>
					<Link href="https://www.codiste.com/machine-learning-development-company" className="book-btn">
						Explore more
					</Link>
				</div>
			</div>
			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head text-center">
								Satisfied clients is our proof of our excellence!
							</h1>
						</div>

						<div className="carousel-inner career-block">
							<div className="d-flex align-items-center text-center flex-column custom-crousel">
								<h3>
									It was an absolute pleasure working with
									Nishant and his team for our Blockchain
									Product. Not only is Nishant an engineer in
									making the product, he also cares and gives
									his opinion on the outcome of the design.
									When it comes to delivery, the breakdown of
									the milestone is fair and accurate. Lastly,
									we had a lot of changes near the end of the
									sprint and the team was flexible about it.
									honest work, you get what you pay for.
								</h3>
								<div className="d-flex align-items-center flex-column">
									<img
										loading="lazy" src="/assets/images/iCrowsel.png"
										className="img-fluid"
										alt="iCrowsel"
									/>
									<div className="my-3">
										<img
											className="img-fluid"
											loading="lazy" src="/assets/images/client-logos/Ml Estimation.png"
											alt="MLEstimation"
										/>
									</div>
									<h5>MLEstimation</h5>
									<p>Founder</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<section>
					<div>
						<h1 className="all-head text-center mb-lg-5 mb-0">
							Reach out to Us!
						</h1>
					</div>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12  needsec p-4">
							<h1>
								Get expert advice on adopting and integrating advanced technologies.<br />
								Stay compliant, stay ahead!
							</h1>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<CaseStudyForm text="Collaborate on Your Project" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default MLPortfolio;
