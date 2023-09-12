import React from "react";
import CaseStudyForm from "../../component/caseStudyForm/caseStudyForm";

export const metadata = {
  title: "Content Writer | Job Opening | Codiste",
  description: "Join our team as a Technical Content Writer and become a vital contributor to our content creation efforts.",
  alternates: {
    canonical: 'https://www.codiste.com/career/content-writer',
  }
};

const ContentWriter = () => {

  return (
    <div>
      <div className="bg-color">
        <div className="container container-fluid py-5 firstsec">
          <div className="row">
            <div className="col-xl-9 col-md-8 col-sm-12">
              <div style={{ border: "1px solid black", height: "100vh", overflowY: "scroll", background: "#fff" }} className="p-4">
                <div className=" d-flex align-items-center flex-column justify-content-center mt-3">
                  <h1 className="all-blog text-center">
                    Technical Content Writer<br />(3+ year)
                  </h1>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                  <h2>Job Description</h2>
                  <h3 className="mt-5"><u>Job Summary</u></h3>
                  <p className="secondsec-p">Join our team as a Technical Content Writer and become a vital contributor to our content creation efforts. This position demands a profound comprehension of technology and the proficiency to convey intricate concepts in a lucid and captivating manner. If you are prepared to thrive in the realm of technical content, we encourage you to apply now!</p>
                </div>
                <div>
                  <h3 className="mt-5 text-center"><u>Require Skills</u></h3>
                  <ul className="secondsec-p">
                    <li>Strong command of written English.</li>
                    <li>Technical writing expertise.</li>
                    <li>Proficiency in researching and understanding complex technical topics.</li>
                    <li>Ability to translate technical jargon into accessible content.</li>
                    <li>Familiarity with content management systems (CMS) and SEO best practices.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-center mt-5"><u>Key Responsibilities</u></h3>
                  <ul>
                    <li>
                      <p className="secondsec-p">Strong understanding of Blockchain, AI, ML, and related technologies.
                        Produce high-quality technical content, including articles, blog posts, whitepapers, and documentation.
                      </p>
                    </li>
                    <li>
                      <p className="secondsec-p">Collaborate with subject matter experts to gather information and insights.</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Research and understand complex technical topics to create accurate and engaging content.</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Translate technical information into clear and accessible content for various audiences.</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Ensure content adheres to SEO best practices to maximize online visibility.</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Edit and proofread content to maintain high standards of quality and accuracy.</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Stay up-to-date with industry trends and incorporate relevant topics into content.</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Maintain consistency and style across all written materials.</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Assist in the development of content strategies and editorial calendars.</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-center mt-5"><u>Employee Benefits</u></h3>
                  <ul>
                    <li>
                      <p className="secondsec-p">Flexible work schedule</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Rapid skill acquisition & training</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Involvement in emerging tech areas like Blockchain, AI, and Metaverse</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Equal growth opportunities</p>
                    </li>
                    <li>
                      <p className="secondsec-p">18 Paid Leave</p>
                    </li>
                    <li>
                      <p className="secondsec-p">5 days working</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Comprehensive technical training covering coding to architecture</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Direct client engagement on a global scale</p>
                    </li>
                    <li>
                      <p className="secondsec-p">Annual salary enhancements</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-12 mt-md-0 mt-5">
              <div style={{ border: "1px solid black", height: "100vh", overflowY: "scroll", background: "#fff" }} className="p-4">
                <div>
                  <ol style={{ color: "#717173", fontSize: "22px" }}>
                    <li>
                      <div>
                        <h3 className="secondsec-head ai-custom"><a href="https://www.codiste.com/career/full-stack-developer">Full Stack Developer</a></h3>
                        <p className="secondsec-p">
                          No of vacancy : 1<br />
                          Experience: 3+ years
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3 className="secondsec-head ai-custom"><a href="https://www.codiste.com/career/content-writer">Content Writer</a></h3>
                        <p className="secondsec-p">
                          No of vacancy : 1<br />
                          Experience: 3+ years
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3 className="secondsec-head ai-custom"><a href="https://www.codiste.com/career/bde">Business Development Executive</a></h3>
                        <p className="secondsec-p">
                          No of vacancy : 1<br />
                          Experience: 2+ years
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container container-fluid py-5" id="apply-now">
          <h2 className="text-center all-head mb-4">Apply Now for Content writer</h2>
          <section>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-8 col-md-12 ">
                <div className="need-block h-100">
                  <h2 className="">
                    Apply for your dream job
                  </h2>
                  <CaseStudyForm text="Apply Now" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContentWriter;
