"use client";
import { getPosts } from "@/app/lib/lib";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Posts = () => {
	const [posts, setPosts] = useState(null);
	const [postCount, setPostCount] = useState(8);
	const [totalPostCount, setTotalPostCount] = useState(null);

	useEffect(() => {
		getPosts()
			.then((data) => setPosts(data))
			.catch((error) => console.error(error));
	}, []);

	useEffect(() => {
		setTotalPostCount(posts?.length);
	}, [posts]);


	console.log(posts);
	return (
		<div>
			<div class="row g-4">
				{posts?.map((post, index) => {
					if (postCount < index + 1) return;
					const link = post.link.split("/")

					return (
						<div class="col-lg-3 col-md-2 col-12" key={index}>
							<div class="position-relative">
								<img
									class="img-fluid rounded p-0 blog-img"
									alt=""
									src={post._embedded['wp:featuredmedia']['0'].source_url}
								/>
								<div class="blogboxbg-new">
									<div class="blogfont-pos">
										<p>{post._embedded['wp:term'][0][0].name}</p>
										<h5 class="mb-3">
											{post.title.rendered}
										</h5>
										<div>
											<Link href={link[3]} class="blogfont-btn">
												Read More
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{totalPostCount > postCount ? (
				<div class="d-flex align-items-center center justify-content-center mt-4">
					<button class="book-btn"
						onClick={() =>
							setPostCount((prevState) => prevState + 3)
						}>
						Explore More
					</button>
				</div>
			) : null}

		</div>
	);
};

export default Posts;