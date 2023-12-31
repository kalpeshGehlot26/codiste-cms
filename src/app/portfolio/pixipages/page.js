import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Pixi pages | Mobile Application Development Services",
	description: "Busy parents stay connected with their children by recording professional-sounding bedtime stories, complete with music and personal notes.",
	images: "https://www.codiste.com/assets/images/case-pixi/Pixipages.png",
	openGraph: {
		title: "Pixi pages | Mobile Application Development Services",
		description: "Busy parents stay connected with their children by recording professional-sounding bedtime stories, complete with music and personal notes.",
		images: "https://www.codiste.com/assets/images/case-pixi/Pixipages.png",
		url: 'https://www.codiste.com/portfolio/pixipages/'
	},
	alternates: {
		canonical: 'https://www.codiste.com/portfolio/pixipages',
	}
};

const PixipagesPortfolio = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">Pixi pages</h1>
									<p className="all-p me-5 my-4">
										Busy parents stay connected with their
										children by recording
										professional-sounding bedtime stories,
										complete with music and personal notes.
										The app provides a fun and easy way for
										parents to create a special story for
										their children, even when they are away.
									</p>
									<Link
										target="_blank"
										href="/contact"
										className="book-btn"
									>
										Reach Out for Expert Advice
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										src="/assets/images/case-pixi/Pixipages.png"
										alt="StoryTelling App"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center">
					<h2 className="all-head">Client Requirement</h2>
				</div>

				<div className="container container-fluid">
					<div className="row">
						<div className="col-xl-6 col-sm-12 mb-5 text-center">
							<img
								className="img-fluid"
								style={{ padding: "20px" }}
								loading="lazy" src="/assets/images/case-pixi/Problem 08.png"
								alt="Client Requirement"
							/>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<p className="secondsec-p">
								The client, Pixipages, aimed to create an app
								that would allow parents to easily record
								professional-sounding bedtime stories for their
								children. The app was intended to be
								user-friendly and simple to use, making it easy
								for busy parents to stay connected with their
								children, even when they were away.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center">
					<h2 className="all-blog">Challenges</h2>
				</div>

				<div className="container container-fluid">
					<div className="row">
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column order-2 order-xl-1">
							<p className="secondsec-p">
								One of the main challenges faced by Pixipages
								was to create an app that was easy to use and
								could be used by busy parents. Additionally, the
								app had to provide professional-sounding bedtime
								stories that would be enjoyable for children.
							</p>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5 text-center order-1 order-xl-2">
							<img
								className="img-fluid"
								style={{ padding: "20px" }}
								loading="lazy" src="/assets/images/case-pixi/Challange 07.png"
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
							<h2 className="all-head"> Features of Product</h2>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="diwallet-style">
									<li className="">
										<img
											className="img-fluid"
											alt="Dream Stories"
											loading="lazy" src="/assets/images/case-pixi/dream stories.png"
										/>
										<p>
											<span className="fs-3">

												Dream Stories
											</span>
											<br />
											<span className="secondsec-p">		Professional sounding bedtime
												stories with music and a personal
												note</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Easy Guide"
											loading="lazy" src="/assets/images/case-pixi/Easy Guide.png"
										/>
										<p>
											<span className="fs-3">
												Easy Guide
											</span>
											<br />
											<span className="secondsec-p">	User-friendly app with simple,
												step-by-step instructions</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Diverse Themes"
											loading="lazy" src="/assets/images/case-pixi/Diverse Themes.png"
										/>
										<p>
											<span className="fs-3">
												Diverse Themes
											</span>
											<br />
											<span className="secondsec-p">	A variety of themes to choose
												from, such as bedtime stories and
												lullabies</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt=""
											loading="lazy" src="/assets/images/case-pixi/Shareable Moments.png"
										/>
										<p>
											<span className="fs-3">
												Shareable Moments
											</span>
											<br />
											<span className="secondsec-p">Easy sharing with loved ones, even
												when away</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Comforting Presence"
											loading="lazy" src="/assets/images/case-pixi/Comforting Presence.png"
										/>
										<p>
											<span className="fs-3">
												Comforting Presence
											</span>
											<br />
											Provides a sense of security and
											comfort for children
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Treasured Memories"
											loading="lazy" src="/assets/images/case-pixi/Treasured Memories-1.png"
										/>
										<p>
											<span className="fs-3">
												Treasured Memories
											</span>
											<br />
											Creates a family keepsake that can
											be treasured for years to come
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="d-flex justify-content-center">
							<Link
								className="book-btn"
								href="https://apps.apple.com/us/app/pixipages/id1234602478"
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
					<h2 className="all-head text-center my-3 ">
						What did we deliver?
					</h2>
					<p className="secondsec-p text-center">
						Pixipages successfully delivered an app that met the
						client's requirements by creating an easy-to-use app
						with step-by-step instructions. The app provided
						professional-sounding bedtime stories complete with
						music and personal notes, and a variety of themes to
						choose from. The app also allowed parents to share the
						stories with their children, creating a family keepsake
						that can be treasured for years to come. One satisfied
						customer, Sarah, was able to stay connected with her
						young daughter, even when she was away on business.
					</p>
				</div>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">
								Witness How We Drive Soul in Ideas!
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

							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Pixi"
												loading="lazy" src="/assets/images/case-pixi/Pixipages-1png.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Pixi"
												loading="lazy" src="/assets/images/case-pixi/Pixipages 03.png"
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
						<h2 className="all-blog">Technology Stack</h2>
						<p className="all-p  mb-5 text-center">
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
										alt="Swift"
										loading="lazy" src="/assets/images/tech/Swift.png"
									/>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="xcode"
										loading="lazy" src="/assets/images/tech/xcode.png"
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
			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">
								Satisfied clients is our proof of our excellence!
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
												loading="lazy" src="../assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="White Hat DAO"
													loading="lazy" src="../assets/images/client-logos/White Hat DAO.png"
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
												loading="lazy" src="../assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
													loading="lazy" src="../assets/images/client-logos/DiveWallet Logo.png"
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
											They communicate clearly and outline
											the product roadmap for us. It has
											been very easy to work with them.
											Made us profitaable on NFT
											Marketplace and which made amazing
											journey.
										</h3>
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												loading="lazy" src="../assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Ninza NFT"
													loading="lazy" src="../assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png"
												/>
											</div>
											<h5>Ninza NFT</h5>
											<p>
												CoFounde
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
				<section>
					<div>
						<h2 className="all-head text-center mb-lg-5 mb-0">
							Reach out to Us!
						</h2>
					</div>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12  needsec p-4">
							<h2>
								Get expert advice on adopting and integrating advanced technologies.<br />
								Stay compliant, stay ahead!
							</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>
								</h2>
								<CaseStudyForm text="Discuss your Project" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default PixipagesPortfolio;
