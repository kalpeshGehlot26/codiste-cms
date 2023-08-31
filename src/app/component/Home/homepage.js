"use client";
import React, { useState, useEffect } from "react";
import ClientSlider from "./clientSlider";
import FeedbackSlider from "./feedbackSlider";
import ServiceList from "../service/serviceItems";
import Industries from "../service/industries";
import Link from "next/link";
import CaseStudyForm from "../caseStudyForm/caseStudyForm";
import serviceItems from "../../data/serviceItems";
import AllServiceBlogSlider from "../BlogSlider/allServiceBlogSlider";
import "../../../style.css";
import "../../../external.css";
import VideoPlayer from "./Videoplayer";
import LazyLoad from 'react-lazy-load';
import dynamic from 'next/dynamic';

const limit = 5;
const category = "47,43,55,6,57";

const HomePage = () => {
	const [serviceCount, setServiceCount] = useState(6);
	const [totalServiceCount, setTotalServiceCount] = useState(null);
	useEffect(() => {
		const handleScroll = () => {

		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const Clutch = dynamic(() => import("../../component/ClutchReview"), {
		ssr: false,
	});
	return (
		<div>
			<section className="video-containeraa videosec">
				<div>
					<VideoPlayer />
				</div>

				<div className="rotate-box">
					<h2>We craft innovation in</h2>
					<div className="rotating-text-wrapper">
						<h2>Blockchain Technology</h2>
						<h2>Artificial Intelligence</h2>
						<h2>Augmented & Virtual Reality</h2>
						<h2>Non-Fungible Tokens & Marketplaces</h2>
						<h2>Metaverse</h2>
						<h2>Machine Learning</h2>
						<h2>Cryptocurrency</h2>
					</div>
				</div>
			</section>
			<ClientSlider />

			<div className="container container-fluid py-5">
				<div className="d-none"><img src="assets/images/featuredImg.webp" alt="featuredImg" loading="lazy" /></div>
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
					<h2 className="all-head text-center mb-5">
						Feedback that inspires us to consistently be our best!
					</h2>
					<div className="row">
						<div className="col-xl-6 col-md-12 mb-5 mb-xl-0">
							<div className="career-block h-100">
								<FeedbackSlider />
							</div>
						</div>

						<div className="col-xl-6 col-md-12">
							<section className="video-containerSmall">
								<LazyLoad offsetVertical={500}>
									<div className="ratio ratio-16x9" id="video-container">
										<iframe
											src="https://player.vimeo.com/video/828259500"
											frameborder="0"
											allow="fullscreen; picture-in-picture"
											allowFullScreen
											webkitAllowFullScreen
											mozAllowFullScreen
											title="Clientele Video"
										></iframe>
									</div>
								</LazyLoad>
								<script src="https://player.vimeo.com/api/player.js"></script>
							</section>
						</div>
					</div>
				</div>
			</div>

			<div className='container py-5'>
				<div className='clientreview-main p-5'>
					<div className='row'>
						<div className='col-xl-3 col-md-4 col-sm-12'>
							<div>
								<h2>Lorem ipsum dolor sit amet consectetur.</h2>
								<p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus distinctio excepturi nam nemo sunt! Fugiat eaque esse, amet doloribus in accusamus nam soluta vero quidem nemo illum eveniet? Facere!</p>
							</div>
						</div>
						<div className='col-xl-9 col-md-8 col-sm-12'>
							<div className='row'>
								<div className='col-md-6 col-sm-12 px-0 mb-3 mb-md-0'>
									<div className='review-box'>
										<img className='img-fluid'
											src="assets/images/home/Blockchain.png" alt="Blockchain" loading="lazy" />
									</div>
								</div>
								<div className='col-md-6 col-sm-12 px-0 mb-3 mb-md-0'>
									<div className='review-box'>
										<script type="text/javascript" src="https://assets.goodfirms.co/assets/js/widget.min.js"></script>
										<div class="goodfirm-widget" data-widget-type="goodfirms-widget-t1" data-height="198" data-company-id="128903"></div>
									</div>
								</div>
								{/* <div className='col-md-6 col-sm-12 px-0 mb-3 mb-md-0'>
									<div className='review-box'>
										<Clutch />
									</div>
								</div> */}
								<div className='col-md-6 col-sm-12 px-0 mb-3 mb-md-0'>
									<div className='review-box'>
										<img className='img-fluid'
											src="assets/images/home/cluth1.png" alt="clutch1" loading="lazy" />
									</div>
								</div>
								{/* <div className='col-md-6 col-sm-12 px-0 mb-3 mb-md-0'>
									<div className='review-box'>
										<img className='img-fluid'
											src="assets/images/home/cluth2.png" alt="clutch2" loading="lazy" />
									</div>
								</div> */}
								<div className='col-md-6 col-sm-12 px-0 mb-3 mb-md-0'>
									<div className='review-box'>
										<img className='img-fluid'
											src="assets/images/home/cluth3.png" alt="clutch2" loading="lazy" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-color pt-5">
				<div className="container container-fluid ">
					<div className=" d-flex align-items-center flex-column justify-content-center">
						<h2 className="all-head">Codiste As Company</h2>
					</div>
					<div className="container container-fluid">
						<div className="row">
							<div className="col-xl-6 col-sm-12 mb-5">
								<img className='img-fluid d-flex align-items-center justify-content-center'
									style={{ padding: "20px" }} src="assets/images/home/Codiste_Company.webp" alt="Codiste As Company" loading="lazy" />
							</div>
							<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
								<h3 className="mb-3">Looking to stay ahead of the curve?</h3>
								<p className="secondsec-p">Codiste's expertise in end-to-end IT development support and services has you covered.
									We have the experience, expertise, and zeal to continuously innovate and build better solutions with the
									latest technologies to cater to businesses. As your one-stop IT services solution, we provide tailored
									solutions that are efficient and specific to your requirements and needs.
								</p>
								<p className="secondsec-p"><strong>Stay ahead with Codiste, Stay ahead with innovation!</strong></p>
								<div>
									<Link className="book-btn" href="/book-a-call">Book a Call</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="">
				<div className="container container-fluid py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head">Industries We Serve</h2>
							<p className="all-p text-center">
								Codiste serves diverse industries providing
								tailored solutions to help businesses grow.
							</p>
						</div>
						<Industries />
					</section>
				</div>
			</div>

			{/* <div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-4">
					<h2 className="all-blog">Blogs</h2>
					<p className="all-p text-center">
						Keep yourself updated with emerging technologies and new developments in the industry with us.
					</p>
				</div>
				<AllServiceBlogSlider limit={limit} category={category} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<Link href="/blog" className="book-btn mt-3">Read more</Link>
				</div>
			</div> */}

			<div
				className="py-5 mt-md-5 mt-0 bg-color"
			// className="bg-color py-5 mt-md-5 mt-0"
			>
				<div className="container container-fluid">
					<div className="text-center">
						<h2 className="all-head">Innovation in Action: Real-World Case Studies from Codiste</h2>
					</div>
					<div className="row mb-5 mt-4 g-4 casestudylink">
						<div className="col-lg-4 col-md-6 col-sm-12">
							<Link className="casediwallet-block " href="/portfolio/divewallet">
								<div className=" case-position">
									<img
										className="img-fluid "
										alt="Diwallet"
										src="assets/images/Casestudy-img/DiveWallet.png"
										loading="lazy"
									/>
								</div>
								<div className="mb-5">
									<h3 className="case-head">
										Divewallet – The Crypto Wallet
									</h3>
									<span className="case-pera">
										Read More &gt;&gt;
									</span>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<Link href="/portfolio/counterten-solana-marketplace" className="counterten-block">
								<div className=" case-position">
									<img
										className="img-fluid "
										alt="counterten"
										src="assets/images/Casestudy-img/counterten 1.png"
										loading="lazy"
									/>
								</div>
								<div className="mb-5">
									<h3 className="case-head">
										CounterTen – Solana Marketplace
									</h3>
									<span className="case-pera">Read More &gt;&gt;</span>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<Link href="/portfolio/tankpad-binance-chain-minting" className="tankpad-block">
								<div className=" case-position">
									<img
										className="img-fluid "
										alt="Tankpad"
										src="assets/images/Casestudy-img/Tankpad 1.png"
										loading="lazy"
									/>
								</div>
								<div className="mb-5">
									<h3 className="case-head">
										Tankpad – Binance chain Minting
									</h3>
									<span className="case-pera">Read More &gt;&gt;</span>
								</div>
							</Link>
						</div>
					</div>
					<div className="text-center">
						<Link href="/codiste-portfolio" className="book-btn">Explore More</Link>
					</div>
				</div>
			</div>

			<div className="">
				<div className="container container-fluid py-5">
					<h2 className="all-head mb-lg-5 mb-0 text-center">Get started with your idea today!</h2>
					<section>
						<div className="row  d-flex align-items-center">
							<div className="col-lg-6 col-md-12  needsec p-4">
								<h2>
									Are you looking for a global technology
									leader to partner for your tech support?
								</h2>
							</div>
							<div className="col-lg-6 col-md-12 ">
								<div className="need-block h-100">
									<h2 className="">
										How Can We <b>Help?</b>
									</h2>
									<CaseStudyForm text="Start a Conversation" />
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
