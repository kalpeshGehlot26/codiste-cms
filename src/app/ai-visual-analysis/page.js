import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import AIVisualItems from "../data/services/service-items/AIVisual";
import jsonData from "../data/schema";
import AIConsutindus from "../component/service/AIConsutindus";

export const metadata = {
  title: "Visual Analysis | AI Development | Codiste",
  description: "Discover AI-driven Visual Analysis services. Explore advanced tech in computer vision, image recognition, and video understanding how we interpret visual information.",
  images: "https://www.codiste.com/assets/images/Service-AI/AI_visual/Visual Analysis.webp",
  openGraph: {
    title: "Visual Analysis | AI Development | Codiste",
    description: "Discover AI-driven Visual Analysis services. Explore advanced tech in computer vision, image recognition, and video understanding how we interpret visual information.",
    images: "https://www.codiste.com/assets/images/Service-AI/AI_visual/Visual Analysis.webp",
    url: 'https://www.codiste.com/ai-visual-analysis/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/ai-visual-analysis',
  }
};

const limit = 3
const category = 43

const AIVisual = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.AIVisual) }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section >
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">Visual Analysis</h1>
                  <p className="all-p">Connect with Codiste to discover new levels of comprehension in your photographs and videos by immersing yourself in the realm zone  of revolutionary technology. The way you engage with visual material will be revolutionised by our ML Visual Analysis products. Our team has been around the block to serve with ML Visual Analysis services that are intended to offer insights, expedite procedures, and improve security. They range from accurate Object Detection to smooth Video Analysis, Image Classification to facial recognition for personalised encounters and more.</p>
                  <Link href="/contact" className="book-btn">Request A Quote</Link>
                </div>
                <div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/Service-AI/AI_visual/Visual Analysis.webp" alt="Ai Development by Codiste" /></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ClientSlider />

      <div className="container container-fluid">
        <section>
          <div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
            <h2 className="all-head text-center">ML Visual Analysis Services We Offer </h2>
            <p className="secondsec-p text-center">The blend of model architecture expertise and data visualisation techniques makes Codiste the right technical partner to serve you with these future-driven services.
            </p>
          </div>
          <ServiceInnerItems serviceItems={AIVisualItems} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5" >
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Choose Codiste for Your ML Visual Analysis Needs?
            </h2>
            <p className="secondsec-p text-center">We know all the nitty-gritty & in-betweens of visualising machine learning models, including neural network, so sit back and let us serve with the best possible solutions.
            </p>
          </div>
          <div className='row g-4'>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-AI/AI_visual/Peerless Technology.png"
                  />
                </div>
                <h3 className="">Peerless Technology</h3>
                <p className="secondsec-p">Our offerings are based on the most recent developments in computer vision and machine learning techniques. To guarantee that you constantly have accessibility to highly precise and trustworthy visualization tools, we continuously advance technology.</p>
              </div>
            </div>

            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-AI/AI_visual/Demonstrated Reliability.png"
                  />
                </div>
                <h3>Demonstrated Reliability</h3>
                <p className="secondsec-p">In visual analysis, reliability is important. Regardless of the way they are used for recognising objects, facial identification, or finding anomalies, our algorithms have undergone thorough training and testing to produce precise outcomes. You can depend on our technology to do it correctly.
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
                    src="assets/images/Service-AI/AI_visual/Expandable Solutions.png"
                  />
                </div>
                <h3>Expandable Solutions</h3>
                <p className="secondsec-p">We recognise that as time passes, your demands could alter. Our services were created to grow with your business because of this. We can handle your needs if you're analysing hundreds of movies or just a few photos for analysis.
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
                    src="assets/images/Service-AI/AI_visual/Adaptation Possibilities.png"
                  />
                </div>
                <h3>Adaptation Possibilities</h3>
                <p className="secondsec-p">The needs for visual analysis and data analysis vary widely amongst enterprises. We provide personalization choices so you may adapt our offerings to your particular requirements and make sure you obtain the outcomes you desire.
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
                    src="assets/images/Service-AI/AI_visual/Formation Integrity.png"
                  />
                </div>
                <h3>Formation Integrity</h3>
                <p className="secondsec-p">We value the privacy and integrity of the information you share with us. Your visual data is always safeguarded by our strong security procedures. Understanding that your data is secure will give you tranquillity and ease.
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
                    src="assets/images/Service-AI/AI_visual/Phenomenal Assistance.png"
                  />
                </div>
                <h3>Phenomenal Assistance</h3>
                <p className="secondsec-p">We are a collaborator in the achievement of your visual analysis, not just a vendor of services. From installation to problem solving, our devoted assistance team is prepared to help you at every stage, providing an unparalleled customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Have an idea about visualising machine learning models?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Let's catch up
          </Link>
        </div>
      </div>

      <div className="bg-color py-5" >
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center">
              <h2 className="all-head text-center">Technologies We Offer </h2>
              <p className="all-p  text-center">
                We offer you to choose from a wide range of
                technologies.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="tech-style">

                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="python"
                      src="assets/images/tech/python.png"
                    />
                    <p className="text-uppercase">Python</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt=""
                      src="assets/images/tech/tensorflow.png"
                    />
                    <p className="text-uppercase">Tensor Flow</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Theano_logo"
                      src="assets/images/tech/Theano_logo.svg.png"
                    />
                    <p className="text-uppercase">Theano</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="hadoop"
                      src="assets/images/tech/hadoop.png"
                    />
                    <p className="text-uppercase">Hadoop</p>
                  </li>

                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="r"
                      src="assets/images/tech/r.png"
                    />
                    <p className="text-uppercase">R</p>
                  </li>

                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="LLaMA"
                      src="assets/images/tech/LLaMA.svg"
                    />
                    <p className="text-uppercase">LLaMA</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="nvidia"
                      src="assets/images/tech/nvidia.png"
                    />
                    <p className="text-uppercase">nvidia</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="MXNet"
                      src="assets/images/tech/MXNet.png"
                    />
                    <p className="text-uppercase">MXNet</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="caffe2"
                      src="assets/images/tech/caffe2.png"
                    />
                    <p className="text-uppercase">caffe2</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Chainer"
                      src="assets/images/tech/chainer.png"
                    />
                    <p className="text-uppercase">Chainer</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="coreml"
                      src="assets/images/tech/coreml.png"
                    />
                    <p className="text-uppercase">coreml</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="OpenNN"
                      src="assets/images/tech/OpenNN.png"
                    />
                    <p className="text-uppercase">OpenNN</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="neuroph"
                      src="assets/images/tech/neuroph.png"
                    />
                    <p className="text-uppercase">neuroph</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Sonnet"
                      src="assets/images/tech/Sonnet.png"
                    />
                    <p className="text-uppercase">Sonnet</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt=" tf-slim"
                      src="assets/images/tech/tf-slim.png"
                    />
                    <p className="text-uppercase"> Tf-slim</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="PySpark"
                      src="assets/images/tech/PySpark.png"
                    />
                    <p className="text-uppercase">PySpark</p>
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
              <h2 className="all-head text-center">Industries We Serve</h2>
              <p className="all-p text-center">
                Codiste's multi-industry experience propels outstanding AI transformations using their specialisation in delivering  AI solutions that address various business demands.
              </p>
            </div>
            <AIConsutindus />
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
                <p>Our Fixed Engagement Model best suits tasks with clear objectives and scopes. To provide openness and predictability, we announce a definite price and timetable upfront. With this approach, you can securely schedule your project's budget and significant milestones, knowing we'll produce the desired results on time phase wise.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>02</h2>
                <h3>Time and Material Engagement Model</h3>
                <p>Our Time and Material Engagement Model is ideal for projects with dynamic scopes and changing requirements. In this case, you only pay for the actual time and materials used on the project. As the project develops, this approach provides the freedom to change the scope and direction, ensuring optimum adaptability to shifting business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>03</h2>
                <h3>Hire Dedicated Team Model</h3>
                <p>Our Hire Dedicated Team Model is the best option if you need a committed team to work on your AI efforts and a long-term partnership. With this strategy, you can access a team of qualified and devoted AI professionals focusing only on your project. This strategy encourages fluid communication and a closer bond between our team and yours.
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
                  What is Visual Analysis?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Visual analysis is the process of observing and understanding the visually represented data. The ultimate purpose of analysing the visual data is to create an argument based on visual evidence. By using this, businesses can quickly identify the current market trends and make corrective strategic-based decisions in real-time to achieve success.
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
                  How to start a visual analysis essay?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Unlike the other essays, writing a visual analysis essay requires studying and understanding all the design elements and principles. With such deep understanding you can write an engaging description of the product, picture, photo or architecture and so on. Always start a visual analysis essay with an attention-grabbing hook statement followed by a brief description of the essay topic. In addition, you can provide some interesting facts relevant to the topic and state the essay statement.
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
                  How to train openCV to detect objects?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Object detection is a kind of technique used in computers to identify the specific or interested
                  objects within the provided images or video frames.
                  <ul>Steps to follow for object detection in OpenCV
                    <li>Gathering all the datasets of the given images or video frames.</li>
                    <li>Choose the perfect detection algorithms like haar cascades, yolo, SSD, and so on for your object detection.
                    </li>
                    <li>Based on your requirements, perform the pre-processing steps (resizing, colouring, and so on) on your dataset.
                    </li>
                    <li>Apply the chosen object detection algorithm to generate the necessary model files or parameters.
                    </li>
                    <li>Draw segmentation masks around the detected objects to visualise the results.
                    </li>
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
                  How Object Detection works?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Object detection works on the ML-based algorithm. To identify and locate an object within an image, object categorisation techniques are applied. Also, it makes use of functions like image wrapping, image blurring, etc., for transforming the image. A modern object detection model uses complex architectures, dataset annotation, and DL to achieve better results.
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
                  What is Image Classification?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Image classification is a process of extracting information from the provided images. Image classification can be done in two approaches supervised and unsupervised. By using a specific set of rules, pixels or vectors of the given images are grouped or categorised. Once the categorization process is done, trained models are used to identify the images.
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
                  How Video Analysis works?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  In general, video analysis uses rule-based algorithms to conduct the analysis process promptly. The rule-based algorithm offers a decision tree like providing ‘if/then’ questions for better prediction of the objects in the video. Based on the inputs, the algorithm eliminates unnecessary objects and detects only the relevant ones on the video.
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
                  What is Facial Recognition?
                </button>
              </h2>
              <div
                id="flush-collapseseven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingseven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Facial recognition is an advanced technology that is specifically used to identify and confirm a person’s identity by matching facial features. Biometric security systems which are widely used by companies use this technology to strengthen user authentication activity and provide better security. In addition, smartphones with this technology have received a welcome from the users as it provides more device security.
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
                  What is Anomaly Detection?
                </button>
              </h2>
              <div
                id="flush-collapseeight"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingeight"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Anomaly detection is a set of processes used to identify unwanted or irrelevant data from the given input through deep analysis techniques. By using the pattern of behaviors, the system easily and quickly detects irregular data. Businesses involved in finance, retail, or cyber security make use of this anomaly detection to detect and protect themselves from harmful outliers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Looking to hire AI consultants who back your Visual Analysis requirements with best-in-class models?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Let's catch up
          </Link>
        </div>
      </div>
      <div className="py-5 bg-color">
        <div className="container container-fluid">
          <div className="d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head">Case Study</h2>

          </div>
          <div className="row d-flex align-items-center justify-content-between case-sec">
            <div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
              <div className="">
                <h2 className="">
                  DiveWallet <br /> Your next-gen crypto asset
                  manager
                </h2>
                <p className="all-p">
                  As Blockchain experts, Codiste develops a
                  highly-secured crypto wallet - ‘Divewallet’
                  that supports well known EVM-based
                  blockchains such as Ethereum, Binance,
                  Polygon, and Solana.
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href="/portfolio/divewallet"
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
                src="assets/images/diwallet-case/Dive Wallet.png"
                alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
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
                Hear our clients' resounding praise!
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
                      They truly do everything up to a
                      very high standard. Codiste pvt ltd
                      has successfully delivered a
                      functional app praised in many
                      publications for its neatness and
                      speed. They have frequently
                      communicated via Slack and managed
                      the project efficiently using Jira.
                      Their extensive knowledge and humble
                      attitude have been hallmarks of
                      their work.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        className="img-fluid"
                        alt="iCrowsel"
                        loading="lazy"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="BonFire - Bonfire Real-Estate Fractionalized Marketplace"
                          src="assets/images/client-logos/bonfire.png"
                          loading="lazy"
                        />
                      </div>
                      <h5>
                        The Real Estate Investment
                        platform
                      </h5>
                      <p>
                        CTO and Co-Founder <br />
                        San Francisco, California
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>
                      I am pleased to say that working
                      with Codiste Pvt Ltd has been a
                      positive experience for our
                      community. The project is now
                      complete, and the feedback we have
                      received on the platform has been
                      overwhelmingly positive. Throughout
                      the project, Codiste maintained open
                      communication lines, regularly
                      updating us on progress and
                      following the agreed timeline. They
                      delivered an app with impressive
                      functionalities and accepted every
                      challenge we gave them. Overall, we
                      are satisfied with the outcome of
                      the project and would recommend
                      Codiste for their expertise,
                      professionalism, and commitment to
                      delivering high-quality work.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        className="img-fluid"
                        alt="iCrowsel"
                        loading="lazy"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
                          src="assets/images/client-logos/DiveWallet Logo.png"
                        />
                      </div>
                      <h5>DiveWallet</h5>
                      <p>
                        CEO
                        <br />
                        Bolivar, New York
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>
                      Codiste pvt ltd delivered the
                      project within the given timeline
                      and budget. Their communication and
                      collaboration were outstanding using
                      Slack, Lucidhart, and Miro. The team
                      was reliable, well-organized, and
                      proactive.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        className="img-fluid"
                        alt="iCrowsel"
                        loading="lazy"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="Medizen - Pill Reminder and Drug interaction Detection app"
                          src="assets/images/client-logos/Medizen.png"
                          loading="lazy"
                        />
                      </div>
                      <h5>Medizen App</h5>
                      <p>
                        CEO
                        <br />
                        Johannesburg, South Africa
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
        <h2 className="all-head text-center mb-lg-5 mb-0">
          Trouble finding Machine Learning Experts?
        </h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12 p-4 mb-lg-0 needsec">
              <h2>
                Would you like to utilise Codiste’s ML Visual Analysis experience in your project?
              </h2>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="need-block h-100">
                <h2 className="">
                  How Can We <b>Help?</b>{" "}
                </h2>
                <CaseStudyForm text="Contact Now" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIVisual;
