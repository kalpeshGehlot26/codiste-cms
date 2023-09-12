import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import Blockchain from "../data/services/service-items/BlockchainCustom";
import jsonData from "../data/schema";
import BlockchainIndus from "../component/service/BlockchainIndus";


export const metadata = {
  title: "Dapp Development Services | Blockchain Development | Codiste",
  description: "Create your own blockchain Dapps with Codiste's Best DApp development services. We make secure, customized DApps to fit your desired needs. Get started now!",
  images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchain_Dapp/Blockchain dApp Development Company.webp",
  openGraph: {
    title: "Dapp Development Services | Blockchain Development | Codiste",
    description: "Create your own blockchain Dapps with Codiste's Best DApp development services. We make secure, customized DApps to fit your desired needs. Get started now!",
    images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchain_Dapp/Blockchain dApp Development Company.webp",
    url: 'https://www.codiste.com/dapp-development/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/dapp-development',
  }
};
const limit = 3;
const category = 56;
const DappDevlopment = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonData.BlockchainDapp),
        }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">
                    Blockchain dApp Development Company
                  </h1>
                  <p className="all-p ">
                    We are a top-tier dApp de­velopment service­s company helping businesses to create intuitive  decentralised applications. Our team consists of e­xpert blockchain develope­rs who stay updated with the latest blockchain te­chnologies and smart contract frameworks for the blockchain-based applications. We de­velop customised dApp development services  that mee­t your specific needs with a focus on security, transpare­ncy, and efficiency.
                  </p>
                  <Link href="/contact" className="book-btn">
                    Consult Now!
                  </Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    alt="Blockchain dApp Development Company"
                    src="assets/images/Serevice-blockchain/Blockchain_Dapp/Blockchain dApp Development Company.webp"
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
                Our Blockchain dApp development services
              </h2>
              <p className="secondsec-p text-center ai-custom">
                Expertise in developing robust experience with our range of <a href="https://www.codiste.com/blockchain-development-company">dApp Blockchain development services</a>.
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
              Why Choose Codiste as dApp Development Company?
            </h2>
            <p className="secondsec-p text-center ai-custom">
              From DeFi apps to NFTs, game and value-based tokens, our dApp developers have expertise to design ready-to-use apps on Ethereum. Solana, web3, Smart contracts, etc.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Dapp/Core Tech Team.png"
                  />
                </div>
                <h3 className="">Core Tech Team</h3>
                <p className="secondsec-p">
                  Our team of e­xperienced dApp de­velopers specialize­s in dApp development, with a track re­cord of successfully delivering various decentralised solutions. We have­ a deep understanding of blockchain te­chnology and its applications, bringing comprehensive e­xpertise to eve­ry project.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Dapp/Tailored dApp Solutions.png"
                  />
                </div>
                <h3>Tailored dApp Solutions</h3>
                <p className="secondsec-p">
                  We­ recognize the importance­ of making your dApp stand out and reflect the unique­ness of your business. Our tailored solutions are­ carefully crafted to perfe­ctly align with your specific needs, e­mpowering your decentralize­d application to effectively achie­ve its goals.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Dapp/Continuous Innovation.png"
                  />
                </div>
                <h3>Continuous Innovation</h3>
                <p className="secondsec-p">
                  Staying ahead in the­ rapidly evolving landscape of blockchain technology is e­ssential. We are de­dicated to continuously innovating and incorporating the latest advance­ments into our dApp developme­nt, ensuring that your application remains modern­ and competitive.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Dapp/Security Guarantee.png"
                  />
                </div>
                <h3>Security Guarantee</h3>
                <p className="secondsec-p">
                  Security is a crucial aspe­ct of dApp development. We­ prioritize the protection of your application and its use­rs' data and transactions through our robust security protocols and practices. We e­mploy specific measures to ensure that potential thre­ats are mitigated effe­ctively.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Dapp/Scalability at Core.png"
                  />
                </div>

                <h3>Scalability at Core</h3>
                <p className="secondsec-p">
                  Scalability is a crucial aspect to conside­r for your dApp's growth. Our solutions are designed with scalability in mind, e­nsuring that they can easily adjust to accommodate your e­xpanding user base and increasing data re­quirements.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Dapp/Competitive Pricing Package.png"
                  />
                </div>
                <h3>Competitive Pricing Package</h3>
                <p className="secondsec-p">
                  At our dApp development company, we understand the importance­ of delivering high-quality dApp deve­lopment services without draining your budge­t. With transparent pricing and efficient proje­ct management, we e­nsure that you get the be­st possible value for your investme­nt.
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
            Looking for brilliant minds for your dApp development needs?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Hire dapp developers
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
                  What is Dapp?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A Dapp (Decentralised Application) is a software application that runs on a network of computers through blockchain or Peer-to-Peer technology. Unlike other applications, it doesn't run only on a single centralised server. dApps have built-in tokens or cryptocurrencies that encourage users to contribute more to the network. In general, Dapp's systems are specifically designed to be resilient, censorship-resistant, and transparent.
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
                  How many types of Dapps?
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
                    Three main types of Dapps are listed below.
                    <li><b>Financial Dapps : </b>These kinds of Dapps are specially designed to offer seamless financial services.</li>
                    <li><b>Governance Dapps : </b>These kinds of Dapps are highly used in decentralized organizations for decision-making protocols.</li>
                    <li><b>Utility Dapps : </b>These kinds of Dapp systems are designed for companies to provide exceptional services and products like music streaming, gaming, and other online marketplace services.</li>
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
                  What is the basic difference between Dapps and Traditional Applications?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Here are the lists of basic differences the Dapps system possesses when compared with traditional applications.
                  <ul>
                    <li> Dapp systems are specially designed to be used in decentralized networks like blockchain and distribute data across multiple participants.</li>
                    <li> Dapps are not designed to be controlled by a single entity.</li>
                    <li> It uses smart contracts to facilitate interactions between participants.</li>
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
                  What is a decentralised exchange?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Decentralised exchange (DEX) is a digital marketplace that uses Peer-to-Peer and blockchain technology to provide a safe and secure platform to do trading operations by using cryptocurrencies. The key aspect of using the DEX platform is users can trade directly with one another, without any intervention of a middleman. This ensures trading operations are done faster and more securely.
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
                  What is the process of dApp Integration?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Here are the processes involved in dApp integration
                  <ul>
                    <li><b>Conduct Research : </b>Research the type of dApp you need for your business.</li>
                    <li><b>Design & Develop : </b>Design and develop it according to the requirements.</li>
                    <li><b>Test & Debug : </b>Check whether there are any issues.</li>
                    <li><b>Deploy : </b>Deploy the developed dApps on a chosen blockchain network.</li>
                    <li><b>Monitor Performance : </b>Monitor the dApps performance along with its security measures and make any necessary adjustments if it is needed.
                    </li>
                    <li><b>Maintenance : </b>Always maintain the dApp and make sure it is operational and up-to-date.</li>
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
                  What is a dApp in the Cryptocurrency industry?
                </button>
              </h2>
              <div
                id="flush-collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingsix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  In the Cryptocurrency Industry, a dApp is a software application that runs on a distributed computing system. A dApp leverages smart contracts, cryptographic methods, and other distributed-ledger technologies to make sure trading operations are performed safely and securely. In addition, the system is used to track and verify all the transactions, and user interaction data to make sure the platform is 100% transparent.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Hire Blockchain Developers for high-quality project implementation.
          </p>
          <Link href="/book-a-call" className="book-btn">
            Inquiry now!
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
        <h2 className="all-head text-center mb-lg-5 mb-0">We want to hear your dApp requirements!</h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12  needsec p-4">
              <h2>
                We help entrepreneurs and innovators to build secure Blockchain dApp solutions.
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
export default DappDevlopment;
