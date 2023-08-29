import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import DeepLearn from "../data/services/service-items/DeepLearning";
import jsonData from "../data/schema";
import MLindustries from "../component/service/MLindustries";


export const metadata = {
  title: "Deep learning | Machine Learning Development | Codiste",
  description: "Experience Artificial Intelligence through our Deep Learning Services. We make Deep Learning everything from image recognition to trend prediction",
  images: "https://www.codiste.com/assets/images/Service-machine/Deep_Learning/Deep Learning Services.webp",
  openGraph: {
    title: "Deep learning | Machine Learning Development | Codiste",
    description: "Experience Artificial Intelligence through our Deep Learning Services. We make Deep Learning everything from image recognition to trend prediction",
    images: "https://www.codiste.com/assets/images/Service-machine/Deep_Learning/Deep Learning Services.webp",
    url: 'https://www.codiste.com/deep-learning/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/deep-learning',
  }
};
const limit = 3;
const category = 56;
const DeepLearning = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonData.DeepLearnig),
        }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">
                    Deep Learning Services
                  </h1>
                  <p className="all-p ">
                    We specialise in pushing boundarie­s of developing advanced ne­ural architectures, and applying on unstructured data. Our expe­rienced specialists cre­ate tailored Deep Learning solutions that address your unique­ challenges, reve­aling insights, predictions, and ideas previously be­yond reach.
                  </p>
                  <Link href="/contact" className="book-btn">
                    Connect Our Experts
                  </Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    alt="Machine Learning"
                    src="assets/images/Service-machine/Deep_Learning/Deep Learning Services.webp"
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
              Our Deep Learning Services
            </h2>
            <p className="secondsec-p text-center p-4">
              We specialise in pushing boundarie­s of developing advanced ne­ural architectures, and applying on unstructured data. Our expe­rienced specialists cre­ate tailored Deep Learning solutions that address your unique­ challenges, reve­aling insights, predictions, and ideas previously be­yond reach.
            </p>
          </div>
          <ServiceInnerItems serviceItems={DeepLearn} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Us for Deep Learning Service?
            </h2>
            <p className="secondsec-p text-center ai-custom">
              Codiste has expertise to perform analytical and automation with their expertise in deep learning <a href="https://www.codiste.com/artificial-intelligence-development-company">AI methods</a>.
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
                    src="assets/images/Service-machine/Deep_Learning/Neural Architectures Expertise.png"
                  />
                </div>
                <h3 className="">Neural Architectures Expertise</h3>
                <p className="secondsec-p">
                  Our skilled team leads the­ way in designing complex neural archite­ctures. We specialise in creating unique models that show intricate patterns in your data, utilising our expe­rtise in convolutional, perennial, and atte­ntion-based networks. These­ specialised designs offe­r unmatched precision and gene­rate valuable insights.
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
                    src="assets/images/Service-machine/Deep_Learning/Unleashing Data Insights.png"
                  />
                </div>
                <h3>Unleashing Data Insights</h3>
                <p className="secondsec-p">
                  We have the key to the gems concealed in unstructured data. We derive meaning and structure from raw text, audio, and visual inputs using deep learning techniques such as convolutional neural networks (CNNs) and generative adversarial networks (GANs), translating them into actionable insights.
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
                    src="assets/images/Service-machine/Deep_Learning/Customised Model Optimisation.png"
                  />
                </div>
                <h3>Customised Model Optimisation</h3>
                <p className="secondsec-p">
                  Our deep learning model optimisation approach is nothing short of masterful. We fine-tune hyperparameters, use advanced regularisation, and employ advanced optimisation methods. This painstaking refinement produces models with excellent precision, dependability, and the ability to thrive in turbulent conditions.
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
                    src="assets/images/Service-machine/Deep_Learning/Transfer Learning Approaches.png"
                  />
                </div>
                <h3>Transfer Learning Approaches</h3>
                <p className="secondsec-p">
                  We utilise transfer learning approaches as an innovation accelerator. We accelerate development while guaranteeing that your models can easily overcome unexpected difficulties by rethinking pre-trained models using knowledge distillation and domain adaptation.
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
                    src="assets/images/Service-machine/Deep_Learning/Explainability Techniques Implementation.png"
                  />
                </div>

                <h3>Explainability Techniques Implementation</h3>
                <p className="secondsec-p">
                  Our AI fabric is knitted with transparency. Explainability techniques such as saliency maps, counterfactual explanations, and concept attribution are used by us to reveal the subtle strands of your deep learning model's decision-making process.  You will acquire insights and create trust with intelligent AI.
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
                    src="assets/images/Service-machine/Deep_Learning/Support and Collaboration.png"
                  />
                </div>
                <h3>Support and Collaboration</h3>
                <p className="secondsec-p">
                  Our shared experience is your path to profound learning. We provide extensive assistance surpassing  deployment, from data curation and model training to deployment tactics and monitoring systems. We allow your team to navigate the complexities of deep learning and drive innovation independently with a collaborative approach.
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
            <p className="secondsec-p text-center ai-custom">
              We assist organizations in a seamless journey of
              utilizing AI-driven insights, from defining clear
              business goals to implementing and monitoring <a href="https://www.codiste.com/machine-learning-development-company/">ML models development.</a>
            </p>
          </div>

          <div className="row g-5 mx-0">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="Approachcard h-100 " >
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
            Looking for data scientists to develop Data-driven products and solutions?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Contact Us Now!
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
                  What is Deep learning?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Deep learning is a kind of technique used on computers to process data easily and naturally. It teaches computers how to learn and handle complex tasks successfully just as the human brain does. These days, deep learning is widely used in all business verticals to gain more accuracy without any human intervention in data processing.
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
                  What is the difference between deep learning vs. machine learning?
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
                    <li>
                      Machine Learning (ML) uses AI-based computer algorithms to examine and learn the given data for making informed decisions. On the other hand, Deep Learning uses artificial neural networks to process tasks mimicking human brain operations.
                    </li>
                    <li>
                      ML works efficiently on smaller data sets. However, deep learning requires a large amount of data.
                    </li>
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
                  What are the real-time case studies of Deep learning?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Deep learning models are very effective in the areas where large volumes of data are used to generate values or make predictions. By using those very diverse and unstructured data, Deep Learning models enable machines to learn and solve complex problems. Some of the real time examples are Virtual assistance, automatic translation, driverless autonomous cars, chatbots, facial recognition and so.
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
                  How does deep learning work?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Deep learning technology makes computer systems learn and process things just as the human brain does. It stimulates the human brain when it comes to recognizing patterns and classifying tasks for successful completion. In simple words, a computer system that uses deep learning does the similar process of a toddler learning and identifying a cat.
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
                  How does Deep learning work in the education industry?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Deep learning in the education sector helps students to enhance their learning qualities by focusing more on understanding. It promotes students to learn principles and concepts that develop learning skills. Moreover, students engage more in the learning process and develop thinking skills. This makes students more effective in real-world jobs.
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
                  How is chatbot working with the Deep Learning model?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Chatbot with deep learning technology learns everything from the given data or the conversion/interaction between humans. It uses deep neural networks for pattern identification and learning to provide more accurate output. The more data you feed to the chatbot, the more effective and accurate the output.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Dive into the future of AI with our deep learning expertise
          </p>
          <Link href="/book-a-call" className="book-btn">
            Content Now!
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
                Let’s get connected for comprehensive data analytics services from the best deep learning company
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
export default DeepLearning;
