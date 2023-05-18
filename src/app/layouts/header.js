import React from "react";
import Link from 'next/link';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top navbarCustom">
			<div className="container px-0 header-width">
				<Link className="nav-link active me-auto ms-2" aria-current="page" href="/" >
					<img style={{ height: "60px" }} src="../../assets/images/logo.png" />
				</Link>

				<button
					className="navbar-toggler me-2"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarScroll">

					<ul
						className="navbar-nav my-2 my-lg-0 ms-auto align-items-center"

					>
						<li className="nav-item dropdown dropdown-sec">
							<Link
								className="nav-link dropdown-toggle"
								href="/services"
								id="navbarScrollingDropdown"
								// role="button"
								// data-bs-toggle="dropdown"
								// aria-expanded="false"
							>
								Services
							</Link>
							<ul
								className="dropdown-menu "
								aria-labelledby="navbarScrollingDropdown"
							>
								<li>
									<Link className="dropdown-item" href="/blockchain-development-company">
										Blockchain Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="/metaverse-development-company">
										Metaverse Development Services 
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="augmented-reality-development-company">
										AR /VR Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="/nft-development-company">
										NFT Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="/startup-development-company">
										Startup Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="artificial-intelligence-development-company">
										AI Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="/machine-learning-development-company">
										Machine Learning Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="/cryptocurrency-development-company">
										Cryptocurrency Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="/web-development-company">
										Web Development Services
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="/mobile-app-development-company">
										Mobile App Development Services
									</Link>
								</li>
								
							</ul>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/codiste-portfolio">
								Portfolio
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" href="#">
								Blog
							</Link>
						</li>

						<li className="nav-item">
							<Link href="/contact" className="nav-link">Contact Us</Link>
						</li>
						<li className="nav-item me-2">
							<Link href="/book-a-call" className="btn header-btn" type="button">
								Book a Call
							</Link>
						</li>
					</ul>

				</div>
			</div>
		</nav>
	);
};

export default Header;
