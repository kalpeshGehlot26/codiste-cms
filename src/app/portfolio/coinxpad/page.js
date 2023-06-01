import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "CoinxPad Launchpad | Blockchain Development services | Codiste",
	description: "CoinxPad is a launchpad that enables crypto projects to raise funds through an Initial DEX Offering (IDO) on a decentralized exchange (DEX)."
};

const CoinxpadPortfolio = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">
										CoinxPad Launchpad
									</h1>
									<p className="all-p me-5 my-4">
										CoinxPad is a launchpad that enables
										crypto projects to raise funds through
										an Initial DEX Offering (IDO) on a
										decentralized exchange (DEX). It
										supports multiple blockchain platforms
										and provides a fast and efficient way
										for projects to raise funds, while
										offering a secure platform for investors
										to participate. CoinxPad is the first
										CEX/DEX multi-chain IDO launchpad and
										has implemented advanced security
										protocols and a strict KYC/AML process
										to ensure the legitimacy of investors.
									</p>
									<Link
										className="book-btn"
										href="https://coinxpad.io/"
										target="_blank"
									>
										Live Project
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										src="/assets/images/case-coinxpad/Coinxpad.png"
										alt="Coinxpad"
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
								style={{ padding: "20px" }}
								src="/assets/images/case-coinxpad/Problem 07.png"
								alt="Client Requirement"
							/>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<p className="secondsec-p">
								{" "}
								The client needed a fundraising platform for
								their crypto projects that could support
								multiple blockchain platforms and provide a high
								level of security to investors. They wanted a
								platform that could conduct Initial DEX
								Offerings (IDOs) in a streamlined and efficient
								way.
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
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column order-2 order-xl-1">
							<p className="secondsec-p">
								The main challenge was to create a platform that
								could support multiple blockchain platforms and
								provide a high level of security to investors.
								The platform also needed to be user-friendly for
								both projects and investors.
							</p>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5 order-1 order-xl-2 text-center">
							<img
								className="img-fluid"
								style={{ padding: "20px" }}
								src="/assets/images/case-coinxpad/Challange 05.png"
								alt="Challenges"
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
											alt="Multi-chain Launchpad"
											src="/assets/images/case-coinxpad/Multi-chain Launchpad.png"
										/>
										<p>
											<span className="fs-3">
												{" "}
												Multi-chain Launchpad{" "}
											</span>
											<br />
											<span className="secondsec-p"></span>
											First CEX/DEX multi-chain IDO
											launchpad
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Blockchain platforms"
											src="/assets/images/case-coinxpad/Blockchain platforms.png"
										/>
										<p>
											<span className="fs-3">
												{" "}
												Blockchain platforms
											</span>
											<br />
											<span className="secondsec-p">Supports multiple blockchain
												platforms</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Launch Platform"
											src="/assets/images/case-coinxpad/Launch Platform.png"
										/>
										<p>
											<span className="fs-3">
												Launch Platform
											</span>
											<br />
											<span className="secondsec-p">Provides a streamlined process for
												projects to launch and investors to
												participate</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Project Details"
											src="/assets/images/case-coinxpad/Project Details.png"
										/>
										<p>
											<span className="fs-3">
												Project Details
											</span>
											<br />
											<span className="secondsec-p">Includes all necessary project
												information such as team,
												tokenomics, and use case</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Secure Launchpad"
											src="/assets/images/case-coinxpad/Secure Launchpad.png"
										/>
										<p>
											<span className="fs-3">
												Secure Launchpad
											</span>
											<br />
											<span className="secondsec-p">High level of security using
												advanced security protocols and
												strict KYC/AML process</span>

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
						We delivered CoinxPad, a revolutionary fundraising
						platform that is changing the way crypto projects raise
						funds. CoinxPad is the first CEX/DEX multi-chain IDO
						launchpad that supports multiple blockchain platforms.
						The platform provides a streamlined process for projects
						to launch and investors to participate, while
						maintaining a high level of security using advanced
						security protocols and a strict KYC/AML process.
						CoinxPad is a game-changer in the world of crypto
						fundraising and is the perfect solution for anyone
						looking to launch a new crypto project or invest in one.
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
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-1.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-2.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-3.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-4.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-5.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-6.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-7.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-8.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-9.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad-10.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Conixpad"
												src="/assets/images/case-coinxpad/Conixpad11.png"
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
						<h1 className="all-head text-center">Technology Stack</h1>
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
										src="/assets/images/tech/solidity.png"
										alt="Solidity"
									/>
								</li>

								<li>
									<img
										className="img-fluid"
										src="/assets/images/tech/React-icon.svg.png"
										alt="React"
									/>
								</li>

								<li>
									<img
										className="img-fluid"
										src="/assets/images/tech/Node.png"
										alt="Node"
									/>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>


			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head">
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
											Work with Codiste if you’re looking
											for a team that’s easy to deal with
											and provides quality services..The
											company is impressed with Codiste
											pvt ltd’s work, and the NFT platform
											has received positive feedback from
											everyone. It’s also 100% secure. The
											team has done everything flawlessly,
											and they’ve beaten the project’s
											strict deadline. Overall, they’ve
											been instrumental in the project’s
											success.
										</h3>

										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												src="../assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Cryptography"
													src="../assets/images/client-logos/Mumble Rapperz.png"
												/>
											</div>
											<h5>Cryptography Company</h5>
											<p>
												Founder <br />
												Fort Lauderdale, Florida
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Codiste Team was very much helpful
											and they went detailed oriented and
											successfully launched our venture
											investment platform, which helped us
											to achieve to raise initial fund
											through NFT selling, team has gone
											above and beyond with all suggetions
											with their expertise, Highly
											recommended for Blockchain
											professional studio.
										</h3>

										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												src="../assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="FTW"
													src="../assets/images/client-logos/FTW Dao Logo.png"
												/>
											</div>
											<h5>FTW Dao</h5>
											<p>Founder</p>
										</div>
									</div>
								</div>

								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Their attention to detail and
											willingness to work under pressure
											was impressive.Codiste pvt ltd has
											completed all assigned tasks and
											performed well during the
											engagement. The client lauded their
											attention to detail and timely
											delivery of outputs. In the end, no
											major issues or vulnerabilities were
											found in the final platform.
										</h3>

										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												src="../assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="White Hat"
													src="../assets/images/client-logos/White Hat DAO.png"
												/>
											</div>
											<h5>White Hat DAO</h5>
											<p>
												Core Contributor
												<br />
												Sydney, Australia
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
					<div>
						<h1 className="all-head text-center mb-5">
							Reach out to Us!
						</h1>
					</div>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
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
								<CaseStudyForm />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default CoinxpadPortfolio;
