"use client";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { getPostsByCategory } from "@/app/lib/lib";
import Link from "next/link";

const AllServiceBlogSlider = ({ limit, category }) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBlogs = async () => {
        setLoading(true);
        getPostsByCategory(limit, category)
            .then((data) => {
                setPosts((prevState) => [...prevState, ...data.data]);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getBlogs();
    }, [limit, category]);

    return (
        <Splide
            hasTrack={false}
            options={{
                type: 'loop',
                drag: 'free',
                pagination: true,
                autoplay: true,
                interval: 2000,
                perPage: 4,
                arrows: false,
                autoScroll: {
                    speed: 2,
                },
                breakpoints: {

                    1000: {
                        perPage: 3,
                    },
                    800: {
                        perPage: 2,
                    },
                    500: {
                        perPage: 1,
                    }
                }
            }}
            className="slide-pagination">
            <SplideTrack>
                {posts.length ?
                    (
                        posts?.map((post, index) => {
                            const link = post.link.split("/");
                            const image = "/assets/images/default-blog-image.png";
                            return (
                                <SplideSlide className="splide__slide p-2" key={index}>
                                    <div className="position-relative bloghight-set">
                                        <img className="img-fluid rounded p-0"
                                            alt={post.title.rendered}
                                            src={post._embedded["wp:featuredmedia"]?.["0"].code ? image : post._embedded["wp:featuredmedia"]?.["0"]?.source_url}
                                        />
                                        <div className="blogboxbg">
                                            <div className="blogfont-pos">
                                                <p>{post._embedded["wp:term"][0][0]?.name}{" "}</p>
                                                <h5>{post.title.rendered}</h5>
                                                <Link href={link[3]} className="blogfont-btn mt-2">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            );
                        })
                    ) : (
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <div className="spin"></div>
                        </div>
                    )
                }
            </SplideTrack>
        </Splide>
    );
}

export default AllServiceBlogSlider