import React from "react";
import Link from 'next/link';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-0">
			<div className="container-fluid px-0">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse headerbg" id="navbarScroll">
					<Link className="nav-link active me-auto ms-2" aria-current="page" href="/" >
						<img style={{height: "60px" }} src="../../assets/images/logo.png" />
					</Link>

					<form className="d-flex">
						<ul
							className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll"
							style={{"--bs-scroll-height": "100px"}}
						>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									href="/services"
									id="navbarScrollingDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Services
								</Link>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarScrollingDropdown"
								>
									<li>
										<Link className="dropdown-item" href="/metaverse-development-company">
											Metaverse Enterprise Development Service
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/blockchain-development-company">
											Blockchain Development Development Service
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/machine-learning-development-company">
											Machine Learning Development Service
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/web-development-company">
											Web Development Development Service
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/mobile-app-development-company">
											Mobile App Development Service
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/nft-development-company">
											NFT Development Service
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/nft-development-company">
											Crypto Development Service
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="/startup-development-company">
											Startup Development Service
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
							
							<li className="nav-item me-4">
								<Link href="/contact" className="nav-link">Contact Us</Link>;
							</li>
							<li className="nav-item me-2">
								<Link href="/book-a-call" className="btn header-btn" type="button">
									Book a Call
								</Link>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Header;
