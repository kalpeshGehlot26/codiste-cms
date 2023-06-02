import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import React from "react";
import Link from "next/link";

export const metadata = {
	title: "DiveWallet | Crypto Development services | Codiste",
	description: "Codiste develops a highly-secured crypto wallet - ‘Divewallet’ that supports well known EVM-based blockchains such as Ethereum, Binance, Polygon, and Solana."
};

const DivewalletPortfolio = () => {
	return (
		<div>


			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">DiveWallet - Your next-gen crypto asset
										manager</h1>
									<p className="all-p me-5 my-4">
										<strong>
											{" "}
											Creating a 360-Degree Decentralized
											Crypto Wallet
										</strong>{" "}
										<br />
										As Blockchain experts, Codiste develops a
										highly-secured crypto wallet - ‘Divewallet’
										that supports well known EVM-based
										blockchains such as Ethereum, Binance,
										Polygon, and Solana.
									</p>
									<Link
										className="book-btn"
										href="//www.divewallet.net/"
										target="_blank"
									>
										Live Project
									</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										src="/assets/images/diwallet-case/Dive Wallet.png"
										alt="DiveWallet"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>



			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center">
					<h1 className="all-head text-center">Client Requirement</h1>
				</div>

				<div className="container container-fluid">
					<div className="row">
						<div className="col-xl-6 col-sm-12 mb-5  d-flex  justify-content-center flex-column">
							<p className="secondsec-p">
								{" "}
								The client needed the crypto wallet to possess
								the functionalities of Passcode and Biometrics
								for better financial security at the users’ end.
								Additionally, the client required integration of
								the wallet with the Web3 browser. It was implied
								that the client was looking for solutions both
								for Divewallet and its users, with protection of
								funds in the crypto wallet being the primary
								requirement.
							</p>
						</div>
						<div className="col-xl-6 col-sm-12 mb-5">
							<img
								className="img-fluid d-flex align-items-center justify-content-center"
								style={{
									height: "350px",
									width: "auto",
									margin: "auto",
									padding: "20px",
								}}
								src="/assets/images/diwallet-case/Case Study.png"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-color">
				<div className="container container-fluid py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head text-center"> Features of Product</h1>
							<p className="all-p me-5 text-center">
								Our team incorporated seamless functionalities
								right from price optimization and swapping to
								push notifications and NFTs listing. These
								unique features were designed to give the
								optimum best to the end users.
							</p>
						</div>

						<div className="row">
							<div className="col-lg-12">
								<ul className="diwallet-style">
									<li className="">
										<img
											className="img-fluid"
											alt="Price Optimization"
											src="/assets/images/diwallet-case/speedometer.png"
										/>
										<p>
											<span className="fs-3">
												Price Optimization
											</span>
											<br />
											<span className="secondsec-p">		With third-party applications -
												Coingecko, CoinGapp, and LynxCrypto
												for the best price analysis, the
												end-user always gets the best price.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Wallet Connect"
											src="/assets/images/diwallet-case/wallet.png"
										/>
										<p>
											<span className="fs-3">
												Wallet Connect
											</span>
											<br />
											<span className="secondsec-p">It helps users connect with the Web3
												websites through the QR code and do
												the required transactions.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="ManageToken"
											src="/assets/images/diwallet-case/tokenization.png"
										/>
										<p>
											<span className="fs-3">
												ManageToken
											</span>
											<br />
											<span className="secondsec-p">	This feature automatically adds 500
												tokens within the Divewallet once
												the user creates the account, hence
												saving time.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Swapping"
											src="/assets/images/diwallet-case/switch.png"
										/>
										<p>
											<span className="fs-3">
												Swapping
											</span>
											<br />
											<span className="secondsec-p">	Backed by a third-party application,
												ChangeNow, this feature helps the
												end user swap coins within the
												Divewallet.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Price Alert"
											src="/assets/images/diwallet-case/notification-bell.png"
										/>
										<p>
											<span className="fs-3">
												Price Alert
											</span>
											<br />
											<span className="secondsec-p">	This unique feature facilitates the
												end users to keep a watch on the
												fluctuating prices of coins like
												Bitcoin, Ether, etc.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Push Notification"
											src="/assets/images/diwallet-case/payment.png"
										/>
										<p>
											<span className="fs-3">
												Push Notification
											</span>
											<br />
											<span className="secondsec-p">Push Notification notifies
												the end user whenever the coin price
												increases or decreases by +5% or
												-5%.</span>
										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Wallet Security"
											src="/assets/images/diwallet-case/notification.png"
										/>
										<p>
											<span className="fs-3">
												Wallet Security
											</span>
											<br />
											<span className="secondsec-p">			It allows end users to enable or
												disable the Passcode and Password as
												per their needs.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Multicoin Wallet"
											src="/assets/images/diwallet-case/wallet1.png"
										/>
										<p>
											<span className="fs-3">
												Multicoin Wallet
											</span>
											<br />
											<span className="secondsec-p">		This feature allows end users to add
												multiple accounts and create
												multiple wallets within the
												Divewallet.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Dusting Attack Alert"
											src="/assets/images/diwallet-case/hacker.png"
										/>
										<p>
											<span className="fs-3">
												Dusting Attack Alert
											</span>
											<br />
											<span className="secondsec-p">			This functionality helps the end
												users of the Divewallet to secure
												their accounts by giving them
												real-time alerts in case of any
												breach.</span>

										</p>
									</li>
									<li>
										<img
											className="img-fluid"
											alt="Listing of NFTs"
											src="/assets/images/diwallet-case/card.png"
										/>
										<p>
											<span className="fs-3">
												Listing of NFTs
											</span>
											<br />
											<span className="secondsec-p">If any user within the Divewallet
												holds any NFTs related to Ethereum
												or Binance, those NFTs will be
												listed within the Divewallet.</span>

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
					<h1 className="all-head text-center text-center my-3 ">
						{" "}
						What did we deliver?
					</h1>
					<p className="secondsec-p text-center">
						Codiste experts incorporated advanced features like
						Passcode and Biometrics. The Web3 browser integration
						would help the end users directly connect to the wallet
						if accessing via browser. We offered an extra layer of
						security where the system will ask for a password from
						the end user every time they perform a transaction
						within Divewallet. Zero Knowledge Policy is followed,
						which means no password would be stored on any device,
						enhancing the security.
					</p>
				</div>
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head text-center">
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
												src="/assets/images/diwallet-case/Divewallet-1.png"
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
												src="/assets/images/diwallet-case/Divewallet-2.png"
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
												src="/assets/images/diwallet-case/Divewallet-1.png"
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
												src="/assets/images/diwallet-case/Divewallet-3.png"
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
												src="/assets/images/diwallet-case/Divewallet-4.png"
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
												src="/assets/images/diwallet-case/Divewallet-5.png"
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
												src="/assets/images/diwallet-case/Divewallet-5.png"
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
												src="/assets/images/diwallet-case/Divewallet-6.png"
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
												src="/assets/images/diwallet-case/Divewallet-7.png"
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
												src="/assets/images/diwallet-case/Divewallet-8.png"
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
										src="/assets/images/tech/flutter.png"
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
							<h1 className="all-head text-center">
								Satisfied clients is our proof of our excellence!
							</h1>

						</div>

						<div className="carousel-inner career-block">
							<div className="d-flex align-items-center text-center flex-column custom-crousel">
								<h3>
									I am pleased to say that working with
									Codiste Pvt Ltd has been a positive
									experience for our community. The project is
									now complete, and the feedback we have
									received on the platform has been
									overwhelmingly positive. Throughout the
									project, Codiste maintained open
									communication lines, regularly updating us
									on progress and following the agreed
									timeline. They delivered an app with
									impressive functionalities and accepted
									every challenge we gave them. Overall, we
									are satisfied with the outcome of the
									project and would recommend Codiste for
									their expertise, professionalism, and
									commitment to delivering high-quality work.
								</h3>
								<div className="d-flex align-items-center flex-column">
									<img
										src="/assets/images/iCrowsel.png"
										className=" "
										alt="iCrowsel"
									/>
									<div className="my-3">
										<img
											className=""
											src="../assets/images/client-logos/DiveWallet Logo.png"
										/>
									</div>
									<h5>DiveWallet</h5>
									<p>CEO</p>
								</div>
							</div>
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
								<CaseStudyForm text="Contact Now" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default DivewalletPortfolio;
