import axios from "axios";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    // console.log(req);
    const _data = await req.json();
    // console.log(_data);
    // // return false;

    // // return false;
	try {
        const page = 1;
        const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_API}/posts?_embed&per_page=8&page=${_data?.page}&filter[orderby]=date&order=desc`, {
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


        return NextResponse.json({ message: "Successful Response", data: {
            data: response.data,
            totalCount: response.headers['x-wp-total'],
            page: response.headers['x-wp-totalpages']
        } });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Internal server error" });
	}
}