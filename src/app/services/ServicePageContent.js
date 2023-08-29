"use client";
import React, { useState } from "react";
import ClientSlider from "../component/Home/clientSlider";
import TechStack from "../component/service/techStack";
import ServiceList from "../component/service/serviceItems";
import Industries from "../component/service/industries";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import mainServiceList from "../data/services/mainServiceList";
import Link from "next/link";
import "../../style.css";
import "../../external.css";
import "../../Newstyle.css";
import jsonData from "../data/schema";

const limit = 4;
const category = "47,43,55,6,57";

const ServicePageContent = () => {
	const [serviceCount, setServiceCount] = useState(6);
	const [totalServiceCount, setTotalServiceCount] = useState(null);

	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.ServicesAll) }}
			/>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
									<h1 className="all-head">Our Services</h1>
									<p className="all-p mb-4">We bring the best people for a one-stop tech & dev support
										ecosystem catering to businesses, startups, and enterprises from various sectors and industries. We are
										your partner in accelerating innovation and growth with web and app solutions in emerging, rapidly
										growing technologies to help you elevate your user and customer experience.
									</p>
									<Link href="/contact" className="book-btn">
										Contact Us
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2 p-4"><img className='img-fluid'
									src="assets/images/main/firstsecimg.png" alt="Services" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid py-5" >
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h2 className="all-head">Services We Offer</h2>
					</div>
					<ServiceList
						serviceItems={mainServiceList}
						serviceCount={serviceCount}
						setTotalServiceCount={setTotalServiceCount}
					/>
					{totalServiceCount > serviceCount ? (
						<div className="d-flex align-items-center justify-content-center">
							<button
								className="book-btn mt-3 "
								onClick={() =>
									setServiceCount(
										(prevState) => prevState + 6
									)
								}
							>
								Show more
							</button>
						</div>
					) : null}
				</section>
			</div>

			<div className="container-fluid p-0">
				<section>
					<div className="blacksec">
						<h2>Why Codiste?</h2>
						<p className="my-5">
							Codiste is an emerging leader with the much-required
							expertise and experience in developing scalable and
							secure tech solutions for businesses.
							<br /> We have a quality-controlled development
							process to ensure a consistent quality-assured
							product & service delivery experience.
							<br /> We have hands-on experience building
							enterprise-grade solutions on modern technologies.
							<br /> We offer end-to-end development support for
							our clients to ensure hassle-free pre and
							post-development integration.
						</p>
						<Link href="/book-a-call" className="book-btn">
							Book a Call
						</Link>
					</div>
				</section>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h2 className="all-blog">Technology Stack</h2>
							<p className="all-p  mb-5 text-center">
								We pride ourselves on our proven track record
								with 20+ technologies and delivering innovative,
								customized IT solutions.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<TechStack />
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">Industries We Serve</h2>
						<p className="all-p me-5 text-center">
							Trusted by leaders among different industries and
							enterpri
						</p>
					</div>
					<Industries />
				</section>
			</div>

			<div className="bg-color py-5" >
				<div className="container container-fluid ">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">Our Expertise</h2>
							<p className="all-p me-5 text-center">
								Why choose Codiste for successful digital transformation
							</p>
						</div>

						<div className="row" >
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
								<div className="Exp-block h-100">
									<img
										className="mb-3"
										loading="lazy" src="assets/images/Our-service/solution.png"
										alt="Personalized Solutions"
									/>
									<h3 className="">Personalized Solutions</h3>
									<p>
										Our development process is inclined to
										offer customization and personalization
										in our products & services. Our team
										supports our valuable customers and
										understands their requirements with
										their personal inputs into the product.
										We ensure your project is ready for the
										market in the best way possible, loaded
										with a personalized touch.
									</p>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
								<div className="Exp-block h-100">
									<img
										className="mb-3"
										loading="lazy" src="assets/images/Our-service/iBusiness.png"
										alt="Synergistic Strategy"
									/>
									<h3 className="">Synergistic Strategy</h3>
									<p>
										We have dedicated teams to take care of
										multiple inputs in a project and take
										individualistic ownership of a project
										to enhance the efficiency by dividing
										tasks and utlizing expertise in every
										aspect of development. We believe in
										handling project challenges and derive
										solutions from collective assessment of
										the team.
									</p>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
								<div className="Exp-block h-100">
									<img
										className="mb-3"
										loading="lazy" src="assets/images/Our-service/natural-language-processing.png"
										alt="Technology Experts"
									/>
									<h3 className="">Technology Experts</h3>
									<p>
										Codiste is a hub of experts with
										expertise in 20+ technologies to offer a
										technically sound development experience
										and present our expert insights on the
										most efficient technology according to
										your requirement. We ensure that your
										brainchild project is developed most
										feasibly without undermining the project
										deadlines and development cycle.
									</p>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
								<div className="Exp-block h-100">
									<img
										className="mb-3"
										loading="lazy" src="assets/images/Our-service/agile.png"
										alt="End-to-End Development"
									/>
									<h3 className="">
										End-to-End
									</h3>
									<p>
										Our team offers comprehensive end-to-end
										development support with thorough
										testing of the product. We present
										manual and automated testing to ensure
										your project gets developed and
										delivered bug-free. Our experts
										continuously update you with project
										KPIs, metrics, and milestones.
									</p>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
								<div className="Exp-block h-100">
									<img
										className="mb-3"
										loading="lazy" src="assets/images/Our-service/internet.png"
										alt="Robust Security Solutions"
									/>
									<h3 className="">
										Robust Security Solutions
									</h3>
									<p>
										Codiste's expert team follows
										industry-standard protocols to provide
										comprehensive security solutions,
										including data encryption, secure
										storage, access control, and
										vulnerability testing, ensuring utmost
										protection for clients' sensitive data.
									</p>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
								<div className="Exp-block h-100">
									<img
										className="mb-3"
										loading="lazy" src="assets/images/Service-meta/Post Sales Support & Assistance.png"
										alt="Post Sales Support & Assistance"
									/>
									<h3 className="">
										Post Sales Support & Assistance
									</h3>
									<p>
										We are a rapidly growing emerging leader
										in techno support and IT development
										services with a vision to offer our
										clients the best-in-class development
										support and post-sales assistance. With
										us, you need not worry about any issues,
										even if it happens after project
										delivery.
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-head text-center">Our Proven Development Cycle </h2>
					<p className="all-p  text-center">
						We follow an extensive step by step development cycle to
						ensure timely yet quality-assured product
					</p>
				</div>

				<div className="row g-4">
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3 position-relative">
						<div className="process-block process-block1 h-100">
							<div className="process-circle process-circle1">
								1
							</div>
							<h3 className="">Project Consultation</h3>
							<p>
								In this initial phase, we offer project
								consultation to understand your requirements.
								Our product development experts collect all the
								information about the project, including its
								goals, requirements, and constraints.
							</p>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3 position-relative">
						<div className="process-block process-block2 h-100">
							<div className="process-circle process-circle2">
								2
							</div>
							<h3 className="">
								Minimum Viable Product Planning
							</h3>
							<p>
								Once we understand your requirement after consultation, we assess the requirement, finalize the prerequisites and create a detailed personalized project development roadmap, including timelines, budgets, milestones, and KPIs.

							</p>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3 position-relative">
						<div className="process-block process-block3 h-100 ">
							<div className="process-circle process-circle3">
								3
							</div>
							<h3 className="">
								Prototype and Product Designing
							</h3>
							<p>
								Before getting into product development, we design an MVP or Prototype. Our team finalizes initial designs, including wireframes and mockups, and rectifies the problems of prototypes.

							</p>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3 position-relative">
						<div className="process-block process-block4 h-100">
							<div className="process-circle process-circle4">
								4
							</div>
							<h3 className="">Technical Development </h3>
							<p>
								After completing prototype testing, we start
								final product development in this phase. Our
								team works on developing your end-product using
								the industry’s best resources efficiently &
								effectively.
							</p>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3 position-relative">
						<div className="process-block process-block5 h-100">
							<div className="process-circle process-circle5">
								5
							</div>
							<h3 className="">Automated Product Testing</h3>
							<p>
								As a part of our development process, we
								thoroughly test the product using automated and
								manual testing to ensure it meets all the
								requirements and functions properly & ensure a
								bug-free product delivery.
							</p>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3 position-relative">
						<div className="process-block process-block6 h-100">
							<div className="process-circle process-circle6">
								6
							</div>
							<h3 className="">Deployment phase</h3>
							<p>
								Our team extends support to seamless product
								deployment. This is where we deliver the product
								with comprehensive post-development support to
								ensure a smooth deployment and onboarding.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid ">
					<div className="text-center">
						<h2 className="all-head mb-5">
							Innovation in Action: Real-World Case Studies from
							Codiste
						</h2>
					</div>
					<div className="container container-fluid py-5">
						<div className="row g-5">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="casediwallet-block ">
									<div className="case-position">
										<img
											className="img-fluid "
											alt="Divewallet"
											src="assets/images/Casestudy-img/DiveWallet.png"
											loading="lazy"
										/>
									</div>
									<div className="mb-5">
										<h6 className="case-head">
											Divewallet – The Crypto Wallet
										</h6>
										<Link href="/portfolio/divewallet" className="case-pera">
											Read More &gt;&gt;
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="counterten-block">
									<div className=" case-position">
										<img
											className="img-fluid "
											alt="Counterten"
											src="assets/images/Casestudy-img/counterten 1.png"
											loading="lazy"
										/>
									</div>
									<div className="mb-5">
										<h6 className="case-head">
											CounterTen – Solana Marketplace
										</h6>
										<Link href="/portfolio/counterten-solana-marketplace" className="case-pera">Read More &gt;&gt;</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="tankpad-block">
									<div className=" case-position">
										<img
											className="img-fluid "
											alt="Tankpad"
											src="assets/images/Casestudy-img/Tankpad 1.png"
											loading="lazy"
										/>
									</div>
									<div className="mb-5">
										<h6 className="case-head">
											Tankpad – Binance chain Minting
										</h6>
										<Link href="/portfolio/tankpad-binance-chain-minting" className="case-pera">Read More &gt;&gt;</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center">
						<Link href="/codiste-portfolio" className="book-btn">
							Explore More
						</Link>
					</div>
				</div>
			</div>

			{/* <div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-blog">Blogs</h2>
					<p className="all-p text-center">
						Keep yourself updated with emerging technologies and new
						developments in the industry with us.
					</p>
				</div>
				<AllServiceBlogSlider limit={limit} category={category} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<Link href="/blog" className="book-btn mt-3">Read more</Link>
				</div>
			</div> */}
			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-blog text-center">Their Success Stories are our Valuable Feedback!</h2>
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
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											They truly do everything up to a
											very high standard. Codiste pvt ltd
											has successfully delivered a
											functional app praised in many
											publications for its neatness and
											speed. They have frequently
											communicated via Slack and managed
											the project efficiently using Jira.
											Their extensive knowledge and humble
											attitude have been hallmarks of
											their work.
										</h3>
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												loading="lazy" src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="BonFire - Bonfire Real-Estate Fractionalized Marketplace"
													loading="lazy" src="assets/images/client-logos/bonfire.png"
												/>
											</div>
											<h5>
												The Real Estate Investment
												platform
											</h5>
											<p>
												CTO and Co-Founder <br />
												San Francisco, California
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											I am pleased to say that working
											with Codiste Pvt Ltd has been a
											positive experience for our
											community. The project is now
											complete, and the feedback we have
											received on the platform has been
											overwhelmingly positive. Throughout
											the project, Codiste maintained open
											communication lines, regularly
											updating us on progress and
											following the agreed timeline. They
											delivered an app with impressive
											functionalities and accepted every
											challenge we gave them. Overall, we
											are satisfied with the outcome of
											the project and would recommend
											Codiste for their expertise,
											professionalism, and commitment to
											delivering high-quality work.
										</h3>
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												loading="lazy" src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
													loading="lazy" src="assets/images/client-logos/DiveWallet Logo.png"
												/>
											</div>
											<h5>DiveWallet</h5>
											<p>
												CEO
												<br />
												Bolivar, New York
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Codiste pvt ltd delivered the
											project within the given timeline
											and budget. Their communication and
											collaboration were outstanding using
											Slack, Lucidhart, and Miro. The team
											was reliable, well-organized, and
											proactive.
										</h3>
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												loading="lazy" src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Medizen - Pill Reminder and Drug interaction Detection app"
													loading="lazy" src="assets/images/client-logos/Medizen.png"
												/>
											</div>
											<h5>Medizen App</h5>
											<p>
												CEO
												<br />
												Johannesburg, South Africa
											</p>
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

			<div className="container container-fluid py-5">
				<h2 className="all-blog text-center mb-lg-5 mb-0">Getting in touch with Us!</h2>
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 p-4 needsec">
							<h2>
								Fill out this form and give your imagination into reality!
							</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
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
export default ServicePageContent;
