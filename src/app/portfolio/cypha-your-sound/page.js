import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "CYPHA | Mobile App Development Services | Codiste",
	description: "Talent Search App is a gamified platform for aspiring and established musicians to showcase their talents, connect with other music lovers, and earn rewards."
};

const CyphaPortfolio = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">
										CYPHA - Your Sound
									</h1>
									<p className="all-p me-5 my-4">
										CYPHA Your Pocket music studio. The
										case study is about the Talent Search
										App, a gamified platform for aspiring
										and established musicians to showcase
										their talents, connect with other music
										lovers, and earn rewards. The app allows
										users to record their voice over
										instrumentals and share them on social
										media, while also providing a way for
										music producers and record labels to
										discover and sign new talent. The app is
										available for both Android and iOS users
										and is an enjoyable and rewarding
										experience for all music lovers.
									</p>
									<Link
										target="_blank"
										href="/contact"
										className="book-btn"
									>
										Sync Up for the Project
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										src="/assets/images/case-cypha/Cypha.png"
										alt="Cypha - Make your Music using Cypha app"
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
								style={{ width: "auto", padding: "20px" }}
								loading="lazy" src="/assets/images/case-cypha/Client Requirement.png"
								alt="Client Requirement"
							/>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<p className="secondsec-p">
								{" "}
								The client wanted to create a platform for
								aspiring musicians and singers to showcase their
								talent to the world. The platform should be
								user-friendly, have a gamification aspect, and
								also provide opportunities for established music
								artists to reach new fans.
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
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<p className="secondsec-p">
								{" "}
								The main challenge was creating an app that was
								user-friendly and had a gamification aspect that
								would incentivize users to continue creating and
								sharing content. Additionally, the app needed to
								have a feature that would allow users to
								discover new talent from all over the world, as
								well as provide opportunities for established
								music artists to reach new fans.
							</p>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5 text-center">
							<img
								className="img-fluid"
								style={{ width: "auto", padding: "20px" }}
								loading="lazy" src="/assets/images/case-cypha/Problem 06.png"
								alt="Problem Statement"
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
											alt="Instrumental Voiceovers"
											loading="lazy" src="/assets/images/case-cypha/Instrumental Voiceovers.png"
										/>
										<p>
											<span className="fs-3">
												Instrumental Voiceovers
											</span>
											<br />
											<span className="secondsec-p">	Record voice over instrumentals</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Record"
											loading="lazy" src="/assets/images/case-cypha/Record & Share.png"
										/>
										<p>
											<span className="fs-3">
												Record & Share
											</span>
											<br />
											<span className="secondsec-p">	Share content with friends and
												followers on social media</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Token Rewards"
											loading="lazy" src="/assets/images/case-cypha/Token Rewards.png"
										/>
										<p>
											<span className="fs-3">
												Token Rewards
											</span>
											<br />
											<span className="secondsec-p">		Gamification aspect with tokens that
												can be exchanged for rewards</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Global Discovery"
											loading="lazy" src="/assets/images/case-cypha/Global Discovery.png"
										/>
										<p>
											<span className="fs-3">
												Global Discovery
											</span>
											<br />
											<span className="secondsec-p">	Discover new talent from all over
												the world</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Expand Reach"
											loading="lazy" src="/assets/images/case-cypha/Expand Reach.png"
										/>
										<p>
											<span className="fs-3">
												Expand Reach
											</span>
											<br />
											<span className="secondsec-p">Great platform for established music
												artists to reach a wider audience</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Talent Discovery"
											loading="lazy" src="/assets/images/case-cypha/Talent Discovery.png"
										/>
										<p>
											<span className="fs-3">
												Talent Discovery
											</span>
											<br />
											<span className="secondsec-p">	New way for music producers and
												record labels to discover and sign
												new talent</span>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="d-flex justify-content-center">
							<Link
								className="book-btn"
								href="https://play.google.com/store/apps/details?id=com.app.cypha&hl=en-IN&pli=1"
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
						The Talent Search App delivered a user-friendly platform
						that allowed aspiring musicians and singers to showcase
						their talent to the world. The app's gamification aspect
						provided an incentive for users to continue creating and
						sharing content, while the feature that allowed users to
						discover new talent from all over the world helped to
						inspire and connect music lovers. Additionally, the app
						provided established music artists with a new way to
						reach a wider audience and connect with new fans. The
						app also provided a new way for music producers and
						record labels to discover and sign new talent.
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
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="5"
									aria-label="Slide 6"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="6"
									aria-label="Slide 7"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="7"
									aria-label="Slide 8"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="8"
									aria-label="Slide 9"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="9"
									aria-label="Slide 10"
								></button>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-1"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-1.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-2"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-2.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-3"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-3.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-4"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-4.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-5"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-5.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-6"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-6.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-7"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-7.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-8"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-8.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-9"
												loading="lazy" src="/assets/images/case-cypha/CYPHA-9.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="CYPHA-10"
												loading="lazy" src="/assets/images/case-cypha/Cypha-10.png "
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
						<p className="all-p me-5 mb-5 text-center">
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
										loading="lazy" src="/assets/images/tech/Laravel.png"
										alt="Laravel"
									/>
								</li>
								<li>
									<img
										className="img-fluid"
										loading="lazy" src="/assets/images/tech/Android Studio.png"
										alt="Android Studio"
									/>
								</li>
								<li>
									<img
										className="img-fluid"
										loading="lazy" src="/assets/images/tech/Swift.png"
										alt="Swift"
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
					<Link href="https://www.codiste.com/mobile-app-development-company" className="book-btn">
						Explore more
					</Link>
				</div>
			</div>
			<div className="bg-color">
				<div className="container container-fluid py-5 ">
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
									<CaseStudyForm text="Contact us" />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

		</div>
	);
};

export default CyphaPortfolio;
