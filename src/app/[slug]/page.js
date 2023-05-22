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
	}, []);

	if (!post) {
		return <div>Loading...</div>;
	}

	const image = post._embedded['wp:featuredmedia']['0'].source_url;

	return (
		<div className=''>

			<div className="blog-title text-center">
				<h1 style={{ zIndex: "-1" }}>{post.title.rendered}</h1>
				<div className='mb-3'>
					<div className=' d-flex align-items-center justify-content-center' >
						<div className='blog-icon d-flex align-items-center justify-content-center me-4'>
							<svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
								<path d="M5 12C4.71667 12 4.479 11.904 4.287 11.712C4.095 11.52 3.99933 11.2827 4 11C4 10.7167 4.096 10.479 4.288 10.287C4.48 10.095 4.71733 9.99933 5 10C5.28333 10 5.521 10.096 5.713 10.288C5.905 10.48 6.00067 10.7173 6 11C6 11.2833 5.904 11.521 5.712 11.713C5.52 11.905 5.28267 12.0007 5 12ZM9 12C8.71667 12 8.479 11.904 8.287 11.712C8.095 11.52 7.99933 11.2827 8 11C8 10.7167 8.096 10.479 8.288 10.287C8.48 10.095 8.71733 9.99933 9 10C9.28333 10 9.521 10.096 9.713 10.288C9.905 10.48 10.0007 10.7173 10 11C10 11.2833 9.904 11.521 9.712 11.713C9.52 11.905 9.28267 12.0007 9 12ZM13 12C12.7167 12 12.479 11.904 12.287 11.712C12.095 11.52 11.9993 11.2827 12 11C12 10.7167 12.096 10.479 12.288 10.287C12.48 10.095 12.7173 9.99933 13 10C13.2833 10 13.521 10.096 13.713 10.288C13.905 10.48 14.0007 10.7173 14 11C14 11.2833 13.904 11.521 13.712 11.713C13.52 11.905 13.2827 12.0007 13 12ZM0 20V2H3V0H5V2H13V0H15V2H18V20H0ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z" fill="black" />
							</svg>August 30, 2022
						</div>



						<div className='blog-icon d-flex align-items-center justify-content-center me-4'>
							<span><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
								<path d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H8L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2Z" fill="black" />
							</svg> Blockchain</span>
						</div>

						<div className='blog-icon d-flex align-items-center justify-content-center'>
							<svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="black" />
								<path d="M10.5 5H9V11L14.25 14.15L15 12.92L10.5 10.25V5Z" fill="black" />
							</svg>06 min read
						</div>
					</div>
				</div>
			</div>
			<div className="blog-image my-5 d-flex align-items-center" style={{ zIndex: "0" }}>
				<img className='container-width mx-auto' src={image} alt={post.title.rendered} />
			</div>
			<div className="container mx-auto container-width">
				<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="mx-auto" />
			</div>
		</div>


	);
};

export default BlogContent;