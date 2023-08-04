import React from "react";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import jsonData from "../data/schema";

export const metadata = {
	title: "Enterprise Grade Blockchain and AI Development Company | Codiste",
	description: "Codiste is an emerging Top leader in blockchain and AI development services that enable businesses to thrive in the constantly evolving digital decentralized.",
	images: "https://www.codiste.com/assets/images/about/about-us.png",
	openGraph: {
		title: "Enterprise Grade Blockchain and AI Development Company | Codiste",
		description: "Codiste is an emerging Top leader in blockchain and AI development services that enable businesses to thrive in the constantly evolving digital decentralized.",
		images: "https://www.codiste.com/assets/images/about/about-us.png",
		url: 'https://www.codiste.com/about/'
	},
	alternates: {
		canonical: 'https://www.codiste.com/about',
	}
};

const About = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.aboutUs) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.aboutUsV1) }}
			/>
			<div className="bg-color careersec">
				<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-0 mb-lg-5 p-4">
					<h1 className="all-head">Enterprise Grade Blockchain Development Company</h1>
				</div>
				<div className="container container-fluid" >
					<section>
						<div className="row">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap  align-items-center justify-content-between">
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 p-4"><img className='img-fluid' alt='Blockchain Development' src="assets/images/about/about-us.png" /></div>
								<div className="col-12 col-lg-5 p-4">
									<h3 className="mb-3">Driving Decentralization with Codiste</h3>
									<p className="secondsec-p">Codiste is an emerging leader in software and technology solutions that enable businesses to thrive in the
										constantly evolving digital landscape. We firmly believe that evolving technologies such as Blockchain,
										Metaverse, and AR/VR have the power to revolutionize the way companies operate and transform it with
										organizational decentralization. We understand the critical role technology partners play in today's business
										environment and strive to be the ideal partner for companies seeking innovative technological solutions with
										blockchain and other prominent Web3 technologies.
									</p>
									<a href="#servicesOffer" className="book-btn">Explore More</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className="row justify-content-between">
						<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap  align-items-center justify-content-between">
							<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
								<h2 className="all-head ">MISSION</h2>
								<p className="secondsec-p ">Strive, Innovate and Succeed in delivering tangible business value to clients across the
									globe by ensuring the highest quality within available time frames in each of our IT solutions we provide.
									Through a consistent and rigorous adherence to best procedures and practices prevalent in the industry today,
									we deliver more than what the Client expects.</p>
							</div>
							<div className="col-12 col-lg-4 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' alt='MISSION' src="assets/images/about/Mission.png" /></div>
						</div>

						<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap  align-items-center justify-content-between">
							<div className="col-12 col-lg-4 mt-5 mt-lg-0"><img className='img-fluid' alt='VISION' src="assets/images/about/vision.png" /></div>
							<div className="col-12 col-lg-5 p-4">
								<h2 className="all-head ">VISION</h2>
								<p className="secondsec-p ">We at Codiste have a vision of becoming the most eminent software development company
									with the highest customer life cycle for offshore service seekers globally. Codiste services have to define
									the best “collaborative experience” for our clients and solution users.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid ">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">Our Values</h2>
							<p className="all-p text-center">
								We strive to deliver secure, scalable, decentralized
								software solutions that empower businesses to
								succeed in the fast-paced digital landscape.
							</p>
						</div>

						<div className="row">
							<div className="col-lg-12">
								<ul className="About-style">
									<li>
										<img
											className="img-fluid"
											alt="Collaboration"
											src="assets/images/about/Collaboration.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">Collaboration</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Continuous Improvement"
											src="assets/images/about/continuous-improvement.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">
											Continuous Improvement
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Customer Focus"
											src="assets/images/about/Customer Focus.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">
											Customer Focus
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Diversity & Inclusion"
											src="assets/images/about/diversity.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">
											Diversity & Inclusion
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Excellence"
											src="assets/images/about/excellence.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">Excellence</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Innovation"
											src="assets/images/about/innovation.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">Innovation</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Agility"
											src="assets/images/about/iteration.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">Agility</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Integrity"
											src="assets/images/about/Integrity.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">Integrity</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Accountability"
											src="assets/images/about/responsibility.png"
											loading="lazy"
										/>
										<p className="secondsec-p text-center">
											Accountability
										</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid  py-5" id="servicesOffer">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">Services We Offer</h2>
						<p className="all-p  text-center">
							We offer a wide range of innovation-led
							enterprise-grade development services for various
							industries and sectors on emerging & rapidly growing
							technologies.
						</p>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<ul className="AboutService-style">
								<li>
									<img
										className="img-fluid"
										alt="Blockchain Development Service"
										src="assets/images/services/Blockchain Development Services.webp"
										loading="lazy"
									/>
									<Link href="/blockchain-development-company">
										<span className="fs-3">Blockchain</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Artificial Intelligence Development services"
										src="assets/images/services/AI Development.webp"
										loading="lazy"
									/>
									<Link href="/artificial-intelligence-development-company">
										<span className="fs-3">
											Artificial Intelligence
										</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="AR VR Development Service"
										src="assets/images/services/AR VR.webp"
										loading="lazy"
									/>
									<Link href="/augmented-reality-development-company">
										<span className="fs-3">AR/VR</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Cryptocurrency Development Service"
										src="assets/images/services/Cryptocurrency.webp"
										loading="lazy"
									/>
									<Link href="/cryptocurrency-development-company">
										<span className="fs-3">
											Cryptocurrency
										</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Machine Learning Development Service"
										src="assets/images/services/ML Development Services.webp"
										loading="lazy"
									/>
									<Link href="/machine-learning-development-company">
										<span className="fs-3">
											Machine Learning
										</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Metaverse Development Service"
										src="assets/images/services/metaverse.webp"
										loading="lazy"
									/>
									<Link href="/metaverse-development-company">
										<span className="fs-3">Metaverse</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Mobile App Development Service"
										src="assets/images/services/Mobile App Development.webp"
										loading="lazy"
									/>
									<Link href="/mobile-app-development-company">
										<span className="fs-3">Mobile App</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="NFT Marketplace Development Service"
										src="assets/images/services/NFTMarketplace Development Services.webp"
										loading="lazy"
									/>
									<Link href="/nft-development-company">
										<span className="fs-3">
											NFT Marketplace
										</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Mobile App Development Service"
										src="assets/images/services/Start up.webp"
										loading="lazy"
									/>
									<Link href="/startup-development-company">
										<span className="fs-3">Startup</span>
										<br />
										Development Service
									</Link>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Web Development Service"
										src="assets/images/services/Web Development.webp"
										loading="lazy"
									/>
									<Link href="/web-development-company">
										<span className="fs-3">Web</span>
										<br />
										Development Service
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>

			<div className="py-5 bg-color" >
				<div className="container container-fluid">
					<h2 className="all-head text-center mb-5">Leadership Team</h2>
					<div className="row">
						<div className="col-xl-2 col-md-4 p-4 ">
							<img className='img-fluid ' src="assets/images/about/Nishant.png" alt="Nishant Bijani" loading="lazy" />
						</div>
						<div className="col-xl-10 col-md-8 aboutall-p p-4">
							<div>
								<div className="d-flex flex-wrap">
									<h2 className="me-4 aboutall-h">Nishant Bijani</h2>
									<a href="https://www.linkedin.com/in/nishantbijani/" target="_blank">
										<img
											className="img-fluid mb-4 "
											src="assets/images/about/linkedin.png"
											alt="linkedin"
										/>
									</a>
								</div>
								<p className="aboutall-p"> Co-Founder & CTO</p>
							</div>
							<div className="secondsec-p">
								<p>
									Nishant Bijani is an exceptional CTO, whose dedication to innovation and customer satisfaction sets him
									apart. He delivers customized solutions that exceed expectations and is always up-to-date with industry
									advancements. His expertise in engineering is unparalleled, and he is constantly pushing the boundaries of
									what is possible. Nishant understands the importance of high-quality products and services and is committed
									to ensuring that our customers receive nothing but the best. His contributions have been instrumental in
									driving our company's success, Under his leadership, we are confident that we will continue to excel in the
									future.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-2 col-md-4  p-4">
							<img className='img-fluid' src="assets/images/about/Nic.png" alt="Nic" loading="lazy" />
						</div>
						<div className="col-xl-10 col-md-8  aboutall-p p-4">
							<div>
								<div className="d-flex flex-wrap">
									<h2 className="me-4 aboutall-h">Nic Roux</h2>
									<a href="https://www.linkedin.com/in/nicolas-roux-2a847518a/" target="_blank" >
										<img
											className="img-fluid mb-4"
											src="assets/images/about/linkedin.png"
											alt=""
										/>
									</a>
								</div>
								<p className="aboutall-p">Co-Founder</p>
							</div>
							<div className="secondsec-p">
								<p>
									Nicolas Roux, co-founder of Codiste, is a visionary leader with an exceptional ability to drive growth
									through innovation and collaboration. As a digital communication expert, he brings a wealth of knowledge and
									experience to the table, and his fervor for technology has been instrumental in shaping Codiste's strategic
									vision. His leadership abilities are second to none, and he has cultivated an innovative culture within the
									organization that inspires creativity and excellence. His contributions have been invaluable in driving
									company success.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" py-5 mt-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h2 className="all-head text-center">
								Brands That Trust Our Work!
							</h2>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="brand-style">
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/Apollo.svg"
												alt="Apollo - Apollo Crypto Launchpad"
												loading="lazy"
											/>{" "}
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/Bonfire.svg"
												loading="lazy"
												alt="BonFire - Bonfire Real-Estate Fractionalized Marketplace"

											/>{" "}
										</a>
									</li>
									<li>
										<a href="#">
											{" "}
											<img
												className="img-fluid"
												src="assets/images/splide/coinxPad.svg"
												alt="CoinXpad - Coinxpad Decentralised Crypto Launchpad"
												loading="lazy"
											/>{" "}
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/counterTen.svg"
												alt="CounterTen - Digital Collectible platform for Loyalty, Brands and events"
												loading="lazy"
											/>{" "}
										</a>
									</li>
									<li>
										<a href="#">
											{" "}
											<img
												className="img-fluid"
												src="assets/images/splide/DiveWallet.svg"
												alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
												loading="lazy"
											/>
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/FTWDAO.svg"
												alt="FTWDao - Diversifying the venture investing ecosystem"
												loading="lazy"
											/>{" "}
										</a>
									</li>
									<li>
										<a href="#">
											{" "}
											<img
												className="img-fluid"
												src="assets/images/splide/Cypha.svg"
												alt="Cypha - Make your Music using Cypha app"
												loading="lazy"
											/>
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/Holygrails.svg"
												loading="lazy"
												alt="Holygrails - Solana NFT Marketplace"
											/>
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/Ikaris.svg"
												loading="lazy"
												style={{ width: "250px", height: "60px" }}
												alt="Ikaris - NFT Showcase Mobile App"
											/>
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/Medizen.svg"
												loading="lazy"
												alt="Medizen - Pill Reminder and Drug interaction Detection app"
											/>
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/ml.svg"
												loading="lazy"
												alt="MLEstimation - AI Tool to Analyse your Building material"
											/>
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/MumbleRapperz.svg"
												alt="MumbleRapperz - NFT Minting platform"
												loading="lazy"
											/>
										</a>
									</li>
									<li>
										<a href="#">

											<img
												className="img-fluid"
												src="assets/images/splide/NearPro.svg"
												alt="NearPro - Connecting Homeowner and top Contractor"
												loading="lazy"
											/>
										</a>
									</li>
									<li>
										<a href="#">
											<img
												className="img-fluid"
												src="assets/images/splide/Bloqhodler.jpg"
												alt="Bloqhodler - Hedge fund investment app"
												loading="lazy"
											/>
										</a>
									</li>
									<li>
										<a href="#">

											<img
												className="img-fluid"
												src="assets/images/splide/galaxyCoin.jpg"
												alt="Galaxy Coin - Governance Token & Stacking Defi app"
												loading="lazy"
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="bg-color">
				<div className="container container-fluid  py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">Our Customers</h2>
							<p className="all-p  text-center">
								Serving across 6 continents. <br />
								We are a global technology and software
								development leader.
							</p>
						</div>
					</section>
					<div className="d-flex align-items-center justify-content-center">
						<img
							className="img-fluid"
							src="assets/images/about/World Map.png"
							alt="World Map"
							loading="lazy"
						/>
					</div>
				</div>
			</div>

			<div className="container container-fluid mb-5 firstsec">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-head">Our Global Presence </h2>
					<p className="secondsec-p text-center">
						Codiste has a global presence with offices in multiple
						locations worldwide. Our team of experts is located
						across different continents, allowing us to serve
						clients from various regions easily and efficiently.
					</p>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12 pb-3 ">
						<div className="service-block p-4 h-100 ">
							<div className="d-flex justify-content-center align-items-center customind mb-4">
								<div>	<img
									className="me-4"
									src="assets/images/india.png"
									alt="India Office"
									loading="lazy"
								/></div>
								<div><h2 className="mb-0">India</h2></div>
							</div>
							<div className="contact-content">
								<div className="contact-logo ms-lg-5 ms-0">
									<div className="contact-icon ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xmlnsSvgjs="http://svgjs.com/svgjs"
											version="1.1"
											width="30"
											height="30"
											x="0"
											y="0"
											viewBox="0 0 682.667 682.667"
											style={{
												"enable-background":
													"new 0 0 512 512",
											}}
											xmlSpace="preserve"
											className=""
										>
											<g>
												<defs>
													<clipPath
														id="a"
														clipPathUnits="userSpaceOnUse"
													>
														<path
															d="M0 512h512V0H0Z"
															fill="#ff1f23"
															dataOriginal="#000000"
														/>
													</clipPath>
												</defs>
												<g
													clip-path="url(#a)"
													transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
												>
													<path
														d="M0 0c-60 90-165 212-165 317 0 90.981 74.019 165 165 165s165-74.019 165-165C165 212 60 90 0 0Z"
														style={{
															strokeWidth: "30",
															strokeLinecap:
																"round",
															strokeLinejoin:
																"round",
															strokeMiterlimit:
																"10",
															strokeDasharray:
																"none",
															strokeOpacity: "1",
														}}
														transform="translate(256 15)"
														fill="none"
														stroke="#ff1f23"
														strokeWidth="30"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeMiterlimit="10"
														strokeDasharray="none"
														strokeOpacity=""
														dataOriginal="#000000"
													/>
													<path
														d="M0 0c-41.353 0-75 33.647-75 75s33.647 75 75 75 75-33.647 75-75S41.353 0 0 0Z"
														style={{
															strokeWidth: "30",
															strokeLinecap:
																"round",
															strokeLinejoin:
																"round",
															strokeMiterlimit:
																"10",
															strokeDasharray:
																"none",
															strokeOpacity: "1",
														}}
														transform="translate(256 257)"
														fill="none"
														stroke="#ff1f23"
														strokeWidth="30"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeMiterlimit="10"
														strokeDasharray="none"
														strokeOpacity=""
														dataOriginal="#000000"
													/>
												</g>
											</g>
										</svg>
									</div>
									<div>
										<p className="secondsec-p">
											915,Ganesh glory,S.G Highway,
											<br />
											Ahmedabad,382441
										</p>
									</div>
								</div>
								<div className="contact-logo ms-lg-5 ms-0 ">
									<div className="contact-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xmlnsSvgjs="http://svgjs.com/svgjs"
											version="1.1"
											width="30"
											height="30"
											x="0"
											y="0"
											viewBox="0 0 682.667 682.667"
											style={{
												"enable-background":
													"new 0 0 512 512",
											}}
											xmlSpace="preserve"
											className=""
										>
											<g>
												<path
													d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
													fill="#ff1f23"
													dataOriginal="#000000"
													className=""
												/>
											</g>
										</svg>
									</div>
									<div>
										<p className="secondsec-p">
											+91 9429005987
										</p>
									</div>
								</div>
								<div className="contact-logo ms-lg-5 ms-0">
									<div className="contact-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xmlnsSvgjs="http://svgjs.com/svgjs"
											version="1.1"
											width="30"
											height="30"
											x="0"
											y="0"
											viewBox="0 0 682.667 682.667"
											style={{
												"enable-background":
													"new 0 0 512 512",
											}}
											xmlSpace="preserve"
											className=""
										>
											<g>
												<path
													d="M467 76H45C20.238 76 0 96.149 0 121v270c0 24.86 20.251 45 45 45h422c24.762 0 45-20.149 45-45V121c0-24.857-20.248-45-45-45zm-6.91 30L267.624 299.094c-5.864 5.882-17.381 5.886-23.248 0L51.91 106h408.18zM30 385.485v-258.97L159.065 256 30 385.485zM51.91 406l128.334-128.752 42.885 43.025c17.574 17.631 48.175 17.624 65.743 0l42.885-43.024L460.09 406H51.91zM482 385.485 352.935 256 482 126.515v258.97z"
													fill="#ff1f23"
													data-original="#000000"
													className=""
												/>
											</g>
										</svg>
									</div>
									<div>
										<p className="secondsec-p">
											manager@codiste.com
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-sm-12 pb-3 ">
						<div className="service-block p-4 h-100 ">
							<div className="d-flex justify-content-center align-items-center customind mb-4">
								<div><img
									className="me-4"
									src="assets/images/south-africa.png"
									alt="south-africa office"
									loading="lazy"
								/></div>
								<div>
									<h2 className="mb-0">South-Africa</h2>
								</div>
							</div>
							<div className="contact-content">
								<div className="contact-logo ms-lg-5 ms-0">
									<div className="contact-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xmlnsSvgjs="http://svgjs.com/svgjs"
											version="1.1"
											width="30"
											height="30"
											x="0"
											y="0"
											viewBox="0 0 682.667 682.667"
											style={{
												"enable-background":
													"new 0 0 512 512",
											}}
											xmlSpace="preserve"
											className=""
										>
											<g>
												<defs>
													<clipPath
														id="a"
														clipPathUnits="userSpaceOnUse"
													>
														<path
															d="M0 512h512V0H0Z"
															fill="#ff1f23"
															data-original="#000000"
														/>
													</clipPath>
												</defs>
												<g
													clip-path="url(#a)"
													transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
												>
													<path
														d="M0 0c-60 90-165 212-165 317 0 90.981 74.019 165 165 165s165-74.019 165-165C165 212 60 90 0 0Z"
														style={{
															strokeWidth: "30",
															strokeLinecap:
																"round",
															strokeLinejoin:
																"round",
															strokeMiterlimit:
																"10",
															strokeDasharray:
																"none",
															strokeOpacity: "1",
														}}
														transform="translate(256 15)"
														fill="none"
														stroke="#ff1f23"
														strokeWidth="30"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeMiterlimit="10"
														strokeDasharray="none"
														strokeOpacity=""
														dataOriginal="#000000"
													/>
													<path
														d="M0 0c-41.353 0-75 33.647-75 75s33.647 75 75 75 75-33.647 75-75S41.353 0 0 0Z"
														style={{
															strokeWidth: "30",
															strokeLinecap:
																"round",
															strokeLinejoin:
																"round",
															strokeMiterlimit:
																"10",
															strokeDasharray:
																"none",
															strokeOpacity: "1",
														}}
														transform="translate(256 257)"
														fill="none"
														stroke="#ff1f23"
														strokeWidth="30"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeMiterlimit="10"
														strokeDasharray="none"
														strokeOpacity=""
														dataOriginal="#000000"
													/>
												</g>
											</g>
										</svg>
									</div>
									<div>
										<p className="secondsec-p">
											1 Galway Rd, Parkview, Jhb, <br />
											South Africa, 2192
										</p>
									</div>
								</div>
								<div className="contact-logo ms-lg-5 ms-0">
									<div className="contact-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xmlnsSvgjs="http://svgjs.com/svgjs"
											version="1.1"
											width="30"
											height="30"
											x="0"
											y="0"
											viewBox="0 0 682.667 682.667"
											style={{
												"enable-background":
													"new 0 0 512 512",
											}}
											xmlSpace="preserve"
											className=""
										>
											<g>
												<path
													d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
													fill="#ff1f23"
													data-original="#000000"
													className=""
												/>
											</g>
										</svg>
									</div>
									<div>
										<p className="secondsec-p">
											+27 60 976 6525
										</p>
									</div>
								</div>
								<div className="contact-logo ms-lg-5 ms-0">
									<div className="contact-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xmlnsSvgjs="http://svgjs.com/svgjs"
											version="1.1"
											width="30"
											height="30"
											x="0"
											y="0"
											viewBox="0 0 682.667 682.667"
											style={{
												"enable-background":
													"new 0 0 512 512",
											}}
											xmlSpace="preserve"
											className=""
										>
											<g>
												<path
													d="M467 76H45C20.238 76 0 96.149 0 121v270c0 24.86 20.251 45 45 45h422c24.762 0 45-20.149 45-45V121c0-24.857-20.248-45-45-45zm-6.91 30L267.624 299.094c-5.864 5.882-17.381 5.886-23.248 0L51.91 106h408.18zM30 385.485v-258.97L159.065 256 30 385.485zM51.91 406l128.334-128.752 42.885 43.025c17.574 17.631 48.175 17.624 65.743 0l42.885-43.024L460.09 406H51.91zM482 385.485 352.935 256 482 126.515v258.97z"
													fill="#ff1f23"
													dataOriginal="#000000"
													className=""
												/>
											</g>
										</svg>
									</div>
									<div>
										<p className="secondsec-p">
											nic@codiste.com
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head text-center">Take the word of those who have benefitted from
								Codiste !</h2>
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
													alt="BonFire - Bonfire Real-Estate Fractionalized Marketplace"
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
													alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
													src="assets/images/client-logos/DiveWallet Logo.png"
												/>
											</div>
											{/* DiveWallet Logo */}
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
													alt="Medizen - Pill Reminder and Drug interaction Detection app"
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

			<div className="">
				<div className="container container-fluid py-5">
					<h2 className="all-head mb-lg-5 mb-0 text-center">Get in touch with Us!</h2>
					<section>
						<div className="row  d-flex align-items-center">
							<div className="col-lg-6 col-md-12  mb-lg-0 needsec p-4">
								<h2>Start Building on Your Idea Today! <br />Get in touch with our team with this form.</h2>
							</div>
							<div className="col-lg-6 col-md-12 ">
								<div className="need-block h-100">
									<h2 className="">
										How Can We <b>Help?</b>
									</h2>
									<CaseStudyForm text="Collaborate on Your Project" />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default About;
