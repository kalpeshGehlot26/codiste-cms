import React from 'react';
import ClientSlider from './clientSlider';
import FeedbackSlider from './feedbackSlider';
import BlogSlider from './blogSlider';
import ServiceList from '../service/serviceItems';
import Industries from '../service/industries';

const HomePage = () => {	
	return (
		<div>
			<section className="video-containeraa videosec">
				<video src="assets/video/Codiste_Home.mp4" autoPlay loop playsInline muted></video>
				<div className="rotate-box">
					<h1>Scale with DLT security & transparency in</h1>
				</div>
				<div className="rotating-text-wrapper">
					<h2>Blockchain Technology</h2>
					<h2>Artificial Intelligence</h2>
					<h2>Augmented & Virtual Reality</h2>
					<h2>Non-Fungible Tokens & Marketplaces</h2>
					<h2>Metaverse Technologies</h2>
					<h2>Machine Learning</h2>
					<h2>Cryptocurrency Technologies</h2>
				</div>
			</section>

			<ClientSlider />

			<div className="container container-fluid py-5">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center  mb-5">
						<h1 className="all-head">Services We Offer</h1>
					</div>
					<ServiceList />
					<div className="d-flex align-items-center justify-content-center">
						<button className="book-btn mt-3 ">Show more</button>
					</div>
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
								style={{height: "450px", width : "auto", margin: "auto", padding: "20px"}}
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
								<button className="book-btn">Book a Call</button>
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
			</div>

			<div className=" py-5 bg-color">
				<div className=" d-flex align-items-center flex-column justify-content-center  mb-5 contact-block">
					<h4 className="all-head">QUALITY IS OUR BEAUTY</h4>
					<h1>We Make Beautiful Things</h1>
				</div>
				<section
					className="splide"
					id="third-slider"
					aria-label="Slide Container Example"
				>
					<div className="splide__track">
						<ul className="splide__list">
							<li className="splide__slide p-2">
								<div className=" splide__slide__container card ">
									<img
										src="assets/images/counter.png"
										className="card-position"
										alt=""
									/>
									<div className="card-body">
										<p className="card-text">Website </p>
										<h5 className="card-title">
											Machine Learning Estimation
										</h5>
										<a href="#" className=" mt-3 case-btn">
											CASE STUDY
										</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>

			<div className="container container-fluid py-5">
				<div>
					<script
						type="text/javascript"
						src="https://widget.clutch.co/static/js/widget.js"
					></script>
					<div
						className="clutch-widget"
						data-url="https://widget.clutch.co"
						data-widget-type="8"
						data-height="300"
						data-nofollow="true"
						data-expandifr="true"
						data-reviews="2075551,1991603,1981661,1979997,1892127,1884862"
						data-clutchcompany-id="1798117"
					></div>
				</div>
			</div>

			<div className="bg-color">
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

								{/* <p>We are available for work. Connect with us via <br />phone:<span>+91 94290 05987</span> or <br />
              email: <span>manager@codiste.com</span></p>  */}
							</div>
							<div className="col-lg-6 col-md-12 ">
								<div className="need-block h-100">
									<h2 className="">
										How Can We <b>Help?</b>{" "}
									</h2>
									<div className="">
										<input
											className="need-form"
											type="text"
											id="name"
											name="name"
											placeholder="Name*"
										/>
										<br />
										<input
											className="need-form"
											type="email"
											id="email"
											name="email"
											placeholder="Email*"
										/>
										<br />
										<input
											className="need-form"
											type="number"
											id="number"
											name="number"
											placeholder="Number*"
										/>
										<br />
										<select
											name="services"
											id="_services"
											className="need-form"
										>
											<option>Select Service*</option>
											<option>
												Blockchain Development
											</option>
											<option>Machine Learning</option>
											<option>Web Development</option>
											<option>
												Mobile App Development
											</option>
											<option>
												Metaverse Enterprise Solution
											</option>
											<option>
												Nft and Crypto Development
											</option>
											<option>Startup Development</option>
										</select>
										<textarea
											className="need-form"
											id="exampleFormControlTextarea1"
											rows="3"
											placeholder="Your Message*"
										></textarea>
										<button className="book-btn">
											Book a Call
										</button>
									</div>
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