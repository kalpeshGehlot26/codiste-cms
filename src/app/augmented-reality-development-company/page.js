import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import arServiceBlogs from "../data/services/arServiceBlogs";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";

export const metadata = {
	title: "AR & VR Development Company | Codiste",
	description:
		"Using ARtoolkit, Google ARCore, Apple AR Kit, and Web3 apps, we deliver innovative and immersive virtual reality and AR development solutions for enterprises.",
};

const ARVRDevelopmentCompany = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid py-4">
					<section>
						<div className="row firstsec d-flex align-items-center">
							<div className="col-lg-6 col-sm-12 mb-5 mb-lg-0">
								<h1 className="all-head">
									AR/VR Development Company{" "}
								</h1>
								<p className="all-p me-5 mb-4 mt-3">
									We offer complete AR/VR development for
									enterprise-level platforms, avatars and more
									with leading technologies and frameworks
									like ARtoolkit, Google-ARCore, and Apple AR
									Kit to help you leverage Web3 applications
									and immersive technologies.
								</p>
								<Link href="/contact" className="book-btn">
									Contact Us
								</Link>
							</div>
							<div className="col-lg-6 col-sm-12 p-5 ">
								<img
									className="img-fluid d-flex align-items-center justify-content-center"
									style={{
										height: "450px",
										width: "auto",
										margin: "auto",
										padding: "20px",
									}}
									src="assets/images/main/AR_VR.png"
								/>
							</div>
						</div>
					</section>
				</div>
			</div>

			<ClientSlider />

			<div className="container container-fluid">
				<section>
					<div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
						<h1 className="all-head">
							Our AR/VR Development Services{" "}
						</h1>
						<p className="all-p text-center">
							We offer a wide range of ar development services
							with immersive & interactive experiences.
						</p>
					</div>
					<div className="row ">
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									AR/VR Games
								</h2>
								<p className="secondsec-p">
									Codiste develops innovative AR/VR games
									using the latest technologies and tools to
									provide an immersive gaming experience. Our
									team of expert ar game developers creates
									immersive and interactive games that engage
									users, enhancing their experience with
									captivating graphics and hyper-interactive
									features. They also ensure seamless
									performance and compatibility across
									multiple devices, ensuring the games are
									accessible to all users.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Virtual Tour Application
								</h2>
								<p className="secondsec-p">
									Codiste provides businesses with innovative
									virtual tour applications that allow users
									to explore and interact with a virtual
									environment. Using advanced 3d modeling and
									designing techniques and technologies, we
									design highly engaging 3D virtual tours that
									help users visualize and understand
									products, services, or physical spaces with
									3D visualization and mixed realities. We
									offer complete customization and
									personalization with seamless integration
									options, allowing your enterprise to create
									an immersive brand experience.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									AR Application
								</h2>
								<p className="secondsec-p">
									We use AR technology to create innovative
									web & mobile applications that enhance the
									user's interaction with augmented and mixed
									realities. We offer bespoke AR solutions
									customized to meet businesses and their
									customers. We have a dedicated expert-led
									team of AR developers who use interactive
									and immersive technologies to develop highly
									interactive and engaging AR applications
									that provide an unparalleled user
									experience.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Interactive Virtual Experiences
								</h2>
								<p className="secondsec-p">
									Codiste develops virtual 3D immersive
									experiences using advanced AR/VR
									technologies. We have a team of expert
									developers that creates engaging and
									informative virtual experiences that allow
									users to interact with and explore various
									products and services. We use the latest
									technologies and tools to develop highly
									responsive and dynamic virtual experiences
									that offer a unique and immersive user
									experience.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">WebAR</h2>
								<p className="secondsec-p">
									We offer WebAR development services to help
									businesses showcase their products and
									services using AR technology on their
									website and mobile applications with 3D
									modeling and augmented reality. We use the
									latest AR technologies and tools to create
									highly immersive and modular WebAR
									experiences that can be accessed from any
									device with a web browser. Our WebAR
									solutions cater to businesses to develop
									their brand & product user experience with
									augmented and mixed realities.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Mixed Reality Development
								</h2>
								<p className="secondsec-p">
									Codiste helps enterprises & businesses with
									mixed reality development services for
									innovative experiences that merge the
									physical and digital world realities. Our
									team uses advanced AR/VR technologies and
									techniques to develop 3D digital immersive
									mixed-reality experiences that allow users
									to interact with virtual objects in
									real-world environments. We ensure that our
									mixed reality solutions help businesses
									innovatively demonstrate and represent their
									products and services with emerging and
									rapidly growing AR/VR technologies.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">
							Why Choose Codiste for AR/VR development services?{" "}
						</h1>
						<p className="all-p text-center">
							Codiste is an enterprise-grade ar/vr development
							services provider that assists businesses in
							building innovation-led 3D ar experiences by
							leveraging a blend of multiple technologies. We have
							been the top choice of industry leaders and have
							helped more than X businesses harness the power of
							numerous realities and immersive experiences.
						</p>
					</div>

					<div className="row">
						<div className="col-6 col-md-4 text-center p-5 intsec-border">
							<img
								className="img-fluid mb-2"
								alt="Customized Development"
								src="assets/images/developer.png"
							/>
							<h2 className="secondsec-head text-center">
								Customized Development
							</h2>
							<p className="secondsec-p text-center">
								At Codiste, we understand that every business
								has unique requirements depending on the user
								demographics, and we provide customization with
								our 3D and AR/VR development solutions
								accordingly. Our expert developers work closely
								with our clients to identify their needs and
								create custom-built AR development solutions to
								provide a competitive edge with emerging
								technologies.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 intsec-border">
							<img
								className="img-fluid mb-2"
								alt="Blending Multiple Realities"
								src="assets/images/augmented-reality.png"
							/>
							<h2 className="secondsec-head text-center">
								Blending Multiple Realities
							</h2>
							<p className="secondsec-p text-center">
								Our team has experts who are specialized in
								creating mixed-reality experiences that merge
								the physical and digital worlds. Our AR
								developers use the latest AR/VR technologies and
								tools to create highly interactive and immersive
								experiences that allow users to interact with
								virtual objects in real-world environments.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 intsec-borderlast">
							<img
								className="img-fluid mb-2"
								alt="Seamless Deployment and Integration"
								src="assets/images/ar.png"
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
						<div className="col-6 col-md-4 text-center p-5 intsec-borderbelow">
							<img
								className="img-fluid mb-2"
								alt="Immersive User Experience"
								src="assets/images/3600-degrees.png"
							/>
							<h2 className="secondsec-head text-center">
								Immersive User Experience
							</h2>
							<p className="secondsec-p text-center">
								At Codiste, we create highly immersive 3D and
								AR/VR experiences that add value to your
								business. Our team uses advanced 3D technologies
								and tools to design interactive and engaging 3D
								user experiences that enhance user engagement
								and interaction with multiple realities.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 intsec-borderbelow">
							<img
								className="img-fluid mb-2"
								alt="Streamline Development Process"
								src="assets/images/supply-chain.png"
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
						<div className="col-6 col-md-4 text-center p-5 ">
							<img
								className="img-fluid mb-2"
								alt="Robust and Scalable Platforms"
								src="assets/images/robust.png"
							/>
							<h2 className="secondsec-head text-center">
								Robust and Scalable Platforms
							</h2>
							<p className="secondsec-p text-center">
								Our AR development team develops robust and
								scalable 3D and AR/VR platforms that can grow
								with our client's businesses without starting
								from scratch. We use the latest technologies and
								multiple realities to create platforms that can
								handle large traffic volumes and provide an
								exceptional user experience, ensuring long-term
								success for our clients.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv px-3">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-3">
					<p>
						Interested in developing an augmented reality solution
						for your audience?
					</p>
					<Link href="/book-a-call" className="book-btn">
						Let's talk
					</Link>
				</div>
			</div>

			<div className="bg-color py-5 mt-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h1 className="all-head">Technology Stack</h1>
							<p className="all-p me-5 text-center">
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
											className="img-fluid"
											src="assets/images/tech/APPGAMEKIT VR.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Apple arkit.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Ar Toolkit.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/BLENDER.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/CRY ENGINE.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Deep AR.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/GOOGLE-ARCORE.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/GOOGLE SKETCH UP.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/KUDAN.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/LIBGDX.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Maxst.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/tilt-brush.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/UNREAL ENGINE.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/VUFORIA.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Wikitude_Logo.png"
										/>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">FAQ</h1>
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
									satisfaction and brand loyalty.
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

			<div className="bg-color">
				<div className="container container-fluid py-5">
					<div className=" d-flex align-items-center flex-column justify-content-center">
						<h1 className="all-head">Case Study</h1>
						<p>
							Discover how we help our clients build AR/VR
							solutions for various businesses and sectors.
						</p>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12 p-5 d-flex align-items-center justify-content-center flex-column">
							<div className=" ">
								<h1 className="">
									A Complete, Comprehensive Real Estate
									Tokenize Solutions
								</h1>
								<p className="mt-4">
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
									Read More
								</Link>
							</div>
						</div>
						<div className="col-lg-6 col-sm-12 p-5 ">
							<img
								className="img-fluid d-flex align-items-center justify-content-center"
								style={{
									height: "450px",
									width: "auto",
									margin: "auto",
									padding: "20px",
								}}
								src="assets/images/case-bonfire/Bonfire.png"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head">Blog</h1>
					<p className="all-p text-center">
						Explore more about immersive technologies and AR/VR
						development with our blogs.{" "}
					</p>
				</div>
				<AllServiceBlogSlider items={arServiceBlogs} />
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 className="all-head">
								Their feedback displays our sheer commitment and
								expertise!
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

			<div className="container container-fluid py-5">
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
							<h1>Give life to your AR/VR vision with Us!</h1>
							<h2 className="">
								Fill out the form, and we will get back to you!
							</h2>
						</div>
						<div className="col-lg-6 col-md-12 ">
							<div className="need-block h-100">
								<h2 className="">
									How Can We <b>Help?</b>{" "}
								</h2>
								<CaseStudyForm />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ARVRDevelopmentCompany;
