import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import BlockContract from "../data/services/service-items/BlockchainContract";
import jsonData from "../data/schema";
import BlockchainIndus from "../component/service/BlockchainIndus";


export const metadata = {
  title: "Smart Contracts Development Company | Blockchain Development | Codiste",
  description: "Codiste a Smart Contract Development Company has a proven track record of creating digital solutions for businesses of all sizes and across various industries.",
  images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchian_Contract/Custom Smart Development Contracts.webp",
  openGraph: {
    title: "Smart Contracts Development Company | Blockchain Development | Codiste",
    description: "Codiste a Smart Contract Development Company has a proven track record of creating digital solutions for businesses of all sizes and across various industries.",
    images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchian_Contract/Custom Smart Development Contracts.webp",
    url: 'https://www.codiste.com/smart-contracts-development/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/smart-contracts-development',
  }
};
const limit = 3;
const category = 56;
const BlockchainContract = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonData.BlockchainContract),
        }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">
                    Custom Smart Development Contracts
                  </h1>
                  <p className="all-p ">
                    A Top Smart Contract Development Company with immense experience in delivering innovative software, Codiste, designs customized smart contract solutions for businesses from profuse domains and assists startups with smart contract development to match up with market pace.
                  </p>
                  <Link href="/contact" className="book-btn">
                    Click for software consulting
                  </Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    alt="Custom Smart Development Contracts"
                    src="assets/images/Serevice-blockchain/Blockchian_Contract/Custom Smart Development Contracts.webp"
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
                Our Custom Smart Development Contracts Services
              </h2>
              <p className="secondsec-p text-center ai-custom">
                From healthcare to manufacturing, we, being a reliable smart contract development company, automating business operations with our result-orientated smart contract development services.
              </p>
            </div>
            <ServiceInnerItems serviceItems={BlockContract} />
          </section>
        </div>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Choose Us For Blockchain Smart Contract Development Services?
            </h2>
            <p className="secondsec-p text-center ai-custom">
              Having expertise in working with <a href="https://www.codiste.com/blockchain-development-company">Blockchain technology</a>, we deliver solutions based on Ethereum, web3, <a href="https://www.codiste.com/nft-development-company">NFT</a>, <a href="https://www.codiste.com/cryptocurrency-development-company">cryptocurrency</a> exchange, and more implementing our intelligent strategies.
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
                    src="assets/images/Serevice-blockchain/Blockchian_Contract/Subject Matter Specialists.png"
                  />
                </div>
                <h3 className="">Subject Matter Specialists</h3>
                <p className="secondsec-p">
                  Whether you are an enterprise or a startup- we get your struggle. Hiring reliable, dedicated blockchain developers while keeping up with the ever-changing market environment has always been challenging. But our full-scale teams are ready to fill any skill gap.
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
                    src="assets/images/Serevice-blockchain/Blockchian_Contract/End-to-End Support.png"
                  />
                </div>
                <h3>End-to-End Support</h3>
                <p className="secondsec-p">
                  We can hire smart contact developer and also a dedicated blockchain development team that understands and fulfils your needs the best. If you lack a BA, a PM, a designer, a DevOps specialist, or a QA engineer- let us know, and we are here to support you in everything.
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
                    src="assets/images/Serevice-blockchain/Blockchian_Contract/Data Breach Prevention.png"
                  />
                </div>
                <h3>Data Breach Prevention</h3>
                <p className="secondsec-p">
                  Our clients come from different domains, varying from health care to the food industry. Thus, we ensure that we offer our clients the best security using blockchain, robust encryption, access controls, and regular audits. We run proactive threat monitoring to safeguard sensitive data and ensure client trust.
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
                    src="assets/images/Serevice-blockchain/Blockchian_Contract/Improvised Productivity.png"
                  />
                </div>
                <h3>Improvised Productivity</h3>
                <p className="secondsec-p">
                  We offer and improvise efficiency in smart contract development, followed by a thorough survey of the five core areas of model efficiency (spanning modelling techniques, infrastructure, and hardware) and the seminal work there. We also present an experiment-based guide and code for practitioners to optimize their model training and deployment.
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
                    src="assets/images/Serevice-blockchain/Blockchian_Contract/Flexibility and Adaptability.png"
                  />
                </div>
                <h3>Flexibility and Adaptability</h3>
                <p className="secondsec-p">
                  We use cloud-based infrastructure and auto scale algorithm techniques to maximize performance and minimize the cost. This technology helps our staff to make the right allocation of available resources, logical distributed computing, and configure scalability to harbour huge amounts of data.
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
                    src="assets/images/Serevice-blockchain/Blockchian_Contract/Pocket-friendly TCO on Projects.png"
                  />
                </div>
                <h3>Pocket-friendly TCO on Projects</h3>
                <p className="secondsec-p">
                  We ensure the best productivity of our clients with minimal spending. To provide that, we offer our client end-to-end support to optimize the contract. Offering a variety of smart contract templates with flexibility of customization, we try to meet your specific needs, which can save you time and money.
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
            Are you in search of an in-house cross-functional team for your smart contract-based business solutions?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Hire Blockchain Developer
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
                  What is a smart contract?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A smart contract is a simple computer program with the capability of self-executing. The program is designed to automate the set of actions that are mentioned in an agreement or contract. The ultimate aid of this program is to create awareness and leverage the outcome of the agreement without any time loss.
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
                  How do smart contracts work?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Smart Contracts are computer-generated programs designed with self-executing ability. They operate efficiently from a dedicated virtual machine by encoding the business logic. Here is how it works.
                  <ul>
                    <li>Criteria for smart contracts are defined based on certain business events (Payment process, Shipment, and so on).</li>
                    <li>The program is encoded with complex business operations.</li>
                    <li>After the program is completed, it undergoes security testing.</li>
                    <li>Finally, an internal expert within a company handles the smart contracts.  </li>
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
                  How to write Smart contracts in blockchain?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>To write an efficient smart contract in blockchain, you first need to understand the basics of blockchain such as consensus algorithms, distributed ledgers, cryptographic hashing, and so on.</li>
                    <li>Secondly, you need to choose the right blockchain platform like Ethereum, Hyperledger, Corda, and so on.</li>
                    <li>For seamless writing, you need to be well-versed in the Syntax and data types of Solidity language.</li>
                    <li>Write the contract using code and test it against different scenarios.</li>
                    <li>Finally, deploy it on the chosen blockchain platform.</li>
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
                  How Smart Contract Consultant work?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A smart contract consultant guides businesses on the effective usage of blockchain technology for various contracts and agreements. They develop a successive strategy and a complete roadmap for developing safe and compliant contracts according to your business needs. In addition, they guide on developing cost-effective solutions for training and keeping the existing contract secure and up-to-date.
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
                  How Can I hire a smart Contract Consultant?
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
                    <li>First, understand your project/contract requirements.</li>
                    <li>Have a clear mindset on the skills and expertise you need for your project.</li>
                    <li>Craft your project details and requirements along with the preferred industry domain knowledge you are looking for. Don’t forget to mention whether you are looking for full-time, hourly-basis, or project-based consultants.</li>
                    <li>Make use of various sourcing channels, job boards, and marketplaces. You can even ask for referrals from your known group.</li>
                    <li>After reaching a desired and best smart contract development services provider company like Codiste/development team, use online for profile and review check.</li>
                    <li>Feel free to have a consultation with the company/individual to check the capability and knowledge.</li>
                    <li>Finally, decide to hire a smart contract developer by conveying your budget.</li>
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
                  What are the major components of a smart contract?
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
                    <li>Both parties involved in an agreement/contract.</li>
                    <li>Terms and conditions listed in an agreement/contract.</li>
                    <li>Desire actions to be taken upon the agreement/contract written by using a programming language like Solidity.</li>
                    <li>Digital signatures of both parties involved in an agreement/contract.</li>
                    <li>Finally, trigger an event in which a smart contract should start executing the desired actions automatically.</li>
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
                  What is Smart Contract Architecture and why is it important?
                </button>
              </h2>
              <div
                id="flush-collapseseven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingseven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A Smart Contract Architecture is the design pattern of a digital contract held between the two parties (buyer and seller). It is written by using a computer programming language like Solidity for a variety of automated desired tasks as per the contract requirements.
                  The architecture of a smart contract is very important because it ensures that contract actions are performed automatically in a secure, transparent, and efficient way.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Looking for technical brains for your Smart Contract Development projects?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Ask us now!
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
        <h2 className="all-head text-center mb-lg-5 mb-0">Let’s talk About Smart Contract Development Needs</h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12  needsec p-4">
              <h2>
                Automate your business process with our innovative Smart Contract Development Services.
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
export default BlockchainContract;
