import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import metaServiceBlogs from "../data/services/metaVerseServiceBlogs";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";

export const metadata = {
	title: "Enterprise-Grade Metaverse Development Company | Codiste",
	description:
		"Explore our metaverse development services and embark on a journey into the decentralized digital universe. Embrace the power of the Metaverse services now!!",
};

const MetaverseDevelopmentCompany = () => {
	return (
		<div>
			<div className="bg-color mainsec">
				<div className="container container-fluid">
					<section>
						<div className="row  d-flex align-items-center py-3">
							<div className="col-lg-6 col-sm-12  order-sm-2 order-lg-1">
								<h1 className="all-head">
									Enterprise-Grade Metaverse Development
									Company
								</h1>
								<p className="all-p">
									We are a metaverse development company that
									helps businesses and organizations access
									the decentralized Metaverse. We offer an
									immersive 3D virtual user experience by
									integrating with traditional website/mobile
									and stand-alone metaverse service
									applications built on secure, scalable, and
									reliable blockchain networks, APIs, and
									mixed realities. Our industrial metaverse
									development allows you to choose from a
									broad spectrum of blockchains for a
									personalized experience.
								</p>
								<Link href="/contact" className="book-btn">
									Let’s Talk
								</Link>
							</div>
							<div className="col-lg-6 col-sm-12 mb-5 mb-lg-0 order-sm-1 order-lg-2">
								<img
									className="img-fluid"
									src="assets/images/main/metaverse.png"
									alt=""
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
						<h1 className="all-head">Our Metaverse Services </h1>
						<p className="all-p text-center">
							Explore our customized metaverse solutions for a
							broad spectrum of businesses and enterprises.
						</p>
					</div>
					<div className="row ">
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Metaverse Avatar Development
								</h2>
								<p className="secondsec-p">
									We develop custom virtual 3D avatars for the
									metaverse and other immersive experiences
									like AR/VR games, animations, etc. We ensure
									that your business enhances user engagement
									with these avatars and backgrounds. Our
									experts-led team of 3D developers leverages
									3D modeling-rendering, artificial
									intelligence, extended realities, and other
									technologies to create stunning 3D virtual
									avatars that are visually appealing and
									fully functional within the metaverse and
									can also be integrated with other
									applications with seamless integration.{" "}
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Metaverse Virtual Meeting Solutions
								</h2>
								<p className="secondsec-p">
									Our metaverse development team offers
									metaverse and immersive experience-based
									virtual meeting solutions built on emerging
									technologies like Blockchain. These virtual
									meet platforms offer a streamlined immersive
									interaction experience for teams and
									individuals, eliminating physical world
									limitations and extended support to interact
									and connect with any organization employee
									across the globe. We leverage the latest
									technologies, including AR/VR, blockchain,
									AI, and the most crucial Blockchain, to
									create a customized virtual environment with
									robust security standards & checks to ensure
									that your organization's data stays secure.
								</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Three.JS 3D Animation Development
								</h2>
								<p className="secondsec-p">
									We build engaging 3D animation development
									for traditional and modern channels like
									Websites, mobile applications, and
									metaverses with the best 3D animation
									library Three.JS which is an
									industry-standard around the globe. Our team
									uses this powerful 3D animation library to
									create and integrate 3D animation to help
									your brand or enterprise boost the end-user
									experience and enhance engagement. We have a
									team of experienced individuals who can
									ensure a high-quality 3D animation creation
									that adds life to your immersive experience.{" "}
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 mb-3 h-100">
								<h2 className="secondsec-head mt-4">
									Metaverse Gallery development
								</h2>
								<p className="secondsec-p">
									We develop innovative new-age metaverse art
									and design galleries to help enterprises
									cater to the increased demand for a virtual
									experience in traditional art galleries and
									museums. Our Metaverse development services
									offer end-to-end development to ensure that
									what you see in Metaverse resembles the
									real-life experience, if not better. We
									utilize popular and reliable technologies
									like Augmented and virtual realities, 3D
									animations, blockchain, and extensive
									development to ensure a reliable and
									scalable end product.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Digital Twins and Simulations
								</h2>
								<p className="secondsec-p">
									We build custom digital twins and
									simulations in the metaverse to help your
									businesses improve operational efficiency,
									transparency, and a better track record of
									all the transactions happening in a
									gamified, virtually engaging manner. Our
									team of experts and developers uses modern
									technologies, including artificial
									intelligence and 3D animations, to create
									realistic simulations that precisely
									represent your business environment.
								</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Pixel Streaming
								</h2>
								<p className="secondsec-p">
									Our Metaverse development team offers
									innovative solutions for the extremely low
									latency required for a practical user
									experience. We use the industry’s best and
									most trusted pixel streaming technology to
									deliver high-quality, low-latency streaming
									to empower your metaverse ecosystem with a
									lag-free end-user experience. We have
									experts with hands-on experience in core
									technologies like AI, augmented & mixed
									realities, and newly built yet powerful
									blockchain to offer a seamless but safer and
									more robust content delivery experience
									using metaverse.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Unreal Engine Development
								</h2>
								<p className="secondsec-p">
									Our metaverse development services offer
									gaming and 3D content development for
									metaverse using the most trusted 3D
									animation and development platform, Unreal
									Engine. We have a team of industry experts
									and developers with hands-on experience
									building personalized and customized 3D
									content that offers an immersive user
									experience without compromising security.
									Our team of experts and developers who have
									created high-quality immersive ecosystems
									for education, advertising, and more offer
									an end-to-end metaverse development with
									Unreal Engine.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Unity Development
								</h2>
								<p className="secondsec-p">
									We provide real-time 3D AR development with
									Unity, the world’s most popular 3D
									development platform. Our Unity development
									team creates 3D immersive metaverse elements
									for metaverse that are a core part of your
									metaverse user experience using animations
									and simulations with industry-oriented
									personalized motions in 3D virtual
									animations for an interactive and customized
									experience.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Healthcare Metaverse Solutions
								</h2>
								<p className="secondsec-p">
									Our metaverse development services for
									healthcare caters to several mainstream
									problems in a traditional healthcare system.
									We build interactive 3D-powered digital
									healthcare systems that offer a completely
									remote virtual healthcare experience. We
									develop Personalized and customized
									metaverse solutions for the healthcare
									industry. Our metaverse developers use
									advanced metaverse development technologies
									for AR/VR and 3D immersive and realistic
									healthcare environments that can be used for
									training, patient education, and a
									full-fledged remote healthcare experience.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									3D Commerce with Metaverse
								</h2>
								<p className="secondsec-p">
									Our metaverse development company offers 3D
									immersive e-commerce platforms that allow
									you to trade like a traditional e-commerce
									platform that offers numerous products from
									lifestyle, garments, electronics, and much
									more. Our 3D commerce solutions offer
									digitally immersive shopping experiences for
									your customers using advanced technologies,
									including augmented, virtual, and mixed
									realities with blockchain, to create
									customized 3D commerce environments with
									optimum security.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Metaverse Gaming Platforms
								</h2>
								<p className="secondsec-p">
									We use top-of-the-line technologies and
									platforms for enterprise-grade full-fledged
									Metaverse gaming platform development. We
									create decentralized and immersive gaming
									platforms that offer your users a
									3D-powered, engaging gaming experience. We
									develop play2earn gaming platforms embedded
									with metaverse and virtual avatars for more
									personalized gaming and a new revenue
									stream. Our metaverse developers use the
									latest tools and technologies to create
									fully-immersive gaming environments that can
									be further customized to meet your needs.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
									Virtual Real-Estate Metaverse
								</h2>
								<p className="secondsec-p">
									We offer metaverse development for real
									estate businesses. Our virtual real estate
									services include building decentralized
									metaverse real estates that can be used as a
									conventional real estate investment or
									custom unique and immersive metaverse
									experiences that showcase your ongoing
									projects or properties to customers for
									brand awareness. Our developers use
									top-of-the-line advanced technologies,
									including blockchain, unity, 3D animations,
									and designing tools to create stunning
									virtual real estate environments.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3"></div>
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3">
								<div className="service-block p-4 h-100">
									<h2 className="secondsec-head mt-4">
										Metaverse Travel & Tourism Platforms
									</h2>
									<p className="secondsec-p">
										Our metaverse development company offers
										immersive and virtual 3D travel and
										touring experiences in the metaverse
										with our comprehensive metaverse
										development services. We create
										digitally customized travel and tourism
										platforms that provide an immersive and
										engaging experience from anywhere in the
										world. Our metaverse development team
										has expertise and experts to use
										emerging technologies, including
										augmented and virtual realities with
										blockchain and AI, to create AR/VR-based
										travel and tourism environments that can
										be customized and personalized according
										to business needs and user experiences.
									</p>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 col-sm-12 pb-3"></div>
						</div>
					</div>
				</section>
			</div>

			<div className="py-5">
				<div className="container container-fluid">
					<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
						<h1 className="all-head">
							Why Choose Codiste for Metaverse Services?
						</h1>
						<p className="all-p text-center">
							We are an emerging enterprise-grade metaverse
							solutions development company with dedicated teams
							with the right skills and experience in core
							metaverse technologies, including 3D animation,
							augmented & virtual reality, blockchain, and
							artificial intelligence, and several others.
						</p>
					</div>

					<div className="row">
						<div className="col-6 col-md-4 text-center p-5 intsec-border">
							<img
								className="img-fluid mb-2"
								alt=""
								src="assets/images/iSupport.png"
							/>
							<h2 className="secondsec-head text-center">
								End-to-End Development Support
							</h2>
							<p className="secondsec-p text-center">
								We provide complete end-to-end metaverse
								development support to our clients with the
								initial consultation and from product design and
								development to deployment. This ensures a smooth
								and seamless development process and timely
								delivery of your metaverse experience, making it
								easier for your enterprise to integrate
								metaverse.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 intsec-border">
							<img
								className="img-fluid mb-2"
								alt=""
								src="assets/images/personalized.png"
							/>
							<h2 className="secondsec-head text-center">
								Personalized Development
							</h2>
							<p className="secondsec-p text-center">
								Our metaverse development team creates custom
								solutions tailored to specific needs and
								preferences, ensuring a unique immersive
								3D-powered metaverse experience that helps you
								outshine the competition. We offer a
								personalized approach that enables businesses to
								improve and enhance their user experience with a
								highly engaging and immersive experience.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 intsec-borderlast">
							<img
								className="img-fluid mb-2"
								alt=""
								src="assets/images/360-degrees.png"
							/>
							<h2 className="secondsec-head text-center">
								3D Immersive Experience
							</h2>
							<p className="secondsec-p text-center">
								Industry experts back our expertise in a 3D
								immersive experience to help businesses with
								unmatched interaction and 3D animation
								integration into simple interfaces. We can
								create 3D experiences leading to higher user
								retention and engagement, increasing customer
								loyalty and revenue as Metaverse becomes
								popular.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 intsec-borderbelow">
							<img
								className="img-fluid mb-2"
								alt=""
								src="assets/images/vr-glasses.png"
							/>
							<h2 className="secondsec-head text-center">
								Virtual Avatars
							</h2>
							<p className="secondsec-p text-center">
								We develop virtual avatars that allow your brand
								to create a personalized appearance for its
								brand or product. Our team creates metaverse
								virtual avatars for a more personal and engaging
								user connection, resulting in increased brand
								awareness, customer loyalty, and brand advocacy.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 intsec-borderbelow">
							<img
								className="img-fluid mb-2"
								alt=""
								src="assets/images/decentralization.png"
							/>
							<h2 className="secondsec-head text-center">
								Decentralized Security
							</h2>
							<p className="secondsec-p text-center">
								Our metaverse development services ensure the
								security of the metaverse development with
								decentralized security measures and technologies
								crucial for protecting massive amounts of users'
								data and identity with the metaverse. With
								emerging and rapidly growing technologies like
								Blockchain, we help businesses build trust in
								the users, which is vital for digital businesses
								to thrive in the metaverse.
							</p>
						</div>
						<div className="col-6 col-md-4 text-center p-5 ">
							<img
								className="img-fluid mb-2"
								alt=""
								src="assets/images/autumn.png"
							/>
							<h2 className="secondsec-head text-center">
								Extensive Customization
							</h2>
							<p className="secondsec-p text-center">
								We offer our clientele extensive brand metaverse
								customization options, allowing them to utilize
								the immersive 3D virtual experience in catering
								to specific user needs and requirements. Our
								metaverse development services provides seamless
								integration of the metaverse into your existing
								operations, leading to increased brand
								efficiency and productivity.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="blackdiv">
				<div className=" container container-fluid d-flex align-items-center justify-content-between py-5">
					<p>
						Level up your CX with a seamless Metaverse integration
						with Us!{" "}
					</p>
					<Link href="/book-a-call" className="book-btn">
						Book a Call
					</Link>
				</div>
			</div>

			<div className="bg-color py-5 my-5">
				<div className="container container-fluid py-5">
					<section>
						<div className=" d-flex align-items-center flex-column justify-content-center">
							<h1 className="all-head">Technology Stack</h1>
							<p className="all-p me-5 mb-5 text-center">
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
											src="assets/images/tech/Binance_Logo.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Corda.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/ethereum.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/fantom.png"
										/>
									</li>

									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/polygon.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/tron logo.png"
										/>
									</li>
									<li>
										<img
											className="img-fluid"
											src="assets/images/tech/Solana.png"
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
									What is the metaverse, and how can it
									benefit my business?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									The metaverse is a virtual world that allows
									users to interact with each other and
									replicates the real-world environment in a
									3D virtual & digital space. There are
									numerous benefits that the metaverse poses
									to your business, including a modernistic
									channel to engage with customers, employees,
									or any individual with a metaverse presence
									in a more immersive and interactive manner.
									Moreover, it can facilitate remote work and
									enhance collaboration opportunities for
									businesses to gain rapid growth.
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
									How can a metaverse help my company enhance
									its customer experience?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									A metaverse application platform can enhance
									your CX by offering a more immersive and
									engaging way to interact with your brand in
									multiple ways. For instance, you can build a
									virtual e-commerce store where customers can
									browse, purchase products, and realistically
									attend virtual events by sitting at home.
									Thus, increasing your brand engagement,
									customer retention, and increased sales
									frequency.
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
									How can I monetize a metaverse platform for
									my business?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Several ways to monetize a metaverse
									platform include virtual commerce,
									advertising, events, and subscriptions. In
									Virtual business, you can allow users to buy
									and sell goods and services within the
									metaverse digitally, like the e-commerce
									giant Walmart. In Advertisement, brands can
									place ads in your metaverse, targeting users
									better with the help of advancement insights
									on users’ interests and behaviors. You can
									also build a metaverse virtual auditorium to
									host virtual events, such as concerts,
									exhibitions, and conferences, and can
									generate revenue through ticket sales and
									sponsorships.
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
									Can you help me integrate my existing
									software with a Metaverse solution?
								</button>
							</h2>
							<div
								id="flush-collapsefour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfour"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									We can help you integrate your existing
									business channels and platforms with a
									metaverse application with various software
									and media, including CRM, ERP, e-commerce,
									and custom APIs & plugins.
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
									How long does developing a custom metaverse
									solution for my business take?
								</button>
							</h2>
							<div
								id="flush-collapsefive"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingfive"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									The time it takes to develop a custom
									metaverse solution depends on several
									factors, such as the project's complexity,
									the features and functionality required, and
									the level of customization or personalized
									touch needed. Typically, a custom metaverse
									can take a decent time to develop, depending
									on the scope and scale of the project.
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
							Read more and understand how our successful
							deployments have helped enterprises.
						</p>
					</div>
					<div className="row ">
						<div className="col-md-6 col-sm-12 p-5 d-flex align-items-center justify-content-center flex-column">
							<div className="d-flex flex-column align-items-center justify-content-center ">
								<h1 className="">
									DiveWallet <br /> Your next-gen crypto asset
									manager
								</h1>
								<p className="mt-4">
									As Blockchain experts, Codiste develops a
									highly-secured crypto wallet - ‘Divewallet’
									that supports well known EVM-based
									blockchains such as Ethereum, Binance,
									Polygon, and Solana.
								</p>
							</div>

							<div className="mt-4">
								<Link
									href="/portfolio/divewallet"
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
								src="assets/images/diwallet-case/Dive Wallet.png"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-5">
					<h1 className="all-head">Blog</h1>
					<p className="all-p text-center">
						Our blogs for the best news and resources on metaverse
						development.
					</p>
				</div>
				<AllServiceBlogSlider items={metaServiceBlogs} />
			</div>

			<div class="bg-color py-5">
				<div class="container container-fluid">
					<section>
						<div class=" d-flex align-items-center flex-column justify-content-center mb-5">
							<h1 class="all-head">What Our Clients Say</h1>
							<p class="all-p me-5 text-center">
								Explore our previous work and metaverse
								development feedback from our valuable customers
							</p>
						</div>

						<div
							id="carouselExampleDark"
							class="carousel carousel-dark slide carousel-box"
							data-bs-ride="carousel"
						>
							<div class="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to="0"
									class="active"
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
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Their ability to adapt to changes in
											our requirements while focusing on
											the deliverables was
											impressive.Codiste pvt ltd delivered
											a well-written code, making the
											platform highly performant. They
											excellently managed the
											collaboration and constantly
											communicated through Slack,
											WhatsApp, and email. Overall, they
											fostered a positive engagement by
											being responsive and accessible even
											during weekends.
										</h3>

										<div class="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												class="img-fluid"
												alt="iCrowsel"
											/>

											<div>
												<img
													class="img-fluid my-4 client-logo"
													alt="Holygrails"
													src="assets/images/client-logos/Holygrails.png"
												/>
											</div>
											<h5>Holygrails</h5>
											<p>
												Founder <br />
												Abu Dhabi, United Arab Emirates
											</p>
										</div>
									</div>
								</div>
								<div class="carousel-item">
									<div class="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											They communicate clearly and outline
											the product roadmap for us. It has
											been very easy to work with them.
											Made us profitaable on NFT
											Marketplace and which made amazing
											journey.
										</h3>

										<div class="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												class="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													class="img-fluid my-4 client-logo"
													alt="Ninza"
													src="assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png"
												/>
											</div>
											<h5>Ninza NFT</h5>
											<p>CoFounder</p>
										</div>
									</div>
								</div>
								<div class="carousel-item">
									<div class="d-flex align-items-center text-center flex-column custom-crousel">
										<h3>
											Codiste pvt ltd delivered the
											project within the given timeline
											and budget. Their communication and
											collaboration were outstanding using
											Slack, Lucidhart, and Miro. The team
											was reliable, well-organized, and
											proactive.
										</h3>

										<div class="d-flex align-items-center flex-column custom-crousel">
											<img
												src="assets/images/iCrowsel.png"
												class="img-fluid"
												alt="iCrowsel"
											/>
											<div>
												<img
													class="img-fluid my-4 client-logo"
													alt="Medizen"
													src="assets/images/client-logos/Medizen.png"
												/>
											</div>
											<h5>Medizen App</h5>
											<p>
												CEO
												<br />
												Johannesburg, South Africa
											</p>
										</div>
									</div>
								</div>
							</div>
							<button
								class="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="prev"
							>
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button
								class="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="next"
							>
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					</section>
				</div>
			</div>

			<div className="container container-fluid py-5">
				<section>
					<div className="row  d-flex align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
							<h1>
								Want to leverage Metaverse for your business?
							</h1>
							<h2 className="">
								{" "}
								Let us know your details in the form. <br />
								We will contact you hereafter.
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

export default MetaverseDevelopmentCompany;
