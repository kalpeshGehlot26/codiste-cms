import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import MLintegration from "../data/services/service-items/MLintegration";
import jsonData from "../data/schema";
import MLindustries from "../component/service/MLindustries";


export const metadata = {
  title: "ML Integration Services | Machine Learning | Codiste",
  description: "Make Your Applications Smarter with Machine Learning Integration. Our Expert ML Engineers will integrate machine learning models smoothly into your application.",
  images: "https://www.codiste.com/assets/images/Service-machine/ML_Integration/ML Integration Services.webp",
  openGraph: {
    title: "ML Integration Services | Machine Learning | Codiste",
    description: "Make Your Applications Smarter with Machine Learning Integration. Our Expert ML Engineers will integrate machine learning models smoothly into your application.",
    images: "https://www.codiste.com/assets/images/Service-machine/ML_Integration/ML Integration Services.webp",
    url: 'https://www.codiste.com/machine-learning-Integration/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/machine-learning-Integration',
  }
};
const limit = 3;
const category = 56;
const MLIntegration = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonData.MLIntegration),
        }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">
                    ML Integration Services
                  </h1>
                  <p className="all-p ">
                    Codiste is a specialist in ML integrating progressive machine learning technology into your current systems and processes. Our expert engineers promises that artificial intelligence technology will enhance your operations, enabling you to make wiser choices, show new information, and take action in the moment's data-driven society.
                  </p>
                  <Link href="/contact" className="book-btn">
                    Get A Free Quote
                  </Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    alt="Machine Learning"
                    src="assets/images/Service-machine/ML_Integration/ML Integration Services.webp"
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
              Our ML Integration Services
            </h2>
            {/* <p className="secondsec-p text-center p-4">
              Our machine learning development services are one of
              the most powerful ones and are appreciated by
              different industry leaders. We get onboard and bring
              you custom solutions involved in the machine
              learning model development life cycle. Our ML model
              engineering services are well-equipped and
              contribute to the success of businesses across
              various industries.
            </p> */}
          </div>
          <ServiceInnerItems serviceItems={MLintegration} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Codiste for ML Integration Service?
            </h2>
            <p className="secondsec-p text-center">
              We bring innovation with ML Integration. Our services with machine learning deliver experience with quality, transparency and with proper communication.
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
                    src="assets/images/Service-machine/ML_Integration/Expertise in Seamless Integration.png"
                  />
                </div>
                <h3 className="">Expertise in Seamless Integration</h3>
                <p className="secondsec-p">
                  We have a proven track record of integrating Machine Learning (ML) technologies into ecosystems. Our team is skilled in utilising APIs, microservices and containerization to ensure an effortless connection. Incorporating ML into your existing infrastructure we maximise its potential. Enhance its capabilities.
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
                    src="assets/images/Service-machine/ML_Integration/Mastering Data Preprocessing.png"
                  />
                </div>
                <h3>Mastering Data Preprocessing</h3>
                <p className="secondsec-p">
                  Data is the foundation of ML. Your data will be cleaned, converted, and formatted for the best model performance thanks to our data preprocessing mastery. We address issues like missing values, outliers, and feature scaling, laying the groundwork for precise forecasts and useful insights.
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
                    src="assets/images/Service-machine/ML_Integration/Model Performance and Monitoring.png"
                  />
                </div>

                <h3>Model Performance and Monitoring</h3>
                <p className="secondsec-p">
                  In addition to integration, we also excel in these areas. Our solution's extensive performance metrics and real-time monitoring can monitor model correctness, spot abnormalities, and get prompt insights for any adjustments that might be required to ensure the long-term success of your ML deployment.
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
                    src="assets/images/Service-machine/ML_Integration/Varied Domain Knowledge.png"
                  />
                </div>
                <h3>Varied Domain Knowledge</h3>
                <p className="secondsec-p">
                  We excel in many different industries. We deliver extensive domain expertise that matches ML solutions with particular sector peculiarities across industries including banking, healthcare, manufacturing, and e-commerce. This will assure you that the integrated models will succeed technically and strategically in line with your corporate objectives.
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
                    src="assets/images/Service-machine/ML_Integration/Governance & Compliance Assurance.png"
                  />
                </div>

                <h3>Governance & Compliance Assurance</h3>
                <p className="secondsec-p">
                  Data ethics and legal compliance are our top priorities. Our Governance and Compliance Assurance includes explainability methodologies, model documentation, and version control. We guarantee your ML integration is both responsible and effective by adhering to industry standards and laws like GDPR and HIPAA.
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
                    src="assets/images/Service-machine/ML_Integration/Collaboration-Based Partnership.png"
                  />
                </div>
                <h3>Collaboration-Based Partnership</h3>
                <p className="secondsec-p">
                  Not only do we provide solutions, but we also create Collaborative Partnerships. Understanding your particular needs, coordinating with your objectives, and keeping you updated along the integration path are all part of our collaboration. Our experience is complemented by your team's, resulting in a positive synergy that promotes success and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
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
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Hire our ML Experts to minimise Application Integration complexities
          </p>
          <Link href="/book-a-call" className="book-btn">
            Connect Now!
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
                  What is ML integration?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Machine Learning (ML) integration is about deploying the ML models into the existing systems or databases of a business. Businesses can enhance data processing operations with ML integration. Improving customer servicing operations, automating business processes, and making insightful business decisions become easy for businesses with the ML integration. Also, the accuracy rate of business data improves a lot by the deployment of ML Models.
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
                  How to integrate machine learning with an android app?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Integrating Machine learning (ML) with Android apps has become quite common among businesses from all verticals to enhance their business operations.  The integration process can be easily done with the below-given tools and frameworks along with hiring an expert ML developer.
                  <ul>
                    <li>
                      TensorFlow Lite
                    </li>
                    <li>
                      ML Kit
                    </li>
                    <li>
                      PyTorch Mobile
                    </li>
                    <li>Caffe2</li>
                    <li>Scikit-learn</li>
                  </ul>
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
                  What are the 4 types of integration?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Integrating two businesses through a merger of takeover can be performed based on their nature of operation and the kind of activities they involved. Those two factors determine what type of integration suits better for merging.<br />
                  Here are the lists of 4 common Integration types widely used by businesses across the world to merge with others.
                  <ul>
                    <li>
                      Horizontal Integration
                    </li>
                    <li>
                      Vertical Backward Integration
                    </li>
                    <li>
                      Vertical Forward Integration
                    </li>
                    <li>Conglomerate Integration</li>
                  </ul>
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
                  How to integrate machine learning with websites?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  As personalization becomes inevitable for businesses, developers integrate Machine Learning (ML) to business websites or web applications to achieve better user experience. Integration ML into web requires appropriate web framework, essential infrastructure, and a perfect ML model for integrating with website/web apps.<br />
                  Here are the lists of top 3 commonly used ML frameworks by the developers to deploy ML Models on Web platforms.
                  <ul>
                    <li>
                      TensorFlow
                    </li>
                    <li>
                      PyTorch
                    </li>
                    <li>
                      Scikit-learn
                    </li>
                  </ul>
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
        <h2 className="all-head text-center mb-lg-5 mb-0">Reach out to ML Engineers Now!</h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12  needsec p-4">
              <h2>
                Looking for ML Integration services providers with cross-industry experience?
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
export default MLIntegration;
