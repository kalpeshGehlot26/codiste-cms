import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import AllServiceBlogSlider from "../component/BlogSlider/allServiceBlogSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import AIConsultItems from "../data/services/service-items/AIConsult";
import jsonData from "../data/schema";
import AIConsutindus from "../component/service/AIConsutindus";

export const metadata = {
    title: "AI Consulting | Codiste",
    description: "We offer AI Consulting Services with advanced algo, ML, and NLP optimized solutions that revolutionize their processes for unprecedented growth.",
    images: "https://www.codiste.com/assets/images/Service-AI/AI_consult/AI_consult.webp",
    openGraph: {
        title: "AI Consulting | Codiste",
        description: "We offer AI Consulting Services with advanced algo, ML, and NLP optimized solutions that revolutionize their processes for unprecedented growth.",
        images: "https://www.codiste.com/assets/images/Service-AI/AI_consult/AI_consult.webp",
        url: 'https://www.codiste.com/ai-consulting/'
    },
    alternates: {
        canonical: 'https://www.codiste.com/ai-consulting',
    }
};

const limit = 3
const category = 43

const AIConsult = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.AIConsult) }}
            />
            <div className="bg-color">
                <div className="container container-fluid">
                    <section >
                        <div className="row firstsec ">
                            <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                                    <h1 className="all-head">Artificial Intelligence Consulting</h1>
                                    <p className="all-p my-4">Are you prepared to use artificial intelligence to grow your company to new heights? Using AI to its full potential can change how you do business, improve judgement, and spur innovation. Our AI consultants contribute important insights and in-depth topic expertise to your project and have a track record of effective AI implementations. To help you stay ahead in today's competitive environment, we debunk AI and offer useful advice.

                                    </p>
                                    <Link href="/contact" className="book-btn">Connect with AI Consultant</Link>
                                </div>
                                <div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="assets/images/Service-AI/AI_consult/AI_consult.webp" alt="Ai Development by Codiste" /></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ClientSlider />

            <div className="container container-fluid">
                <section>
                    <div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
                        <h2 className="all-head text-center">Our Expertise in AI Consulting Services</h2>
                        <p className="secondsec-p text-center ai-custom">Our state-of-the-art  <a href="https://www.codiste.com/machine-learning-development-company/">AI development consulting</a> services are made to help businesses across numerous industries. We provide a wide variety of solutions specifically crafted to match your particular demands as industry pioneers in the AI space.
                        </p>
                    </div>
                    <ServiceInnerItems serviceItems={AIConsultItems} />
                </section>
            </div>

            <div className="py-5 bg-color mt-5" >
                <div className="container container-fluid ai-custom">
                    <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
                        <h2 className="all-head text-center">
                            Why Choose Us for AI Consultation?
                        </h2>
                        <p className="secondsec-p text-center">Trying to avoid the complexity of artificial intelligence's disruptive power? Our <a href="https://www.codiste.com/machine-learning-development-company/">AI consultation</a> services are intended to demystify AI and provide your company with real outcomes.
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
                                        src="assets/images/Service-AI/AI_consult/Seasoned Expertise.png"
                                    />
                                </div>
                                <h3 className="">Seasoned Expertise</h3>
                                <p className="secondsec-p">Our team of seasoned AI consultants brings years of experience and an in-depth understanding of the subject to the room. This expertise distinguishes us apart from our competitors. We've successfully assisted countless companies on their AI journeys by providing useful, doable solutions that spur development and innovation.
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
                                        src="assets/images/Service-AI/AI_consult/Custom-Fit Solutions for Your Particular Needs.png"
                                    />
                                </div>

                                <h3>Custom-Fit Solutions for Your Particular Needs</h3>
                                <p className="secondsec-p">We believe that every company is unique. Our AI consultation services are therefore customised to meet your unique needs. We take the time to fully comprehend your goals and obstacles before developing tailored tactics that will produce the best outcomes for your company.
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
                                        src="assets/images/Service-AI/AI_consult/Seamless Integration, Real Results.png"
                                    />
                                </div>
                                <h3>Seamless Integration with Real Results</h3>
                                <p className="secondsec-p">We don't simply talk about AI. we put it to work for you. Our consultants offer practical assistance for seamlessly integrating AI technology into your business operations. We guarantee concrete and quantifiable results, whether we're reducing procedures, improving data analysis, or improving client experiences.
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
                                        src="assets/images/Service-AI/AI_consult/Training and Support.png"
                                    />
                                </div>
                                <h3>Training and Support</h3>
                                <p className="secondsec-p">We know that a smooth user adoption of AI is essential to its success. Our AI technology experts provide thorough user training and continuous support to ensure your team properly adopts our developed AI solutions. We ensure that AI seamlessly integrates into your everyday business operations and delivers results as you have expected.
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
                                        src="assets/images/Service-AI/AI_consult/Stay Ahead in the AI Landscape.png"
                                    />
                                </div>
                                <h3>Stay Ahead in the AI Landscape</h3>
                                <p className="secondsec-p">In the quick-paced world of today, keeping a head start is crucial. You can confidently navigate the constantly changing AI landscape with the help of our AI expertise. We keep you up to date on the most recent developments and assist you in making decisions that will maintain your company at the cutting edge of innovation.
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
                                        src="assets/images/Service-AI/AI_consult/A Trusted Partner for Your AI Journey.png"
                                    />
                                </div>
                                <h3>A Trusted Partner for Your AI Journey</h3>
                                <p className="secondsec-p">Selecting an AI consultant is a crucial choice. We take great delight in being your reliable partner while you explore AI. Our dedication to your success motivates us to go above and beyond to ensure you reap long-lasting, sustainable benefits from using AI.
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
                        We Help Our Clients with Result-oriented AI Strategy Consulting Services.
                    </p>
                    <Link href="/book-a-call" className="book-btn">
                        Schedule A Call
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
                                    What is AI consulting, and why do you need it?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    AI consulting is a specialised service that provides businesses with knowledgeable direction and support when building and deploying Artificial Intelligence solutions. It entails evaluating your organisation's unique requirements, spotting AI scope, and making tactical suggestions for effective AI deployment. It would help if you had AI consultancy to maximise corporate operations, obtain competitive advantages, and make data-driven decisions that spur innovation and growth.

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
                                    What industries do you serve?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    Real estate,Healthcare, banking, retail, transportation, and many other industries are among those served by Codiste's AI strategy consulting services. Our team of professionals has expertise working with clients in various fields, allowing us to customise our strategy to your particular needs.

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
                                    How should a project for AI consultancy be approached?

                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    As an AI consulting firm, we begin by comprehending your business objectives and inspecting your current data and technological setup. Then, we collaborate with you to find chances for AI-powered solutions that will aid in achieving those objectives. To make sure that your AI solutions keep adding value, we develop an implementation roadmap and offer
                                    continuous support and maintenance.
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
                                    What sort of AI services do you offer?
                                </button>
                            </h2>
                            <div
                                id="flush-collapsefour"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingfour"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    A variety of AI solutions are available from Codiste, including tools powered by LLM model like ChatGPT models, Midjourney model-driven solutions, computer vision, natural language processing, machine learning, and more. We collaborate with you to choose the technologies most suitable for your requirements and implement them in a way that connects with your current systems and procedures.
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
                                    How long does a project for an AI consultancy take?
                                </button>
                            </h2>
                            <div
                                id="flush-collapsefive"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingfive"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    The time needed to complete an AI consulting project can change based on size and complexity. To keep you informed and involved, we work with you to develop a clear plan and milestones and offer frequent updates.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blackdiv px-3">
                <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
                    <p>
                        Looking to leverage AI expertise through consulting?
                    </p>
                    <Link href="/book-a-call" className="book-btn">
                        Hire AI Expert Now
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

            {/* <div className="container container-fluid py-5">
                <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
                    <h2 className="all-blog">Blogs</h2>
                    <p className="all-p text-center">
                        Read more about artificial intelligence and modern
                        technological developments in space with our blogs.
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
                    Dive into AI Right Now!
                </h2>
                <section>
                    <div className="row  d-flex align-items-center">
                        <div className="col-lg-6 col-md-12 p-4 mb-lg-0 needsec">
                            <h2>
                                Looking for AI experts who guide you throughout the AI solution development journey?
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

export default AIConsult;
