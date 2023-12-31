import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import cryptoList from "../data/services/service-items/crypto";
import jsonData from "../data/schema";

export const metadata = {
	title: "Cryptocurrency Development Company | Codiste",
	description: "As a leading cryptocurrency services provider, we're specialized in delivering blockchain, hyper ledger, and smart contract solutions that guarantee a seamless user experience in crypto trading and investment.",
	images: "https://www.codiste.com/assets/images/main/Cryptocurrency Development_.png",
	openGraph: {
		title: "Cryptocurrency Development Company | Codiste",
		description: "As a leading cryptocurrency services provider, we're specialized in delivering blockchain, hyper ledger, and smart contract solutions that guarantee a seamless user experience in crypto trading and investment.",
		images: "https://www.codiste.com/assets/images/main/Cryptocurrency Development_.png",
		url: 'https://www.codiste.com/cryptocurrency-development-company/'
	},
	alternates: {
		canonical: 'https://www.codiste.com/cryptocurrency-development-company',
	}
};

const limit = 3
const category = 54

const CryptoDevelopmentCompany = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.cryptoService) }}
			/>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
									<h1 className="all-head">Cryptocurrency Development Company</h1>
									<p className="all-p me-5 my-4">We offer innovative decentralized crypto solutions development
										services with robust security and privacy standards. We are equipped with blockchain, hyper
										ledger, and smart contracts for a seamless user experience in crypto trading and investment.
									</p>
									<Link href="/contact" className="book-btn">Let’s Talk</Link>
								</div>
								<div className="col-12 col-lg-auto mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/main/Cryptocurrency Development_.png" alt="Cryptocurrency Development" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h2 className="all-head text-center">Our Cryptocurrency Development Services</h2>
					</div>
					<ServiceInnerItems serviceItems={cryptoList} />
				</section>
			</div>

			<div className="py-5 bg-color mt-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head text-center">
							Why Choose Codiste for Cryptocurrency Development
							Services?
						</h2>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Blockchain Network Support"
								src="assets/images/Service-crypto/Blockchain Network Support.png"
							/>
							<h2 className=" text-center secondsec-head">
								10+ Blockchain Network Support
							</h2>
							<p className=" text-center secondsec-p">
								We offer our clients the flexibility to choose
								from over 10+ blockchain networks for their
								projects. Our cryptocurrency development team
								ensures they can access the most efficient
								blockchain technology for their specific needs,
								resulting in a better-performing, more secure
								product.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Immutable Security"
								src="assets/images/Service-crypto/Immutable Security.png"
							/>
							<h2 className=" text- center secondsec-head ">
								Immutable Security with DLT
							</h2>
							<p className=" text-center secondsec-p">
								Our metaverse development team creates custom
								solutions tailored to specific needs and
								preferences, ensuring a unique immersive
								3D-powered metaverse experience that helps you
								outshine the competition.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Peer-to-Peer"
								src="assets/images/Service-crypto/Peer-to-Peer Trade Facility.png"
							/>
							<h2 className="text-center secondsec-head text- center">
								Peer-to-Peer Trade Facility
							</h2>
							<p className="text-center secondsec-p">
								Our cryptocurrency development experts
								offer seamless and secure peer-to-peer
								transactions on decentralized wallets, allowing
								you to extend your features and contributing to
								gaining traction in the crypto space.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="best-practice"
								src="assets/images/Service-crypto/best-practice.png"
							/>
							<h2 className="text-center secondsec-head">
								Customized Development
							</h2>
							<p className="text-center secondsec-p">
								We offer platform and feature customization to
								eliminate limits from your vision. Our experts
								work closely with you to understand your
								requirements and add inputs to your solutions to
								ensure that end products meet your needs.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="iwallet"
								src="assets/images/Service-crypto/iwallet.png"
							/>
							<h2 className=" text-center secondsec-head">
								End-to-End Wallet Security
							</h2>
							<p className="text-center secondsec-p">
								We focus extensively on providing robust wallet
								security, ensuring that your users' funds and
								data are always kept safe, considering that the
								wallet holds the keys to accessing crypto funds.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5">
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Mobile"
								src="assets/images/Service-crypto/Mobile & Web Extensions.png"
							/>
							<h2 className="secondsec-head text-center">
								Mobile & Web Extensions
							</h2>
							<p className="secondsec-p text-center">
								We understand that having a mobile or web
								application helps your brand gain traction,
								especially if you are a Web3-based organization.
								Our cryptocurrency development services offer
								web extensions and mobile applications to help
								your brand provide a seamless user experience.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
					<p>Let’s make crypto mainstream together! </p>
					<Link href="/book-a-call" className="book-btn">
						Get in Touch
					</Link>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h2 className="all-blog text-center">Technology Stack</h2>
							<p className="all-p text-center">
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
											className="img-fluid" loading="lazy" alt="NEO"
											src="assets/images/tech/NEO.png"
										/>
										<p>NEO</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="hyperledger"
											src="assets/images/tech/hyperledger.png"
										/>
										<p className="text-uppercase">hyperledger</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Multichain"
											src="assets/images/tech/Multichain.png"
										/>
										<p className="text-uppercase">Multichain</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="ethereum"
											src="assets/images/tech/ethereum.png"
										/>
										<p className="text-uppercase">ethereum</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Hydra"
											src="assets/images/tech/Hydra chain.png"
										/>
										<p className="text-uppercase">Hydra chain</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="openchain"
											src="assets/images/tech/openchain.png"
										/>
										<p className="text-uppercase">openchain</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="IOTA"
											src="assets/images/tech/IOTA.png"
										/>
										<p className="text-uppercase">IOTA</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="BigChainDB"
											src="assets/images/tech/BigChainDB.png"
										/>
										<p className="text-uppercase">BigChainDB</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Stellar"
											src="assets/images/tech/Stellar.png"
										/>
										<p className="text-uppercase">Stellar</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Symbiont"
											src="assets/images/tech/Symbiont Assembly.png"
										/>
										<p className="text-uppercase">Symbiont Assembly</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="NEM"
											src="assets/images/tech/NEM Framework.png"
										/>
										<p className="text-uppercase">NEM Framework</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5 bg-color">
				<div className="container container-fluid">
					<div className="d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">Case Study</h2>
					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
							<div className=" ">
								<h2 className="">CoinxPad Launchpad</h2>
								<p className="all-p">
									CoinxPad is a launchpad that enables crypto
									projects to raise funds through an Initial
									DEX Offering (IDO) on a decentralized
									exchange (DEX). It supports multiple
									blockchain platforms and provides a fast and
									efficient way for projects to raise funds,
									while offering a secure platform for
									investors to participate. CoinxPad is the
									first CEX/DEX multi-chain IDO launchpad and
									has implemented advanced security protocols
									and a strict KYC/AML process to ensure the
									legitimacy of investors.
								</p>
							</div>

							<div className="mt-4">
								<Link
									href="/portfolio/coinxpad"
									className="book-btn"
								>
									Browse Our Live Showcases
								</Link>
							</div>
						</div>
						<div className="col-lg-5 col-md-6 col-sm-8 mx-auto mx-lg-0  order-1 order-md-2 mb-5 mb-lg-0">
							<img
								className="img-fluid"
								style={{
									padding: "20px",
								}}
								src="assets/images/case-coinxpad/Coinxpad.png"
								alt="CoinXpad - Coinxpad Decentralised Crypto Launchpad"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">FAQs</h2>
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
									What is a crypto exchange?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									A crypto exchange is a platform/application
									that allows users to buy and sell various
									cryptocurrencies as a trade. It functions
									similarly to a traditional stock exchange,
									with users placing buy and sell orders to
									trade cryptocurrencies instead of
									conventional currencies and assets.
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
									What is a crypto wallet?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									A crypto wallet is an application that
									stores a user’s public and private keys
									required to access crypto assets. It allows
									users to send, receive, and store
									cryptocurrencies, along with the facility to
									manage their digital assets securely.
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
									How secure are crypto wallets?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Crypto wallets are generally secure, using
									advanced encryption algorithms to protect
									users' private keys. However, choosing a
									reputable wallet and following best security
									practices, such as using two-factor
									authentication and regularly backing up your
									wallet, is essential.
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
									What is a decentralized exchange (DEX)?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									A decentralized exchange (DEX) is a crypto
									exchange operating on a decentralized
									network. Decentralized applications work and
									function in an automated manner or with the
									decisions and voting mechanisms of on-chain
									users without a centralized authority. DEXs
									enable peer-to-peer cryptocurrency trading,
									providing users with better data privacy and
									security.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingfive"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsefive"
									aria-expanded="false"
									aria-controls="flush-collapsefive"
								>
									What are the benefits of using a DEX?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Using a DEX provides users greater privacy
									and security, as no central authority can
									control or manipulate the exchange and put
									user funds at risk. DEXs also offer greater
									liquidity and a more comprehensive range of
									tradable assets.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingsix"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapsesix"
									aria-expanded="false"
									aria-controls="flush-collapsesix"
								>
									What is an STO?
								</button>
							</h2>
							<div
								id="flush-collapsesix"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingsix"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									A Security Token Offering (STO) is a
									fundraising mechanism in which a company
									issues tokens representing ownership. STOs
									provide a more regulated alternative to
									ICOs, which are largely unregulated and
									prone to fraud.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-blog">Blogs</h2>
					<p className="all-p text-center">
						Knowledge will never be the less, so keep exploring our
						blogs.
					</p>
				</div>
				<AllServiceBlogSlider limit={limit} category={category} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<Link href="/blog" className="book-btn mt-3">Read more</Link>
				</div>
			</div> */}

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head text-center">
								Success Stories from our clientele!
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
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="Cryptography"
													src="assets/images/client-logos/Mumble Rapperz.png"
													loading="lazy"
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
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="FTW"
													src="assets/images/client-logos/FTW Dao Logo.png"
													loading="lazy"
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
												src="assets/images/iCrowsel.png"
												className="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													className="img-fluid my-4 client-logo"
													alt="White Hat"
													src="assets/images/client-logos/White Hat DAO.png"
													loading="lazy"
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
				<h2 className="all-head text-center mb-lg-5 mb-0">Place a Support Inquiry!</h2>
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12  mb-lg-0 needsec p-4">
							<h2>
								Contact us for reliable and trustworthy cryptocurrency Services.
							</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<CaseStudyForm text="Collaborate on Your Project" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default CryptoDevelopmentCompany;
