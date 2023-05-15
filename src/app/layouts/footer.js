import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="container container-fluid py-5">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="footer-menu">
							<img src="assets/images/logo.png" />
							<div className="footer-menu-items">
								<p className="my-3">
									Being in our third year since inception we
									have come a long way, our core focus and
									values no matter what the tech solution are
								</p>

								<div className="mt-5">
									<h4>Get In Touch</h4>
									<ul className="p-0 ">
										<li>
											<img className="me-2" src="assets/images/email.png" />
											<a href="mailto:manager@codiste.com"> Manager@codiste.com</a>
										</li>
										<li>
											<img className="me-2" src="assets/images/phone-call.png" />
											<a href="tel:+91 94290 05987">+91 94290 05987</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="footer-menu footer-top-mr">
							<h4>Services</h4>
							<div className="footer-menu-items mt-5">
								<ul className="footer-listtext p-0">
									<li>
										<Link href="/metaverse-development-company">Metaverse Enterprise Solution</Link>
									</li>
									<li>
										<Link href="/blockchain-development-company">Blockchain Development</Link>
									</li>
									<li>
										<Link href="/machine-learning-development-company"> Machine Learning</Link>
									</li>
									<li>
										<Link href="/web-development-company"> Web Development</Link>
									</li>
									<li>
										<Link href="/mobile-app-development-company"> Mobile App Development</Link>
									</li>
									<li>
										<Link href="/nft-development-company"> Nft and Crypto Development</Link>
									</li>
									<li>
										<Link href="/startup-development-company"> Startup Development</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="footer-menu footer-top-mr">
							<h4>Quick Link</h4>
							<div className="footer-menu-items mt-5">
								<ul className="footer-listtext p-0">
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="#">Portfolio</Link>
									</li>
									<li>
										<Link href="#">Blogs</Link>
									</li>
									<li>
										<Link href="#">Case Study</Link>
									</li>
									<li>
										<Link href="#">Testimonials</Link>
									</li>
									<li>
										<Link href="/career">Career</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="footer-menu footer-top-mgr">
							<h4>Location</h4>
							<div className="footer-menu-items mt-5">
								<div className="d-flex mb-3">
									<img className="img-fluid me-2 " src="assets/images/india.png" />
									<p className="mt-2">
										915, Ganesh Glory, S.G Highway,
										Ahmedabad, 382481
									</p>
								</div>
								<div className="d-flex">
									<img className="img-fluid me-2" src="assets/images/south-africa.png" />
									<p className="mt-2">
										1 Galway Rd, Parkview, Jhb, South
										Africa, 2192
									</p>
								</div>
							</div>
							<ul className="footer-icon p-0 mt-4">
								<li>
									<a>
										<img src="assets/images/iFacebook.png" />
									</a>
								</li>
								<li>
									<a>
										<img src="assets/images/iInsta.png" />
									</a>
								</li>
								<li>
									<a>
										<img src="assets/images/iTwitter.png" />
									</a>
								</li>
								<li>
									<a>
										<img src="assets/images/iLinkdin.png" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-center">
						<p>© 2021-2023. All rights reserved by <Link href="/">codiste</Link></p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;