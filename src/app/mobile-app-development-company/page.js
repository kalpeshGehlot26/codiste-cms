import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import mobileList from "../data/services/service-items/mobile";
import jsonData from "../data/schema";

export const metadata = {
	title: "Mobile App Development Company | Codiste",
	description: "Let's experience the best-in-class mobile app development services for lightning-fast, bug-free apps that exceed expectations and drive user engagement.",
	images: "https://www.codiste.com/assets/images/main/Mobile App Development.png",
	openGraph: {
		title: "Mobile App Development Company | Codiste",
		description: "Let's experience the best-in-class mobile app development services for lightning-fast, bug-free apps that exceed expectations and drive user engagement.",
		images: "https://www.codiste.com/assets/images/main/Mobile App Development.png",
		url: 'https://www.codiste.com/mobile-app-development-company/'
	},
	alternates: {
		canonical: 'https://www.codiste.com/mobile-app-development-company',
	}
};

const limit = 3;
const category = 1;

const MobileAppDevelopmentCompany = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.mobileService) }}
			/>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-6 order-2 order-lg-1 p-4">
									<h1 className="all-head">Mobile App Development Company</h1>
									<p className="all-p mb-4">We are a digital mobile application development company that
										offers the best-in-class end-user experience with a mobile application. Our application
										development team builds lightning-fast, smooth & bug-free Mobile Apps that exceed
										expectations and drive better user engagement. We offer iOS, Android, Flutter, and React
										native application development for businesses and enterprises envisioned to improve user
										engagement. Our team works with you extensively to visualize your ideas and build your
										vision in reality.
									</p>
									<Link href="/contact" className="book-btn">Let’s Talk</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/main/Mobile App Development.png" alt="Mobile App Development" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid py-5">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h2 className="all-head text-center">
							Our Mobile App Development Services{" "}
						</h2>
					</div>
					<ServiceInnerItems serviceItems={mobileList} />
				</section>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head text-center">
							Why Choose Codiste For Mobile App Development
							Services?{" "}
						</h2>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1">
							<img
								className="img-fluid mb-2"
								alt="Quality Assurance and Testing"
								loading="lazy" src="assets/images/Service-mobile/quality.png"
							/>
							<h2 className="secondsec-head text-center">
								Quality Assurance and Testing
							</h2>
							<p className="secondsec-p text-center">
								Our mobile application development services
								strongly emphasize quality assurance and testing
								to ensure our clients receive high-quality
								mobile applications that meet their
								expectations.
							</p>
						</div>

						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2">
							<img
								className="img-fluid mb-2"
								alt="Customization and Personalization"
								loading="lazy" src="assets/images/Service-mobile/customer-behavior.png"
							/>
							<h2 className="secondsec-head text-center">
								Customization and Personalization
							</h2>
							<p className="secondsec-p text-center">
								Our mobile
								application development team has the expertise
								and hands-on experience to build and develop as
								per your specific requirements and develop
								solutions that align with your brand images Service-mobile/and
								add value to your business goals.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3">
							<img
								className="img-fluid mb-2"
								alt="Hybrid Mobile Applications"
								loading="lazy" src="assets/images/Service-mobile/application.png"
							/>
							<h2 className="secondsec-head text-center">
								Hybrid Mobile Applications
							</h2>
							<p className="secondsec-p text-center">
								Our mobile application development team offers
								hybrid mobile applications that can run
								seamlessly across multiple platforms and help
								you save big with one mobile application for
								Android and iOS platforms.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4">
							<img
								className="img-fluid mb-2"
								alt="Emerging Technologies"
								loading="lazy" src="assets/images/Service-mobile/digital.png"
							/>
							<h2 className="secondsec-head text-center">
								Emerging Technologies
							</h2>
							<p className="secondsec-p text-center">
								Our mobile application development services use
								modern industry technologies to help you stay
								up-to-date with the latest mobile app
								development technologies and trends. We provide
								the best possible solutions to our clients as
								per their presence and requirement.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5">
							<img
								className="img-fluid mb-2"
								alt="Expertise in Multiple Industries"
								loading="lazy" src="assets/images/Service-mobile/supplier.png"
							/>
							<h2 className="secondsec-head text-center">
								Expertise in Multiple Industries
							</h2>
							<p className="secondsec-p text-center">
								We have experts on the team with extensive
								experience developing scalable and robust mobile
								applications for various industries, including
								healthcare, education, retail, and more. Our
								team efficiently uses this experience to provide
								industry-specific solutions catering to the
								specific needs of businesses serving different
								markets.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5">
							<img
								className="img-fluid mb-2"
								alt="Cross-Platform Mobile Applications"
								loading="lazy" src="assets/images/Service-mobile/cross-platform.png"
							/>
							<h2 className="secondsec-head text-center">
								Cross-Platform Mobile Applications
							</h2>
							<p className="secondsec-p text-center">
								We offer cross-platform mobile application
								development services built on technologies that
								help you bring a similar experience to multiple
								platforms. Our cross-platform mobile
								applications seamlessly utilize a single
								codebase at different platforms, allowing your
								business to move forward with no-code and
								low-code development services.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
					<p>
						We are your Go-To Expert for Best Mobile App Development{" "}
					</p>
					<Link href="/book-a-call" className="book-btn">
						Get in Touch
					</Link>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h2 className="all-blog text-center">Technology Stack</h2>
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
											className="img-fluid" alt="Swift"
											loading="lazy" src="assets/images/tech/Swift.png"
										/>
										<p className="text-uppercase">Swift</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="Objective"
											loading="lazy" src="assets/images/tech/Objective-c.png"
										/>
										<p className="text-uppercase">Objective-c</p>
									</li>

									<li>
										<img
											className="img-fluid" alt="xcode"
											loading="lazy" src="assets/images/tech/xcode.png"
										/>
										<p className="text-uppercase">xcode</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="Java"
											loading="lazy" src="assets/images/tech/Java.png"
										/>
										<p className="text-uppercase">Java</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="Kotlin"
											loading="lazy" src="assets/images/tech/Kotlin-logo.png"
										/>
										<p className="text-uppercase">Kotlin</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="Android Studio"
											loading="lazy" src="assets/images/tech/Android Studio.png"
										/>
										<p className="text-uppercase">Android Studio</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="flutter"
											loading="lazy" src="assets/images/tech/flutter.png"
										/>
										<p className="text-uppercase">flutter</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="Ionic"
											loading="lazy" src="assets/images/tech/Ionic.png"
										/>
										<p className="text-uppercase">Ionic</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="java script"
											loading="lazy" src="assets/images/tech/java script.png"
										/>
										<p className="text-uppercase">java script</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="html"
											loading="lazy" src="assets/images/tech/html-5.png"
										/>
										<p className="text-uppercase">html-5</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className="d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">Case Study</h2>
					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
							<div className=" ">
								<h2 className="">Pixi pages</h2>
								<p className="all-p">
									Busy parents stay connected with their
									children by recording professional-sounding
									bedtime stories, complete with music and
									personal notes. The app provides a fun and
									easy way for parents to create a special
									story for their children, even when they are
									away.
								</p>
							</div>
							<div className="mt-4">
								<Link
									href="/portfolio/pixipages"
									className="book-btn"
								>
									Browse Our Live Showcases
								</Link>
							</div>
						</div>
						<div className="col-lg-5 col-md-6 col-sm-8 mx-auto mx-lg-0  order-1 order-md-2 mb-5 mb-lg-0">
							<img
								className="img-fluid"
								style={{
									padding: "20px",
								}}
								src="assets/images/case-pixi/Pixipages.png"
								alt="StoryTelling App"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">FAQs</h2>
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
									What are the different types of mobile
									applications?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									There is a wide range of mobile
									applications, including native, hybrid, and
									web-based applications for both iOS and
									Android platforms. You can build a mobile
									application on multiple technologies like
									React Native, Flutter, and Ionic.
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
									What are some popular platforms for
									developing mobile applications?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Mobile applications for iOS and Android are
									getting most of the popularity nowadays.
									These two technologies cover over 99% of
									mobile devices worldwide. Multiple ways and
									languages to build your mobile application
									include React Native and Flutter.
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
									Are post-launch support and maintenance
									needed for mobile applications?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Yes, comprehensive post-launch support and
									maintenance services are required to ensure
									the mobile application runs smoothly and any
									new issues are resolved ASAP. It helps your
									business regularly update the user
									experience with new features. It provides
									regular updates and maintenance to ensure
									the application is up-to-date with the
									latest technologies.
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
									Is it good to integrate third-party APIs
									into a mobile application?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Integrating various APIs, such as payment
									gateways, social media, and geolocation, is
									crucial for the mobile application to
									achieve better usability and audience
									retention. It helps ensure that the user
									spends more time on the application and
									increases sales with seamless payment
									integration with popular payment gateways.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-blog">Blogs</h2>
					<p className="all-p text-center">
						Learn more about new developments and breakthroughs in
						mobile application development with our blogs.
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
							<h2 className="all-head text-center">
								We take pride in your trust!
							</h2>
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
											Codiste Team rocked Throughout the
											Development Process. Nishant handled
											everything very professionally and
											as timely as possible even when
											everything in life was going
											sideways.
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
													alt="MoonTrust"
													loading="lazy" src="assets/images/client-logos/MoonTrust.png"
												/>
											</div>
											<h5> MoonTrust</h5>
											<p>Founder</p>
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
				<h2 className="all-head text-center mb-lg-5 mb-0">Seek Our Help!</h2>
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12  needsec p-4">
							<h2>Do you want a Feature-rich mobile app?<br />
								Get in touch with us!</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<CaseStudyForm text="Let's Discuss" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default MobileAppDevelopmentCompany;
