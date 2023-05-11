import React from "react";

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
				<div
					className="collapse navbar-collapse headerbg"
					id="navbarScroll"
				>
					<a
						className="nav-link active me-auto ms-2"
						aria-current="page"
						href="#"
					>
						<img style={{height: "60px" }} src="assets/images/logo.png" />
					</a>

					<form className="d-flex">
						<ul
							className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll"
							style={{"--bs-scroll-height": "100px"}}
						>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarScrollingDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Services
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarScrollingDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Metaverse Enterprise Solution
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Blockchain Development Company
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Machine Learning
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Web Development
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Mobile App Development
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Nft and Crypto Development Company
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Startup Development
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Portfolio
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Blog
								</a>
							</li>
							<li className="nav-item me-4">
								<a className="nav-link" href="#">
									Contact us
								</a>
							</li>
							<li className="nav-item me-2">
								<button className="btn header-btn" type="submit">
									Book a Call
								</button>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Header;
