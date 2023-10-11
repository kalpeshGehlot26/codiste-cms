import { notFound } from "next/navigation";
// import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import Link from "next/link";
// import { components } from "@/slices";

export default async function Page({ params }) {
  const client = createClient();
  const test = await client.getAllByType("blog");

  console.log(test);

  return (
    <div
      className="container py-5 "
      id="blogSection"
      style={{ marginTop: "100px" }}
    >
      <div className=" d-flex align-items-center flex-column justify-content-center mb-4">
        <h2 className="all-blog text-center">Blogs</h2>
      </div>
      <div className="row g-4">
        {test?.map((blog, index) => {
          return (
            <div className="col-xl-3 col-lg-4 col-sm-6 " key={index}>
              <div className="position-relative">
                <img
                  className="img-fluid rounded p-0 blog-img"
                  alt="Development Service"
                  src={blog?.data?.img?.url}
                />
                <div className="blogboxbg-new">
                  <div className="blogfont-pos">
                    <p>{blog?.data?.title}</p>
                    <h5 className="mb-3"></h5>
                    <div>
                      <Link href={`/blog-v2/${blog?.uid}`} className="blogfont-btn">
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
    </div>
  );
}

// export async function generateMetadata({ params }) {
//   const client = createClient();
//   const page = await client
//     .getByUID("blog", params.uid)
//     .catch(() => notFound());

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }

// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType("blog");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
