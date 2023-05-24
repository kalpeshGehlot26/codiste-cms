import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import mlServiceBlogs from "../data/services/service-blogs/mlServiceBlogs";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import MLList from "../data/services/service-items/ML";
import jsonData from "../data/schema";

export const metadata = {
	title: "Machine Learning Development Company | Codiste",
	description:
		"Codiste machine learning development team helps you leverage the power of machine learning to boost your organizational growth and efficiency.",
};

const MLDevelopmentCompany = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.MLService) }}
			/>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">Machine Learning Development Company</h1>
									<p className="all-p me-5 my-4">We offer machine learning development services for businesses &
										enterprises to help them automate repetitive and recursive tasks. Our machine learning
										development team helps you leverage the power of machine learning to boost your
										organizational growth and efficiency.
									</p>
									<Link href="/contact" className="book-btn">Contact Us</Link>
								</div>
								<div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0"><img className='img-fluid' alt='Machine Learning' src="assets/images/main/Machine Learning.png" /></div>
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
							Our Machine Learning Development Services
						</h1>
						<p className="secondsec-p text-center">Codiste revolutionizes businesses with advanced machine learning services, fueling innovation and driving success.</p>
					</div>
					<ServiceInnerItems serviceItems={MLList} />
				</section>
			</div>

			<div className="py-5 bg-color mt-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head text-center">
							Why Should You Trust Codiste For Machine Learning
							Development Services?
						</h1>
						<p className="secondsec-p text-center">Codiste delivers advanced machine learning services, driving business innovation with expertise and tailored solutions.</p>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1">
							<img
								className="img-fluid mb-2"
								alt="Comprehensive Development"
								src="assets/images/development.png"
							/>
							<h2 className="secondsec-head text-center">
								Comprehensive Development
							</h2>
							<p className="secondsec-p text-center">
								Codiste provides end-to-end machine learning
								development services. We ensure a complete
								development process from data preprocessing and
								model development to deployment and maintenance,
								ensuring you receive a comprehensive and
								effective solution.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2">
							<img
								className="img-fluid mb-2"
								alt="Enterprise Automation Tools"
								src="assets/images/Automation Tools.png"
							/>
							<h2 className="secondsec-head text-center">
								Enterprise Automation Tools
							</h2>
							<p className="secondsec-p text-center">
								Experts designed our machine learning
								development services to create effective
								enterprise-grade solutions that automate your
								business processes, resulting in improved
								efficiency and better productivity.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3">
							<img
								className="img-fluid mb-2"
								alt="Customized Models and Training Platforms"
								src="assets/images/training.png"
							/>
							<h2 className="secondsec-head text-center">
								Customized Models and Training Platforms
							</h2>
							<p className="secondsec-p text-center">
								We develop custom models and training platforms
								based on our client's needs and requirements,
								ensuring they receive the most accurate and
								effective results for their machine-learning
								applications.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4">
							<img
								className="img-fluid mb-2"
								alt="Safe and Secure"
								src="assets/images/shield.png"
							/>
							<h2 className="secondsec-head text-center">
								Safe and Secure
							</h2>
							<p className="secondsec-p text-center">
								Codiste offers rigid data safety and security of
								your data and applications with our machine
								learning solutions. Our team ensures that all
								machine learning solutions are developed with
								the latest security protocols and industry best
								practices.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5">
							<img
								className="img-fluid mb-2"
								alt="Expert-Led Development Process"
								src="assets/images/iteration.png"
							/>
							<h2 className="secondsec-head text-center">
								Expert-Led Development Process
							</h2>
							<p className="secondsec-p text-center">
								Our machine-learning development process is led
								by a team of experienced data scientists and
								engineers who work closely with our clients to
								ensure that their machine-learning applications
								meet their specific business goals and
								objectives.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 ">
							<img
								className="img-fluid mb-2"
								alt="Seamless Integration & Deployment"
								src="assets/images/distributed.png"
							/>
							<h2 className="secondsec-head text-center">
								Seamless Integration & Deployment{" "}
							</h2>
							<p className="secondsec-p text-center">
								Codiste believes in seamless and streamlined
								integration and deployment of machine learning
								models and applications into your systems,
								platforms, and applications to ensure they are
								easy to use and require minimal maintenance.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
					<p>
						Let's meet our ML experts virtually and Explore
						possibilities!
					</p>
					<Link href="/book-a-call" className="book-btn">
						Connect Virtually
					</Link>
				</div>
			</div>

			<div className="bg-color py-5 mt-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h1 className="all-head">Technology Stack</h1>
							<p className="all-p me-5 text-center mb-4">
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
											src="assets/images/tech/python.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/tensorflow.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Scikit_learn.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Apache_Spark_.png"
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
											src="assets/images/tech/Theano_logo.svg.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/go.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/gensim.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Azure.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/icons8-ios-logo-150.png"
										/>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">FAQ</h1>
					</div>
					<div
						className="accordion accordion-flush"
						id="accordionFlushExample"
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
									What is Machine Learning?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Machine learning is a branch of artificial
									intelligence (AI) that involves teaching
									computers to learn from data, without being
									explicitly programmed to perform specific
									tasks. In other words, it's a way of
									training machines to learn and improve on
									their own through experience, rather than
									relying on explicit programming. Machine
									learning algorithms use statistical
									techniques to identify patterns and
									relationships in data, and then use those
									patterns to make predictions or take
									actions. These algorithms can be used for a
									variety of tasks, such as image recognition,
									speech recognition, natural language
									processing, recommendation systems, and
									predictive analytics.
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
									What are the benefits of Machine Learning?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Machine Learning offers many benefits,
									including improved accuracy and speed in
									decision-making, enhanced efficiency and
									productivity, and the ability to discover
									hidden patterns and insights in data. It can
									also automate repetitive tasks, reduce human
									error, and optimize business processes.
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
									What are the different types of Machine
									Learning?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									The three main types of Machine Learning are
									supervised, unsupervised, and Reinforcement
									Learning. Supervised Learning involves
									learning from labeled data, while
									Unsupervised Learning involves learning from
									unlabeled data. Reinforcement Learning
									consists in learning through a system of
									rewards and punishments.
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
									How is Machine Learning used in business?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Machine Learning is used in business to
									automate tasks, optimize processes, reduce
									costs, and improve customer experience. It
									is used for fraud detection, predictive
									maintenance, recommendation systems,
									customer segmentation, and image
									recognition.
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
									What is Deep Learning?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Deep Learning is a subset of Machine
									Learning that uses artificial neural
									networks to learn and make decisions. It is
									beneficial for tasks that involve large
									amounts of data, such as image or speech
									recognition, natural language processing,
									and autonomous driving.
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
									What is Computer Vision?
								</button>
							</h2>
							<div
								id="flush-collapsesix"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingsix"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Computer Vision is a field of study that
									focuses on enabling machines to interpret
									and understand visual data from the world
									around them. It involves building algorithms
									and models that allow devices to recognize
									and classify objects, people, and scenes in
									images and videos.
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
							Our case studies will help you understand how we
							helped these businesses with enterprise machine
							learning development services.{" "}
						</p>
					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec">
							<div className=" ">
								<h1 className="">
									ML Estimation
								</h1>
								<p className="all-p">
									Streamline HVAC project bidding with ML estimation, automating drawing annotation and generating accurate bill of materials. Save time, differentiate yourself in the industry, and leverage innovative technology for detailed quantity take-offs.
								</p>
							</div>

							<div className="mt-4">
								<Link
									href="/portfolio/ml-estimation"
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
								src="assets/images/case-ml/MLEstimation.png"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head">Blog</h1>
					<p className="all-p text-center">
						Discover expert insights and helpful tips on emerging
						machine learning algorithms and technologies with our
						blogs.
					</p>
				</div>
				<AllServiceBlogSlider items={mlServiceBlogs} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<button className="book-btn mt-3">Read more</button>
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
											It was an absolute pleasure working
											with Nishant and his team for our
											Blockchain Product. Not only is
											Nishant an engineer in making the
											product, he also care and give his
											opinion on the outcome of the
											design. When it comes to delivery,
											the break down of the milestone is
											fair and accurate. Lastly, we had
											alot of changes near the end of
											sprint and the team was flexible
											about it. honest work, you get what
											you pay for.
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
													alt="MLEstimation"
													src="assets/images/client-logos/Ml Estimation.png"
												/>
											</div>
											<h5>MLEstimation</h5>
											<p>Founder</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Their ability to adapt to changes in
											our requirements while focusing on
											the deliverables was
											impressive.Codiste pvt ltd delivered
											a well-written code, making the
											platform highly performant. They
											excellently managed the
											collaboration and constantly
											communicated through Slack,
											WhatsApp, and email. Overall, they
											fostered a positive engagement by
											being responsive and accessible even
											during weekends.
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
													alt="Holygrails"
													src="assets/images/client-logos/Holygrails.png"
												/>
											</div>
											<h5>Holygrails</h5>
											<p>
												Founder
												<br />
												Abu Dhabi, United Arab Emirates
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Codiste Team rocked Throughout the
											Development Process. Nishant handled
											everything very professionally and
											as timely as possible even when
											everything in life was going
											sideways.
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
													alt="MoonTrust"
													src="assets/images/client-logos/MoonTrust.png"
												/>
											</div>
											<h5> MoonTrust</h5>
											<p>
												Founder
												<br />
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

			<div className="container container-fluid py-5">
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
							<h1>
								Fill your details in the form.
							</h1>
							<h2 className="">
								{" "}
								Our team will
								get back to you to take your project further.
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

export default MLDevelopmentCompany;
