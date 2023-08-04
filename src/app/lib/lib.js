import axios from "axios";

export async function getPosts(page) {
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_API}/posts?_embed&per_page=8&page=${page}&filter[orderby]=date&order=desc`, {
    //     headers: 'X-WP-Total'
    // });
    // if (response && response.data && response.data.length > 0) {
    //     return {
    //         data: response.data,
    //         totalCount: response.headers['x-wp-total'],
    //         page: response.headers['x-wp-totalpages']
    //     };
    // }

    // const data = { page: page }
    // const response = await axios.post("/api/getPosts", data, {
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
	// })

    const response = await fetch(`/api/getPosts?pagesNumbers=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cache: 'force-cache',
          revalidate: 60, //3600
          'Cache-Control': 'public, max-age=3600'
        },
    });
  
    const _response = await response?.json();

    if(_response && _response?.data) {
        return _response?.data
    }
    
    return null;
}

export async function getPostBySlug(slug) {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_API}/posts?_embed&slug=${slug}`);
    if (response && response.data && response.data.length > 0) {
        return response.data[0];
    }
    return null;
}

export async function getPostsByCategory(limit, id) {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_API}/posts?_embed&per_page=${limit}&categories=${id}&filter[orderby]=date&order=desc`, {
        headers: 'X-WP-Total'
    });
    if (response && response.data && response.data.length > 0) {
        return {
            data: response.data,
            totalCount: response.headers['x-wp-total'],
            page: response.headers['x-wp-totalpages']
        };
    }
    return null;
}