import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import webServiceBlogs from "../data/services/webServiceBlogs copy";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";

export const metadata = {
	title: "Web Development Company | Codiste",
	description:
		"Codiste web development services offer website development support and technical assistance to build secure, scalable, stunning, and robust web applications.",
};

const WebDevelopmentCompany = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec d-flex align-items-center ">
							<div className="col-lg-6 col-sm-12 mb-5 mb-lg-0">
								<h1 className="all-head">
									Web Development Company{" "}
								</h1>
								<p className="all-p me-5 mb-4 mt-3">
									Our Web development services offer website
									development support and technical assistance
									to build secure, scalable, visually
									stunning, and robust web applications.
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
									src="assets/images/main/Web Development_.png"
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
							Our Web Development Services{" "}
						</h1>
						<p className="all-p text-center">
							We provide end-to-end web application development
							services for enterprises and businesses.
						</p>
					</div>
					<div className="row ">
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									UI/UX Design
								</h2>
								<p className="secondsec-p">
									We offer UI/UX design services focused on
									creating a seamless and engaging user
									experience that drives better engagement and
									retention. Our team designs with a
									user-centered approach, ensuring our designs
									are intuitive and easy to navigate. Our
									design team has experience using multiple
									design tools, such as Sketch, Adobe XD, and
									Figma, to deliver eye-catching and stunning
									UI/UX designs that meet your branding
									opportunities & guidelines by aligning with
									the latest design trends.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Custom Web Applications Development
								</h2>
								<p className="secondsec-p">
									At Codiste, we specialize in customizing web
									development to help businesses leverage web
									applications to their full potential. We
									build custom web applications with a
									personalized touch and deliver them to the
									user's expectations. Our team has years of
									experience and the expertise in leadership
									with a variety of programming languages such
									as Python, Ruby on Rails, and PHP, as well
									as popular front-end frameworks such as
									React, Angular, and Vue. Our custom web
									applications are scalable, efficient, and
									user-friendly, ensuring a seamless user
									experience.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									REST API Development
								</h2>
								<p className="secondsec-p">
									Codiste offers hassle-free REST API
									development services that allow you to
									integrate your web applications with other
									systems and platforms, such as mobile apps,
									CRM systems, and social media platforms. We
									ensure that our web development team uses
									popular API development tools, such as
									Swagger, Postman, and Insomnia, to design
									and develop scalable, secure, and efficient
									RESTful APIs to help you build customized
									solutions on trusted platforms.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									OpenSource Framework Experts
								</h2>
								<p className="secondsec-p">
									Our Web development team has hands-on
									experience working with open-source web
									development frameworks such as Laravel,
									Django, and Express.js. We leverage the
									power of open-source technologies to deliver
									custom web applications that are efficient,
									scalable, and cost-effective. Our web
									development services are catered to ensure
									that only the leading open-source
									technologies are used to deliver solutions
									that align with your business needs.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Hire Web Experts
								</h2>
								<p className="secondsec-p">
									We also offer a Web Experts service that
									allows you to hire our experienced web
									developers and designers flexibly. We
									provide a flexible development process where
									you can hire our experts for a fixed period,
									such as for a specific project or on a
									part-time or full-time basis. Our web
									experts are proficient in various
									technologies and programming languages and
									can help you build custom solutions
									efficiently.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Progressive Web Apps
								</h2>
								<p className="secondsec-p">
									Codiste provides Progressive Web App (PWA)
									development services that enable clients to
									deliver web apps that look and feel like
									native mobile apps, providing a seamless
									user experience across devices. We use
									various technologies, such as Service
									Workers and Web App Manifests, to enable
									features such as offline caching, push
									notifications, and app installation. Our
									PWAs are fast, reliable, and engaging,
									helping you increase user engagement and
									retention.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head text-center">
							Why Is Codiste The Best Web Design and Development
							Company?
						</h1>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1">
							<img
								className="img-fluid mb-2"
								alt="Comprehensive Development Support"
								src="assets/images/cell-analysis.png"
							/>
							<h2 className="secondsec-head text-center">
								Comprehensive Development Support
							</h2>
							<p className="secondsec-p text-center">
								Our team of skilled developers provides
								comprehensive development support, from initial
								planning to final application deployment. With
								expertise in various technologies, we ensure
								seamless integration and deliver high-quality
								results within deadlines.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2">
							<img
								className="img-fluid mb-2"
								alt="Efficient Solutions"
								src="assets/images/reviewing.png"
							/>
							<h2 className="secondsec-head text-center">
								Efficient Solutions
							</h2>
							<p className="secondsec-p text-center">
								Our web development team specializes in creating
								efficient, tailor-made web solutions to meet
								your specific requirements. We work diligently
								to ensure that each application is designed to
								be efficient, scalable, and user-friendly.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3">
							<img
								className="img-fluid mb-2"
								alt="Visually Stunning Applications"
								src="assets/images/focus.png"
							/>
							<h2 className="secondsec-head text-center">
								Visually Stunning Applications
							</h2>
							<p className="secondsec-p text-center">
								Codiste has a team of UI/UX designers to create
								visually stunning applications that are sure to
								impress. We focus on creating intuitive designs
								that enhance the user experience and are
								visually appealing.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4">
							<img
								className="img-fluid mb-2"
								alt="Customized and Personalized CX"
								src="assets/images/technology2.png"
							/>
							<h2 className="secondsec-head text-center">
								Customized and Personalized CX
							</h2>
							<p className="secondsec-p text-center">
								We understand that each client has unique needs,
								especially regarding Web presence. We specialize
								in providing customized and personalized CX to
								ensure that you bring that personalized touch to
								your web applications.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5">
							<img
								className="img-fluid mb-2"
								alt="24/7 Customer Support"
								src="assets/images/24-hours.png"
							/>
							<h2 className="secondsec-head text-center">
								24/7 Customer Support
							</h2>
							<p className="secondsec-p text-center">
								We offer extended pre and post-development
								round-the-clock customer support to resolve your
								queries promptly. We take pride in our ability
								to provide excellent customer service.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 ">
							<img
								className="img-fluid mb-2"
								alt="Secure and Scalable"
								src="assets/images/security.png"
							/>
							<h2 className="secondsec-head text-center">
								Secure and Scalable
							</h2>
							<p className="secondsec-p text-center">
								Our web development services offer secure and
								scalable web applications using the latest
								technologies and best practices of web
								development. Our team of experts ensures that
								each application is built to be scalable and
								secure, with a focus on performance and
								reliability.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3">
					<p>
						web site development : Looking to build a website for
						your enterprise?
					</p>
					<Link href="/book-a-call" className="book-btn">
						Ask now
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
											src="assets/images/tech/Laravel.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Ruby.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Node.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Angular.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/PHP.png"
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
											src="assets/images/tech/WordPress.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/custom development.png"
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
									What are the different programming languages
									used in web development?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									There are several programming languages used
									in web development, including HTML, CSS,
									JavaScript, PHP, Python, Ruby, and Java.
									Each language has strengths and weaknesses,
									and developers often use multiple languages
									to create web applications.
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
									What is the difference between front-end and
									back-end development?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Front-end development refers to the part of
									web development that deals with the user
									interface and user experience. It involves
									creating the layout, design, and
									functionality of the website that users
									interact with. On the other hand, back-end
									development deals with the server side of
									web development. It involves creating
									server-side logic, database management, and
									server-side scripting.
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
									What is UI/UX design, and why is it
									essential for web development?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									UI/UX design refers to the process of
									designing the user interface and user
									experience of a website or application. It
									involves creating a visually appealing,
									user-friendly design that enhances user
									experience. Good UI/UX design is essential
									for web development because it can help
									improve a website's user engagement and
									retention rate.
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
									What is responsive web design?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Responsive web design is an approach to web
									development that ensures that the website's
									layout and design adapt to different screen
									sizes and devices. It involves using
									flexible layouts, images, and cascading
									style sheets (CSS) to create a website
									optimized for other devices.
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
									What is REST API development, and why is it
									essential for web development?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									REST API development involves creating an
									application programming interface (API)
									using Representational State Transfer (REST)
									principles. REST is a set of architectural
									principles that allow for the building of
									scalable and efficient web services. REST
									API development is essential for web
									development because it will enable
									developers to create APIs that other
									applications can easily consume.
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
									What is a progressive web app, and how does
									it differ from a native app?
								</button>
							</h2>
							<div
								id="flush-collapsesix"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingsix"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									A progressive web app is a web application
									that is designed to provide a native
									app-like experience to users. Progressive
									web apps are designed to work offline, load
									quickly, and be responsive to different
									screen sizes and devices. The main
									difference between a progressive web app and
									a native app is that progressive web apps
									are built using web technologies, such as
									HTML, CSS, and JavaScript. In contrast,
									native apps are created using
									platform-specific technologies like Swift
									for iOS and Java for Android.
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
							Learn more about our previous work and development
							process with clients.
						</p>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12 p-5 d-flex align-items-center justify-content-center flex-column">
							<div className=" ">
								<h1 className="">Medizen</h1>
								<p className="mt-4">
									The Medizen app was developed to help
									patients manage their medications safely and
									easily. It features a medication tracker,
									reminders, drug interaction checker, refill
									reminders, and family sharing. The
									development team overcame challenges to
									create a user-friendly and reliable app that
									meets the client's requirements. The app can
									improve health outcomes for users.
								</p>
							</div>

							<div className="mt-4">
								<Link
									href="/portfolio/medizen"
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
								src="assets/images/case-medizen/Medizen.png"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head">Blog</h1>
					<p className="all-p text-center">
						Read our Blogs here to get continuous insights and
						updates on new technologies and development across the
						globe.{" "}
					</p>
				</div>
				<AllServiceBlogSlider items={webServiceBlogs} />
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head text-center">
								We justify our credibility with their success
								notes
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
								Get a Website that truly represents your brand
								and values.{" "}
							</h1>
							<h2 className="">
								Fill out your details to help us connect!
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

export default WebDevelopmentCompany;
