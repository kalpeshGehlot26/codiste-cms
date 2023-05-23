"use client";
import { getPosts } from "@/app/lib/lib";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [totalPostCount, setTotalPostCount] = useState(null);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const getBlogs = async () => {
		setLoading(true);
		getPosts(page)
			.then((data) => {
				setPosts((prevState) => [...prevState, ...data.data]);
				setTotalPostCount(data.totalCount);
			})
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		getBlogs();
	}, [page]);

	return (
		<div>
			<div class="row g-4">
				{posts.length ? (
					posts?.map((post, index) => {
						const link = post.link.split("/");

						return (
							<div class="col-lg-3 col-md-2 col-12" key={index}>
								<div class="position-relative">
									<img
										class="img-fluid rounded p-0 blog-img"
										alt=""
										src={
											post._embedded["wp:featuredmedia"][
												"0"
											].source_url
										}
									/>
									<div class="blogboxbg-new">
										<div class="blogfont-pos">
											<p>
												{
													post._embedded[
														"wp:term"
													][0][0].name
												}{" "}
												Development Service
											</p>
											<h5 class="mb-3">
												{post.title.rendered}
											</h5>
											<div>
												<Link
													href={link[3]}
													class="blogfont-btn"
												>
													Read More
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<div class="spin"></div>
					</div>
				)}
			</div>

			{totalPostCount > posts.length ? (
				<div class="d-flex align-items-center center justify-content-center mt-4">
					<button
						disabled={loading}
						class="book-btn"
						onClick={() => setPage((prevState) => prevState + 1)}
					>
						{loading ? "Loading ..." : "Explore More"}
					</button>
				</div>
			) : null}
		</div>
	);
};

export default Posts;
