import { getPostBySlug } from "../lib/lib";
import BlogContent from "./BlogComponent";


export async function generateMetadata({ params, searchParams }, parent) {
	const slug = params?.slug
	const baseURL = `https://www.codiste.com/${slug}`;
	const post = await getPostBySlug(slug)
   
	return {
		title: post?.yoast_head_json?.og_title,
		description: post?.yoast_head_json?.og_description,
		openGraph: {
			title: post?.yoast_head_json?.og_title,
			description: post?.yoast_head_json?.og_description,
			images: post?.yoast_head_json?.og_image[0]?.url,
			url: baseURL
		},
	}
}

export default function Page({ params, searchParams }) {
	return <BlogContent params={params} />	
}