"use client";
import { usePathname } from 'next/navigation';

import React, { useEffect, useState } from "react";
import { getPostBySlug } from "../lib/lib";

const BlogContent = () => {

	const pathname = usePathname();
	const pathUrl = pathname.split("/");

	const [post, setPost] = useState(null);

	useEffect(() => {
		if (pathUrl) {
			const slug = pathUrl[1];
			getPostBySlug(slug)
				.then((data) => setPost(data))
				.catch((error) => console.error(error));
		}
	},[]);

	if (!post) {
		return <div>Loading...</div>;
	}

	const image = post._embedded['wp:featuredmedia']['0'].source_url;
	
	return (
		<div>
			<div className="blog-image" style={{zIndex: "0"}}>
				<img src={image} alt={post.title.rendered} />
			</div>
			<div className="blog-title text-center">
				<h1 style={{zIndex: "-1"}}>{post.title.rendered}</h1>
			</div>
			<div className="container mx-auto" style={{width: "100%", paddingRight: "15px", paddingLeft: "15px", marginRight: "auto", marginLeft: "auto",
				maxWidth: "1260px"}}>
				<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="mx-auto"/>
			</div>
		</div>

		
	);
};

export default BlogContent;