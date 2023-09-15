import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import AIpredictive from "../data/services/service-items/AIPredictive";
import jsonData from "../data/schema";
import AIConsutindus from "../component/service/AIConsutindus";

export const metadata = {
  title: "Predictive Models | AI Development | Codiste",
  description: "Transform business with Codiste's AI Predictive Models Development services to create advanced predictive models that enhance decision-making and drive growth.",
  images: "https://www.codiste.com/assets/images/Service-AI/AI_predictive/Predictive Modelling Services.webp",
  openGraph: {
    title: "Predictive Models | AI Development | Codiste",
    description: "Transform business with Codiste's AI Predictive Models Development services to create advanced predictive models that enhance decision-making and drive growth.",
    images: "https://www.codiste.com/assets/images/Service-AI/AI_predictive/Predictive Modelling Services.webp",
    url: 'https://www.codiste.com/predictive-modelling/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/predictive-modelling',
  }
};

const limit = 3
const category = 43

const AIPredictive = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.AIPredictive) }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section >
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">Predictive Modelling Services</h1>
                  <p className="all-p">To make predictions and anticipate outcomes, our unified team of creative & skilled professionals gather and synthesise market data and use analytical and statistical techniques. To achieve a competitive edge through improved forecasting, businesses recruit experts like for predictive modelling solutions.</p>
                  <Link href="/contact" className="book-btn">Talk to Our Experts</Link>
                </div>
                <div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/Service-AI/AI_predictive/Predictive Modelling Services.webp" alt="Ai Development by Codiste" /></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ClientSlider />

      <div className="container container-fluid">
        <section>
          <div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
            <h2 className="all-head text-center">Our Predictive Modelling Offerings</h2>
            <p className="secondsec-p text-center ai-custom">Expertise in creating digital footprint with our <a href="https://www.codiste.com/machine-learning-model-development">ML model development</a> services for 10+ years has made us one of the reliable Predictive Modelling service providers.
            </p>
          </div>
          <ServiceInnerItems serviceItems={AIpredictive} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5" >
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Should You Choose Codiste for Predictive Modelling?
            </h2>
            <p className="secondsec-p text-center">Codiste, being an expert in forecasting models, addresses industry challenges and develops advanced custom predictive modelling solutions that address business needs.
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
                    src="assets/images/Service-AI/AI_predictive/Experienced Data Scientists.png"
                  />
                </div>
                <h3 className="">Experienced Data Scientists</h3>
                <p className="secondsec-p">A team of data scientists at Codiste are highly skilled in predictive modelling. Their analytics skills guarantee that you can depend on them to bring a wealth of knowledge to your project. Our Codiste's team will ensure that your prediction models are both reliable and accurate.</p>
              </div>
            </div>

            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice-box h-100 ai-custom'>
                <div className="text-center">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Comprehensive Development"
                    src="assets/images/Service-AI/AI_predictive/Trailblazing Technologies.png"
                  />
                </div>
                <h3>Trailblazing Technologies</h3>
                <p className="secondsec-p">Our competition is left behind because of our ability to predict and model with modern algorithms and software, all made possible by advance <a href="https://www.codiste.com/artificial-intelligence-development-company">ai development</a> technology. The solutions we deliver are unparalleled in quality.
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
                    src="assets/images/Service-AI/AI_predictive/Custom-fit Solutions.png"
                  />
                </div>
                <h3>Custom-fit Solutions</h3>
                <p className="secondsec-p">Our clients each encounter one-of-a-kind data challenges, thus our predictive models are tailored to your specific needs. With this customisation, you can be assured that solutions are created specifically for your company, providing optimal benefits.
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
                    src="assets/images/Service-AI/AI_predictive/Data Security.png"
                  />
                </div>
                <h3>Data Security</h3>
                <p className="secondsec-p">Our advanced security procedures are crucial to ensuring our clients' peace of mind with regards to data security. Relax in knowing that your private information is in good hands, as it is shielded from both internal and external attacks. Our serious approach to data security is our top priority.
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
                    src="assets/images/Service-AI/AI_predictive/Proven Track Record.png"
                  />
                </div>
                <h3>Proven Track Record</h3>
                <p className="secondsec-p">Predictive modelling is our secret weapon. It has helped our experts assist numerous businesses in streamlining their processes. Record-breaking productivity and profitability gains have been achieved. Be our satisfied customer and experience the same success. Our accomplishments are a testament to our performance history.
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
                    src="assets/images/Service-AI/AI_predictive/Seamless Improvement.png"
                  />
                </div>
                <h3>Seamless Improvement</h3>
                <p className="secondsec-p">For developing and changing predictive models and procedures to keep your company ahead in the world of analytics, trust us. We are committed to continuous progress, just like the ever-changing data realm. Opt for our predictive and modelling services that adapt to your requirements.
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
              How We Build Predictive Analytics Models
            </h2>
          </div>
          <section class="ps-timeline-sec">
            <div class="container">
              <ol class="ps-timeline">
                <li>
                  <div class="img-handler-top">
                    <h4 className="text-center">Scope and Defining</h4>
                    <p > Business processes and business outcomes are predicted. Based on the results, a suitable predictive model will be adopted.
                    </p>
                  </div>
                  <div class="ps-bot">
                    {/* <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt="" /> */}
                  </div>
                  <span class="ps-sp-top">01</span>
                </li>
                <li>
                  <div class="img-handler-bot">
                    <h4 className="text-center">Data profiling</h4>
                    <p>Discovery of needed data is done along by finalising where to store, how to be accessed and what will be its current state.</p>
                  </div>
                  <div class="ps-top">
                    {/* <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt="" /> */}
                  </div>
                  <span class="ps-sp-bot">02</span>
                </li>
                <li>
                  <div class="img-handler-top">
                    <h4 className="text-center">Data Integration</h4>
                    <p>All those identified data will be cleansed and integrated to form a consistent and comprehensive data set to build a model.</p>
                  </div>
                  <div class="ps-bot">
                    {/* <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt="" /> */}
                  </div>
                  <span class="ps-sp-top">03</span>
                </li>
                <li>
                  <div class="img-handler-bot">
                    <h4 className="text-center">Building Predictive Model</h4>
                    <p>Hypotheses will be defined and test models are built according to the goals, historical data, variables and factors proving the hypothesis.</p>
                  </div>
                  <div class="ps-top">
                    {/* <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt="" /> */}
                  </div>
                  <span class="ps-sp-bot">04</span>
                </li>
                <li>
                  <div class="img-handler-top">
                    <h4 className="text-center">Incorporating Analytics</h4>
                    <p>Business processes are integrated with the developed model to make it more valuable and to achieve desired outcome.
                    </p>
                  </div>
                  <div class="ps-bot">
                    {/* <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt="" /> */}
                  </div>
                  <span class="ps-sp-top">05</span>
                </li>
                <li>
                  <div class="img-handler-bot">
                    <h4 className="text-center">Monitoring Business Outcome</h4>
                    <p>The model gets monitored after the deployment in a live environment and measured for its effectiveness, corrections will be made if required.</p>
                  </div>
                  <div class="ps-top">
                    {/* <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt="" /> */}
                  </div>
                  <span class="ps-sp-bot">06</span>
                </li>
              </ol>
            </div>
          </section>

        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            We build Predictive Analytics Models for Large Corporations
          </p>
          <Link href="/book-a-call" className="book-btn">
            Contact Us Now!
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
                  What is predictive modelling?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Predictive Modelling is a set of processes which follows the mathematical way of forecasting future events. It analyses the data pattern from the given input and performs the prediction process. It is widely used in every aspect like predicting the TV rating, customer’s next purchase, corporate earnings, and so on. With the help of ML-based statistical techniques, this model performs the prediction more accurately.
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
                  How does predictive modeling work?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body ai-custom">
                  Predictive models effectively use data analysis, AI, <a href="https://www.codiste.com/machine-learning-development-company/">ML development</a>, and statistical models to find accurate data patterns for better prediction. In forecasting the future of a company, this predictive model uses the historic and current customer demand data for predicting upcoming events. On the other hand, data scientists wisely use this model to find the correlation between the elements through statistical formulation.
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
                  What is the churn prediction model?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Churn prediction model is a type of predictive model mainly used to identify the possibility of when an individual customer will stop engaging in a business. As the modern business world moves towards technical aid to survive and to succeed in today’s competitive market, this churn model plays a handy role in predicting the risks of losing individual customers in the future.
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
                  How to build a recommendation system using machine learning?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Here are the steps to follow for building a recommended system using ML techniques.
                  <ul>
                    <li>The first and foremost step is identifying problems and narrating goal formulas.</li>
                    <li>Next step, collecting customer behaviour data and initiating pre-processing procedures.</li>
                    <li>Now, understand the data distribution and relationship between data variables using Exploratory Data Analysis (EDA).</li>
                    <li>Furthermore, Pick the suitable features, models for your system and train.</li>
                    <li>Now, evaluate the proposed models after fine tuning all the hyper-parameters. Finally, initiate the model deployment.</li>
                  </ul>
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
                  What is customer segmentation?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Customer segmentation, it is an effective strategy mainly used by companies and brands to find and understand their target audience group. With this process, brands can group their customers based on their behaviour and engaging mode with brands. Customer Segmentation, improve the revenues and increase their client retention rate of a brand by enabling them to provide more personalised services or products.
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
                  What is demand forecasting?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Demand forecasting is the process of foreseeing the demands of the customers and predicting the quantity of goods and services that need to be provided in the future. With real-time analysis of the customer demands of the present and past, it accurately predicts the future. For modern-day businesses, this demand forecasting helps to gain more profit through effective optimization of the supply chain process.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            We build trust and delivering result-oriented outcomes along with Generative AI services.
          </p>
          <Link href="/book-a-call" className="book-btn">
            Contact Us Now!
          </Link>
        </div>
      </div>

      <div className="py-5">
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
                  Explore Client Success
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
          Let’s start a conversation On Predictive Models!
        </h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12 p-4 mb-lg-0 needsec">
              <h2>
                Looking for secure Generative AI solutions that set you apart from the market?
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

export default AIPredictive;
