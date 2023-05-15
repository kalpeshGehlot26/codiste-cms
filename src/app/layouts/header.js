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
						<img style={{height: "60px" }} src="assets/images/logo.png" />
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
										<Link className="dropdown-item" href="#">
											Metaverse Enterprise Solution
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Blockchain Development Company
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Machine Learning
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Web Development
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Mobile App Development
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Nft and Crypto Development Company
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Startup Development
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="#">
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
								<Link href="" className="btn header-btn" type="button">
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
