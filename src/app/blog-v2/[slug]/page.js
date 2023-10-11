import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText, SliceZone } from "@prismicio/react";

export default async function BlogDetail({ params }) {
  const client = createClient();

  const blog = await client.getByUID("blog", params?.slug);

  console.log(blog.data.slices);
  return (
    <div className="container mt-5" style={{ marginTop: "200px" }}>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-12">
          <h1 className="display-4 text-center mt-5">{blog?.data?.title}</h1>
          <div className="d-flex justify-content-center mt-3">
            <div className="mr-3">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span className="ml-2">October 09, 2023</span>
            </div>
            <div className="mr-3">
              <span className="badge badge-primary">Blockchain</span>
            </div>
            <div className="mr-3">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span className="ml-2">13 min read</span>
            </div>
            <div>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
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
            <div
              className=""
              style={{ backgroundColor: "#fff !important" }}
            >
              <PrismicRichText field={blog.data.content} />
              <p className="card-text">
                <small className="text-muted">Published on Jan 1, 2023</small>
              </p>
            </div>
          </div>

          <SliceZone slices={blog.data.slices} components={components} />

          {/* Author Section */}
          <div className="d-flex mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Author Avatar"
              className="rounded-circle mr-3"
            />
            <div>
              <h6 className="mb-0">John Doe</h6>
              <p className="text-muted small">
                A passionate blogger and tech enthusiast.
              </p>
            </div>
          </div>

          {/* Comments Section */}
          {/* <div className="mb-4">
                <h6>Comments:</h6>
                <div className="border rounded p-3 mb-2">
                <strong>Mike:</strong> Great article! Thanks for sharing.
                </div>
                <div className="border rounded p-3">
                <strong>Jane:</strong> This helped me understand the topic better.
                Thank you!
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
