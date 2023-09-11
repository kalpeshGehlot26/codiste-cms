import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import Blockchain from "../data/services/service-items/BlockchainCustom";
import jsonData from "../data/schema";
import BlockchainIndus from "../component/service/BlockchainIndus";


export const metadata = {
  title: "Best Custom Blockchain Development Company | Codiste",
  description: "Codiste is your custom blockchain development company. We have years of experience in developing blockchains like  Ethereum, Solana, Binance, and many more.",
  images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchain_Custom/Custom Blockchain Development.webp",
  openGraph: {
    title: "Best Custom Blockchain Development Company | Codiste",
    description: "Codiste is your custom blockchain development company. We have years of experience in developing blockchains like  Ethereum, Solana, Binance, and many more.",
    images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchain_Custom/Custom Blockchain Development.webp",
    url: 'https://www.codiste.com/custom-blockchain-development/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/custom-blockchain-development',
  }
};
const limit = 3;
const category = 56;
const CustomBlockchain = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonData.CustomBlockchain),
        }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">
                    Custom Blockchain Development
                  </h1>
                  <p className="all-p ">
                    Codiste’s Blockchain developers use database architectures and sophisticated intelligent designs to cater to your requirements. We drive disruption using our expertise in customised blockchain systems, enabling us to integrate blockchain solutions into businesses. Speed up your customised blockchain project delivery with us for rapid growth and operational improvements.
                  </p>
                  <Link href="/contact" className="book-btn">
                    Discuss Your Requirements
                  </Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    alt="Machine Learning"
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Custom Blockchain Development.webp"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ClientSlider />

      <div className="blockchain-bg py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head text-center">
                Our Wide Range of Custom Blockchain Development Services
              </h2>
              <p className="secondsec-p text-center p-4">
                Scale your future Blockchain team for start-to-finish blockchain development services, and get expert guidance on the most optimal custom Blockchain platform and networks.
              </p>
            </div>
            <ServiceInnerItems serviceItems={Blockchain} />
          </section>
        </div>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Choose Codiste for Your Custom Blockchain Development Solutions?
            </h2>
            <p className="secondsec-p text-center ai-custom">
              Codiste’s experts assist in accomplishing business goals with our Custom
              <a href="https://www.codiste.com/blockchain-development-company"> Blockchain solutions.</a>
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
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Subject Matter Expertise.png"
                  />
                </div>
                <h3 className="">Subject Matter Expertise</h3>
                <p className="secondsec-p">
                  Our lineup consists of tech titans with comprehensive knowledge of blockchain technology. Our team, which possesses in-depth knowledge of the complexities of blockchain technologies and decentralisation, tackles each project with a firm commitment to producing excellent outcomes.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Integrated Customizing.png"
                  />
                </div>
                <h3>Integrated Customizing</h3>
                <p className="secondsec-p">
                  Each organization distinctly stands out with its custom blockchain requirements. We adapt our tactics to each client's specific needs to align them with their long-term goals. Exploiting this proficient knowledge permits us to fabricate a meticulously tuned custom blockchain development that effortlessly blends with your present frameworks and operations.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Optimisation and Innovation.png"
                  />
                </div>
                <h3>Optimisation and Innovation</h3>
                <p className="secondsec-p">
                  Evolution is embodied within Custom blockchain application only remaining proactive keeps you abreast of advancements. Dedicated to ongoing evolution, our team integrates new advancements steadily. Our technological acumen allows us to stay ahead with customized blockchain solutions that cater precisely to your needs.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Secure Solutions.png"
                  />
                </div>
                <h3>Secure Solutions</h3>
                <p className="secondsec-p">
                  We have put stringent security measures and top-notch procedures in place to protect your digital information, financial transactions, and assets from any dangers. Safeguarding your blockchain technology world requires adherence to tried and tested standards such as encryption & multiple factor authentications, which we uphold diligently.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Expandability at core.png"
                  />
                </div>

                <h3>Expandability at core</h3>
                <p className="secondsec-p">
                  Scalability being vitally essential, we meticulously incorporate this aspect into all our custom blockchain solutions. From small tasks to large-scale operations, our infrastructure expands smoothly to meet evolving demands without interference.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Accelerate Development Time.png"
                  />
                </div>
                <h3>Accelerate Development Time</h3>
                <p className="secondsec-p">
                  Custom blockchain development services shouldn't come with hefty prices. To optimize expenses and allocate resources effortlessly while guaranteeing superior quality, collaboration with our clients runs deep within our strategy. Adopting an affordable approach, we provide options that align price points with customers' budgets, ensuring successful completion of projects within set limits.
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
              Our Blockchain Execution Process
            </h2>
          </div>

          <section className="blockchain-timeline">
            <div className="container">
              <div className="blockchain-timeline-item">
                <div className="blockchain-timeline-img"></div>
                <div className="blockchain-timeline-content">
                  <h2>Functional Requirement Discussion</h2>
                  <p>Understating the business use cases, recognize the problem, and decide the Blockchain platform and functionalities.</p>
                </div>
                <div className="blockchain-process">
                  <img
                    className="img-fluid mb-2"
                    loading="lazy"
                    alt="Functional Requirement Discussion"
                    src="assets/images/Serevice-blockchain/Blockchain_Custom/Functional Requirement Discussion.png"
                  />
                </div>

              </div>
              <div className="blockchain-timeline-item">
                <div className="blockchain-timeline-img"></div>
                <div className="blockchain-timeline-content">
                  <h2>Prototyping and Development</h2>
                  <p>Design and development of the secure Blockchain solution comprehensively considering network topologies, Smart contracts, and so on.</p>
                </div>
              </div>
              <div className="blockchain-timeline-item">
                <div className="blockchain-timeline-img"></div>
                <div className="blockchain-timeline-content">
                  <h2>Build, Test, and Repeat</h2>
                  <p>Identifying and fixing bugs by QAs and analysing performance through performance and security testing.
                  </p>
                </div>
              </div>

              <div className="blockchain-timeline-item">
                <div className="blockchain-timeline-img"></div>
                <div className="blockchain-timeline-content">
                  <h2>Blockchain Solution Deployment</h2>
                  <p>Set up network, smart contracts, etc. before deployment to ensure the Blockchain solutions meet specifications.</p>
                </div>
              </div>
              <div className="blockchain-timeline-item">
                <div className="blockchain-timeline-img"></div>
                <div className="blockchain-timeline-content">
                  <h2>Maintenance and Upgrades​</h2>
                  <p>Updating software, upgrading new features, monitoring network, etc. to keep Blockchain platform secure and up to date.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}

      <div className="py-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Our Blockchain Execution Process
            </h2>
            <p className="secondsec-p text-center">
              Our strong team of blockchain developers brings perfection to your custom blockchain development needs following the below process.
            </p>
          </div>

          <div className="new-container container container-fluid w-75">
            <div className="main-timeline">
              <div className="timeline_item">
                <div className="date-content order_1b">
                  <div className="date-outer">
                    <span className="date">
                      <img
                        className="img-fluid mb-2"
                        loading="lazy"
                        alt="Functional Requirement Discussion"
                        src="assets/images/Serevice-blockchain/Blockchain_Custom/Functional Requirement Discussion.png"
                      />
                    </span>
                  </div>
                </div>
                <div className="icon order_2b"></div>
                <div className="timeline-content order_3b col-md">
                  <h3>Functional Requirement Discussion</h3>
                  <p className="secondsec-p">
                    Understating the business use cases, recognize the problem, and decide the Blockchain platform and functionalities.
                  </p>
                </div>
              </div>

              <div className="timeline_item">
                <div className="date-content order_1">
                  <div className="date-outer">
                    <span className="date">
                      <img
                        className="img-fluid mb-2"
                        loading="lazy"
                        alt="Prototyping and Development"
                        src="assets/images/Serevice-blockchain/Blockchain_Custom/Prototyping and Development.png"
                      />
                    </span>
                  </div>
                </div>
                <div className="icon order_2"></div>
                <div className="timeline-content order_3 col-md">
                  <h3>Prototyping and Development</h3>
                  <p className="secondsec-p">
                    Design and development of the secure Blockchain solution comprehensively considering network topologies, Smart contracts, and so on.
                  </p>
                </div>
              </div>

              <div className="timeline_item">
                <div className="date-content order_1b">
                  <div className="date-outer">
                    <span className="date">
                      <img
                        className="img-fluid mb-2"
                        loading="lazy"
                        alt="Build, Test, and Repeat"
                        src="assets/images/Serevice-blockchain/Blockchain_Custom/Build, Test, and Repeat.png"
                      />
                    </span>
                  </div>
                </div>
                <div className="icon order_2b"></div>
                <div className="timeline-content order_3b col-md">
                  <h3>Build, Test, and Repeat</h3>
                  <p className="secondsec-p">
                    Identifying and fixing bugs by QAs and analysing performance through performance and security testing.
                  </p>
                </div>
              </div>

              <div className="timeline_item">
                <div className="date-content order_1">
                  <div className="date-outer">
                    <span className="date">
                      <img
                        className="img-fluid mb-2"
                        loading="lazy"
                        alt="Blockchain Solution Deployment"
                        src="assets/images/Serevice-blockchain/Blockchain_Custom/Blockchain Solution Deployment.png"
                      />
                    </span>
                  </div>
                </div>
                <div className="icon order_2"></div>
                <div className="timeline-content order_3 col-md">
                  <h3>Blockchain Solution Deployment</h3>
                  <p className="secondsec-p">
                    Set up network, smart contracts, etc. before deployment to ensure the Blockchain solutions meet specifications.
                  </p>
                </div>
              </div>

              <div className="timeline_item">
                <div className="date-content order_1b">
                  <div className="date-outer">
                    <span className="date">
                      <img
                        className="img-fluid mb-2"
                        loading="lazy"
                        alt="Maintenance and Upgrades"
                        src="assets/images/Serevice-blockchain/Blockchain_Custom/Maintenance and Upgrades​.png"
                      />
                    </span>
                  </div>
                </div>
                <div className="icon order_2b"></div>
                <div className="timeline-content order_3b col-md">
                  <h3>Maintenance and Upgrades​</h3>
                  <p className="secondsec-p">
                    Updating software, upgrading new features, monitoring network, etc. to keep Blockchain platform secure and up to date.
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
            Want to develop a scalable blockchain application successfully?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Hire Blockchain Consultant
          </Link>
        </div>
      </div>

      <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center">
              <h2 className="all-blog text-center">Technology Stack</h2>
              <p className="all-p text-center">
                We pride ourselves on our proven track record
                with 20+ technologies and delivering innovative,
                customized IT solutions.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="tech-style" >
                  <li >
                    <img
                      className="img-fluid" loading="lazy" alt="Binance_Logo"
                      src="assets/images/tech/Binance_Logo.png"
                    />
                    <p className="text-uppercase">Binance</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Corda"
                      src="assets/images/tech/Corda.png"
                    />
                    <p className="text-uppercase">Corda</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="ethereum"
                      src="assets/images/tech/ethereum.png"
                    />
                    <p className="text-uppercase">ethereum</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="fantom"
                      src="assets/images/tech/fantom.png"
                    />
                    <p className="text-uppercase">fantom</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Graphene"
                      src="assets/images/tech/Graphene.png"
                    />
                    <p className="text-uppercase">Graphene</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="hyperledger"
                      src="assets/images/tech/hyperledger.png"
                    />
                    <p className="text-uppercase">hyperledger</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Java"
                      src="assets/images/tech/Java.png"
                    />
                    <p className="text-uppercase">Java</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="polygon"
                      src="assets/images/tech/polygon.png"
                    />
                    <p className="text-uppercase">polygon</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="python"
                      src="assets/images/tech/python.png"
                    />
                    <p className="text-uppercase">python</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="tron"
                      src="assets/images/tech/tron logo.png"
                    />
                    <p className="text-uppercase">tron</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="solidity"
                      src="assets/images/tech/solidity.png"
                    />
                    <p className="text-uppercase">solidity</p>
                  </li>
                  <li>
                    <img
                      className="img-fluid" loading="lazy" alt="Solana"
                      src="assets/images/tech/Solana.png"
                    />
                    <p className="text-uppercase">Solana</p>
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
                Being a trusted Machine Learning Consultant, we
                have worked with a wide range of sectors on a
                global scale and have been a part of their
                growth stories.
              </p> */}
            </div>
            <BlockchainIndus />
          </section>
        </div>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Our Engagement Models
            </h2>
            <p className="all-p text-center">
              Looking for a Top Blockchain services provider near you? We would be happy to serve you with result-oriented Custom Blockchain software development services. Explore our flexible hiring models for your Blockchain development projects.
            </p>
          </div>
        </div>
        <div className="container cardcontainer">
          <div className="card">
            <div className="Newbox">
              <div className="content">
                <h2>01</h2>
                <h3>Fixed Engagement Model</h3>
                <p>
                  Get a predefined budget and timetable that is tailored for Blockchain solutions projects with well defined scope and needs. This strategy, which is best for small to medium projects, guarantees cost predictability and provides the stated deliverables within the scheduled time range.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="Newbox">
              <div className="content">
                <h2>02</h2>
                <h3>Time and Material Engagement Model</h3>
                <p>
                  Our Time and Material Engagement Model is flexible and adaptable, making it ideal for Custom blockchain based services projects with changing requirements and undefined scope. As a result, there is more flexibility in adapting changes, scalability, and continued cooperation throughout the development lifecycle because you only pay Custom blockchain experts hourly rate actually used on the project.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="Newbox">
              <div className="content">
                <h2>03</h2>
                <h3>Hire Dedicated Team Model</h3>
                <p className="blockchain-modellink">
                  Strengthen your internal resources by putting together a group of talented <a href="https://www.codiste.com/blockchain-consulting">blockchain project Consultants</a> and engineers that are only committed to the success of your project. This model offers the benefit of an extended blockchain tech team that works extremely collaboratively to meet the needs and goals of your organisation while guaranteeing smooth communication, control, and transparency.
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
                  What is public and private blockchain?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Public blockchain allows anyone to join for free and take part in the core activities of the network without any interruption. On the other hand, a private blockchain is the right opposite to it. It is a closed blockchain network that allows only selective users to participate in it.
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
                  What is POC (Proof of Concept)?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  POC is an acronym of Proof of Concept which is mainly used in the product development process across the industries from all verticals. It is like demonstrating or realising certain concepts, products, services, or a solution that has a high potential in a real-world application. In simple wording, it determines the viability and feasibility of the project.
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
                  How can POC development work?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Industries from all fields use POC for various aspects like product development, business plans, and so on. When it comes to development work, POC is very effective in identifying the potential issues of product development right from the beginning to the product owner or project manager. In addition, it is used to identify the right tools and resources for product development.
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
                  Are blockchain wallet apps safe?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Unlike other wallets, blockchain wallets use both public and private encryption keys that ensure the safety of the transaction data. It offers multiple levels of security that protect user’s money from scammers or hackers. To validate an online payment, blockchain wallets interact with multiple blockchains before initiating the user’s request to buy or sell cryptocurrencies.
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
                  What is the importance of Private Blockchain?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Since private blockchain has fewer network nodes it can easily be scaled according to the business requirements.</li>
                    <li>A Private blockchain is a smaller network so it can process more throughputs.</li>
                    <li>Basically, private blockchains are owned by organisations or enterprises. So there will be no cost for placing blocks on it.</li>
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
                  What is the importance of Public Blockchain?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Anyone can participate in a public blockchain network and it has no central authority to control the network.</li>
                    <li>Public blockchain networks use public keys for the encryption of all communication.</li>
                    <li>All transactions held in public blockchain networks are highly transparent; this makes everyone aware of the transaction.</li>
                    <li> Public blockchain networks are a preferred one for cryptocurrency transactions that require a high level of security and transparency.</li>
                  </ul>
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
                  What is the purpose of Private Blockchain?
                </button>
              </h2>
              <div
                id="flush-collapseseven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingseven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Mostly, businesses, organisations , government services, insurance agencies, and so on use private blockchain networks. The main purpose of utilising private blockchain is to have highly secured transactions and to have a transparent record-keeping system. Moreover, a private blockchain is the best for storing sensitive information with high security along with greater control over user access rights.
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
                  What is the purpose of Public Blockchain?
                </button>
              </h2>
              <div
                id="flush-collapseeight"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingeight"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Public blockchain networks are open to all anyone can easily join and get the privilege of viewing, modifying, and confirming the transaction. Mostly, public blockchain networks are used in exchanging cryptocurrencies and mining. Wanted to create a permissionless, non-restrictive, and distributed ledger network with 100% transparency? Then preferring public blockchain would be the best.
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
                  What is the main difference between Private and public Blockchains?
                </button>
              </h2>
              <div
                id="flush-collapsenine"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingnine"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li><b>Access:</b> Only invited or selective users are allowed to participate in a private blockchain. But in a public blockchain network, anyone can join for free.</li>
                    <li><b>Speed:</b> Communications and transactions performed in a private blockchain network are much faster than public blockchain networks.</li>
                    <li><b>Security:</b> Private blockchain has a centralised system for storing and managing data which is more prone and less secure. Public blockchain uses a decentralised system which is more secure for all communication and transactions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Hire a Blockchain Consultant From Codiste within a Week, not Months.
          </p>
          <Link href="/book-a-call" className="book-btn">
            Let’s Connect
          </Link>
        </div>
      </div>

      <div className="py-5" >
        <div className="container container-fluid">
          <div className="d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head">Case Study</h2>
          </div>
          <div className="row d-flex align-items-center justify-content-between case-sec">
            <div className="col-lg-5 col-md-6 col-sm-12  order-2 order-md-1 case-sec p-4">
              <div className=" ">
                <h2 className="">
                  CounterTen – Solana Marketplace
                </h2>
                <p className="all-p">
                  CounterTEN is a Solana-based NFT platform
                  that enables brands to create and sell NFTs
                  for a variety of purposes, from event access
                  and product launches to collectibles and
                  memberships. The platform provides
                  flexibility for businesses to increase
                  revenue and engagement, and has already been
                  used successfully by luxury car and clothing
                  brands. CounterTEN is a game-changer for
                  brands looking to connect with their
                  customers in an innovative way using NFTs.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/portfolio/counterten-solana-marketplace"
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
                src="assets/images/case-couter10/Counterten.png"
                alt="CounterTen - Digital Collectible platform for Loyalty, Brands and events"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-color py-5" >
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head text-center">
                Their Skyrocketing Success is Our Feedback!
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
                      Their attention to detail and
                      willingness to work under pressure
                      was impressive.Codiste pvt ltd has
                      completed all assigned tasks and
                      performed well during the
                      engagement. The client lauded their
                      attention to detail and timely
                      delivery of outputs. In the end, no
                      major issues or vulnerabilities were
                      found in the final platform.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        loading="lazy"
                        className="img-fluid"
                        alt="iCrowsel"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="White Hat DAO"
                          src="assets/images/client-logos/White Hat DAO.png"
                          loading="lazy"
                        />
                      </div>
                      <h5>White Hat DAO</h5>
                      <p>
                        Core Contributor
                        <br />
                        Sydney, Australia
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
                        loading="lazy"
                        alt="iCrowsel"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="DiveWallet - Decentralised Safest Crypto and digital assets wallet"
                          src="assets/images/client-logos/DiveWallet Logo.png"
                          loading="lazy"
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
                      They communicate clearly and outline
                      the product roadmap for us. It has
                      been very easy to work with them.
                      Made us profitaable on NFT
                      Marketplace and which made amazing
                      journey.
                    </h3>
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img
                        src="assets/images/iCrowsel.png"
                        className="img-fluid"
                        loading="lazy"
                        alt="iCrowsel"
                      />
                      <div>
                        <img
                          className="img-fluid my-4 client-logo"
                          alt="Ninza NFT"
                          src="assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png"
                          loading="lazy"
                        />
                      </div>
                      <h5>Ninza NFT</h5>
                      <p>
                        CoFounde
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
        <h2 className="all-head text-center mb-lg-5 mb-0">Get Started with Secure Blockchain Solution!</h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12  needsec p-4">
              <h2>
                Looking to hire experienced and expert Blockchain developers?
              </h2>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="need-block h-100">
                <h2 className="">
                  How Can We <b>Help?</b>{" "}
                </h2>
                <CaseStudyForm text="Tell Us Your Requirements" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default CustomBlockchain;
