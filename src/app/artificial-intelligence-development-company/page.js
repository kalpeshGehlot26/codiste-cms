import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import AIList from "../data/services/service-items/AI";
import jsonData from "../data/schema";

export const metadata = {
	title: "Artificial Intelligence Development Company | Codiste",
	description:
		"Our Artificial Intelligence development services offer customized development for automating software with modern AI technologies. We build automation software for businesses to get enhanced operational efficiency.",
};

const limit = 3
const category = 43

const AIDevelopmentCompany = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.AIService) }}
			/>
			<div className="bg-color" data-aos="fade-up" data-aos-duration="2000">
				<div className="container container-fluid">
					<section >
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
									<h1 className="all-head">Artificial Intelligence Development Company</h1>
									<p className="all-p me-5 my-4">We build automation tools and software for businesses to get
										enhanced operational efficiency. Our Artificial Intelligence development services offer
										customized development for automating software with modern AI technologies.
									</p>
									<Link href="/contact" className="book-btn">Contact Us!</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/main/AI_Development_.png" alt="Ai Development by Codiste" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid" data-aos="fade-up" data-aos-duration="2000">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h1 className="all-head">Our Artificial Intelligence Development Services</h1>
					</div>
					<ServiceInnerItems serviceItems={AIList} />
				</section>
			</div>

			<div className="py-5 bg-color mt-5" >
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head text-center">
							Why Choose Us For Artificial Intelligence
							Development Services?
						</h1>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1" data-aos="fade-up" data-aos-duration="2000">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="A multitude of AI Technologies"
								src="assets/images/Service-AI/ai.png"
							/>
							<h2 className="secondsec-head text-center">
								A multitude of AI Technologies{" "}
							</h2>
							<p className="secondsec-p text-center">
								Experts lead our team at Codiste with extensive
								knowledge and experience in Artificial
								Intelligence development technologies such as
								Large Language Models, Machine Learning, Deep
								Learning, and Natural Language Processing.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2" data-aos="fade-up" data-aos-duration="2000">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Custom AI Solutions"
								src="assets/images/Service-AI/replacement.png"
							/>
							<h2 className="secondsec-head text-center">
								Custom AI Solutions
							</h2>
							<p className="secondsec-p text-center">
								We provide tailored AI development services that analyze project requirements and utilize modern technologies like reinforcement learning and GPT models. Our solutions integrate AI with existing systems for streamlined workflows.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3" data-aos="fade-up" data-aos-duration="2000">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Efficient & Optimized Development"
								src="assets/images/Service-AI/air.png"
							/>
							<h2 className="secondsec-head text-center">
								Efficient & Optimized Development{" "}
							</h2>
							<p className="secondsec-p text-center">
								Our agile development process delivers high-quality AI solutions on time and within budget. We use project management tools for effective collaboration and offer product customization to adapt to changing requirements efficiently.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4" data-aos="fade-up" data-aos-duration="2000">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Advanced Analytics Capabilities"
								src="assets/images/Service-AI/Advanced Analytics Capabilities.png"
							/>
							<h2 className="secondsec-head text-center">
								Advanced Analytics Capabilities
							</h2>
							<p className="secondsec-p text-center">
								Our Artificial Intelligence development team
								leverages advanced analytics capabilities to
								develop robust and accurate AI language and
								learning models. We have extensive experience in
								predictive modeling, utilizing modern algorithms
								such as decision trees, logistic regression, and
								random forests.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5" data-aos="fade-up" data-aos-duration="2000">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Data Security and Privacy"
								src="assets/images/Service-AI/cloud.png"
							/>
							<h2 className="secondsec-head text-center">
								Data Security and Privacy
							</h2>
							<p className="secondsec-p text-center">
								Our AI systems prioritize data security and privacy. We employ expert security professionals and adhere to industry standards like GDPR and HIPAA. Measures include encryption, multi-factor authentication, and access controls to protect sensitive information.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 " data-aos="fade-up" data-aos-duration="2000">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Post Sales Assistance"
								src="assets/images/Service-AI/support.png"
							/>
							<h2 className="secondsec-head text-center">
								Post Sales Assistance{" "}
							</h2>
							<p className="secondsec-p text-center">
								Codiste provides continuous customer support and
								maintenance for our Artificial Intelligence
								solutions to ensure they remain up-to-date and
								fully functional, delivering maximum value with
								optimized efficiency.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3" data-aos="fade-up" data-aos-duration="2000">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
					<p>
						Hire an AI developer now
					</p>
					<Link href="/book-a-call" className="book-btn">
						Let's Connect
					</Link>
				</div>
			</div>

			<div className="bg-color py-5" >
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center" data-aos="fade-up" data-aos-duration="2000">
							<h1 className="all-head">Technologies We Offer </h1>
							<p className="all-p  text-center">
								We offer you to choose from a wide range of
								technologies.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="tech-style" data-aos="fade-up" data-aos-duration="2000">
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Apache_Spark_"
											src="assets/images/tech/Apache_Spark_.png"

										/>
										<p>Apache Spark</p>
									</li>

									<li>
										<img
											className="img-fluid" loading="lazy" alt="Azure"
											src="assets/images/tech/Azure.png"
										/>
										<p>Azure</p>
									</li>

									<li>
										<img
											className="img-fluid" loading="lazy" alt="gensim"
											src="assets/images/tech/gensim.png"
										/>
										<p>Gensim</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="go"
											src="assets/images/tech/go.png"
										/>
										<p>Go</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="icons8"
											src="assets/images/tech/icons8-ios-logo-150.png"
										/>
										<p>iOS</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="python"
											src="assets/images/tech/python.png"
										/>
										<p>Python</p>
									</li>

									<li>
										<img
											className="img-fluid" loading="lazy" alt="solidity"
											src="assets/images/tech/solidity.png"
										/>
										<p>Solidity</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Scikit_learn"
											src="assets/images/tech/Scikit_learn.png"
										/>
										<p>Scikit Learn</p>
									</li>

									<li>
										<img
											className="img-fluid" loading="lazy" alt=""
											src="assets/images/tech/tensorflow.png"
										/>
										<p>Tensor Flow</p>
									</li>

									<li>
										<img
											className="img-fluid" loading="lazy" alt="Theano_logo"
											src="assets/images/tech/Theano_logo.svg.png"
										/>
										<p>Theano</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5" data-aos="fade-up" data-aos-duration="2000">
						<h1 className="all-head">FAQs</h1>
					</div>
					<div
						className="accordion accordion-flush"
						id="accordionFlushExample"
						data-aos="fade-up" data-aos-duration="2000"
					>
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
									How is AI different from machine learning
									and deep learning?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									AI is a broad field with multiple supporting
									technologies like machine learning and deep
									learning. Machine learning helps AI train
									models on data, while deep learning assists
									machine learning using neural networks to
									learn data representations.
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
									Can AI replace human intelligence in
									specific fields?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									While AI has the potential to automate many
									tasks and augment human intelligence, it
									cannot replace human intelligence in fields
									that require creativity, emotional
									intelligence, and ethical decision-making.
									However, AI is used by multiple businesses
									as a replacement for the human workforce and
									to assist the human workforce in churning
									out maximum efficiency.
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
									How to train AI models, and what data is
									required?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									AI models are trained using large amounts of
									data, which is used to teach the model how
									to identify patterns and make predictions.
									The data used to train AI models should be
									diverse, representative, and labeled to
									ensure the model learns accurate
									representations of the real world.
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
									What is the future of AI, and how will it
									impact our lives?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									The future of AI is expected to bring about
									significant advancements in healthcare,
									education, transportation, and many other
									fields. From lead generation to patient
									management, and CRM, artificial intelligence
									is emerging as the next big breakthrough in
									the industry. Moreover, artificial
									intelligence is also used in developing
									innovative business solutions like chatbots
									and virtual assistants for marketing and
									customer support.
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
									How can conversational AI be used for
									business?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Conversational AI can be used by businesses
									to automate customer service and support,
									enable self-service options for customers,
									and provide personalized recommendations to
									customers. It can also be used for virtual
									sales assistants, chatbots, and voice
									assistants to enhance customer engagement
									and improve sales. Conversational AI can
									help businesses reduce costs, increase
									efficiency, and improve customer
									satisfaction by providing fast, accurate,
									and convenient customer support.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5 bg-color" data-aos="fade-up" data-aos-duration="2000">
				<div className="container container-fluid">
					<div className="d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">Case Study</h1>
					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
							<div className=" ">
								<h1 className="">CYPHA – Your Sound</h1>
								<p className="all-p">
									CYPHA – Your Pocket music studio.
									<br />
									The case study is about the Talent Search
									App, a gamified platform for aspiring and
									established musicians to showcase their
									talents, connect with other music lovers,
									and earn rewards. The app allows users to
									record their voice over instrumentals and
									share them on social media, while also
									providing a way for music producers and
									record labels to discover and sign new
									talent. The app is available for both
									Android and iOS users and is an enjoyable
									and rewarding experience for all music
									lovers.
								</p>
							</div>
							<div className="mt-4">
								<Link
									href="/portfolio/cypha-your-sound"
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
								src="assets/images/case-cypha/Cypha.png"
								alt="Cypha - Make your Music using Cypha app"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5" data-aos="fade-up" data-aos-duration="2000">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-blog">Blogs</h1>
					<p className="all-p text-center">
						Read more about artificial intelligence and modern
						technological developments in space with our blogs.
					</p>
				</div>
				<AllServiceBlogSlider limit={limit} category={category} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<Link href="/blog" className="book-btn mt-3">Read more</Link>
				</div>
			</div>

			<div className="bg-color py-5" data-aos="fade-up" data-aos-duration="2000">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head text-center">
								Hear our clients' resounding praise!
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
												loading="lazy"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="BonFire - Bonfire Real-Estate Fractionalized Marketplace"
													src="assets/images/client-logos/bonfire.png"
													loading="lazy"
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
												loading="lazy"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
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
												loading="lazy"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Medizen - Pill Reminder and Drug interaction Detection app"
													src="assets/images/client-logos/Medizen.png"
													loading="lazy"
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
								<span className="visually-hidden">Previous</span>
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

			<div className="container container-fluid py-5" data-aos="fade-up" data-aos-duration="2000">
				<h1 className="all-head text-center mb-lg-5 mb-0">
					Get started with AI Now!
				</h1>
				<section>
					<div className="row  d-flex align-items-center" data-aos="fade-up" data-aos-duration="2000">
						<div className="col-lg-6 col-md-12 p-4 mb-lg-0 needsec">
							<h1>
								Reach out to us with your problems!<br /> Our team
								will get in touch with you soon.
							</h1>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<CaseStudyForm text="Contact Now" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AIDevelopmentCompany;
