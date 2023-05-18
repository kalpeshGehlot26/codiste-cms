"use client";
import React, { useState } from "react";
import ClientSlider from "./clientSlider";
import FeedbackSlider from "./feedbackSlider";
import ServiceList from "../service/serviceItems";
import Industries from "../service/industries";
import Link from "next/link";
import CaseStudyForm from "../caseStudyForm/caseStudyForm";
import serviceItems from "../../data/serviceItems";
import AllServiceBlogSlider from "../BlogSlider/allServiceBlogSlider";
import homeBlogList from "@/app/data/homeBlogList";
import BlogSlider from "./blogSlider";

const HomePage = () => {
	const [serviceCount, setServiceCount] = useState(6);
	const [totalServiceCount, setTotalServiceCount] = useState(null);

	return (
		<div>
			<section className="video-containeraa videosec">
				<video
					src="assets/video/Codiste_Home.mp4"
					autoPlay
					loop
					playsInline
					muted
				></video>
				<div className="rotate-box">
					<h2>We craft innovation in</h2>
					<div className="rotating-text-wrapper">
						<h2>Blockchain Technology</h2>
						<h2>Artificial Intelligence</h2>
						<h2>Augmented & Virtual Reality</h2>
						<h2>Non-Fungible Tokens & Marketplaces</h2>
						<h2>Metaverse Technologies</h2>
						<h2>Machine Learning</h2>
						<h2>Cryptocurrency Technologies</h2>
					</div>
				</div>
			</section>

			<ClientSlider />

			<div className="container container-fluid py-5">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center  mb-5">
						<h1 className="all-head">Services We Offer</h1>
					</div>
					<ServiceList
						serviceItems={serviceItems}
						serviceCount={serviceCount}
						setTotalServiceCount={setTotalServiceCount}
					/>
					{totalServiceCount > serviceCount ? (
						<div className="d-flex align-items-center justify-content-center">
							<button
								className="book-btn mt-3 "
								onClick={() =>
									setServiceCount(
										(prevState) => prevState + 6
									)
								}
							>
								Show more
							</button>
						</div>
					) : null}
				</section>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid ">
					<h1 className="all-head text-center mb-5">
						Feedback that inspires us to consistently be our best
					</h1>
					<div className="row">
						<div className="col-xl-6 col-md-12 career-block">
							<FeedbackSlider />

						</div>

						<div className="col-xl-6 col-md-12">
							<section className="video-containerSmall">
								<video
									src="assets/video/clientele-video.mp4"
									autoPlay
									loop
									playsInline
									muted
								></video>
							</section>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5 firstsec">
				<div className=" d-flex align-items-center flex-column justify-content-center">
					<h1 className="all-head">Codiste As Company </h1>
					<p className="secondsec-p">
						Choose Codiste for innovative and creative solutions
						that keep up with the fast-paced digital world
					</p>
				</div>
				<div className="container container-fluid">
					<div className="row">
						<div className="col-xl-6 col-sm-12 mb-5">
							<img
								className="img-fluid d-flex align-items-center justify-content-center"
								style={{
									height: "450px",
									width: "auto",
									margin: "auto",
									padding: "20px",
								}}
								src="assets/images/home/Codiste_Company.png"
							/>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<h3 className="mb-3">
								Looking to stay ahead of the curve?
							</h3>
							<p className="secondsec-p">
								Codiste's expertise in end-to-end IT development
								support and services has you covered. We have
								the experience, expertise, and zeal to
								continuously innovate and build better solutions
								with the latest technologies to cater to
								businesses. As your one-stop IT services
								solution, we provide tailored solutions that are
								efficient and specific to your requirements and
								needs.
							</p>
							<p className="secondsec-p">
								<strong>
									Stay ahead with Codiste, Stay ahead with
									innovation!
								</strong>
							</p>
							<div>
								<Link href="/book-a-call" className="book-btn">
									Book a Call
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-color">
				<div className="container container-fluid py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head">Industries We Serve</h1>
							<p className="all-p me-5 text-center">
								Codiste serves diverse industries providing
								tailored solutions to help businesses grow.
							</p>
						</div>
						<Industries />
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head">Blog</h1>
					<p className="all-p text-center">
						Keep yourself updated with emerging technologies <br />
						and new developments in the industry with us.
					</p>
				</div>
				<BlogSlider />
				{/* <AllServiceBlogSlider items={homeBlogList} /> */}
			</div>

			<div className=" py-5 bg-color">
				<div className="container container-fluid ">
					<div className="text-center">
						<h2 className="all-head mb-5">Innovation in Action: Real-World Case Studies from Codiste</h2>

					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-12 mb-5">
							<div class="card" >
								<img src='assets/images/diwallet-case/Dive Wallet.png' class="card-img-top img-fluid casestudy-img" alt="Divewallet – The Crypto Wallet" />
								<div class="card-body cardsec-clr">
									<h5 class="card-title">Divewallet – The Crypto Wallet</h5>
									<Link href="/portfolio/divewallet" className="btn book-btn mt-3">Read More</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 mb-5">
							<div class="card" >
								<img src='assets/images/case-coinxpad/Coinxpad.png' class="card-img-top img-fluid casestudy-img" alt='CoinxPad Launchpad' />
								<div class="card-body cardsec-clr">
									<h5 class="card-title">CoinxPad Launchpad</h5>
									<Link href="/portfolio/coinxpad" className=" btn book-btn mt-3">Read More</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 mb-5">
							<div class="card" >
								<img src='assets/images/case-couter10/Counterten.png' class="card-img-top img-fluid casestudy-img" alt='CounterTen – solana Marketplace' />
								<div class="card-body cardsec-clr">
									<h5 class="card-title">CounterTen – Solana Marketplace</h5>
									<Link href="/portfolio/counterten-solana-marketplace" className=" btn book-btn mt-3">Read More</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center">
						<Link href="/codiste-portfolio" className="book-btn">Explore More</Link>
					</div>

				</div>
			</div>

			<div className="">
				<div className="container container-fluid py-5">
					<section>
						<div className="row  d-flex align-items-center">
							<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
								<h1>
									Are you looking for a global technology
									leader to partner for your tech support?
								</h1>
								<h2>
									Get started with your idea today! Fill out
									the form & reach out to us.
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
		</div>
	);
};

export default HomePage;
