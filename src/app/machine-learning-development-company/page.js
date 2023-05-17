import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import mlServiceBlogs from "../data/services/mlServiceBlogs";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";

export const metadata = {
	title: "Machine Learning Development Company | Codiste",
	description:
		"Codiste machine learning development team helps you leverage the power of machine learning to boost your organizational growth and efficiency.",
};

const MLDevelopmentCompany = () => {
	return (
		<div>
			<div class="bg-color">
				<div class="container container-fluid">
					<section>
						<div className="row firstsec d-flex align-items-center">
							<div className="col-lg-6 col-sm-12 mb-5 mb-lg-0">
								<h1 className="all-head">
									Machine Learning Development Company{" "}
								</h1>
								<p className="all-p me-5 mb-4 mt-3">
									We offer machine learning development
									services for businesses & enterprises to
									help them automate repetitive and recursive
									tasks. Our machine learning development team
									helps you leverage the power of machine
									learning to boost your organizational growth
									and efficiency.
								</p>
								<Link href="/contact" className="book-btn">
									Contact Us
								</Link>
							</div>
							<div className="col-lg-6 col-sm-12 p-5 ">
								{" "}
								<img
									className="img-fluid d-flex align-items-center justify-content-center"
									style={{
										height: "450px",
										width: "auto",
										margin: "auto",
										padding: "20px",
									}}
									src="assets/images/main/Machine Learning.png"
								/>
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
					</div>
					<div className="row ">
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4 ">
									ML Consulting
								</h2>
								<p className="secondsec-p">
									At Codiste, we offer machine-learning
									consulting services to help you understand
									new machine-learning technologies and trends
									in the industry. Our consulting services
									help you discover ways to leverage AI
									technologies for your business. We offer
									end-to-end machine learning consulting
									services, including model selection, data
									preparation, and integration strategy.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4 ">
									ML Training and Education
								</h2>
								<p className="secondsec-p ">
									Our machine learning team offers ML training
									and education services designed to help your
									business understand required skills and
									knowledge on AI, ML, and other automation
									tools and techniques. We offer machine
									learning training and education sessions for
									businesses to utilize machine learning
									solutions effectively.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head  mt-4">
									Computer Vision Development
								</h2>
								<p className="secondsec-p ">
									Codiste provides computer vision development
									services that allow businesses to analyze
									and interpret user-generated visual data
									more effectively and precisely than ever. We
									develop customized computer vision solutions
									enabling machines to accurately identify,
									classify, and analyze images and videos from
									the real world, objects, and text. Our
									computer vision applications can be used in
									various industries, from healthcare to
									automotive & education.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4 ">
									ML Integration
								</h2>
								<p className="secondsec-p ">
									We specialize in integrating machine
									learning solutions into existing business
									processes and platforms. Our team of
									hands-on experienced individuals can help
									you identify critical progressive areas
									where machine learning can provide the most
									value. We provide strategic development and
									deployment of custom machine learning models
									to integrate into multiple systems. We allow
									you to choose from various technologies to
									ensure seamless integration with your
									existing business processes.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4 ">
									Deep Learning Development
								</h2>
								<p className="secondsec-p ">
									Our deep learning development services are
									catering businesses to use the power of
									neural networks to solve complex problems.
									We develop custom-built deep learning models
									that can analyze and interpret large
									datasets and provide valuable and accurate
									insights to help your organization make
									better decisions. Codiste offers
									enterprise-grade deep learning solutions
									that are transformational for various
									industries, including healthcare, finance,
									and retail.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4 ">
									Data Analytics and Visualization
								</h2>
								<p className="secondsec-p ">
									Codiste offers data analytics and
									visualization for machine learning and
									development services to help you make sense
									of your data autonomously. Our team of
									machine learning experts can help you
									collect and analyze loads of data from
									multiple sources and develop custom data
									visualization tools to explore and
									understand your data quickly. Our data
									analytics and visualization services can be
									used to identify trends, make predictions,
									and gain insights into customer behavior.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4 ">
									NLP Development
								</h2>
								<p className="secondsec-p ">
									Our natural language processing (NLP)
									development services allow you to analyze
									and understand human language in the form of
									a prompt or input. We develop custom NLP
									models that can process large volumes of
									text data and extract relevant information
									to provide insights to help your business
									make accurate decisions.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4 ">
									ML Development
								</h2>
								<p className="secondsec-p ">
									We provide machine learning development
									services encompassing the entire machine
									learning development lifecycle, from data
									preparation to model deployment. We work
									with various machine-learning tools and
									frameworks like TensorFlow, Scikit Learn,
									and Apache Spark to develop custom
									machine-learning models to help you
									eliminate repetitive tasks. We are equipped
									with a team of experts that can help you
									identify vital operational areas where
									machine learning algorithms can add the most
									value to modern learning models.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">
							Why Should You Trust Codiste For Machine Learning
							Development Services?
						</h1>
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
								src="assets/images/improve.png"
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
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3">
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

			<div className="bg-color">
				<div className="container container-fluid py-5">
					<div className=" d-flex align-items-center flex-column justify-content-center">
						<h1 className="all-head">Case Study</h1>
						<p>
							Our case studies will help you understand how we
							helped these businesses with enterprise machine
							learning development services.{" "}
						</p>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12 p-5 d-flex align-items-center justify-content-center flex-column">
							<div className=" ">
								<h1 className="">
									Machine Learning Estimation
								</h1>
								<p className="mt-4">
									You can submit your tender drawings and grab
									a cup of coffee while the software annotates
									the drawings and generates the bill of
									materials you are looking for. The HVAC
									industry is a highly competitive field, and
									with so many contractors vying for the same
									projects, it can be difficult to stand out
									and win more quotes. However, with the right
									tools and technology at your disposal, you
									can increase your chances of success.
									<br />
									One of the most important aspects of bidding
									on HVAC projects is being able to provide
									detailed and accurate quantity take-offs.
									These take-offs are a critical part of the
									bidding process, as they provide the
									information needed to accurately estimate
									the cost of a project. However, creating
									these take-offs can be time-consuming and
									tedious, taking valuable time away from
									other aspects of your business.
									<br />
									That’s where our software comes in. Our
									software uses cutting-edge technology to
									provide detailed quantity take-offs from
									construction drawings, allowing you to focus
									more on winning projects and less on
									counting.
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
						<div className="col-lg-6 col-sm-12 p-5 ">
							<img
								className="img-fluid d-flex align-items-center justify-content-center"
								style={{
									height: "450px",
									width: "auto",
									margin: "auto",
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
			</div>

			<div class="bg-color py-5">
				<div class="container container-fluid">
					<section>
						<div class=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 class="all-head">
								Satisfied clients is our proof of our excellence
							</h1>
						</div>

						<div
							id="carouselExampleDark"
							class="carousel carousel-dark slide carousel-box"
							data-bs-ride="carousel"
						>
							<div class="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="0"
									class="active"
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
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="d-flex align-items-center text-center flex-column custom-crousel">
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

										<div class="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												class="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													class="img-fluid my-4 client-logo"
													alt="MLEstimation"
													src="assets/images/client-logos/Ml Estimation.png"
												/>
											</div>
											<h5>MLEstimation</h5>
											<p>Founder</p>
										</div>
									</div>
								</div>
								<div class="carousel-item">
									<div class="d-flex align-items-center text-center flex-column custom-crousel">
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

										<div class="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												class="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													class="img-fluid my-4 client-logo"
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
								<div class="carousel-item">
									<div class="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Codiste Team rocked Throughout the
											Development Process. Nishant handled
											everything very professionally and
											as timely as possible even when
											everything in life was going
											sideways.
										</h3>

										<div class="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												class="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													class="img-fluid my-4 client-logo"
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
								class="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="prev"
							>
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button
								class="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="next"
							>
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
							<h2 className="">
								{" "}
								Fill your details in the form and our team will
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
