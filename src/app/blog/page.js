import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Posts from "../component/Posts/posts";

const Blogs = () => {
	return (
		<div>
			<div class="bg-color">
				<div class="container container-fluid">
					<section>
						<div class="row firstsec ">
							<div class="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
								<div class="col-12 col-lg-5 order-2 order-lg-1">
									<h1 class="all-head">Our Blog</h1>
									<p class="all-p me-5 my-4">
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
									<button class="book-btn">
										Explore More
									</button>
								</div>
								<div class="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
									<img
										class="img-fluid"
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

			<div class="container py-5">
				<div class=" d-flex align-items-center flex-column justify-content-center mb-4">
					<h1 class="all-head">Blogs</h1>
				</div>
				<Posts />
			</div>

			<div class="bg-color py-5">
				<div class="container container-fluid ">
					<section>
						<div class="row  d-flex align-items-center">
							<div class="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec p-5">
								<h1>Stuck with your idea?</h1>
								<h2 class="">
									Connect with our experts with this lead form
									and bring your vision to reality.
								</h2>
							</div>
							<div class="col-lg-6 col-md-12 ">
								<div class="need-block h-100">
									<h2 class="">
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
