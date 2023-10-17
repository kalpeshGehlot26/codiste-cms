import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { LinkedinShareButton, TwitterShareButton } from "react-share";

const formatDate = (dateStr) => {
  const dateObj = new Date(dateStr);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${
    monthNames[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};

export default async function BlogDetail({ params }) {
  const client = createClient();
  const blog = await client.getByUID("blog", params?.slug);

  return (
    <div className="container mt-5" style={{ marginTop: "200px" }}>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-12">
          <h1 className="display-4 text-center mt-5">{blog?.data?.title}</h1>
          <div className="d-flex justify-content-center mt-3">
            <div
              className="mr-3"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span className="ml-2">
                {formatDate(blog?.first_publication_date)}
              </span>
            </div>
            <div
              className="mr-3"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span className="ml-2">{blog?.data?.category}</span>
            </div>
            <div
              className="mr-3"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span className="ml-2">{blog?.data?.readTime}</span>
            </div>
            <div>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
              {/* <div className="blog-icon d-flex align-items-center justify-content-center me-4">
                <TwitterShareButton url={baseURL}>
                  <img src="assets/images/twitterNew.png" style={{ height: "22px" }} />
                </TwitterShareButton>
              </div>
              <div className="blog-icon d-flex align-items-center justify-content-center me-4">
                <LinkedinShareButton url={baseURL}>
                  <img src="assets/images/linkedin.png" style={{ height: "27px" }} />
                </LinkedinShareButton>

              </div> */}
          </div>
          <div
            className="mt-5"
            style={{ backgroundColor: "#fff !important", border: "none" }}
          >
            <img
              src={blog?.data?.img?.url}
              alt="Blog Image"
              className="card-img-top"
              style={{ width: "100%", height: "500px" }}
            />
            <div className="" style={{ backgroundColor: "#fff !important" }}>
              <PrismicRichText field={blog.data.content} />
              <p className="card-text">
                <small className="text-muted">Published on Jan 1, 2023</small>
              </p>
            </div>
          </div>

          <SliceZone slices={blog?.data?.slices} components={components} />
        </div>
      </div>
      <div className="bg-color py-5 mt-5">
        <div className="container container-fluid ">
          <section>
            <div className="all-head text-center mb-lg-5 mb-0">
              Stuck with your idea?
            </div>
            <div className="row  d-flex align-items-center">
              <div className="col-lg-6 col-md-12 mb-lg-0 needsec p-4">
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
                  <CaseStudyForm text="Discuss your Project" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
