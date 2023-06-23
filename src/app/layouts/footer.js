import Link from "next/link";
import React from "react";
import dynamic from 'next/dynamic';
import TawkChatBot from "../component/TawkChatBot";

const Clutch = dynamic(() => import("../component/ClutchReview"), {
	ssr: false,
});

const Footer = () => {
	return (
		<footer>
			<div className="container container-fluid py-5">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-0">
						<div className="footer-menu">
							<Link href="/">
								<img className="img-fluid" alt="codiste-logo" style={{ height: "60px" }} src="../../assets/images/logo.png" loading="lazy" />
							</Link>

							<div className="footer-menu-items">
								<p className="my-3">
									Codiste is a leading tech development services provider company, specializing in robust, scalable, and secure enterprise solutions in blockchain, metaverse, AR/VR, AI and other emerging technologies.
								</p>

								<Clutch />

								<div className="mt-md-5 mt-0">
									<h4>Get In Touch</h4>
									<ul className="p-0 ">
										<li><i className="fa-brands fa-facebook-f"></i>
											<img
												className="me-2"
												src="../../assets/images/email.png"
												alt="Email"
											/>
											<a href="mailto:manager@codiste.com">
												{" "}
												manager@codiste.com
											</a>
										</li>
										<li>
											<img
												className="me-2"
												src="../../assets/images/phone-call.png"
												alt="Phone-call"
											/>
											<a href="tel:+91 94290 05987">
												+91 94290 05987
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-0">
						<div className="footer-menu footer-top-mr">
							<h4>Services</h4>
							<div className="footer-menu-items mt-md-5 mt-0">
								<ul className="footer-listtext p-0">
									<li>
										<Link href="/blockchain-development-company">
											Blockchain Development Services
										</Link>
									</li>
									<li>
										<Link href="/metaverse-development-company">
											Metaverse Development Services
										</Link>
									</li>
									<li>
										<Link href="/augmented-reality-development-company">
											AR /VR Development Services
										</Link>
									</li>
									<li>
										<Link href="/nft-development-company">
											NFT Development Services
										</Link>
									</li>
									<li>
										<Link href="/startup-development-company">
											Startup Development Services
										</Link>
									</li>
									<li>
										<Link href="/artificial-intelligence-development-company">
											AI Development Services
										</Link>
									</li>
									<li>
										<Link href="/machine-learning-development-company">
											Machine Learning Development
											Services
										</Link>
									</li>
									<li>
										<Link href="/cryptocurrency-development-company">
											Cryptocurrency Development Services
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-0">
						<div className="footer-menu footer-top-mr">
							<h4>Quick Link</h4>
							<div className="footer-menu-items mt-md-5 mt-0">
								<ul className="footer-listtext p-0">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/codiste-portfolio">
											Portfolio
										</Link>
									</li>
									<li>
										<Link href="/blog">Blogs</Link>
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
							<div className="footer-menu-items mt-md-5 mt-0">
								<div className="d-flex mb-3">
									<img
										className="img-fluid me-2 "
										src="../../assets/images/india.png"
										alt="India Office"
										loading="lazy"
									/>
									<p className="mt-2">
										915, Ganesh Glory, S.G Highway,
										Ahmedabad, 382481
									</p>
								</div>
								<div className="d-flex">
									<img
										className="img-fluid me-2"
										src="../../assets/images/south-africa.png"
										alt="south-africa office"
										loading="lazy"
									/>
									<p className="mt-2">
										1 Galway Rd, Parkview, Jhb, South
										Africa, 2192
									</p>
								</div>
							</div>
							<ul className="footer-icon p-0 mt-4">
								<li>
									<a href="https://m.facebook.com/people/Codiste-Pvt-Ltd/100075937369150/" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="10" height="22" viewBox="0 0 10 22" fill="none">
											<path d="M9.29331 6.92815H6.12834V4.7075C6.12834 3.87353 6.645 3.6791 7.0089 3.6791C7.37197 3.6791 9.24239 3.6791 9.24239 3.6791V0.0128438L6.16642 0C2.75181 0 1.97475 2.73441 1.97475 4.48428V6.92815H0V10.706H1.97475C1.97475 15.5544 1.97475 21.3961 1.97475 21.3961H6.12834C6.12834 21.3961 6.12834 15.4968 6.12834 10.706H8.93107L9.29331 6.92815Z" fill="#9598A6" />
										</svg>
									</a>
								</li>
								<li>
									<a href="https://in.linkedin.com/company/codiste-pvt-ltd/" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
											<path d="M4.357 21.3952H0.0712891V6.1123H4.357V21.3952ZM20.0713 21.3952H15.7855V13.2311C15.7855 11.1037 15.077 10.0446 13.6727 10.0446C12.5598 10.0446 11.8541 10.6376 11.4998 11.8251C11.4998 13.7538 11.4998 21.3952 11.4998 21.3952H7.21413C7.21413 21.3952 7.27128 7.6406 7.21413 6.1123H10.597L10.8584 9.16889H10.947C11.8256 7.6406 13.2298 6.60441 15.1555 6.60441C16.6198 6.60441 17.8041 7.03998 18.7084 8.13423C19.6184 9.23002 20.0713 10.7002 20.0713 12.765V21.3952Z" fill="#9598A6" />
											<path d="M2.21428 4.58487C3.4372 4.58487 4.42856 3.55851 4.42856 2.29244C4.42856 1.02636 3.4372 0 2.21428 0C0.991368 0 0 1.02636 0 2.29244C0 3.55851 0.991368 4.58487 2.21428 4.58487Z" fill="#9598A6" />
										</svg>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/codistepvtltd" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
											<path d="M24.6106 2.53275C23.7058 2.96298 22.7322 3.25319 21.7105 3.38306C22.7537 2.715 23.5535 1.65679 23.9307 0.394423C22.955 1.01385 21.8749 1.46332 20.7244 1.70596C19.8037 0.656302 18.4913 0 17.039 0C14.2509 0 11.9903 2.41838 11.9903 5.40167C11.9903 5.82442 12.0348 6.23648 12.1212 6.6325C7.92476 6.40696 4.20393 4.25688 1.71354 0.988729C1.27891 1.78613 1.03012 2.71393 1.03012 3.70479C1.03012 5.57857 1.92137 7.23215 3.27622 8.20057C2.44892 8.17225 1.67008 7.92907 0.989159 7.5245C0.98866 7.54694 0.98866 7.56992 0.98866 7.59291C0.98866 10.2096 2.72918 12.3922 5.03922 12.8893C4.61558 13.0122 4.16946 13.0785 3.70885 13.0785C3.38312 13.0785 3.06689 13.0448 2.75866 12.9812C3.40161 15.127 5.26602 16.6892 7.47515 16.7325C5.74712 18.1814 3.57047 19.0451 1.20448 19.0451C0.797322 19.0451 0.395164 19.0194 0 18.9692C2.2351 20.5025 4.88884 21.3961 7.73992 21.3961C17.0275 21.3961 22.1057 13.1656 22.1057 6.02751C22.1057 5.79342 22.1012 5.55986 22.0917 5.32791C23.0779 4.56793 23.9342 3.61608 24.6106 2.53275Z" fill="#9598A6" />
										</svg>
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/@YourTechPartnerCodiste" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21" fill="none">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M4.37173 0.3891C2.0492 0.571566 0.29371 2.46013 0.18065 4.78707C0.0875001 6.7043 0 8.91053 0 10.4335C0 11.974 0.0895133 14.2134 0.18385 16.1457C0.296 18.4429 2.0113 20.3189 4.30147 20.5303C6.83663 20.7644 10.5047 21 15 21C19.4836 21 23.1443 20.7656 25.6787 20.5322C27.9778 20.3204 29.6965 18.4322 29.8071 16.1261C29.9047 14.0916 30 11.7637 30 10.4335C30 9.11767 29.9067 6.8253 29.8102 4.80653C29.6986 2.4706 27.9403 0.5703 25.6089 0.387567C23.1135 0.192 19.5142 0 15 0C10.4741 0 6.86787 0.193 4.37173 0.3891ZM12 5.981L19.7333 10.4335L12 14.8861V5.981Z" fill="#9598A6" />
										</svg>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/codistepvtltd/" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
											<path d="M10 0C7.28625 0 6.945 0.0133726 5.87875 0.0641883C4.8125 0.117679 4.08625 0.296871 3.45 0.561648C2.78262 0.830194 2.17811 1.25144 1.67875 1.79594C1.1701 2.33043 0.776384 2.97705 0.525 3.69083C0.2775 4.37015 0.10875 5.14844 0.06 6.2851C0.0125 7.42846 0 7.79219 0 10.6994C0 13.6039 0.0125 13.9676 0.06 15.1083C0.11 16.2477 0.2775 17.0246 0.525 17.7053C0.78125 18.4087 1.1225 19.0051 1.67875 19.6002C2.23375 20.1952 2.79125 20.5616 3.44875 20.8344C4.08625 21.0992 4.81125 21.2798 5.87625 21.3319C6.94375 21.3827 7.28375 21.3961 10 21.3961C12.7163 21.3961 13.055 21.3827 14.1225 21.3319C15.1863 21.2784 15.915 21.0992 16.5513 20.8344C17.2182 20.5658 17.8223 20.1445 18.3212 19.6002C18.8775 19.0051 19.2188 18.4087 19.475 17.7053C19.7213 17.0246 19.89 16.2477 19.94 15.1083C19.9875 13.9676 20 13.6039 20 10.698C20 7.79219 19.9875 7.42846 19.94 6.28644C19.89 5.14844 19.7213 4.37015 19.475 3.69083C19.2237 2.97703 18.8299 2.3304 18.3212 1.79594C17.822 1.25124 17.2175 0.829962 16.55 0.561648C15.9125 0.296871 15.185 0.116341 14.1213 0.0641883C13.0538 0.0133726 12.715 0 9.9975 0H10.0013H10ZM9.10375 1.92832H10.0013C12.6713 1.92832 12.9875 1.93768 14.0413 1.98984C15.0162 2.03664 15.5462 2.21182 15.8988 2.35758C16.365 2.55148 16.6987 2.78417 17.0487 3.1586C17.3988 3.53303 17.615 3.88874 17.7963 4.38887C17.9338 4.76464 18.0963 5.33164 18.14 6.3747C18.1887 7.50201 18.1987 7.84033 18.1987 10.6954C18.1987 13.5504 18.1887 13.8901 18.14 15.0174C18.0963 16.0604 17.9325 16.6261 17.7963 17.0032C17.6359 17.4677 17.38 17.8877 17.0475 18.2321C16.6975 18.6066 16.365 18.8379 15.8975 19.0318C15.5475 19.1789 15.0175 19.3528 14.0413 19.4009C12.9875 19.4517 12.6713 19.4638 10.0013 19.4638C7.33125 19.4638 7.01375 19.4517 5.96 19.4009C4.985 19.3528 4.45625 19.1789 4.10375 19.0318C3.66937 18.8606 3.27641 18.5873 2.95375 18.2321C2.62094 17.8872 2.36465 17.4668 2.20375 17.0019C2.0675 16.6261 1.90375 16.0591 1.86 15.016C1.8125 13.8887 1.8025 13.5504 1.8025 10.6927C1.8025 7.83632 1.8125 7.49933 1.86 6.37203C1.905 5.32897 2.0675 4.76197 2.205 4.38486C2.38625 3.88607 2.60375 3.52902 2.95375 3.15459C3.30375 2.78016 3.63625 2.54881 4.10375 2.35491C4.45625 2.20781 4.985 2.03397 5.96 1.98583C6.8825 1.94036 7.24 1.92699 9.10375 1.92565V1.92832ZM15.3387 3.7042C15.1812 3.7042 15.0251 3.73741 14.8795 3.80192C14.7339 3.86644 14.6017 3.961 14.4902 4.08021C14.3788 4.19941 14.2904 4.34094 14.2301 4.49669C14.1698 4.65244 14.1388 4.81938 14.1388 4.98797C14.1388 5.15655 14.1698 5.32349 14.2301 5.47924C14.2904 5.63499 14.3788 5.77652 14.4902 5.89572C14.6017 6.01493 14.7339 6.10949 14.8795 6.17401C15.0251 6.23853 15.1812 6.27173 15.3387 6.27173C15.657 6.27173 15.9622 6.13648 16.1873 5.89572C16.4123 5.65497 16.5387 5.32844 16.5387 4.98797C16.5387 4.64749 16.4123 4.32096 16.1873 4.08021C15.9622 3.83945 15.657 3.7042 15.3387 3.7042ZM10.0013 5.2046C9.32009 5.19323 8.64362 5.32694 8.01122 5.59794C7.37883 5.86894 6.80314 6.27183 6.31769 6.78313C5.83223 7.29443 5.4467 7.90394 5.18355 8.57617C4.9204 9.2484 4.78488 9.96992 4.78488 10.6987C4.78488 11.4275 4.9204 12.149 5.18355 12.8213C5.4467 13.4935 5.83223 14.103 6.31769 14.6143C6.80314 15.1256 7.37883 15.5285 8.01122 15.7995C8.64362 16.0705 9.32009 16.2042 10.0013 16.1928C11.3494 16.1703 12.6353 15.5816 13.5812 14.5537C14.5272 13.5258 15.0574 12.1412 15.0574 10.6987C15.0574 9.25626 14.5272 7.87164 13.5812 6.84374C12.6353 5.81584 11.3494 5.2271 10.0013 5.2046ZM10.0013 7.13159C10.8854 7.13159 11.7334 7.50734 12.3586 8.17618C12.9838 8.84502 13.335 9.75216 13.335 10.698C13.335 11.6439 12.9838 12.5511 12.3586 13.2199C11.7334 13.8888 10.8854 14.2645 10.0013 14.2645C9.11709 14.2645 8.26913 13.8888 7.64393 13.2199C7.01873 12.5511 6.6675 11.6439 6.6675 10.698C6.6675 9.75216 7.01873 8.84502 7.64393 8.17618C8.26913 7.50734 9.11709 7.13159 10.0013 7.13159Z" fill="#9598A6" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<TawkChatBot />
					<div className="footer-center">
						<p>
							© 2021-2023. All rights reserved by{" "}
							<Link href="/">Codiste</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
