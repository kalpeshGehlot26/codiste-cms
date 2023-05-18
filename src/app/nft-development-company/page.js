import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import nftServiceBlogs from "../data/services/service-blogs/nftServiceBlogs";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import nftList from "../data/services/service-items/nft";
import jsonData from "../data/schema";

export const metadata = {
	title: "NFT  Development Company | Codiste",
	description:
		"We are a NFT development company providing end-to-end NFT development, including digital NFTs , NFT marketplaces , NFT gamification and Web3 Identity Platforms.",
};

const NFTDevelopment = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.nftService) }}
			/>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">NFT Development Company</h1>
									<p className="all-p me-5 my-4">We are a non-fungible token development company providing end-to-end NFT development, including digital NFTs and marketplaces for enterprises entering the digital collectibles space. Our NFT market development services offer a comprehensive marketplace development equipped with seamless NFT minting and trading user experience for better user experience and feedback.
									</p>
									<button className="book-btn">Have a project? Let's Chat!</button>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/main/NFT Development.png" alt="NFT Development" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h1 className="all-head">
							Our NFT Development Services{" "}
						</h1>
						<p className="all-p text-center">
							We offer a one-stop development platform for NFTs
							ecosystem development.{" "}
						</p>
					</div>
					<ServiceInnerItems serviceItems={nftList} />
				</section>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head text-center">
							Why Choose Codiste For NFT Development Services?
						</h1>
						<p className="all-p text-center">
							Codiste is a one-stop solution for businesses and
							enterprises exploring NFTs and digital assets for
							better business growth and user experience. We offer
							a complete ecosystem for NFTs, including platform
							and tokenization professionals open to customizing
							your marketplace per your vision. We provide a
							development platform for comprehensive
							enterprise-grade NFT development.
						</p>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1">
							<img
								className="img-fluid mb-2"
								alt=""
								src="./Images/marketplace.png"
							/>
							<h2 className="secondsec-head text-center">
								Customizable Marketplaces
							</h2>
							<p className="secondsec-p text-center">
								We understand that customization and
								personalization are the key elements to cater to
								genZ customers while you are dealing in
								Metaverse or NFTs. Our NFT marketplace
								development team offers fully customizable NFT
								marketplaces for various businesses ranging from
								arts, digital assets, and fashion to sports,
								domain names, and gaming. Our development team
								allows you to work closely on your marketplace
								development to ensure your specific needs are
								fulfilled, and your vision is carved out
								perfectly.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2">
							<img
								className="img-fluid mb-2"
								alt=""
								src="./Images/security.png"
							/>
							<h2 className="secondsec-head text-center">
								Immutable Security
							</h2>
							<p className="secondsec-p text-center">
								Our NFT development experts prioritize security
								in our NFT development services. We use emerging
								and Immutable blockchain technology to ensure
								your NFTs are secure and tamper-proof, backed
								with Hyperledger. Our team takes all the
								measures to protect your digital assets,
								providing a safer and more secure user
								experience and data management.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3">
							<img
								className="img-fluid mb-2"
								alt=""
								src="./Images/tokenization.png"
							/>
							<h2 className="secondsec-head text-center">
								Tokenization
							</h2>
							<p className="secondsec-p text-center">
								We offer unique and rare physical asset
								tokenization into non-fungible tokenized digital
								assets. Our NFT development services help you
								tokenize holdings of any kind and nature,
								ranging from music, art, and fashion to a
								collectible. By tokenizing assets, we enable
								easy monetization and transfer of digital
								assets, unlocking new opportunities for
								creators, investors, and collectors.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4">
							<img
								className="img-fluid mb-2"
								alt=""
								src="./Images/integration.png"
							/>
							<h2 className="secondsec-head text-center">
								Metaverse Integration
							</h2>
							<p className="secondsec-p text-center">
								We ensure that our development platforms offer
								the extended capability of a seamless metaverse
								integration in case you want to build a
								mainstream virtual ecosystem with your NFT
								marketplace. Our NFT development services are
								designed for seamless integration into the
								metaverse. We can help you explore new
								possibilities for creators & content
								monetization for users and creators to engage
								with immersive experiences and digital assets.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5">
							<img
								className="img-fluid mb-2"
								alt=""
								src="./Images/decentralization.png"
							/>
							<h2 className="secondsec-head text-center">
								Decentralized Ecosystem
							</h2>
							<p className="secondsec-p text-center">
								We believe in the power of a decentralized
								ecosystem to gain the trust of millions of
								businesses globally. Our NFT development
								services empower creators and users to provide
								greater transparency and security with
								blockchain. Our NFT development team offers a
								decentralized marketplace development where
								users can trade in digital assets and NFTs. We
								prefer a decentralized approach to ensure your
								platform remains immutable.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 ">
							<img
								className="img-fluid mb-2"
								alt=""
								src="./Images/cryptocurrency.png"
							/>
							<h2 className="secondsec-head text-center">
								Digitized Assets
							</h2>
							<p className="secondsec-p text-center">
								Digital assets are a relatively new trend that
								has survived the most impactful crypto winter.
								Our NFT development team offers the development
								of digital assets to help clients digitize
								assets and explore the world of tokenization and
								decentralization with blockchain. Our NFT
								development services allow you to customize your
								immutable digital assets that can be traded,
								collected, and used in various contexts.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3">
					<p>Help us know your project better! </p>
					<Link href="/book-a-call" className="book-btn">
						Let's Connect{" "}
					</Link>
				</div>
			</div>

			<div className="bg-color py-5 mt-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h1 className="all-head">Technology Stack</h1>
							<p className="all-p me-5 mb-5 text-center">
								We pride ourselves on our proven track record
								with 20+ technologies and delivering innovative,
								customized IT solutions.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ul className="tech-style">
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Binance_Logo.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/ethereum.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Solana.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/tron logo.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/fantom.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/polygon.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Corda.png"
										/>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">FAQ</h1>
					</div>
					<div
						className="accordion accordion-flush"
						id="accordionFlushExample"
					>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingOne"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseOne"
									aria-expanded="false"
									aria-controls="flush-collapseOne"
								>
									Why do I need a Web3 Identity management
									platform?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Web3 Identity Management is a new-age
									identity management system built on
									blockchain and Hyperledger Technology. It
									offers decentralized data storage of
									identity and profile management that is open
									to all individuals in the system with a
									track of who is accessing what! These
									decentralized upgrades of traditional
									techniques were significantly popular among
									businesses enhancing transparency and
									equipping better security. It is a crucial
									component of NFT marketplaces that can help
									you know and understand your customer better
									with a set of profile preferences and
									choices to create personalized services.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingTwo"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseTwo"
									aria-expanded="false"
									aria-controls="flush-collapseTwo"
								>
									What is an NFT marketplace?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									NFT marketplace is an online or virtual
									Marketplace that allows visitors to purchase
									NFTs of various physical and digital
									appearances. You can now build your NFT
									marketplace that is fully customizable to
									your requirement.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingThree"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseThree"
									aria-expanded="false"
									aria-controls="flush-collapseThree"
								>
									What is an NFT marketplace, and how does it
									work?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									An NFT marketplace is a virtual or digital
									platform that facilitates the buying and
									selling of non-fungible tokens (NFTs). NFTs
									are unique digital assets that are verified
									on a blockchain, giving them provable
									ownership and scarcity and the facility to
									be traded as a unique collectible.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingfour"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsefour"
									aria-expanded="false"
									aria-controls="flush-collapsefour"
								>
									What are the benefits of using an NFT
									marketplace for digital assets?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									NFT marketplaces offer several advantages
									over traditional marketplaces, including
									increased transparency and security with
									blockchain, lower transaction fees, and the
									ability to monetize with the enhanced
									ownership of NFTs..
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-color">
				<div className="container container-fluid py-5">
					<div className=" d-flex align-items-center flex-column justify-content-center">
						<h1 className="all-head">Case Study</h1>
						<p>
							Hang on! We have our resource pack. You would want
							to take advantage of them!{" "}
						</p>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12 p-5 d-flex align-items-center justify-content-center flex-column">
							<div className=" ">
								<h1 className="">
									CounterTen – solana Marketplace
								</h1>
								<p className="mt-4">
									CounterTEN is a Solana-based NFT platform
									that enables brands to create and sell NFTs
									for a variety of purposes, from event access
									and product launches to collectibles and
									memberships. The platform provides
									flexibility for businesses to increase
									revenue and engagement, and has already been
									used successfully by luxury car and clothing
									brands. CounterTEN is a game-changer for
									brands looking to connect with their
									customers in an innovative way using NFTs.
								</p>
							</div>

							<div className="mt-4">
								<Link
									href="/portfolio/counterten-solana-marketplace"
									className="book-btn"
								>
									Read More
								</Link>
							</div>
						</div>
						<div className="col-lg-6 col-sm-12 p-5 ">
							<img
								className="img-fluid d-flex align-items-center justify-content-center"
								style={{
									height: "450px",
									width: "auto",
									margin: "auto",
									padding: "20px",
								}}
								src="assets/images/case-couter10/Counterten.png"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head">Blog</h1>
					<p className="all-p text-center">
						Knowledge will never be the less, so keep exploring our
						blogs.
					</p>
				</div>
				<AllServiceBlogSlider items={nftServiceBlogs} />
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head">
								We are proud to have your trust in us!{" "}
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
							<div className="carousel-inner ">
								<div className="carousel-item active">
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
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Ninza NFT"
													src="assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png"
												/>
											</div>
											<h5>Ninza NFT</h5>
											<p>CoFounder</p>
										</div>
									</div>
								</div>
								<div className="carousel-item ">
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
													alt="The Real Estate "
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
													alt="DiveWallet"
													src="assets/images/client-logos/DiveWallet Logo.png"
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
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
							<h1 className="">
								Want to make your <br />
								move in NFTs?{" "}
							</h1>
							<h2>
								Drop your details. We can <br />
								take it from here!{" "}
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

export default NFTDevelopment;
