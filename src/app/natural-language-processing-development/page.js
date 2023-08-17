import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import NLPDevlopment from "../data/services/service-items/NLPDevelopment";
import jsonData from "../data/schema";
import MLindustries from "../component/service/MLindustries";


export const metadata = {
  title: "Natural Language Processing Services | ML | Codiste",
  description: "Our Natural Language Processing Services can enhance your applications with advanced ML language algorithms understanding to transform your text into action.",
  images: "https://www.codiste.com/assets/images/Service-machine/NLP_Development/NLP Development.webp",
  openGraph: {
    title: "Natural Language Processing Services | ML | Codiste",
    description: "Our Natural Language Processing Services can enhance your applications with advanced ML language algorithms understanding to transform your text into action.",
    images: "https://www.codiste.com/assets/images/Service-machine/NLP_Development/NLP Development.webp",
    url: 'https://www.codiste.com/natural-language-processing-development/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/natural-language-processing-development',
  }
};
const limit = 3;
const category = 56;
const NLPDevelopment = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonData.NLPDevelopment),
        }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">
                    Natural Language Processing Services
                  </h1>
                  <p className="all-p ">
                    Codiste has made incredibly significant progress in comprehending human languages and behavior using its expertise in AI-driven NLP services. Hire the best NLP developers on demand from our exclusive worldwide network, professionally suited to meet your most pressing company demands.
                  </p>
                  <Link href="/contact" className="book-btn">
                    Connect With Experts
                  </Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    alt="Machine Learning"
                    src="assets/images/Service-machine/NLP_Development/NLP Development.webp"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ClientSlider />

      <div className="container container-fluid">
        <section>
          <div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
            <h2 className="all-head text-center">
              Our Natural Language Processing Service Offerings
            </h2>
          </div>
          <ServiceInnerItems serviceItems={NLPDevlopment} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Codiste for Natural Language Processing Services?
            </h2>
            <p className="secondsec-p text-center">
              Codiste helps businesses across startups to enterprises explore the benefits of conversational intelligence that natural language processing services offer.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="newservice-box h-100">
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/NLP_Development/AI Expertise.png"
                  />
                </div>
                <h3 className="">AI Expertise</h3>
                <p className="secondsec-p">
                  We are the perfect collaborator for the most challenging projects because of our Artificial Intelligence, and competence in developing and implementing AI/ML, Deep Learning, and chatbot solutions. We translate words into useful information using their in-depth knowledge of innovative technology, algorithms, and frameworks.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="newservice-box h-100">
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/NLP_Development/Our Flexible Approach.png"
                  />
                </div>
                <h3>Our Flexible Approach</h3>
                <p className="secondsec-p">
                  We only suggest the top tools and solutions for your specific requirements pertaining to our agility and vendor-neutral methodology. Whether you're a startup trying to establish a name for yourself or an organization trying to improve customer interactions, our strategy easily adapts to match your aims.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="newservice-box h-100">
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/NLP_Development/Prodigious R&D.png"
                  />
                </div>
                <h3>Prodigious R&D</h3>
                <p className="secondsec-p">
                  We may test the newest technology in our internal R&D lab and create prototypes depending on important insights so we are able to anticipate your difficulties.  We remain at the forefront of NLP developments by putting a strong emphasis on research and development, ensuring that you always have access to the most up-to-date technologies.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="newservice-box h-100">
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/NLP_Development/Exceptional Value-Delivery.png"
                  />
                </div>
                <h3>Exceptional Value-Delivery</h3>
                <p className="secondsec-p">
                  We start adding value right away, providing early feedback and guaranteeing complete openness on the work, resources, and technology required to realize your vision. We are committed to offering solutions that advance your company while also resolving issues.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="newservice-box h-100">
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/NLP_Development/Cross-Industry Capability.png"
                  />
                </div>

                <h3>Cross-Industry Capability</h3>
                <p className="secondsec-p">
                  Our team can quickly and in huge volumes produce data for AI training spanning all sectors by analysing data from various sources. No matter the industry, we are aware of the particular opportunities and obstacles you face, therefore our NLP solutions will be highly effective in your particular field.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="newservice-box h-100">
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/NLP_Development/Competitive Pricing.png"
                  />
                </div>
                <h3>Competitive Pricing</h3>
                <p className="secondsec-p">
                  We guarantee that endeavors are finished on time and under budget since we are professionals in team leadership and constant learning. We make sure that you may access excellent natural language processing programs without going over budget thanks to our cheap pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Our Machine Learning Consulting Approach
            </h2>
            <p className="secondsec-p text-center">
              We assist organizations in a seamless journey of
              utilizing AI-driven insights, from defining clear
              business goals to implementing and monitoring ML
              models.
            </p>
          </div>

          <div className="row g-5 mx-0">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">1</div>
                </div>
                <h3 className="">Business Goal</h3>
                <p className="secondsec-p">
                  Understanding the desired result,
                  establishing key performance indicators
                  (KPIs), and coordinating the ML strategy.
                  With the larger corporate objectives are
                  necessary for this.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">2</div>
                </div>
                <h3 className="">ML Problem Framing</h3>
                <p className="secondsec-p">
                  Convert the business objective into a
                  clear-cut machine learning challenge. In
                  this phase, the type of ML task (such as
                  classification, regression, clustering) is
                  determined, the relevant evaluation metrics
                  are chosen.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">3</div>
                </div>
                <h3 className="">Data Processing</h3>
                <p className="secondsec-p">
                  {" "}
                  Preparing and preprocessing the data will
                  assure its accuracy, completeness, and
                  suitability for ML algorithms. This covers
                  operations like feature engineering,
                  addressing missing values, data cleansing,
                  and converting data into a format for model
                  training.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">4</div>
                </div>
                <h3 className="">Model development</h3>
                <p className="secondsec-p">
                  Using the cleaned-up data, create, train,
                  and fine-tune the machine learning model.
                  Choosing the right algorithms, optimizing
                  hyperparameters, and assessing model
                  performance using methods like
                  cross-validation comes in this stage.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">5</div>
                </div>
                <h3 className="">Deployment</h3>
                <p className="secondsec-p">
                  To make the trained ML model available for
                  real-time predictions, integrate it into a
                  production environment or application. This
                  entails creating a deployment architecture,
                  managing model versioning, and setting up
                  data pipelines for seamless integration.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">6</div>
                </div>
                <h3 className="">Monitoring</h3>
                <p className="secondsec-p mb-0">
                  Monitoring important metrics, identifying
                  and dealing with model or concept drift, and
                  putting in place safeguards to guarantee the
                  model's dependability and efficiency over
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Our Approach Towards NLP
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="nlpservice-box">
                <div className="nlp-backimage1">
                  <h3 className="text-center">Identifying the issue</h3>
                  <p className="secondsec-p text-center">
                    We will pinpoint the crucial areas where AI can add the greatest value while collaborating directly with your business. Meetings with all parties involved are required in order to create a plan for action.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="nlpservice-box">
                <div className="nlp-backimage2">
                  <h3 className="text-center">Data exploration and concept testing</h3>
                  <p className="secondsec-p text-center">
                    We'll assess whether you have the business information required to develop useful machine learning models. We locate new data collection frameworks for your business as necessary.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="nlpservice-box">
                <div className="nlp-backimage3">
                  <h3 className="text-center">Draught of the deliverables</h3>
                  <p className="secondsec-p text-center">
                    We'll discuss with you potential AI use cases for your business based on our meetings and data analysis. To arrive at an understanding of the desired result, we shall cooperate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="nlpservice-box">
                <div className="nlp-backimage4">
                  <h3 className="text-center">Model creation</h3>
                  <p className="secondsec-p text-center">
                    To discover the optimum solution, we will construct and apply a variety of machine learning models to your company data. We shall therefore create algorithms that achieve the desired result.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="nlpservice-box">
                <div className="nlp-backimage5">
                  <h3 className="text-center">Application launch</h3>
                  <p className="secondsec-p text-center">
                    We incorporate a front-end product or API into the machine learning model to make it easy to use and accessible to the ultimate user.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="nlpservice-box">
                <div className="nlp-backimage6">
                  <h3 className="text-center">Maintenance</h3>
                  <p className="secondsec-p text-center">
                    Every system may need maintenance from time to time, and we are delighted to help clients with that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Want to redefine customer experience with AI-driven NLP services?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Hire NLP Developer
          </Link>
        </div>
      </div>

      <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center">
              <h2 className="all-blog text-center">
                Technology Stack
              </h2>
              <p className="all-p  text-center mb-4">
                Our experienced team of engineers pack your
                Machine Learning Consulting with the best
                technologies ensuring that enable fault-free
                operations and be ready for transforming and
                scaling business.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="tech-style">
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="pytorch"
                      src="assets/images/tech/pytorch.png"
                    />
                    <p className="text-uppercase">
                      pytorch
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Scikit_learn"
                      src="assets/images/tech/Scikit_learn.png"
                    />
                    <p className="text-uppercase">
                      Scikit Learn
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Apache_Spark_"
                      src="assets/images/tech/Apache_Spark_.png"
                    />
                    <p className="text-uppercase">
                      Apache Spark
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Pandas"
                      src="assets/images/tech/Pandas.svg"
                    />
                    <p className="text-uppercase">Pandas</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="github"
                      src="assets/images/tech/github.png"
                    />
                    <p className="text-uppercase">github</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="bitbucket"
                      src="assets/images/tech/bitbucket.png"
                    />
                    <p className="text-uppercase">
                      bitbucket
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="git"
                      src="assets/images/tech/git.png"
                    />
                    <p className="text-uppercase">git</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="kubernetes"
                      src="assets/images/tech/kubernetes.png"
                    />
                    <p className="text-uppercase">
                      kubernetes
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="docker"
                      src="assets/images/tech/docker.png"
                    />
                    <p className="text-uppercase">docker</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Power-BI"
                      src="assets/images/tech/Power-BI.svg"
                    />
                    <p className="text-uppercase">
                      Power-BI
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Tableau"
                      src="assets/images/tech/Tableau.svg"
                    />
                    <p className="text-uppercase">
                      Tableau
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Matplotlib"
                      src="assets/images/tech/Matplotlib.svg"
                    />
                    <p className="text-uppercase">
                      Matplotlib
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Airflow"
                      src="assets/images/tech/Airflow.png"
                    />
                    <p className="text-uppercase">
                      Apache airflow
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="sagemaker"
                      src="assets/images/tech/sagemaker.svg"
                    />
                    <p className="text-uppercase">
                      sagemaker
                    </p>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="Autokeras"
                      src="assets/images/tech/Autokeras.png"
                    />
                    <p className="text-uppercase">
                      Autokeras
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="">
        <div className="container container-fluid py-5">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head">Industries We Serve</h2>
              <p className="all-p text-center">
                Being a trusted Machine Learning Consultant, we
                have worked with a wide range of sectors on a
                global scale and have been a part of their
                growth stories.
              </p>
            </div>
            <MLindustries />
          </section>
        </div>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Our Engagement Models
            </h2>
          </div>
        </div>
        <div className="container cardcontainer">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>01</h2>
                <h3>Fixed Engagement Model</h3>
                <p>
                  Get a predefined budget and timetable that
                  is tailored for machine learning solutions
                  projects with well defined scope and needs.
                  This strategy, which is best for small to
                  medium projects, guarantees cost
                  predictability and provides the stated
                  deliverables within the scheduled time
                  range.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>02</h2>
                <h3>Time and Material Engagement Model</h3>
                <p>
                  Our Time and Material Engagement Model is
                  flexible and adaptable, making it ideal for
                  machine learning professional services
                  projects with changing requirements and
                  undefined scope. As a result, there is more
                  flexibility in adapting changes,
                  scalability, and continued cooperation
                  throughout the development lifecycle because
                  you only pay machine learning consultant
                  hourly rate actually used on the project.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>03</h2>
                <h3>Hire Dedicated Team Model</h3>
                <p>
                  Strengthen your internal resources by
                  putting together a group of talented ML
                  Consultants and engineers that are only
                  committed to the success of your project.
                  This model offers the benefit of an extended
                  development team that works extremely
                  collaboratively to meet the needs and goals
                  of your organization while guaranteeing
                  smooth communication, control, and
                  transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head">FAQs</h2>
          </div>
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingOne"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How does text classification in Python work?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Text classification in Python involves a human annotator categorizing the texts by interpreting the content. It is a time-consuming and expensive operation but still results in more accuracy.<br />
                  Text classification in Python applies Machine Learning (ML), Natural Language Processing (NLP), and other AI-powered techniques. This method quickly classifies text much faster with more accuracy.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingTwo"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What is the function of sentiment analysis?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Sentiment analysis, also known as opinion mining, generally classifies the texts into various sentiments. It is closely related to textual emotion recognition, both designed to identify the opinions or attitudes of the given texts.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingThree"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How does sentiment analysis work in Python?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Sentiment analysis is computer software designed to work like the human brain in identifying texts. It uses 3 main approaches for classifying the readers, the Rule-based approach, Machine Learning (ML) approach, and the Hybrid approach.<br />
                  When it comes to working in the Python programming language, sentiment analysis goes through various stages, the first stage Pre-processing which involves text tokenization, text lemmatization, and stop-word removal filters. The second stage involves keyword analysis for detecting the text's emotional elements to deliver better outputs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingfour"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour"
                >
                  What is Speech Recognition?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Speech Recognition is powered by artificial intelligence. The speech recognition model enables devices and computers to understand and convert human speech into computer-readable forms. This tech is widely used in businesses involved in customer service, healthcare, education, entertainment, and so on to analyze the voice and languages of what consumers say and convert them into print-ready dictation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingfive"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefive"
                  aria-expanded="false"
                  aria-controls="flush-collapsefive"
                >
                  What is natural language generation?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A subfield of AI and NLP, Natural Language Generation (NLG) is a set of processes that transform structured data into a human-like text. Natural Language Generation systems are using techniques from deep learning, Machine Learning, and NLP to convert data into text.  NLG systems can create personalized messages, business reports, product descriptions, etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-color">
        <div className="container container-fluid">
          <div className="d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head">Case Study</h2>
          </div>
          <div className="row d-flex align-items-center justify-content-between case-sec">
            <div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
              <div className=" ">
                <h2 className="">ML Estimation</h2>
                <p className="all-p">
                  Streamline HVAC project bidding with ML
                  estimation, automating drawing annotation
                  and generating accurate bill of materials.
                  Save time, differentiate yourself in the
                  industry, and leverage innovative technology
                  for detailed quantity take-offs.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/portfolio/ml-estimation"
                  className="book-btn"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-8 mx-auto mx-lg-0  order-1 order-md-2 mb-5 mb-lg-0">
              <img
                className="img-fluid"
                style={{
                  padding: "20px",
                }}
                src="assets/images/case-ml/MLEstimation.png"
                alt="MLEstimation - AI Tool to Analyse your Building material"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head text-center">
                Satisfied clients is our proof of our
                excellence!
              </h2>
            </div>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide carousel-box"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>
                      It was an absolute pleasure working
                      with Nishant and his team for our
                      Blockchain Product. Not only is
                      Nishant an engineer in making the
                      product, he also care and give his
                      opinion on the outcome of the
                      design. When it comes to delivery,
                      the break down of the milestone is
                      fair and accurate. Lastly, we had
                      alot of changes near the end of
                      sprint and the team was flexible
                      about it. honest work, you get what
                      you pay for.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        className="img-fluid"
                        alt="iCrowsel"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="MLEstimation"
                          src="assets/images/client-logos/Ml Estimation.png"
                          loading="lazy"
                        />
                      </div>
                      <h5>MLEstimation</h5>
                      <p>Founder</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>
                      Their ability to adapt to changes in
                      our requirements while focusing on
                      the deliverables was
                      impressive.Codiste pvt ltd delivered
                      a well-written code, making the
                      platform highly performant. They
                      excellently managed the
                      collaboration and constantly
                      communicated through Slack,
                      WhatsApp, and email. Overall, they
                      fostered a positive engagement by
                      being responsive and accessible even
                      during weekends.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        className="img-fluid"
                        alt="iCrowsel"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="Holygrails"
                          src="assets/images/client-logos/Holygrails.png"
                          loading="lazy"
                        />
                      </div>
                      <h5>Holygrails</h5>
                      <p>
                        Founder
                        <br />
                        Abu Dhabi, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>
                      Codiste Team rocked Throughout the
                      Development Process. Nishant handled
                      everything very professionally and
                      as timely as possible even when
                      everything in life was going
                      sideways.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        className="img-fluid"
                        alt="iCrowsel"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="MoonTrust"
                          src="assets/images/client-logos/MoonTrust.png"
                          loading="lazy"
                        />
                      </div>
                      <h5> MoonTrust</h5>
                      <p>
                        Founder
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">
                  Previous
                </span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </div>
      </div>

      <div className="container container-fluid py-5">
        <h2 className="all-head text-center mb-lg-5 mb-0">Get Started with NLP services!</h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12  needsec p-4">
              <h2>
                Looking for NLP engineers to execute NLP projects?
              </h2>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="need-block h-100">
                <h2 className="">
                  How Can We <b>Help?</b>{" "}
                </h2>
                <CaseStudyForm text="Start a Conversation" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default NLPDevelopment;
