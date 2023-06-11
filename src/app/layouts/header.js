'use client'
import React, { useState } from "react";
import Link from 'next/link';
import "../../style.css";
import "../../external.css";

const Header = () => {

	// const [navShow, setNavShow] = useState("show")
	const defNavClose = () => {
		const navbarSupportedContent = document.getElementById('navbarSupportedContent')
		if (navbarSupportedContent.classList.contains("show")) {
			navbarSupportedContent.classList.remove("show")
		}
	}

	return (

		<nav className="navbar navbar-expand-lg navbar-light fixed-top navbarCustom">
			<div className="container px-0 header-width" style={{ maxWidth: "1800px" }}>
				<Link className="nav-link active me-auto ms-2" aria-current="page" href="/" >
					<img className="img-fluid" alt="codiste-logo" style={{ height: "60px" }} src="../../assets/images/logo.png" />
				</Link>

				<button className="navbar-toggler me-2 " type="button"
					data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse`} id="navbarSupportedContent">

					<ul
						className="navbar-nav my-2 my-lg-0 ms-auto align-items-center"

					>
						<li className="nav-item dropdown dropdown-sec">
							<Link

								className="nav-link dropdown-toggle"
								href="/services"
								id="navbarScrollingDropdown"
							>
								Services
							</Link>
							<ul
								className="dropdown-menu "
								aria-labelledby="navbarScrollingDropdown"
							>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/blockchain-development-company">
										Blockchain Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/metaverse-development-company">
										Metaverse Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/augmented-reality-development-company">
										AR /VR Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/nft-development-company">
										NFT Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/startup-development-company">
										Startup Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/artificial-intelligence-development-company">
										AI Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/machine-learning-development-company">
										Machine Learning Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/cryptocurrency-development-company">
										Cryptocurrency Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/web-development-company">
										Web Development Services
									</Link>
								</li>
								<li>
									<Link onClick={defNavClose} className="dropdown-item" href="/mobile-app-development-company">
										Mobile App Development Services
									</Link>
								</li>

							</ul>
						</li>
						<li className="nav-item">
							<Link onClick={defNavClose} className="nav-link" href="/codiste-portfolio">
								Portfolio
							</Link>
						</li>

						<li className="nav-item">
							<Link onClick={defNavClose} className="nav-link" href={"/blog"}>
								Blog
							</Link>
						</li>

						<li className="nav-item">
							<Link onClick={defNavClose} href="/contact" className="nav-link">Contact Us</Link>
						</li>
						<li className="nav-item me-2">
							<Link onClick={defNavClose} href="/book-a-call" className="btn header-btn" type="button">
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
