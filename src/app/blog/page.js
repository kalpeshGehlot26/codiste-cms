import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Posts from "../component/Posts/posts";

export const metadata = {
	title: "Stay informed on emerging technologies | Codiste",
	description:
		"Our blog provides comprehensive coverage of emerging technologies like Blockchain, Metaverse, NFTs, Augmented reality, Virtual Reality, AI, ML and more.",
};

const Blogs = () => {
	return (
		<div>
			<div className="bg-color">
				<div className="container container-fluid">
					<section>
						<div className="row firstsec ">
							<div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
									<h1 className="all-blog">Our Blog</h1>
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
									<a className="book-btn" href="#blogSection">
										Explore More
									</a>
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

			<div className="container py-5" id="blogSection">
				<div className=" d-flex align-items-center flex-column justify-content-center mb-4">
					<h1 className="all-blog">Blogs</h1>
				</div>
				<Posts />
			</div>

			<div className="bg-color py-5">
				<div className="container container-fluid ">
					<div className="all-head text-center mb-5">Stuck with your idea?</div>
					<section>
						<div className="row  d-flex align-items-center">
							<div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec p-5">
								<h1>Connect with our experts with this lead form and bring your tech idea to reality.</h1>

							</div>
							<div className="col-lg-6 col-md-12 ">
								<div className="need-block h-100">
									<h2 className="">
										How Can We <b>Help?</b>{" "}
									</h2>
									<CaseStudyForm text="Let's Discuss" />
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
