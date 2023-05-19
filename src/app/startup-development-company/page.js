import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import startupServiceBlogs from "../data/services/service-blogs/startupServiceBlogs";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import jsonData from "../data/schema";

export const metadata = {
	title: "Startup Development Company | Codiste",
	description:
		"Codiste offers startup development services for entrepreneurs with comprehensive tech-support and guidance to navigate each step towards success.",
};

const StartupDevelopmentCompany = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.startupService) }}
			/>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">Startup Development Company</h1>
									<p className="all-p me-5 my-4">Codiste is your trusted startup development partner. As a leading startup development company, we offer a wide range of services to help you bring your ideas to the end user. From idea validation to product launch, our comprehensive startup software development solutions ensure your success in the competitive market. We are dedicated to providing top-notch support and expertise throughout your entrepreneurial journey. Trust us to be your one-stop tech solution provider for all your startup development needs.
									</p>
									<Link href="/contact" className="book-btn">Let’s Talk</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/main/Start Up Development_.png" alt="Startup Development" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<ClientSlider />

			<div className="container container-fluid">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h1 className="all-head">
							Our Startup Development Services
						</h1>
						<p className="secondsec-p text-center" >We provide startup development solutions that prioritize transparency, ensuring open communication and clear visibility throughout the product development process, resulting in market-viable solutions for your business.</p>
					</div>
					<div className="row ">
						<div className=" col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head ">
									Technical Feasibility in Idea Validation
								</h2>
								<p className="secondsec-p">
									Validating your startup idea is crucial
									before investing resources into development.
									You can hire our experienced software
									developers and engineers to assess your
									vision and analyze the scalability,
									potential technical risks, and obstacles. We
									help startups make informed decisions about
									their potential for success and guide their
									development with industry experts and
									professionals.
								</p>
							</div>
						</div>
						<div className=" col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head">
									Minimum Viable Product (MVP) Development
								</h2>
								<p className="secondsec-p">
									We have a startup software development team
									specializing in MVP development to help
									startups test their ideas in the market with
									a scaled-down version of their product. Our
									team allows startups to settle an approach
									that minimizes development costs and risks
									while still providing valuable user feedback
									to inform future development. Our team works
									closely with startups to define their MVP
									scope, select appropriate technologies, and
									build an MVP that has the potential to meet
									their business objective. We ensure the MVP
									is scalable, secure, and future-ready, with
									room for future feature expansion and
									growth.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head text-center">
							Why Choose Codiste For Startup Development Services?
						</h1>
						<p className="secondsec-p text-center">As a startup development company, we offer end-to-end solutions customized to your needs, utilizing the latest technologies for innovative solutions to ensure your startup's success.
						</p>
					</div>

					<div className="row mx-5">
						<div className="col-12 col-md-6 text-center p-5 Crosssec-1">
							<img
								className="img-fluid mb-2"
								alt="Cost Efficient Development"
								src="assets/images/development.png"
							/>
							<h2 className="secondsec-head text-center">
								Cost Efficient Development
							</h2>
							<p className="secondsec-p text-center">
								We understand the financial constraints of
								startups and offer affordable development
								services that provide exceptional value and
								benefits to your business. We ensure that our
								cost effective startup software development
								services allow you to optimize the effective use
								of your resources and focus on scaling your
								business quickly.
							</p>
						</div>
						<div className="col-12  col-md-6  text-center p-5 Crosssec-6">
							<img
								className="img-fluid mb-2"
								alt="Immersive Experience Integration"
								src="assets/images/isolution.png"
							/>
							<h2 className="secondsec-head text-center">
								Immersive Experience Integration
							</h2>
							<p className="secondsec-p text-center">
								Our startup software development services
								specializes in creating immersive 3D user
								experiences for better user engagement and
								customer delight. You must add immersive
								experience to your platform to acquire users
								better by enhancing your brand image and user
								experience with 3D immersive and mixed reality
								experiences.
							</p>
						</div>
						<div className="col-12  col-md-6 text-center p-5 Crosssec-5">
							<img
								className="img-fluid mb-2"
								alt="Blockchain Solutions"
								src="assets/images/blockchain.png"
							/>
							<h2 className="secondsec-head text-center">
								Blockchain Solutions
							</h2>
							<p className="secondsec-p text-center">
								We are familiar with the growing scope of
								blockchain-led enterprises in terms of both user
								experience and fundraising. Our expertise in
								blockchain technology can help your startup to
								leverage the power of decentralized systems and
								hyper ledgers to enhance security, transparency,
								and efficiency, setting you apart as a leader in
								your industry.
							</p>
						</div>
						<div className="col-12  col-md-6  text-center p-5 ">
							<img
								className="img-fluid mb-2"
								alt="Tech & Dev Hub"
								src="assets/images/itechnology.png"
							/>
							<h2 className="secondsec-head text-center">
								Tech & Dev Hub{" "}
							</h2>
							<p className="secondsec-p text-center">
								We offer complete ecosystem development for
								emerging businesses and tech startups. Our
								development team has expertise in website
								development, mobile application development,
								CRMs, AI virtual assistants, and other helpful
								business growing technologies. We also have our
								hand dipped in decentralized development with
								blockchain networks.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3">
					<p>Let’s build your dream business together! </p>
					<Link href="/contact" className="book-btn">
						Contact Us!
					</Link>
				</div>
			</div>

			<div className="bg-color py-5 mt-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h1 className="all-head">Technology Stack</h1>
							<p className="all-p me-5 text-center">
								We pride ourselves on our proven track record
								with 20+ technologies and delivering innovative,
								customized IT solutions.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="tech-style">
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/hyperledger.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/tron logo.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Graphene.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Binance_Logo.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Solana.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Corda.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/ethereum.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/polygon.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/fantom.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/solidity.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/python.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Java.png"
										/>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div>
				<div
					id="container"
					className="container container-fluid py-5 firstsec"
				>
					<h1 className="all-head text-center">
						Startup Process Idea{" "}
					</h1>
					<p className="secondsec-p text-center">
						codiste offers startup development services for
						entrepreneurs with comprehensive support and guidance to
						navigate each step towards success.
					</p>

					<ol className="process-chart">
						<li>
							<div>
								<h2> Idea & Tech Validation</h2>
								<p>
									We evaluate the feasibility and
									marketability of the startup idea. We assess
									the best and most efficient technologies
									based on the market research, and validate
									the technical requirements to ensure that
									the solution remains efficient.
								</p>
							</div>
						</li>
						<li>
							<div>
								<h2>Prototype Development</h2>
								<p>
									We start working on prototype platforms or
									services before giving it a final go. With
									this prototype we understand bug and patch
									immunity to ensure a safe and secure end
									product from scratch.
								</p>
							</div>
						</li>
						<li>
							<div>
								<h2>MVP Development</h2>
								<p>
									Once the prototype is tested and finalized,
									we start building the final product to help
									startups with funding and other crucial
									processes like investor pooling. We develop
									a minimum viable product and help you with
									brainstorming for new creative ideas and
									develop the end product simultaneously.
								</p>
							</div>
						</li>
						<li>
							<div>
								<h2>Post Launch Tech Support</h2>
								<p>
									When you launch and gain traction with your
									audience, we help you with handling the
									traffic and scale your systems accordingly.
									Our extended tech support helps you in
									dealing with system upgrades and customer
									tech support.
								</p>
							</div>
						</li>
					</ol>
				</div>
			</div>
			<div className="py-5">
				<div className="container container-fluid">
					<div
						className="accordion accordion-flush"
						id="accordionFlushExample"
					>
						<div className="">
							<h1 className="all-head text-center">FAQ</h1>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingOne"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseOne"
									aria-expanded="false"
									aria-controls="flush-collapseOne"
								>
									What services does Codiste offer to
									startups?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Codiste is a hub of technology and
									development innovations. We offer
									comprehensive support and service for
									startups and help them grow by assisting in
									their technical requirements with the
									best-in-class technologies and expert
									professionals.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingTwo"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseTwo"
									aria-expanded="false"
									aria-controls="flush-collapseTwo"
								>
									How do you approach the development process
									for startups?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Our expert team follows a personalized
									approach to tech and software development
									for startups with their services to meet
									customized needs and requirements and
									develop solutions to help your business grow
									with a feasible efficiency.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingThree"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseThree"
									aria-expanded="false"
									aria-controls="flush-collapseThree"
								>
									Can Codiste help me validate my startup
									idea?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Yes, Codiste can help startups validate
									their idea's technical feasibility,
									providing insights and guidance to offer
									efficient product development.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingfour"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsefour"
									aria-expanded="false"
									aria-controls="flush-collapsefour"
								>
									What is an MVP, and how can you help me
									develop one for my startup?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									An MVP is a scaled-down version of a product
									that allows startups to test their product
									ideas in the market with minimal investment.
									Codiste has specialization and expertise in
									building an MVP for startups and helping
									them validate their ideas quickly and
									efficiently.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingfive"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsefive"
									aria-expanded="false"
									aria-controls="flush-collapsefive"
								>
									What technologies do you specialize in?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Our team is equipped with industry experts
									and professionals who specialize in a wide
									range of technologies, including but not
									limited to Metaverse, Blockchain , AI,
									React, Node.js, MongoDB, AWS, AR/VR.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingsix"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsesix"
									aria-expanded="false"
									aria-controls="flush-collapsesix"
								>
									Can Codiste help startups integrate
									third-party APIs and software into their
									products?
								</button>
							</h2>
							<div
								id="flush-collapsesix"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingsix"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Our startup software development team can
									help startups integrate third-party APIs and
									software into their products, enabling them
									to add valuable features and functionality
									to their offerings.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className="d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">Case Study</h1>
						<p className="text-center all-p">
							{" "}
							Learn more about our development and technical
							support with an eye on some real-life stories where
							we have helped businesses evolve and achieve growth
							with our value-adding tech support.{" "}
						</p>
					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec">
							<div className=" ">
								<h1 className="">Apollo Marketplace</h1>
								<p className="all-p">
									Codiste deploys a decentralized Launchpad
									platform named Apollo Marketplace, aimed at
									enabling users with investment
									diversification in the most profitable way
									possible.
								</p>
							</div>

							<div className="mt-4">
								<Link
									href="/portfolio/apollo-marketplace"
									className="book-btn"
								>
									Read More
								</Link>
							</div>
						</div>
						<div className="col-lg-5 col-md-6 col-sm-8 mx-auto mx-lg-0  order-1 order-md-2 mb-5 mb-lg-0">
							<img
								className="img-fluid"
								style={{
									padding: "20px",
								}}
								src="assets/images/case-appolo/Apollo.png"
								alt="counter"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head">Blog</h1>
					<p className="all-p text-center">
						Knowledge will never be the less, so keep exploring our
						blogs.
					</p>
				</div>
				<AllServiceBlogSlider items={startupServiceBlogs} />
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head">
								Our work speaks in their words!
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
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="bonfire"
													src="assets/images/client-logos/bonfire.png"
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
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="DiveWallet"
													src="assets/images/client-logos/DiveWallet Logo.png"
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
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Medizen"
													src="assets/images/client-logos/Medizen.png"
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
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
							<h1 className="">
								Are you looking for a cost-effective startup
								software development company?{" "}
							</h1>
							<h2>
								Well, the answer is no more! Get in touch with
								us here.
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
	);
};

export default StartupDevelopmentCompany;
