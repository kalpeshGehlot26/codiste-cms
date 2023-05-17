import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "CYPHA | Mobile App Development services | Codiste",
	description: "CYPHA – Your Pocket music studio The case study is about the Talent Search App, a gamified platform for aspiring and established musicians to showcase their talents, connect with other music lovers, and earn rewards."
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
										CYPHA â€“ Your Sound
									</h1>
									<p className="all-p me-5 my-4">
										CYPHA â€“ Your Pocket music studio The
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
										className="book-btn"
										href="https://www.cypha.app"
										target="_blank"
									>
										Live Project
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										src="/assets/images/case-cypha/Cypha.png"
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
								src="/assets/images/case-cypha/Problem 06.png"
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
					<h1 className="all-head">Challenges </h1>
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
								src="/assets/images/case-cypha/Problem 06.png"
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
											alt=""
											src="/assets/images/case-cypha/Instrumental Voiceovers.png"
										/>
										<p>
											<span className="fs-3">
												Instrumental Voiceovers
											</span>
											<br />
											Record voice over instrumentals
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt=""
											src="/assets/images/case-cypha/Record & Share.png"
										/>
										<p>
											<span className="fs-3">
												Record & Share
											</span>
											<br />
											Share content with friends and
											followers on social media
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt=""
											src="/assets/images/case-cypha/Token Rewards.png"
										/>
										<p>
											<span className="fs-3">
												Token Rewards
											</span>
											<br />
											Gamification aspect with tokens that
											can be exchanged for rewards
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt=""
											src="/assets/images/case-cypha/Global Discovery.png"
										/>
										<p>
											<span className="fs-3">
												Global Discovery
											</span>
											<br />
											Discover new talent from all over
											the world
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt=""
											src="/assets/images/case-cypha/Expand Reach.png"
										/>
										<p>
											<span className="fs-3">
												Expand Reach
											</span>
											<br />
											Great platform for established music
											artists to reach a wider audience
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt=""
											src="/assets/images/case-cypha/Talent Discovery.png"
										/>
										<p>
											<span className="fs-3">
												Talent Discovery
											</span>
											<br />
											New way for music producers and
											record labels to discover and sign
											new talent
										</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head text-center my-3 ">
						{" "}
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
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-1.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-2.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-3.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-4.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-5.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-6.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-7.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-8.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/CYPHA-9.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt=" "
												src="/assets/images/case-cypha/Cypha-10.png "
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
						<h1 className="all-head">Technology Stack</h1>
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
										src="/assets/images/tech/Laravel.png"
									/>
								</li>
								<li>
									<img
										className="img-fluid"
										src="/assets/images/tech/Android Studio.png"
									/>
								</li>
								<li>
									<img
										className="img-fluid"
										src="/assets/images/tech/Swift.png"
									/>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>

			<div className="container container-fluid py-5">
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
							<h1>
								Getting in touch with Us <br />
								is now easier!
							</h1>
							<h2>
								Fill out this form and give life <br />
								to your vision!
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

export default CyphaPortfolio;
