import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import ComputerVision from "../data/services/service-items/ComputerVision"
import jsonData from "../data/schema";
import MLindustries from "../component/service/MLindustries";

export const metadata = {
  title: "Computer Vision | Machine Learning | Codiste",
  description:
    "From pattern detection to semantic segmentation AI is everywhere. Experience AI-powered computer vision with codiste next-level services.",
  images: "https://www.codiste.com/assets/images/Service-machine/Computer_Vision/Computer Vision Development.webp",
  openGraph: {
    title: "Computer Vision | Machine Learning | Codiste",
    description:
      "From pattern detection to semantic segmentation AI is everywhere. Experience AI-powered computer vision with codiste next-level services.",
    images: "https://www.codiste.com/assets/images/Service-machine/Computer_Vision/Computer Vision Development.webp",
    url: 'https://www.codiste.com/cryptocurrency-development-company/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/computer-vision-development',
  }
};
const limit = 3;
const category = 56;
const computervision = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.ComputerVision) }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">Computer Vision Development </h1>
                  <p className="all-p ">
                    We build intelligent systems using sophisticated algorithms, frameworks, data processing techniques, and methods. Our expertise lies in modern algorithms and Machine Learning approaches that enable us to deliver unparalleled accuracy and efficiency in various apps related to image recognition, face analysis, visual search, object detection, movement recognition, video analysis, and more.
                  </p>
                  <Link href="/contact" className="book-btn">Connect with Experts</Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0"><img className='img-fluid' alt='Machine Learning' src="assets/images/Service-machine/Computer_Vision/Computer Vision Development.webp" /></div>
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
              The Next-level Computer Vision Services We Offer
            </h2>
            <p className="secondsec-p text-center p-4">We focus on delivering computer vision solutions combining technologies with creativity that empower humans, solve high pain points of businesses, and make their experience more immersive.</p>
          </div>
          <ServiceInnerItems serviceItems={ComputerVision} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Us for Computer Vision Software Development Service?
            </h2>
            <p className="secondsec-p text-center">Experts at Codiste work with a mission to deliver engaging and intuitive user experiences from enterprises to startups with their computer vision solutions.</p>
          </div>
          <div className='row g-4'>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-machine/Computer_Vision/Experienced Professionals.png"
                  />
                </div>
                <h3 className="">Experienced Professionals</h3>
                <p className="secondsec-p">We have immense knowledge of AI development technologies using techniques while building, managing, and continually improving computer vision software for robotics, medical imaging, and more.
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
                    src="assets/images/Service-machine/Computer_Vision/High-Touch Interactions.png"
                  />
                </div>
                <h3>High-Touch Interactions</h3>
                <p className="secondsec-p">Our success relies on teamwork, including our clients. We work for our clients as partners in their journey towards digital transformation and have a high-touch interaction to solve possible computer vision challenges.
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
                    src="assets/images/Service-machine/Computer_Vision/Customized Computer Vision.png"
                  />
                </div>
                <h3>Customized Computer Vision</h3>
                <p className="secondsec-p">We offer a customized computer vision solution pertaining to automating tasks like security, monitoring, etc., through our centralized and standardized sources. This allows our clients to scale their businesses quickly through visual understanding.
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
                    src="assets/images/Service-machine/Computer_Vision/Proactive Work.png"
                  />
                </div>
                <h3>Proactive Work</h3>
                <p className="secondsec-p"> Our computer vision software development services include 24/7 proactive monitoring and advanced analytics capabilities. This helps us to maintain our work efficiency above the par level and to reduce all possible issues as and when detected.
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
                    src="assets/images/Service-machine/Computer_Vision/Comprehensive Solution.png"
                  />
                </div>
                <h3>Comprehensive Solution</h3>
                <p className="secondsec-p">From detecting and recognizing defects, events, actions, and incidents, our computer vision engineers do real-time analysis to foster enterprises with end-to-end computer vision development solutions.
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
                    src="assets/images/Service-machine/Computer_Vision/Support Help.png"
                  />
                </div>
                <h3>Support Help</h3>
                <p className="secondsec-p">We are always eager to assist our clients with AI solutions. Reaching our support staff is a simple thing. Just click a button on our chat support and easily access our support services related to object detection, face recognition, OCR data extraction, etc.
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
            Want to Hire Expert for End-to-end Custom Computer Vision Development Services?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Request A Call
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
              {/* <p className="all-p text-center">
                Being a trusted Machine Learning Consultant, we have worked with a wide range of sectors on a global scale and have been a part of their growth stories.
              </p> */}
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
                  What is OCR? How does this technology work?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  OCR abbreviated as Optical Character Recognition, which is a set of processes that converts a text image into a machine-readable text format. Mainly, this technique is used to detect the presence of printed or handwritten texts in digital images. The OCR technique uses a scanner to copy the texts from the image and utilizes AI-powered software to identify the languages or styles of writing.
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
                  Which language is used for Optical Character Recognition (OCR) development?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Optical Character Recognition (OCR) deals with the computer vision problem naturally, so utilizing Python programming would be the best fit. Python is the most widely used simple programming language for computer vision/deep learning functionality. Python OCR technology will be completed by deploying the open-source OCR engine Tesseract.
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
                  What is semantic segmentation?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Semantic segmentation is a process of categorizing every pixel of an image into a class. It simply treats multiple objects of a class into a single entity by labeling them differently by using pixel boundaries. Semantic segmentation can easily identify objects like cars, people and so easily from an image.
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
                  What is the difference between semantic segmentation and instance segmentation?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Semantic segmentation is a widely used image segmentation process and instance segmentation for basic object recognition in computer vision projects. The semantic segmentation process groups the displayed objects into predefined classes or categories. On the other hand, the instance segmentation process is used to identify the specific entities or objects within a class.
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
                  How does pattern detection work?
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
                    Pattern detection is a process of identifying the regularities and patterns in the data using Machine Learning (ML) algorithms. The working procedure of data pattern detection depends upon various notions. It can be either supervised or unsupervised approaches. <br />Phases involved in data pattern detections are:
                    <li> Sensing</li>
                    <li> Segmentation</li>
                    <li> Feature Extraction</li>
                    <li> Classification</li>
                    <li> Post Processing</li>
                  </ul>
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
                  What is pattern detection?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Pattern detection can be defined as the process of classifying the data based on the gained knowledge through information extracted from the data analysis. The data pattern distinguishing can be performed using algorithms powered by Artificial Intelligence (AI) and Machine Learning (ML) Tools. It is widely used to make data predictions and to improve decision-making processes.
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
                  How does an image generator work?
                </button>
              </h2>
              <div
                id="flush-collapseseven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingseven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Image generators powered by Artificial Intelligence (AI) use the most advanced machine learning (ML) algorithms like Artificial Neural Networks (ANN) to generate realistic images. The presence of biological neural networks in ANN processes the provided information to learn and creates new images interpreting the text prompt and mimicking the art form.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingeight"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseeight"
                  aria-expanded="false"
                  aria-controls="flush-collapseeight"
                >
                  How is an image generator from the text?
                </button>
              </h2>
              <div
                id="flush-collapseeight"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingeight"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  In their generative AI models, image generators use neural networks to identify data patterns and structures. The generative AI models combine with the Machine Language (ML) algorithms to learn from large datasets and generate new images according to input parameters.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="flush-headingnine"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsenine"
                  aria-expanded="false"
                  aria-controls="flush-collapsenine"
                >
                  Can I use AI Image Generator Free For My Website Images?
                </button>
              </h2>
              <div
                id="flush-collapsenine"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingnine"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes! You can make use of an AI Image Generator for Free to create images for your website. So many online AI image generators allow you to create anything that doesn't exist in real life. AI Image generators have the potential to generate highly realistic unique images that are not found in photo libraries, icons, and 3D objects by just using your words and imagination.
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
                We deliver computer vision solutions with the future in mind
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
export default computervision;