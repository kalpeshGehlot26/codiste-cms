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
			<div className="row g-4">
				{posts.length ? (
					posts?.map((post, index) => {
						const link = post.link.split("/");

						return (
							<div className="col-xl-3 col-lg-4 col-sm-6 " key={index}>
								<div className="position-relative">
									<img
										className="img-fluid rounded p-0 blog-img"
										alt=""
										src={
											post._embedded["wp:featuredmedia"]?.["0"]?.source_url
										}
									/>
									<div className="blogboxbg-new">
										<div className="blogfont-pos">
											<p>
												{
													post._embedded[
														"wp:term"
													][0][0]?.name
												}{" "}
												Development Service
											</p>
											<h5 className="mb-3">
												{post.title.rendered}
											</h5>
											<div>
												<Link
													href={link[3]}
													className="blogfont-btn"
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
						<div className="spin"></div>
					</div>
				)}
			</div>

			{totalPostCount > posts.length ? (
				<div className="d-flex align-items-center center justify-content-center mt-4">
					<button
						disabled={loading}
						className="book-btn"
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
