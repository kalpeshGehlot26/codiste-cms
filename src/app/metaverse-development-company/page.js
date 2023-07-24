import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import metaVerseList from "../data/services/service-items/metaverse";
import jsonData from "../data/schema";

export const metadata = {
	title: "Enterprise-Grade Metaverse Development Company | Codiste",
	description:
		"Explore our metaverse development services and embark on a journey into the decentralized digital universe. Embrace the power of the Metaverse services now!!",
};

const limit = 3;
const category = 6;

const MetaverseDevelopmentCompany = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.metaService) }}
			/>
			<div className="bg-color" data-aos="fade-up" data-aos-duration="3000">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
									<h1 className="all-head">Enterprise-Grade Metaverse Development Company</h1>
									<p className="all-p mb-4">We are a metaverse development company that helps businesses and
										organizations access the decentralized Metaverse. We offer an immersive 3D virtual user experience by
										integrating with traditional website/mobile and stand-alone metaverse service applications built on
										secure, scalable, and reliable blockchain networks, APIs, and mixed realities.
									</p>
									<Link href="/contact" className="book-btn">Let’s Talk</Link>
								</div>
								<div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0"><img className='img-fluid' src="assets/images/main/metaverse.png"
									alt="Enterprise-Grade Metaverse" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid" data-aos="fade-up" data-aos-duration="3000">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h2 className="all-head">Our Metaverse Services </h2>
						<p className="all-p text-center">
							Explore our customized metaverse solutions for a
							broad spectrum of businesses and enterprises.
						</p>
					</div>
					<ServiceInnerItems serviceItems={metaVerseList} />
				</section>
			</div>

			<div className="py-5 bg-color mt-5" data-aos="fade-up" data-aos-duration="3000">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head text-center">
							Why Choose Codiste for Metaverse Services?
						</h2>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1" data-aos="fade-up" data-aos-duration="3000">
							<img
								className="img-fluid mb-2"
								alt="Post Sales"
								loading="lazy" src="assets/images/Service-meta/Post Sales Support & Assistance.png"
							/>
							<h2 className="secondsec-head text-center">
								End-to-End Development Support
							</h2>
							<p className="secondsec-p text-center">
								We ensures a smooth
								and seamless development process and timely
								delivery of your metaverse experience, making it
								easier for your enterprise to integrate
								metaverse.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2" data-aos="fade-up" data-aos-duration="3000">
							<img
								className="img-fluid mb-2"
								alt="personalized"
								loading="lazy" src="assets/images/Service-meta/personalized.png"
							/>
							<h2 className="secondsec-head text-center">
								Personalized Development
							</h2>
							<p className="secondsec-p text-center">
								Our metaverse development team creates custom
								solutions tailored to specific needs and
								preferences, ensuring a unique immersive
								3D-powered metaverse experience that helps you
								outshine the competition.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3" data-aos="fade-up" data-aos-duration="3000">
							<img
								className="img-fluid mb-2"
								alt="3D Immersive Experience"
								loading="lazy" src="assets/images/Service-meta/360-degrees.png"
							/>
							<h2 className="secondsec-head text-center">
								3D Immersive Experience
							</h2>
							<p className="secondsec-p text-center">
								We can
								create 3D experiences leading to higher user
								retention and engagement, increasing customer
								loyalty and revenue as Metaverse becomes
								popular.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4" data-aos="fade-up" data-aos-duration="3000">
							<img
								className="img-fluid mb-2"
								alt="Virtual Avatars"
								loading="lazy" src="assets/images/Service-meta/vr-glasses.png"
							/>
							<h2 className="secondsec-head text-center">
								Virtual Avatars
							</h2>
							<p className="secondsec-p text-center">
								We develop virtual avatars that allow your brand
								to create a personalized appearance for its
								brand or product. Our team creates metaverse
								virtual avatars for a more personal and engaging
								user connection, resulting in increased brand
								awareness, customer loyalty, and brand advocacy.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5" data-aos="fade-up" data-aos-duration="3000">
							<img
								className="img-fluid mb-2"
								alt="Decentralized Security"
								loading="lazy" src="assets/images/Service-meta/decentralization.png"
							/>
							<h2 className="secondsec-head text-center">
								Decentralized Security
							</h2>
							<p className="secondsec-p text-center">
								Our metaverse development services ensure the
								security of the metaverse development with
								decentralized security measures and technologies
								crucial for protecting massive amounts of users'
								data and identity with the metaverse.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5" data-aos="fade-up" data-aos-duration="3000">
							<img
								className="img-fluid mb-2"
								alt="Extensive Customization"
								loading="lazy" src="assets/images/Service-meta/autumn.png"
							/>
							<h2 className="secondsec-head text-center">
								Extensive Customization
							</h2>
							<p className="secondsec-p text-center">
								We offer our clientele extensive brand metaverse
								customization options, allowing them to utilize
								the immersive 3D virtual experience in catering
								to specific user needs and requirements.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv" data-aos="fade-up" data-aos-duration="3000">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
					<p>
						Level up your CX with a seamless Metaverse integration
						with Us!{" "}
					</p>
					<Link href="/book-a-call" className="book-btn">
						Book a Call
					</Link>
				</div>
			</div>

			<div className="bg-color py-5 mb-5" data-aos="fade-up" data-aos-duration="3000">
				<div className="container container-fluid py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h2 className="all-blog text-center">Technology Stack</h2>
							<p className="all-p  mb-5 text-center">
								We pride ourselves on our proven track record
								with 20+ technologies and delivering innovative,
								customized IT solutions.
							</p>
						</div>
						<div className="row" data-aos="fade-up" data-aos-duration="3000">
							<div className="col-lg-12">
								<ul className="tech-style">
									<li>
										<img
											className="img-fluid" alt="Binance_Logo"
											loading="lazy" src="assets/images/tech/Binance_Logo.png"
										/>
										<p className="text-uppercase">Binance</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="Corda"
											loading="lazy" src="assets/images/tech/Corda.png"
										/>
										<p className="text-uppercase">Corda</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="ethereum"
											loading="lazy" src="assets/images/tech/ethereum.png"
										/>
										<p className="text-uppercase">ethereum</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="fantom"
											loading="lazy" src="assets/images/tech/fantom.png"
										/>
										<p className="text-uppercase">fantom</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="polygon"
											loading="lazy" src="assets/images/tech/polygon.png"
										/>
										<p className="text-uppercase">polygon</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="tron"
											loading="lazy" src="assets/images/tech/tron logo.png"
										/>
										<p className="text-uppercase">tron</p>
									</li>
									<li>
										<img
											className="img-fluid" alt="Solana"
											loading="lazy" src="assets/images/tech/Solana.png"
										/>
										<p className="text-uppercase">Solana</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5" data-aos="fade-up" data-aos-duration="3000">
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
									What is the metaverse, and how can it
									benefit my business?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									The metaverse is a virtual world that allows
									users to interact with each other and
									replicates the real-world environment in a
									3D virtual & digital space. There are
									numerous benefits that the metaverse poses
									to your business, including a modernistic
									channel to engage with customers, employees,
									or any individual with a metaverse presence
									in a more immersive and interactive manner.
									Moreover, it can facilitate remote work and
									enhance collaboration opportunities for
									businesses to gain rapid growth.
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
									How can a metaverse help my company enhance
									its customer experience?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									A metaverse application platform can enhance
									your CX by offering a more immersive and
									engaging way to interact with your brand in
									multiple ways. For instance, you can build a
									virtual e-commerce store where customers can
									browse, purchase products, and realistically
									attend virtual events by sitting at home.
									Thus, increasing your brand engagement,
									customer retention, and increased sales
									frequency.
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
									How can I monetize a metaverse platform for
									my business?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Several ways to monetize a metaverse
									platform include virtual commerce,
									advertising, events, and subscriptions. In
									Virtual business, you can allow users to buy
									and sell goods and services within the
									metaverse digitally, like the e-commerce
									giant Walmart. In Advertisement, brands can
									place ads in your metaverse, targeting users
									better with the help of advancement insights
									on users’ interests and behaviors. You can
									also build a metaverse virtual auditorium to
									host virtual events, such as concerts,
									exhibitions, and conferences, and can
									generate revenue through ticket sales and
									sponsorships.
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
									Can you help me integrate my existing
									software with a Metaverse solution?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									We can help you integrate your existing
									business channels and platforms with a
									metaverse application with various software
									and media, including CRM, ERP, e-commerce,
									and custom APIs & plugins.
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
									How long does developing a custom metaverse
									solution for my business take?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									The time it takes to develop a custom
									metaverse solution depends on several
									factors, such as the project's complexity,
									the features and functionality required, and
									the level of customization or personalized
									touch needed. Typically, a custom metaverse
									can take a decent time to develop, depending
									on the scope and scale of the project.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5 bg-color" data-aos="fade-up" data-aos-duration="3000">
				<div className="container container-fluid">
					<div className="d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">Case Study</h2>

					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
							<div className="">
								<h2 className="">
									DiveWallet <br /> Your next-gen crypto asset
									manager
								</h2>
								<p className="all-p">
									As Blockchain experts, Codiste develops a
									highly-secured crypto wallet - ‘Divewallet’
									that supports well known EVM-based
									blockchains such as Ethereum, Binance,
									Polygon, and Solana.
								</p>
							</div>

							<div className="mt-4">
								<Link
									href="/portfolio/divewallet"
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
								src="assets/images/diwallet-case/Dive Wallet.png"
								alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5" data-aos="fade-up" data-aos-duration="3000">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-blog">Blogs</h2>
					<p className="all-p text-center">
						Our blogs for the best news and resources on metaverse
						development.
					</p>
				</div>
				<AllServiceBlogSlider limit={limit} category={category} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<Link href="/blog" className="book-btn mt-3">Read more</Link>
				</div>
			</div>
			<div className="bg-color py-5" data-aos="fade-up" data-aos-duration="3000">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">What Our Clients Say</h2>
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
													loading="lazy"
												/>
											</div>
											<h5>Holygrails</h5>
											<p>
												Founder <br />
												Abu Dhabi, United Arab Emirates
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											They communicate clearly and outline
											the product roadmap for us. It has
											been very easy to work with them.
											Made us profitaable on NFT
											Marketplace and which made amazing
											journey.
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
													alt="Ninza"
													src="assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png"
													loading="lazy"
												/>
											</div>
											<h5>Ninza NFT</h5>
											<p>CoFounder</p>
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

			<div className="container container-fluid py-5" data-aos="fade-up" data-aos-duration="3000">
				<h2 className="all-head text-center mb-lg-5 mb-0">We will contact you hereafte!</h2>
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12  needsec p-4">
							<h2>
								Want to leverage Metaverse for your business?
								<br />Let us know your details in the form.
							</h2>
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

export default MetaverseDevelopmentCompany;
