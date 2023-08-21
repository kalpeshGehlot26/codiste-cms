import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import AIGenerative from "../data/services/service-items/AIGenerative";
import jsonData from "../data/schema";
import AIConsutindus from "../component/service/AIConsutindus";

export const metadata = {
  title: "Generative AI Development | AI | Codiste",
  description: "Discover how we create Generative AI models to amplify your business's innovation. Explore how Generative AI model works to generate art, music, text, and more.",
  images: "https://www.codiste.com/assets/images/Service-AI/AI_Generative/Generative AI.webp",
  openGraph: {
    title: "Generative AI Development | AI | Codiste",
    description: "Discover how we create Generative AI models to amplify your business's innovation. Explore how Generative AI model works to generate art, music, text, and more.",
    images: "https://www.codiste.com/assets/images/Service-AI/AI_Generative/Generative AI.webp",
    url: 'https://www.codiste.com/generative-ai-development/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/generative-ai-development',
  }
};

const limit = 3
const category = 43

const GenrativeAI = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.AIGenerative) }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section >
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">Generative AI</h1>
                  <p className="all-p my-4">Capitalise on generative AI's capabilities in your digital inventions. Our talented team of experts carefully created strong Generative AI models and tools, similar to ChatGPT, DALL-E, and Midjurney. Our AI professionals have a thorough understanding of several different AI technologies which allowing us to provide generative AI solutions that are specifically suited to the requirements of your organisation. Your search for premier generative AI development services that meet the particular needs of your business is over right now.
                  </p>
                  <Link href="/contact" className="book-btn">Talk Our AI Experts</Link>
                </div>
                <div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/Service-AI/AI_Generative/Generative AI.webp" alt="Ai Development by Codiste" /></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ClientSlider />

      <div className="container container-fluid">
        <section>
          <div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
            <h2 className="all-head text-center">Our AI Generative Services</h2>
            <p className="secondsec-p text-center">At Codiste, we provide Generative AI services designed to be enterprise-ready and bring business opportunities.
            </p>
          </div>
          <ServiceInnerItems serviceItems={AIGenerative} />
        </section>
      </div>

      <div className="py-5 bg-color mt-5" >
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Codiste for Generative AI Development?
            </h2>
            <p className="secondsec-p text-center">Here are some valid reasons why we are one of the trusted Generative AI companies in the digital space.
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
                    src="assets/images/Service-AI/AI_Generative/Seasoned Expertise.png"
                  />
                </div>
                <h3 className="">Seasoned Expertise</h3>
                <p className="secondsec-p">Accept the knowledge we've gained from spending more than a decade immersed in the AI landscape. It's like having a wealth of knowledge at your disposal to direct your AI dreams towards glorious success tales.
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
                    src="assets/images/Service-AI/AI_Generative/AI-Unified Versatile Minds.png"
                  />
                </div>

                <h3>AI-Unified Versatile Minds</h3>
                <p className="secondsec-p">Meet the great senior AI developers who make up our team and each one brings something special to the table. They are the wizards who approach hard problems with a dash of magic because of their breadth of knowledge spanning AI, NLP, and Big Data.
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
                    src="assets/images/Service-AI/AI_Generative/Specially-Curated Solutions.png"
                  />
                </div>
                <h3>Specially-Curated Solutions</h3>
                <p className="secondsec-p">Think about having your own AI tailor. We design solutions that are as special as your requirements. Our exclusive recipe? A thorough understanding of a variety of AI models, ranging from the deftness of moderation and the subtlety of embeddings to the ground-breaking miracles of Stable Diffusion, Whisper, and other models.
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
                    src="assets/images/Service-AI/AI_Generative/Cost-effective.png"
                  />
                </div>
                <h3>Cost-effective</h3>
                <p className="secondsec-p">At Codiste, we employ experts with in-depth industry knowledge who charge 60% less than software engineers in other nations. Lowering the high expenses of physical labour, organisations can increase profitability by employing AI and LLM professionals.
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
                    src="assets/images/Service-AI/AI_Generative/Punctual Delivery.png"
                  />
                </div>
                <h3>Punctual Delivery</h3>
                <p className="secondsec-p">We consistently provide solutions of the anticipated calibre. With several years of know-how in the IT business, first-rate corporate framework archives, and best-in-class infrastructure, we will deliver your digital solution on schedule.
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
                    src="assets/images/Service-AI/AI_Generative/Result-Oriented.png"
                  />
                </div>
                <h3>Result-Oriented</h3>
                <p className="secondsec-p">Despite any limitations that can slow down progress, we approach the creation of digital products powered by generative AI with a forward-looking perspective. We strive to make certain that quality standards are met in order to produce products that are results-driven.
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
              Our AI Consultation Approach
            </h2>
            <p className="secondsec-p text-center">We adopt a practical and customer-centricity strategy to offer tangible outcomes for organisations looking for disruptive AI solutions.

            </p>
          </div>

          <div className='row g-5 d-flex justify-content-center mx-0'>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice1-box h-100'>
                <div className='newservice1-red'> <div className='newservice1-circle'>1</div></div>
                <h3>Understanding Your Objectives</h3>
                <p className="secondsec-p">We start by thoroughly understanding your organisation's unique challenges and requirements. Gaining knowledge of your goals enables us to customise our AI consulting approach to tackle your particular problems and coordinate our efforts with your intended AI development and deployment strategy.
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice1-box h-100'>
                <div className='newservice1-red'> <div className='newservice1-circle'>2</div></div>
                <h3>Tailored Solutions for Tangible Outcomes</h3>
                <p className="secondsec-p">Our AI experts work directly with you to develop individualised plans tailored to your particular use cases. Our main objective is to ensure that our solutions produce quantifiable outcomes that affect your organisation's success.</p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice1-box h-100'>
                <div className='newservice1-red'> <div className='newservice1-circle'>3</div></div>
                <h3>Data-Driven Decision-Making</h3>
                <p className="secondsec-p">
                  We implement a data-driven strategy,To ensuring that each decision and recommendation is backed by thorough research and understanding. We provide you with smart data interpretation and analysis so you can make choices that result in the most effective AI.
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice1-box h-100'>
                <div className='newservice1-red'> <div className='newservice1-circle'>4</div></div>
                <h3>Collaborative Alliance</h3>
                <p className="secondsec-p">Your thoughts and criticisms will be taken into consideration throughout the development process because we place a high value on open and honest communication. Our collaborative approach ensures that the final AI solutions meet your expectations.
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <div className='newservice1-box h-100'>
                <div className='newservice1-red'> <div className='newservice1-circle'>5</div></div>
                <h3> Future-Proofing Your AI Strategy</h3>
                <p className="secondsec-p">Using a forward-thinking methodology, we design AI systems with scalability in mind, enabling smooth expansion and growth. We keep an eye on market developments and trends so that we can provide your AI strategy with the newest technologies, keeping your business at the forefront of AI-powered innovation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Let’s create realistic human-like solutions with Generative AI.
          </p>
          <Link href="/book-a-call" className="book-btn">
            Ask Us How!
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
                  What is Generative AI?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Generative AI also known as Gen AI is an emerging tech that combines Artificial Intelligence
                  (AI) and Machine Learning (ML) to produce original and quality content. Gen AI has the
                  capability to create new realistic images, unique text, music, and more by learning patterns
                  from existing data. GPT-3 is a perfect example; it generates human-like text based on
                  prompts and context.
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
                  What are Generative AI Services?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Generative AI services use ML models to generate unique and quality content, including text, images, music, and more. By utilising Gen AI services, users can create accurate output by providing inputs promptly.  These days AI services are prominently used in content creation, design assistance, and for solving complex problems.
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
                  What is an AI voice generator?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  AI voice generators are a type of technology that utilises artificial intelligence, specifically text-to-speech models, to transform written text into spoken words. Voice generators powered by AI make use of advanced algorithms and DL techniques to stimulate human speech patterns, tone, and so on to produce natural-sounding audio. With this advanced technology, AI becomes more preferred tech for developing virtual assistants, audiobook production, accessibility tools, and more.
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
                  How to create AI generated images?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  To create AI-generated images, use generative models like GANs or VAEs.<br />
                  Firstly, collect and reprocess a diverse image dataset. Secondly, you have to design and train the chosen model, adjusting hyper parameters. Now, it’s time to validate results using metrics. In the next step, you have to generate images by inputting noise or vectors.
                  Furthermore, refine the model iteratively, considering architecture improvements and Deploy for image creation. That’s it.
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
                  How to sell an AI generated art?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  To sell AI-generated art, follow these steps:

                  <div class="listbox">
                    <ul id="first-list">
                      <li>
                        <span></span>
                        <div class="title">Create High-Quality Art</div>
                        <div class="info">Train your AI to produce compelling artworks.</div>
                        <div class="time">
                          <span>1</span>
                        </div>
                      </li>
                      <li>
                        <span></span>
                        <div class="title">Legal Considerations</div>
                        <div class="info">Ensure ownership rights and permissions for generated content.</div>
                        <div class="time">
                          <span>2</span>

                        </div>
                      </li>
                      <li>
                        <span></span>
                        <div class="title">Build an Online Presence</div>
                        <div class="info">Create a website or use platforms like Etsy, NFT marketplaces, or galleries.</div>
                        <div class="time">
                          <span>3</span>
                        </div>
                      </li>
                      <li>
                        <span></span>
                        <div class="title">Marketing</div>
                        <div class="info"> Showcase your process, uniqueness, and value.</div>
                        <div class="time">
                          <span>4</span>
                        </div>
                      </li>
                      <li>
                        <span></span>
                        <div class="title">Engage Collectors</div>
                        <div class="info">Interact with potential buyers, offer limited editions, and provide authenticity certificates.</div>
                        <div class="time">
                          <span>5</span>
                        </div>
                      </li>
                      <li>
                        <span></span>
                        <div class="title">Pricing</div>
                        <div class="info">Determine fair pricing based on market trends and uniqueness.</div>
                        <div class="time">
                          <span>6</span>
                        </div>
                      </li>
                      <li>
                        <span></span>
                        <div class="title">Fulfil Orders</div>
                        <div class="info">Deliver high-resolution files or physical prints promptly.</div>
                        <div class="time">
                          <span>7</span>
                        </div>
                      </li>
                      <li>
                        <span></span>
                        <div class="title">Networking</div>
                        <div class="info">Collaborate, attend art events, and leverage social media to expand reach.</div>
                        <div class="time">
                          <span>8</span>

                        </div>
                      </li>

                    </ul>
                  </div>
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
          Imagine Business with Generative AI!
        </h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12 p-4 mb-lg-0 needsec">
              <h2>
                We Solve Toughest Challenges of Your Business with Management Consulting Services.
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

export default GenrativeAI;
