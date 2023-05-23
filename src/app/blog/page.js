import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Posts from "../component/Posts/posts";

const Blogs = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1">
									<h1 className="all-head">Our Blog</h1>
									<p className="all-p me-5 my-4">
										Read our blogs for a comprehensive
										understanding of resources from industry
										insights, trends & best practices to
										expert advice on emerging technologies
										like Blockchain, Metaverse,
										NFTs,Augmented reality,Virtual Reality
										and more.
										<br />
										Stay informed and up-to-date with our
										regular blog updates.
									</p>
									<button className="book-btn">
										Explore More
									</button>
								</div>
								<div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										className="img-fluid"
										alt="Blogs"
										src="assets/images/blog_main.png"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<ClientSlider />

			<div className="container py-5">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-4">
					<h1 className="all-head">Blogs</h1>
				</div>
				<Posts />
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid ">
					<section>
						<div className="row  d-flex align-items-center">
							<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec p-5">
								<h1>Stuck with your idea?</h1>
								<h2 className="">
									Connect with our experts with this lead form
									and bring your vision to reality.
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
		</div>
	);
};

export default Blogs;