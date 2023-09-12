import React from "react";
import ClientSlider from "../component/Home/clientSlider";
import CaseStudyForm from "../component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import ServiceInnerItems from "../component/service/serviceInnerItems";
import BlockchainConsulting from "../data/services/service-items/BlockchainConsult";
import jsonData from "../data/schema";
import BlockchainIndus from "../component/service/BlockchainIndus";


export const metadata = {
  title: "Blockchain Consulting Company | Blockchain Development | Codiste",
  description: "Need help with Blockchain Development? Our best Blockchain Consulting Service offers advice, tips, and consultations no matter what you know about it.",
  images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchain_Consult/Blockchain Consulting.webp",
  openGraph: {
    title: "Blockchain Consulting Company | Blockchain Development | Codiste",
    description: "Need help with Blockchain Development? Our best Blockchain Consulting Service offers advice, tips, and consultations no matter what you know about it.",
    images: "https://www.codiste.com/assets/images/Serevice-blockchain/Blockchain_Consult/Blockchain Consulting.webp",
    url: 'https://www.codiste.com/blockchain-consulting/'
  },
  alternates: {
    canonical: 'https://www.codiste.com/blockchain-consulting',
  }
};
const limit = 3;
const category = 56;
const BlockchainConsult = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonData.BlockchainConsult),
        }}
      />
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-4">
                  <h1 className="all-head">
                    Blockchain Consulting
                  </h1>
                  <p className="all-p ">
                    Codiste’s blockchain consulting services helps enterprises with Blockchain-based solutions on platforms like Ethereum, web3 etc. Our experts consult you with distributed ledger, algorithms or smart contracts and also help in developing the best Blockchain solution.
                  </p>
                  <Link href="/contact" className="book-btn">
                    Consult Our Experts
                  </Link>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    alt="Blockchain Consulting"
                    src="assets/images/Serevice-blockchain/Blockchain_Consult/Blockchain Consulting.webp"
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
                Our Blockchain Consultancy Services
              </h2>
              <p className="secondsec-p text-center ai-custom">
                Our Blockchain consultants are proficient in providing consultation on creating and implementing robust
                <a href="https://www.codiste.com/custom-blockchain-development"> Blockchain solutions</a>.
              </p>
            </div>
            <ServiceInnerItems serviceItems={BlockchainConsulting} />
          </section>
        </div>
      </div>

      <div className="py-5 bg-color mt-5">
        <div className="container container-fluid">
          <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h2 className="all-head text-center">
              Why Collaborate with Codiste for Blockchain Consultant?
            </h2>
            <p className="secondsec-p text-center ai-custom">
              Being a reliable <a href="https://www.codiste.com/blockchain-development-company">blockchain Development Company</a>, we have capability to handle complex levels of blockchain projects of varied industries. Here is why we are the best fit for your next blockchain project.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Consult/Technologically Agnostic.png"
                  />
                </div>
                <h3 className="">Technologically Agnostic</h3>
                <p className="secondsec-p">
                  Our professional blockchain consultants and developers are seasoned and yet flexible. We are masters of handling new technologies to deliver a hand-pick solution for client’s requirements. We are a result-driven company always hungry for challenges!
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
                    src="assets/images/Serevice-blockchain/Blockchain_Consult/Sustainability.png"
                  />
                </div>
                <h3>Sustainability</h3>
                <p className="secondsec-p">
                  We work along with clients to embed sustainability into their business operations and help them achieve their business objectives. Our innovative approach will support your business growth and improve your operational efficiency.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Consult/Inclusion & Diversity.png"
                  />
                </div>
                <h3>Inclusion & Diversity</h3>
                <p className="secondsec-p">
                  Each and every work we do will have inclusion and diversity. It enables our blockchain consultants and developers to deliver the desired business results to the clients with deeper trust and commitment.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Consult/Attentive Communicator & Advisor.png"
                  />
                </div>
                <h3>Attentive Communicator & Advisor</h3>
                <p className="secondsec-p">
                  Our developers and blockchain consulting members will stay connected and be responsive to you throughout the project. This will rule out all IFs and BUTs and make sure your project is a successful one.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Consult/Complete Transparency.png"
                  />
                </div>

                <h3>Complete Transparency</h3>
                <p className="secondsec-p">
                  When it comes to blockchain development services, we bring complete transparency. Our developers never hesitate to push boundaries to improve our product functionality and services.
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
                    src="assets/images/Serevice-blockchain/Blockchain_Consult/Uncompromised Quality.png"
                  />
                </div>
                <h3>Uncompromised Quality</h3>
                <p className="secondsec-p">
                  Being a leading blockchain consulting company, we never compromise our solution’s quality under any circumstance. All our blockchain solutions are developed in such a way to deliver defined output on time.
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
            Do you want to experience unparalleled growth with Blockchain Technology?
          </p>
          <Link href="/book-a-call" className="book-btn">
            Hire Our Blockchain Consultant
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
                  How to hire a blockchain consultant?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  If you are about to hire a blockchain consultant for your business, here is the set of processes you need to do.
                  <ul>
                    <li>Aware of the basics of blockchain technology.</li>
                    <li>Know your project requirements.</li>
                    <li>Go for a skilled person who possesses sound blockchain knowledge.</li>
                    <li>Check their problem-solving skills along with their past work.</li>
                  </ul>
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
                  How can blockchain consultants help you?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Below mentioned are many ways an experienced blockchain consultant can help you
                  <ul>
                    <li>An experienced consultant helps you to choose the right platform and tools for your project development.</li>
                    <li>Gives a clear vision of project requirements and provides a compliance strategy to follow.</li>
                    <li>Assist you in implementing automation into your complex business operation and improve efficiency.</li>
                    <li>Helps you to identify the areas in which blockchain technology can be implemented.</li>
                    <li>Creates a roadmap for gaining a competitive edge and for your business growth.</li>
                    <li>Offers unmatched technical support in handling and resolving all possible blockchain challenges.</li>
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
                  What does a blockchain consultant do?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A professional blockchain consultant helps businesses to develop highly efficient growth strategies. In addition, they provide invaluable advice and guidance on developing or implementing key blockchain strategies. Our Blockchain consultants are the right people who do an analysis of the impact of blockchain and develop a plan for implementing it at the right time.
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
                  How to find the best blockchain consultant near me?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Here are the things you need to look out for finding the best blockchain consultant near me.
                  <ul>
                    <li>Sort the lists of companies near the location online according to the experience level, social media presence, past work, and so on.</li>
                    <li>You can seek references from trusted sources to pick the right consultants.</li>
                    <li>Before finalising the consultants, check whether they have a transparent fee structure.</li>
                    <li>Never hesitate to ask for a free consultation with the company experts.</li>
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
                  Can I hire a Blockchain Developer per hour?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingfive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes! You can hire blockchain developers on an hourly basis. However, we need to be aware of the project requirements and the total time duration for completing the projects before commencing it. Consult with our blockchain experts to know the exact cost of your blockchain development needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3 flex-wrap">
          <p>
            Consult Our Blockchain experts to convert your exceptional Ideas.
          </p>
          <Link href="/book-a-call" className="book-btn">
            Consult with Blockchain experts
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
        <h2 className="all-head text-center mb-lg-5 mb-0">Connect With Our Blockchain Consultant!</h2>
        <section>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12  needsec p-4">
              <h2>
                Are you planning to implement Blockchain in your business?
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
export default BlockchainConsult;
