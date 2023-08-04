import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(req, res) {

    console.log("HERE", req)
    console.log("TEST",  req.nextUrl.searchParams.get('pagesNumbers'))
    
    // const _data = await req.json();
    
    const _page = req?.nextUrl?.searchParams.get('pagesNumbers')
    
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_API}/posts?_embed&per_page=8&page=${_page}&filter[orderby]=date&order=desc`, {
            headers: 'X-WP-Total'
        });
        if (response && response.data && response.data.length > 0) {
            const data =  {
                data: response.data,
                totalCount: response.headers['x-wp-total'],
                page: response.headers['x-wp-totalpages']
            };
            return NextResponse.json({ message: "Successful Response", data: data });
        }
        return null;

	} catch (err) {
		return NextResponse.json({ message: "Internal server error" });
	}
}