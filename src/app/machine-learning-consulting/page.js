import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import MLConsult from "../data/services/service-items/MLConsult";
import jsonData from "../data/schema";
import MLindustries from "../component/service/MLindustries";


export const metadata = {
  title: "Machine Learning Consulting | Codiste",
  description: "Maximize potential with expert Machine Learning Consulting. Custom ML model development, seamless integration, efficient data preprocessing, and ongoing support",
  images: "https://www.codiste.com/assets/images/Service-machine/Machine_inner/Machine Learning Consulting Services.webp",
	openGraph: {
		title: "Machine Learning Consulting | Codiste",
    description: "Maximize potential with expert Machine Learning Consulting. Custom ML model development, seamless integration, efficient data preprocessing, and ongoing support",
		images: "https://www.codiste.com/assets/images/Service-machine/Machine_inner/Machine Learning Consulting Services.webp",
		url: 'https://www.codiste.com/machine-learning-consulting/'
	},
  alternates: {
		canonical: 'https://www.codiste.com/machine-learning-consulting',
	}
};
const limit = 3;
const category = 56;
const MLConsutling = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.MLConsult) }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">Machine Learning Consulting</h1>
                  <p className="all-p ">
                    Every Business is connected with data, To get the meaningful outcome from existing data which helps business to Analyse, Predict and take corrective actions ML can play major role.Codiste provides Machine Learning consulting which helps data dependent business to Analyse, predict and take corrective action to Grow and be one step ahead from competitor and market.
                  </p>
                  <Link href="/contact" className="book-btn">Connect with ML Consultant</Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0"><img className='img-fluid' alt='Machine Learning' src="assets/images/Service-machine/Machine_inner/Machine Learning Consulting Services.webp" /></div>
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
              Our Top-Most Machine Learning Consulting Services
            </h2>
            <p className="secondsec-p text-center p-4">We are the ML consulting service provider, combining the best technologies with the latest trends while delivering  a well-strategized set of Machine Learning development services that unlock business insights. </p>
          </div>
          <ServiceInnerItems serviceItems={MLConsult} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Choose Us As for Machine Learning Consultation?
            </h2>
            <p className="secondsec-p text-center">Codiste delivers Machine Learning Consulting combining clients’ requirements with the latest technologies.</p>
          </div>
          <div className='row g-4'>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/Machine_inner/Faster Go-to-market.png"
                  />
                </div>
                <h3 className="">Faster Go-to-market</h3>
                <p className="secondsec-p">Using our technical expertise, industrial frameworks, and multi-platform experience, we get you there in record time (usually 40% faster development). How ? as we been in this industry, so Research part can be reduced and we know which technique to use for specific usecase.
                </p>
              </div>
            </div>

            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/Machine_inner/Best Tech Stack Inclusion.png"
                  />
                </div>

                <h3>Best Tech Stack Inclusion</h3>
                <p className="secondsec-p">Ensuring to use the best technology stack to develop Machine Learning solutions with essential features and integrations to make it scalable and efficient. Data is Everything and once we have Data, the right tech will help to analyse data and make it visualisable result, which turns into quick decision for business.
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/Machine_inner/Real-time updates.png"
                  />
                </div>

                <h3>Real-time updates</h3>
                <p className="secondsec-p">Being a reputed Machine Learning Consultancy, we prioritize seamless communication by adapting clients’ time zones to deliver project’s updates via email and call. We make sure there is daily conversations happening and communication is alive.
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/Machine_inner/Security-first approach.png"
                  />
                </div>
                <h3>Security-first approach</h3>
                <p className="secondsec-p">Delivering hack-proof ML solutions by maintaining 100% security in every phase of development lifecycle, right from the conceptualization stage to deployment.
                </p>
              </div>
            </div>

            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/Machine_inner/Highly skilled team.png"
                  />
                </div>

                <h3>Highly skilled team</h3>
                <p className="secondsec-p">We have Domain Expertise and Our ML team consists of Machine Learning Consultants, design and development specialists, QA and deployment engineers, who have potential of delivering industry’s best solutions.
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/Machine_inner/Custom engagement models.png"
                  />
                </div>
                <h3>Custom engagement models</h3>
                <p className="secondsec-p">Using our technical expertise, industrial frameworks, and multi-platform experience, we get you there in record time (usually 40% faster development).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Our Machine Learning Consulting Approach
            </h2>
            <p className="secondsec-p text-center">We assist organizations in a seamless journey of utilizing AI-driven insights, from defining clear business goals to implementing and monitoring ML models.</p>
          </div>

          <div className="row g-5 mx-0" >
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">
                    1
                  </div>
                </div>
                <h3 className="">Business Goal</h3>
                <p className="secondsec-p">Understanding the desired result, establishing key performance indicators (KPIs), and coordinating the ML strategy. With the larger corporate objectives are necessary for this.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">
                    2
                  </div>
                </div>
                <h3 className="">ML Problem Framing</h3>
                <p className="secondsec-p">Convert the business objective into a clear-cut machine learning challenge. In this phase, the type of ML task (such as classification, regression, clustering) is determined, the relevant evaluation metrics are chosen.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">
                    3
                  </div>
                </div>
                <h3 className="">Data Processing</h3>
                <p className="secondsec-p"> Preparing and preprocessing the data will assure its accuracy, completeness, and suitability for ML algorithms. This covers operations like feature engineering, addressing missing values, data cleansing, and converting data into a format for model training.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">
                    4
                  </div>
                </div>
                <h3 className="">Model development</h3>
                <p className="secondsec-p">Using the cleaned-up data, create, train, and fine-tune the machine learning model. Choosing the right algorithms, optimizing hyperparameters, and assessing model performance using methods like cross-validation comes in this stage.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">
                    5
                  </div>
                </div>
                <h3 className="">Deployment</h3>
                <p className="secondsec-p">To make the trained ML model available for real-time predictions, integrate it into a production environment or application. This entails creating a deployment architecture, managing model versioning, and setting up data pipelines for seamless integration.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100">
                <div className="background"></div>
                <div className="Approachcard-icon">
                  <div className="wrap1">
                    6
                  </div>
                </div>
                <h3 className="">Monitoring</h3>
                <p className="secondsec-p mb-0">Monitoring important metrics, identifying and dealing with model or concept drift, and putting in place safeguards to guarantee the model's dependability and efficiency over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Hire Machine Learning Consultants to Get Strategic Guidance
          </p>
          <Link href="/book-a-call" className="book-btn">
            Get Expert Help
          </Link>
        </div>
      </div>

      <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center">
              <h2 className="all-blog text-center">Technology Stack</h2>
              <p className="all-p  text-center mb-4">
                Our experienced team of engineers pack your Machine Learning Consulting with the best technologies ensuring that enable fault-free operations and be ready for transforming and scaling business.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="tech-style">
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="pytorch"
                      src="assets/images/tech/pytorch.png"
                    />
                    <p className="text-uppercase">pytorch</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Scikit_learn"
                      src="assets/images/tech/Scikit_learn.png"
                    />
                    <p className="text-uppercase">Scikit Learn</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Apache_Spark_"
                      src="assets/images/tech/Apache_Spark_.png"
                    />
                    <p className="text-uppercase">Apache Spark</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Pandas"
                      src="assets/images/tech/Pandas.svg"
                    />
                    <p className="text-uppercase">Pandas</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="github"
                      src="assets/images/tech/github.png"
                    />
                    <p className="text-uppercase">github</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="bitbucket"
                      src="assets/images/tech/bitbucket.png"
                    />
                    <p className="text-uppercase">bitbucket</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="git"
                      src="assets/images/tech/git.png"
                    />
                    <p className="text-uppercase">git</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="kubernetes"
                      src="assets/images/tech/kubernetes.png"
                    />
                    <p className="text-uppercase">kubernetes</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="docker"
                      src="assets/images/tech/docker.png"
                    />
                    <p className="text-uppercase">docker</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Power-BI"
                      src="assets/images/tech/Power-BI.svg"
                    />
                    <p className="text-uppercase">Power-BI</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Tableau"
                      src="assets/images/tech/Tableau.svg"
                    />
                    <p className="text-uppercase">Tableau</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Matplotlib"
                      src="assets/images/tech/Matplotlib.svg"
                    />
                    <p className="text-uppercase">Matplotlib</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Airflow"
                      src="assets/images/tech/Airflow.png"
                    />
                    <p className="text-uppercase">Apache airflow</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="sagemaker"
                      src="assets/images/tech/sagemaker.svg"
                    />
                    <p className="text-uppercase">sagemaker</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Autokeras"
                      src="assets/images/tech/Autokeras.png"

                    />
                    <p className="text-uppercase">Autokeras</p>
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
                Being a trusted Machine Learning Consultant, we have worked with a wide range of sectors on a global scale and have been a part of their growth stories.
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
                <p>Get a predefined budget and timetable that is tailored for machine learning solutions projects with well defined scope and needs. This strategy, which is best for small to medium projects, guarantees cost predictability and provides the stated deliverables within the scheduled time range.</p>

              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>02</h2>
                <h3>Time and Material Engagement Model</h3>
                <p>Our Time and Material Engagement Model is flexible and adaptable, making it ideal for machine learning professional services projects with changing requirements and undefined scope. As a result, there is more flexibility in adapting changes, scalability, and continued cooperation throughout the development lifecycle because you only pay machine learning consultant hourly rate actually used on the project.
                </p>

              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>03</h2>
                <h3>Hire Dedicated Team Model</h3>
                <p>Strengthen your internal resources by putting together a group of talented ML Consultants and engineers that are only committed to the success of your project. This model offers the benefit of an extended development team that works extremely collaboratively to meet the needs and goals of your organization while guaranteeing smooth communication, control, and transparency.
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
                  What is the role of machine learning?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  The role of Machine Learning is to develop algorithms and models that enable computers to learn from unstructured data and make predictions without explicit programming. Machine learning technology is widely used for natural language processing, autonomous vehicles, fraud detection, image and speech recognition. As Machine Learning algorithms analyze large amounts of data that are further used to make informed decisions.
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
                  What are the 3 basic machine learning algorithms?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul>
                    The three basic machine learning algorithms are:
                    <li> Supervised Learning algorithm learns from labeled examples to classify or predict new data. It trains the model by providing input data along with corresponding output labels.</li>
                    <li> Unsupervised Learning algorithm analyzes unlabeled data to identify patterns or structures within the data. This algorithm focuses on finding inherent relationships or clusters in the data as it doesn’t have predefined output labels.</li>
                    <li>Reinforcement learning algorithms learn through an interactive process of trial and error. It maximizes rewards or minimizes penalties by including an agent that learns to make actions from feedback obtained from the environment.</li>
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
                  What is the difference between AI and machine learning?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Artificial Intelligence (AI) encompasses the simulation of human intelligence in machines to perform various tasks where as machine learning refers to the subset of AI that involves developing algorithms and models to identify patterns and make decisions without being explicitly programmed.
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
                  What is machine learning consulting?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Machine learning consulting is a professional service offered by experts to businesses, who want to leverage ML techniques like clustering, deep learning, decision trees, and so on to address complex challenges and drive data-driven decision-making. These consultants possess expertise in statistical analysis, data science methodologies, and ML algorithms through which they help businesses to harness the power of machine learning to automate processes, gain insights, and achieve their business goals.
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
                  Who are machine learning consultants?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Machine learning consultants are professionals, who have in-depth knowledge of machine learning algorithms, data science, and statistical analysis. These consultants provide assistance to businesses looking for ML techniques for solving challenges, automating processes and making data-driven decisions. Consultant Machine Learning also have expertise in working with Machine Learning tools and methodologies and thus, they work with clients to develop customized solutions.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingsix"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsesix"
                  aria-expanded="false"
                  aria-controls="flush-collapsesix"
                >
                  Can I hire developers in less than 48 hours through Codiste?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Of course! You can hire Machine Learning developers or consultants within 48 business hours. Contact us to discuss your requirements with our experts.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingseven"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseseven"
                  aria-expanded="false"
                  aria-controls="flush-collapseseven"
                >
                  Why is machine learning consulting required ?
                </button>
              </h2>
              <div
                id="flush-collapseseven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingseven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Machine learning is an emerging technology, and ML consulting helps businesses with technical guidance on historical, labeled data, and helps them to predict the value of targeted value and classification. Further, it also helps them to enhance productivity by searching for valuable insights from the company’s database. We at Codiste offer Machine Learning consulting services that optimize their business operation, improve profitability, and drive innovation and growth.
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
                <h2 className="">
                  ML Estimation
                </h2>
                <p className="all-p">
                  Streamline HVAC project bidding with ML estimation, automating drawing annotation and generating accurate bill of materials. Save time, differentiate yourself in the industry, and leverage innovative technology for detailed quantity take-offs.
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

      {/* <div className="container container-fluid py-5">
        <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
          <h2 className="all-blog">Blogs</h2>
          <p className="all-p text-center">
            Discover expert insights and helpful tips on emerging
            machine learning algorithms and technologies with our
            blogs.
          </p>
        </div>
        <AllServiceBlogSlider limit={limit} category={category} />
        <div className="d-flex align-items-center justify-content-center mt-5">
          <Link href="/blog" className="book-btn mt-3">Read more</Link>
        </div>
      </div> */}

      <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head text-center">
                Satisfied clients is our proof of our excellence!
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
                <span className="visually-hidden">Previous</span>
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
        <h2 className="all-head text-center mb-lg-5 mb-0">Ask Us How?</h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12  needsec p-4">
              <h2>
                Let us help to optimize, automate and modernize your business operations.
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
export default MLConsutling;