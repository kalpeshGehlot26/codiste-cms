import { notFound } from "next/navigation";
// import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import Link from "next/link";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
// import { components } from "@/slices";

export default async function Page({ params }) {
  const client = createClient();
  const test = await client.getAllByType("blog");

  console.log(test);

  return (
    <div>
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec py-4">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-blog">Our Blog</h1>
                  <p className="all-p me-5 my-4">
                    Read our blogs for a comprehensive understanding of
                    resources from industry insights, trends & best practices to
                    expert advice on emerging technologies like Blockchain,
                    Metaverse, NFTs,Augmented reality,Virtual Reality and more.
                    <br />
                    Stay informed and up-to-date with our regular blog updates.
                  </p>
                  <a className="book-btn" href="#blogSection">
                    Explore More
                  </a>
                </div>
                <div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2">
                  <img
                    className="img-fluid"
                    alt="Blogs"
                    src="assets/images/blog_main.png"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
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
                        <Link
                          href={`/blog-v2/${blog?.uid}`}
                          className="blogfont-btn"
                        >
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
        <div className="bg-color py-5 mt-5">
          <div className="container container-fluid ">
            <div className="all-head text-center mb-lg-5 mb-0 mb-sm-0">
              Stuck with your idea?
            </div>
            <section>
              <div className="row  d-flex align-items-center">
                <div className="col-lg-6 col-md-12 needsec p-4">
                  <h2>
                    Connect with our experts with this lead form and bring your
                    tech idea to reality.
                  </h2>
                </div>
                <div className="col-lg-6 col-md-12 ">
                  <div className="need-block h-100">
                    <h2 className="">
                      How Can We <b>Help?</b>{" "}
                    </h2>
                    <CaseStudyForm text="Let's Discuss" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
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
