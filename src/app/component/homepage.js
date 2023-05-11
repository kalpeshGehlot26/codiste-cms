import React from 'react';


// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import dynamic from 'next/dynamic';



// const DynamicSplide = dynamic(() => import('@splidejs/react-splide'), { ssr: false });


const HomePage = () => {
	
	// useEffect(() => {
	// 	import('@splidejs/splide/dist/js/splide.min.js').then(() => {
	// 	  new Splide('.splide').mount(); // Initialize Splide
	// 	});
	//   }, []);

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

			{/* <DynamicSplide>

				<div className="splide">
		<div className="splide__track">
			<ul className="splide__list">
			<SplideSlide>
			<img className="img-fluid" alt="" src="assets/images/splide/apollo.jpg" />
			</SplideSlide>
			<SplideSlide>
			<img className="img-fluid" alt="" src="assets/images/splide/Bloqhodler.jpg" />
			</SplideSlide>
			<SplideSlide>
			<img className="img-fluid" alt="" src="assets/images/splide/bonfite-1.jpg" />
			</SplideSlide>
			</ul>
		</div>
		</div>
			</DynamicSplide> */}
			
			<section className="splide" id="first-slider" aria-label="Client Slider">
				<div className="splide__track">
					<ul className="splide__list">
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/apollo.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/Bloqhodler.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/bonfite-1.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/Coinxpad.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/cypha.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/diveWallet.jpg" />
							</div>
						</li>

						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/ftwDao.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/galaxyCoin.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/holygrails.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/ikaris.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/medizen.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/ml.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/mumble.jpg" />
							</div>
						</li>
						<li className="splide__slide">
							<div className="splide__slide__container">
								<img className="img-fluid" alt="" src="assets/images/splide/nearPro.jpg" />
							</div>
						</li>
					</ul>
				</div>
			</section>

			<div className="container container-fluid py-5">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center  mb-5">
						<h1 className="all-head">Services We Offer</h1>
					</div>
					<div className="row ">
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<div className="d-flex align-items-center justify-content-between">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/on_chain 1.png"
										alt=" "
									/>
									<h2 className="secondsec-head  ms-3">
										<span className="custom-font">
											Blockchain
										</span>{" "}
										Development services
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									Industry’s best blockchain development
									services that enable secure, transparent,
									and decentralized transactions. Custom
									blockchain solutions with smart contract
									development, DeFi development, NFT
									development, and blockchain consulting.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<div className="d-flex align-items-center justify-content-between">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/metaverse.png"
										alt=""
									/>
									<h2 className="secondsec-head ms-3">
										<span className="custom-font">
											Metaverse
										</span>{" "}
										Development services
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									We create immersive and interactive
									metaverses for businesses to create engaging
									virtual worlds and experiences. Our
									expert-led Metaverse development services
									offer end-to-end metaverse design and
									development, avatar creation and
									customization, virtual world integration,
									and blockchain integration.
								</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<div className="d-flex">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/AI Development.png"
										alt=""
									/>
									<h2 className="secondsec-head  ms-3">
										<span className="custom-font">AI</span>
										<br /> Development services
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									Our AI development services help businesses
									take advantage of the latest advancements in
									artificial intelligence technology. We work
									closely with our clients to identify their
									needs and develop custom machine learning
									algorithms and natural language processing
									technologies.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 mb-3 h-100">
								<div className="d-flex align-items-center justify-content-between">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/Web Development.png"
										alt=" "
									/>
									<h2 className="secondsec-head mt-4 ms-3">
										<span className="custom-font">Web</span>
										<br /> Development services
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									We provide end-to-end web development
									services with low code/no code development,
									lead management chatbots, and automated lead
									nurturing. Our expert team crafts engaging
									websites for global audiences with
									SEO-friendly activity to improve online
									visibility and attract organic traffic.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<div className="d-flex ">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/AR VR.png"
									/>
									<h2 className="secondsec-head mt-2 ms-3">
										<span className="custom-font">AR/VR</span>
										<br /> Development services
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									Our AR web development services leverage
									advanced technologies like 3D modeling,
									computer vision, and AR/VR solutions to
									create immersive training simulations,
									product demos, and virtual showrooms that
									elevate marketing campaigns and
									revolutionize business operations.
								</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<div className="d-flex ">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/machine.png"
									/>
									<h2 className="secondsec-head mt-2 ms-3">
										<span className="custom-font">ML</span>
										<br /> Development
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									Our machine learning development team
									creates custom algorithms to classify and
									analyze your data, enabling advanced
									management and driving business performance.
									We use advanced image recognition software
									to transform visual media, while our natural
									language processing solutions enhance user
									experience.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<div className="d-flex ">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/Nftimg.png"
									/>
									<h2 className="secondsec-head mt-4 ms-3">
										<span className="custom-font">
											NFTMarketplace
										</span>
										<br />
										Development
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									Our NFT marketplace development services
									offer secure and decentralized trading of
									digital assets. We provide tailored NFT
									marketplace development, dApp development,
									NFT minting/trading, and blockchain
									integration for seamless and efficient
									transactions.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<div className="d-flex align-items-center justify-content-between">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/Cryptocurrency.png"
										alt=" "
									/>
									<h2 className="secondsec-head mt-4 ms-3">
										<span className="custom-font">
											Cryptocurrency
										</span>
										<br /> Development
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									We provide cryptocurrency development
									services to businesses seeking to leverage
									decentralized digital currencies and
									blockchain solutions. Our team develops
									secure, transparent smart contract
									applications that enable secure financial
									transactions tailored to the unique needs of
									each client.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<div className="d-flex align-items-center">
									<img
										className="img-fluid firstsecimg-style"
										src="assets/images/services/startup.png"
										alt=" "
									/>
									<h2 className="secondsec-head ms-4 mt-4">
										<span className="custom-font">
											Start-Up
										</span>
										<br /> Development
									</h2>
								</div>
								<p className="secondsec-p mt-4">
									Leverage our startup development services to
									receive end-to-end support from ideation to
									launch, partnering with our team's
									innovative mindset and technical expertise.
									We transform your ideas into products or
									services aligned with your business
									objectives.
								</p>
							</div>
						</div>
					</div>

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
							<section
								className="splide"
								id="second-slider"
								aria-label="Slide Container Example"
							>
								<div className="splide__track">
									<ul className="splide__list ">
										<li className="splide__slide ">
											<div className="col-auto d-flex">
												<img
													className="career-cirimg"
													src="assets/images/career/chintan-patel.png"
													style={{width: "150px",height: "150px"}}
												/>
												<div className="d-flex flex-column justify-content-center">
													<h4>DiveWallet</h4>
													<p aria-controls="">
														CoFounder at Ninza NFT{" "}
														<br />
														Bolivar, New York
													</p>
												</div>
											</div>
											<div className="p-3">
												<p className="secondsec-p">
													I am pleased to say that
													working with Codiste Pvt Ltd
													has been a positive
													experience for our
													community. The project is
													now complete, and the
													feedback we have received on
													the platform has been
													overwhelmingly positive.
													Throughout the project,
													Codiste maintained open
													communication lines,
													regularly updating us on
													progress and following the
													agreed timeline. They
													delivered an app with
													impressive functionalities
													and accepted every challenge
													we gave them. Overall, we
													are satisfied with the
													outcome of the project and
													would recommend Codiste for
													their expertise,
													professionalism, and
													commitment to delivering
													high-quality work.
												</p>
											</div>
										</li>
										<li className="splide__slide ">
											<div className="col-auto d-flex">
												<img
													className="career-cirimg"
													src="assets/images/career/chintan-patel.png"
													style={{width: "150px",height: "150px"}}
												/>
												<div className="d-flex flex-column justify-content-center">
													<h4>E-Commerce Company</h4>
													<p aria-controls="">
														Managing Director
														<br />
														Australia
													</p>
												</div>
											</div>
											<div className="p-3">
												<p className="secondsec-p">
													They communicate clearly and
													outline the product roadmap
													for us. It has been very
													easy to work with them.Since
													the launch, the client has
													seen success and has been
													satisfied with Codiste pvt
													ltd’s quality product. The
													team has been prompt and
													dedicated to their work,
													pushing the timelines to
													meet them and deliver
													effectively. Overall,
													they’ve stood out for their
													communication skills.
												</p>
											</div>
										</li>
										<li className="splide__slide ">
											<div className="col-auto d-flex">
												<img
													className="career-cirimg"
													src="assets/images/career/chintan-patel.png"
													style={{width: "150px",height: "150px"}}
												/>
												<div className="d-flex flex-column justify-content-center">
													<h4>Medizen App</h4>
													<p aria-controls="">
														CEO <br />
														Johannesburg, South
														Africa
													</p>
												</div>
											</div>
											<div className="p-3">
												<p className="secondsec-p">
													Codiste pvt ltd delivered
													the project within the given
													timeline and budget. Their
													communication and
													collaboration were
													outstanding using Slack,
													Lucidhart, and Miro. The
													team was reliable,
													well-organized, and
													proactive.
												</p>
											</div>
										</li>
									</ul>
								</div>
							</section>
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

						<div className="row">
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iFinance.png" />
									<p className="ins-clr">
										Financial Institutions
									</p>
								</div>
							</div>

							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iReal.png" />
									<p className="ins-real">Real Estate</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iHelthcare.png" />
									<p className="ins-health">Healthcare</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iGame.png" />
									<p className="ins-game">
										Gaming & Entertainment
									</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iManufacture.png" />
									<p className="ins-manufact">Manufacturing</p>
								</div>
							</div>

							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iEcommrce.png" />
									<p className="ins-ecommrce">
										Retail & E-Commerce
									</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iEducation.png" />
									<p className="ins-education">Education</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iAdvertise.png" />
									<p className="ins-advertise">
										Advertising & Marketing
									</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/robotic.png" />
									<p className="ins-auto">Automotive</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/inft.png" />
									<p className="ins-nft ">NFT</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/truck.png" />
									<p className="ins-supply">
										Logistics & Supply Chain
									</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/iot.png" />
									<p className="ins-iot">IOT</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/art-gallery.png" />
									<p className="ins-clr">Art galleries</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/life-insurance.png" />
									<p className="ins-real">Insurance </p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/marijuana.png" />
									<p className="ins-health">Cannabins</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/technology.png" />
									<p className="ins-game">Fintech</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/people.png" />
									<p className="ins-manufact">Events</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/fashion.png" />
									<p className="ins-ecommrce ">Fashion</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/loyal-customer.png" />
									<p className="ins-education">
										Loyalty Programs
									</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/social-media.png" />
									<p className="ins-advertise">
										Social Networking
									</p>
								</div>
							</div>

							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/airplane-around-earth.png" />
									<p className="ins-auto">Travel</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/wheat.png" />
									<p className="ins-nft">Agricultue</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/location-pin.png" />
									<p className="ins-supply">Virtual land</p>
								</div>
							</div>

							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/music.png" />
									<p className="ins-iot">Music</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/auction.png" />
									<p className="ins-clr">Legal</p>
								</div>
							</div>

							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/ball-of-basketball.png" />
									<p className="ins-real">Sports</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/waiter.png" />
									<p className="ins-health">Restaurant Service</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/artificial-intelligence.png" />
									<p className="ins-game">Trading platforms</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/shuttle.png" />
									<p className="ins-manufact">Start-Up & SME</p>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-6 pb-3 ">
								<div className="ins-block h-100">
									<img src="assets/images/industries/wallet.png" />
									<p className="ins-ecommrce">Digital assets</p>
								</div>
							</div>
						</div>
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
				<section
					className="splide"
					id="second-slider"
					aria-label="Slide Container Example"
				>
					<div className="splide__track">
						<ul className="splide__list">
							<li className="splide__slide p-2 ">
								<div className="splide__slide__container  position-relative">
									<img
										className="img-fluid rounded p-0"
										alt=""
										src="assets/images/blogs/Blog1.jpg"
									/>
									<div className="blogboxbg">
										<div className="blogfont-pos">
											<p>Blockchain</p>
											<h4>
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Deleniti, deserunt.
											</h4>
											<button className="blogfont-btn">
												Read More
											</button>
										</div>
									</div>
								</div>
							</li>
							<li className="splide__slide p-2 ">
								<div className="splide__slide__container  position-relative">
									<img
										className="img-fluid rounded p-0"
										alt=""
										src="assets/images/blogs/Blog2.jpg"
									/>
									<div className="blogboxbg">
										<div className="blogfont-pos">
											<p>Blockchain</p>
											<h4>
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Deleniti, deserunt.
											</h4>
											<button className="blogfont-btn">
												Read More
											</button>
										</div>
									</div>
								</div>
							</li>
							<li className="splide__slide p-2 ">
								<div className="splide__slide__container  position-relative">
									<img
										className="img-fluid rounded p-0"
										alt=""
										src="assets/images/blogs/Blog3.jpg"
									/>
									<div className="blogboxbg">
										<div className="blogfont-pos">
											<p>Blockchain</p>
											<h4>
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Deleniti, deserunt.
											</h4>
											<button className="blogfont-btn">
												Read More
											</button>
										</div>
									</div>
								</div>
							</li>
							<li className="splide__slide p-2 ">
								<div className="splide__slide__container  position-relative">
									<img
										className="img-fluid rounded p-0"
										alt=""
										src="assets/images/blogs/Blog4.jpg"
									/>
									<div className="blogboxbg">
										<div className="blogfont-pos">
											<p>Blockchain</p>
											<h4>
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Deleniti, deserunt.
											</h4>
											<button className="blogfont-btn">
												Read More
											</button>
										</div>
									</div>
								</div>
							</li>
							<li className="splide__slide p-2 ">
								<div className="splide__slide__container  position-relative">
									<img
										className="img-fluid rounded p-0"
										alt=""
										src="assets/images/blogs/Blog5.jpg"
									/>
									<div className="blogboxbg">
										<div className="blogfont-pos">
											<p>Blockchain</p>
											<h4>
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Deleniti, deserunt.
											</h4>
											<button className="blogfont-btn">
												Read More
											</button>
										</div>
									</div>
								</div>
							</li>
							<li className="splide__slide p-2 ">
								<div className="splide__slide__container  position-relative">
									<img
										className="img-fluid rounded p-0"
										alt=""
										src="assets/images/blogs/Blog6.jpg"
									/>
									<div className="blogboxbg">
										<div className="blogfont-pos">
											<p>Blockchain</p>
											<h4>
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Deleniti, deserunt.
											</h4>
											<button className="blogfont-btn">
												Read More
											</button>
										</div>
									</div>
								</div>
							</li>
							<li className="splide__slide p-2 ">
								<div className="splide__slide__container  position-relative">
									<img
										className="img-fluid rounded p-0"
										alt=""
										src="assets/images/blogs/Blog6.jpg"
									/>
									<div className="blogboxbg">
										<div className="blogfont-pos">
											<p>Blockchain</p>
											<h4>
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Deleniti, deserunt.
											</h4>
											<button className="blogfont-btn">
												Read More
											</button>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
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
