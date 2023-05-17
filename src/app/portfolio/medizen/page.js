import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Medizen | Application and web Development services | Codiste",
	description:
		"The Medizen app was developed to help patients manage their medications safely and easily. It features a medication tracker, reminders, drug interaction checker, refill reminders, and family sharing.",
};

const MedizenPortfolio = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">Medizen</h1>
									<p className="all-p me-5 my-4">
										The Medizen app was developed to help
										patients manage their medications safely
										and easily. It features a medication
										tracker, reminders, drug interaction
										checker, refill reminders, and family
										sharing. The development team overcame
										challenges to create a user-friendly and
										reliable app that meets the client's
										requirements. The app can improve health
										outcomes for users.
									</p>
									<Link
										className="book-btn"
										href="https://medizen.co.za/"
										target="_blank"
									>
										Live Project
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										src="/assets/images/case-medizen/Medizen.png"
										alt="Medizen"
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
								src="/assets/images/case-medizen/Problem 04.png"
								alt="Client Requirement"
							/>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<p className="secondsec-p">
								{" "}
								The client, who was a healthcare professional,
								had identified a growing need for a tool that
								could help patients manage their medications
								effectively. The client had noticed that many
								patients struggled with keeping track of their
								medications, which led to missed doses,
								incorrect dosages, and potentially harmful
								interactions. The client wanted a solution that
								would help patients manage their medications
								safely and easily.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center">
					<h1 className="all-head">Challenges</h1>
				</div>

				<div className="container container-fluid">
					<div className="row">
						<div className="col-xl-6 col-sm-12 mb-5  d-flex justify-content-center flex-column order-2 order-lg-1">
							<p className="secondsec-p">
								{" "}
								During the development of the Medizen app, the
								team faced significant challenges, including
								designing an easy-to-use interface for users of
								all ages and ensuring the app's accuracy and
								reliability. Despite these challenges, the team
								successfully delivered an app that met the
								client's requirements and provided a solution to
								the complex issue of medication management and
								interaction validation.
							</p>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5  text-center order-1 order-lg-2">
							<img
								className="img-fluid"
								style={{ width: "auto", padding: "20px" }}
								src="/assets/images/case-medizen/Challange 01.png"
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
											alt="Medication Tracker"
											src="/assets/images/case-medizen/Medication Tracker.png"
										/>
										<p>
											<span className="fs-3">
												Medication Tracker
											</span>
											<br />
											The app allows users to track their
											medications, including dosage,
											frequency, and duration.
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Reminders"
											src="/assets/images/case-medizen/Reminders.png"
										/>
										<p>
											<span className="fs-3">
												Reminders
											</span>
											<br />
											The app sends reminders to users to
											take their medications on time,
											ensuring that they never miss a
											dose.
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Drug Interaction Checker"
											src="/assets/images/case-medizen/Drug Interaction Checker.png"
										/>
										<p>
											<span className="fs-3">
												Drug Interaction Checker
											</span>
											<br />
											The app checks for potential
											interactions between medications and
											alerts users if there is a risk of
											harm.
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Refill Reminders"
											src="/assets/images/case-medizen/Refill Reminders.png"
										/>
										<p>
											<span className="fs-3">
												Refill Reminders
											</span>
											<br />
											The app alerts users when it's time
											to refill their medications,
											ensuring that they never run out.
										</p>
									</li>{" "}
									<li>
										<img
											className="img-fluid"
											alt="Family Sharing"
											src="/assets/images/case-medizen/Family Sharing.png"
										/>
										<p>
											<span className="fs-3">
												Family Sharing
											</span>
											<br />
											The app allows users to share their
											medication schedules with family
											members, making it easier for loved
											ones to keep track of their
											medications
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
						The Medizen app was developed to meet the client's
						requirements of creating an easy-to-use and reliable
						tool to help users manage their medications. The
						development team successfully delivered a user-friendly
						app that offers powerful features and accurate
						information to ensure medication safety and
						effectiveness. Overall, Medizen is an excellent solution
						for those struggling with medication management and
						interaction validation, as it can improve health
						outcomes and simplify the medication tracking process
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
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-1.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-2.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-3.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-4.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-5.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-6.png"
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-7.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-8.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-9.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-10.png "
											/>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="d-flex align-items-center text-center flex-column custom-crousel">
										<div className="d-flex align-items-center flex-column custom-crousel">
											<img
												className="img-fluid diwallet-img"
												alt="Medizen"
												src="/assets/images/case-medizen/Medizen-11.png "
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
										alt="flutter"
										src="/assets/images/tech/flutter.png"
									/>
								</li>
								<li>
									<img
										className="img-fluid"
										alt="Node"
										src="/assets/images/tech/Node.png"
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
								Satisfied clients is our proof of our excellence
							</h1>
							<p className="all-p me-5 text-center">
								Their Success Stories are our Valuable Feedback
							</p>
						</div>

						<div className="carousel-inner career-block">
							<div className="d-flex align-items-center text-center flex-column custom-crousel">
								<h3>
									It was an absolute pleasure working with
									Nishant and his team for our Blockchain
									Product. Not only is Nishant an engineer in
									making the product, he also cares and gives
									his opinion on the outcome of the design.
									When it comes to delivery, the breakdown of
									the milestone is fair and accurate. Lastly,
									we had a lot of changes near the end of the
									sprint and the team was flexible about it.
									honest work, you get what you pay for.
								</h3>
								<div className="d-flex align-items-center flex-column">
									<img
										src="/assets/images/iCrowsel.png"
										className=" "
										alt="iCrowsel"
									/>
									<div className="my-3">
										<img
											className="img-fluid"
											alt=""
											src="/assets/images/client-logos/Medizen.png"
										/>
									</div>
									<h5>Medizen App</h5>
									<p>CEO</p>
								</div>
							</div>
						</div>
					</section>
				</div>
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

export default MedizenPortfolio;
