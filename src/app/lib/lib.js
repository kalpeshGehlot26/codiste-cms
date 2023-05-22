import axios from "axios";

export async function getPosts() {
    const response = await axios.get("https://codiste.com//wp-json/wp/v2/posts/?_embed&per_page=100");
    if(response && response.data && response.data.length > 0) {
        return response.data;
    }

    return null;
}

export async function getPostBySlug(slug) {
	const response = await axios.get(
		`https://codiste.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
	);
	if (response && response.data && response.data.length > 0) {
		return response.data[0];
	}

	return null;
}
