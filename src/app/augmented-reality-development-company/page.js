import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import ARVRList from "../data/services/service-items/ARVR";
import jsonData from "../data/schema";


export const metadata = {
	canonical: "https://www.codiste.com/augmented-reality-development-company",
	title: "AR & VR Development Company | Codiste",
	description: "Using ARtoolkit, Google ARCore, Apple AR Kit, and Web3 apps, we deliver innovative and immersive virtual reality and AR development solutions for enterprises.",
	images: "https://www.codiste.com/assets/images/main/AR_VR.png",
	openGraph: {
		title: "AR & VR Development Company | Codiste",
		description: "Using ARtoolkit, Google ARCore, Apple AR Kit, and Web3 apps, we deliver innovative and immersive virtual reality and AR development solutions for enterprises.",
		images: "https://www.codiste.com/assets/images/main/AR_VR.png",
		url: 'https://www.codiste.com/augmented-reality-development-company'
	},
	alternates: {
		canonical: 'https://www.codiste.com/augmented-reality-development-company',
	}
};

const limit = 3
const category = 55

const ARVRDevelopmentCompany = () => {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.ARVRService) }}
			/>
			<div className="bg-color" >
				<div className="container container-fluid">
					<section >
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
									<h1 className="all-head">AR/VR Development Company</h1>
									<p className="all-p me-5 my-4">We offer complete AR/VR development for enterprise-level platforms, avatars and more with leading technologies and frameworks like ARtoolkit, Google-ARCore, and Apple AR Kit to help you leverage Web3 applications and immersive technologies.
									</p>
									<Link href="/contact" className="book-btn">Contact Us</Link>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/main/AR_VR.png" alt="AR /VR Development service by Codiste" /></div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<ClientSlider />

			<div className="container container-fluid py-5" >
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h2 className="all-head text-center">
							Our AR/VR Development Services{" "}
						</h2>
					</div>
					<ServiceInnerItems serviceItems={ARVRList} />
				</section>
			</div>

			<div className="py-5 bg-color" >
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head text-center">
							Why Choose Codiste for AR/VR development services?{" "}
						</h2>
					</div>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-1" >
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Customized Development"
								src="assets/images/Service-AR/Customized Development.png"
							/>
							<h2 className="secondsec-head text-center">
								Customized Development
							</h2>
							<p className="secondsec-p text-center">
								we understand that every business
								has unique requirements depending on the user
								demographics, and we provide customization with
								our 3D and AR/VR development solutions
								accordingly.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-2" >
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Blending Multiple Realities"
								src="assets/images/Service-AR/augmented-reality.png"
							/>
							<h2 className="secondsec-head text-center">
								Blending Multiple Realities
							</h2>
							<p className="secondsec-p text-center">
								Our AR
								developers use the latest AR/VR technologies and
								tools to create highly interactive and immersive
								experiences that allow users to interact with
								virtual objects in real-world environments.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-3" >
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Seamless Deployment and Integration"
								src="assets/images/Service-AR/ar.png"
							/>
							<h2 className="secondsec-head text-center">
								Seamless Deployment and Integration
							</h2>
							<p className="secondsec-p text-center">
								Codiste ensures that our 3D and AR/VR solutions
								are seamlessly deployed and integrated with your
								existing systems. Our expert developers use
								agile methodologies to deliver high-quality
								solutions on time with utmost efficiency.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-4" >
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Immersive User Experience"
								src="assets/images/Service-AR/3600-degrees.png"
							/>
							<h2 className="secondsec-head text-center">
								Immersive User Experience
							</h2>
							<p className="secondsec-p text-center">
								we create highly immersive 3D and
								AR/VR experiences that add value to your
								business. Our team uses advanced 3D technologies
								and tools to design interactive and engaging 3D
								user experiences that enhance user engagement
								and interaction with multiple realities.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5 Crosssec-5" >
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Streamline Development Process"
								src="assets/images/Service-AR/supply-chain.png"
							/>
							<h2 className="secondsec-head text-center">
								Streamline Development Process
							</h2>
							<p className="secondsec-p text-center">
								Codiste streamlines the development process of
								3D and AR/VR using agile methodologies and the
								latest technologies. Our team of AR developers
								ensures the development process is efficient and
								effective, delivering high-quality solutions on
								time and within budget.
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 text-center p-5" >
							<img
								className="img-fluid mb-2"
								loading="lazy"
								alt="Robust and Scalable Platforms"
								src="assets/images/Service-AR/robust.png"
							/>
							<h2 className="secondsec-head text-center">
								Robust and Scalable Platforms
							</h2>
							<p className="secondsec-p text-center">
								We utilize advanced technologies to develop scalable 3D and AR/VR platforms. Our solutions handle high traffic volumes and provide exceptional user experiences, ensuring long-term success for our clients.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3" >
				<div className="container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
					<p>
						Interested in developing an augmented reality solution
						for your audience?
					</p>
					<Link href="/book-a-call" className="book-btn">
						Let's talk
					</Link>
				</div>
			</div>

			<div className="py-5" >
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h2 className="all-blog text-center">Technology Stack</h2>
							<p className="all-p  text-center">
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
											className="img-fluid" loading="lazy" alt="APPGAMEKIT"
											src="assets/images/tech/APPGAMEKIT VR.png"
										/>
										<p>APPGAMEKIT VR</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Apple"
											src="assets/images/tech/Apple arkit.png"
										/>
										<p>APPLE ARKIT</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Ar"
											src="assets/images/tech/Ar Toolkit.png"
										/>
										<p>ARTOOLKIT</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt=""
											src="assets/images/tech/BLENDER.png"
										/>
										<p>BLENDER</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="CRY"
											src="assets/images/tech/CRY ENGINE.png"
										/>
										<p>CRY ENGINE</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Deep"
											src="assets/images/tech/Deep AR.png"
										/>
										<p>DEEP AR</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="GOOGLE"
											src="assets/images/tech/GOOGLE-ARCORE.png"
										/>
										<p>GOOGLE-ARCORE</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="SKETCH"
											src="assets/images/tech/GOOGLE SKETCH UP.png"
										/>
										<p>GOOGLE SKETCH UP</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="KUDAN"
											src="assets/images/tech/KUDAN.png"
										/>
										<p>KUDAN</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="LIBGDX"
											src="assets/images/tech/LIBGDX.png"
										/>
										<p>LIBGDX</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Maxst"
											src="assets/images/tech/Maxst.png"
										/>
										<p>MAXST</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="tilt"
											src="assets/images/tech/tilt-brush.png"
										/>
										<p>TILT BRUSH</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="UNREAL"
											src="assets/images/tech/UNREAL ENGINE.png"
										/>
										<p>UNREAL ENGINE</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="VUFORIA"
											src="assets/images/tech/VUFORIA.png"
										/>
										<p>VUFORIA</p>
									</li>
									<li>
										<img
											className="img-fluid" loading="lazy" alt="Wikitude_Logo"
											src="assets/images/tech/Wikitude_Logo.png"
										/>
										<p>WIKITUDE</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="py-5 bg-color" >
				<div className="container container-fluid">
					<div className="d-flex align-items-center flex-column justify-content-center mb-5">
						<h2 className="all-head">Case Study</h2>
					</div>
					<div className="row d-flex align-items-center justify-content-between case-sec">
						<div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
							<div className=" ">
								<h2 className="">
									Bonfire
								</h2>
								<p className="all-p">
									A Fractional Real Estate Investment Marketplace.<br />
									Codiste embraces technology, strategy, and
									design Bonfire platform where users can
									invest through crypto, view their
									investments and list the properties.
								</p>
							</div>
							<div className="mt-4">
								<Link
									href="/portfolio/bonfire"
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
								src="assets/images/case-bonfire/Bonfire.png"
								alt="BonFire - Bonfire Real-Estate Fractionalized Marketplace"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="py-5" >
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
									What is AR, and how is it different from VR?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									AR (Augmented Reality) is a technology that
									overlays virtual objects in the real world.
									At the same time, VR (Virtual Reality) is a
									fully immersive experience that transports
									the user to a completely virtual
									environment.
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
									How can businesses use AR/VR technologies to
									enhance their customer experience?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									AR/VR technologies can enhance customer
									experience by providing interactive and
									immersive experiences that engage customers
									and allow them to interact with products
									uniquely. This leads to increased customer
									satisfaction and brand lo yalty.
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
									What are the benefits of using AR/VR
									technologies in education and training?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									AR/VR technologies can be used in education
									and training to provide realistic
									simulations of real-world scenarios,
									improving knowledge retention and allowing
									learners to practice skills in a safe and
									controlled environment.
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
									What are the different types of AR/VR
									devices available in the market?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									AR/VR devices come in different forms, such
									as head-mounted displays, smartphones, and
									tablets, which use a combination of sensors,
									cameras, and displays to create an immersive
									experience
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
									How can businesses integrate AR/VR
									technologies into their existing systems?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Businesses can integrate AR/VR technologies
									into their existing systems by working with
									experienced developers who can provide
									solutions that seamlessly integrate with
									their current plans and workflows.
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
									What are the different applications of mixed
									reality?
								</button>
							</h2>
							<div
								id="flush-collapsesix"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingsix"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Mixed reality (MR) combines AR and VR that
									blends virtual and real-world objects,
									allowing users to interact with both. MR has
									numerous applications in the gaming,
									education, and healthcare industries.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2
								className="accordion-header"
								id="flush-headingseven"
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseseven"
									aria-expanded="false"
									aria-controls="flush-collapseseven"
								>
									How can AR/VR technologies be used in
									architecture and construction?
								</button>
							</h2>
							<div
								id="flush-collapseseven"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingseven"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									AR/VR technologies can be used in
									architecture and construction to create
									realistic 3D models of buildings and
									simulate how they will look in real-world
									environments. This can lead to improved
									design accuracy and reduced construction
									costs.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>



			{/* <div className="container container-fluid py-5" >
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h2 className="all-blog">Blogs</h2>
					<p className="all-p text-center">
						Explore more about immersive technologies and AR/VR
						development with our blogs.{" "}
					</p>
				</div>
				<AllServiceBlogSlider limit={limit} category={category} />
				<div className="d-flex align-items-center justify-content-center mt-5">
					<Link href="/blog" className="book-btn mt-3">Read more</Link>
				</div>
			</div> */}

			<div className="bg-color py-5" >
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h2 className="all-head text-center">
								Their feedback displays our sheer commitment and
								expertise!
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
													alt="White"
													src="assets/images/client-logos/White Hat DAO.png"
													loading="lazy"
												/>
											</div>
											<h5>White Hat DAO</h5>
											<p>
												CEO
												<br />
												Sydney, Australia
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
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
													alt="MoonTrust"
													src="assets/images/client-logos/MoonTrust.png"
													loading="lazy"
												/>
											</div>
											<h5>Cryptography Company</h5>
											<p>
												Founder
												<br />
												Fort Lauderdale, Florida
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
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
													alt="Danketsu"
													src="assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png"
													loading="lazy"
												/>
											</div>
											<h5>Ninza NFT</h5>
											<p>
												CoFounder
												<br />
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

			<div className="container container-fluid py-5" >
				<h2 className="all-head text-center mb-lg-5 mb-0">Get Ahold of Us!</h2>
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 p-4 mb-lg-0 needsec p-4">
							<h2>Give life to your AR/VR vision with Us!<br />Fill Out the form Now!</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<CaseStudyForm text="Discuss your Project" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ARVRDevelopmentCompany;
