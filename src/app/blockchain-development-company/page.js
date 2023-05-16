import React from 'react'
import ClientSlider from '../component/Home/clientSlider'
import AllServiceBlogSlider from '../component/BlogSlider/allServiceBlogSlider'
import blockChainServiceBlogs from '../data/services/blockChainServiceBlogs'
import CaseStudyForm from '../component/caseStudyForm/caseStudyForm';
import Link from 'next/link';

export const metadata = {
    title: "Blockchain Development Company | Codiste",
    description: "Our comprehensive Web3 blockchain development services to streamlined integrations of decentralized technological infrastructure in payments, applications, hyper ledgers, supply chains, and more.."
};

const BlockChainDevelopmentCompany = () => {
  return (
    <div>
        <div className="bg-color">
        <div className="container container-fluid py-4">
            <section>
                <div className="row firstsec d-flex align-items-center">
                    <div className="col-lg-6 col-sm-12 mb-5 mb-lg-0">
                        <h1 className="all-head">Blockchain Development Company</h1>
                        <p className="all-p me-5 mb-4 mt-3">Excel in blockchain space with reliable, secure, and robust
                            blockchain development services for business operations. Streamlined integrations of
                            decentralized technological infrastructure in payments, applications, hyper ledgers, supply
                            chains, and more with our comprehensive Web3 blockchain development services for
                            enterprises.

                        </p>
                        <Link href="/contact" className="book-btn">Let’s Connect </Link>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-5 "> <img
                        className='img-fluid d-flex align-items-center justify-content-center'
                        style={{height: "450px", width : "auto", margin: "auto", padding: "20px"}}
                        src="assets/images/main/Blockchain.png" /></div>
                </div>
            </section>
        </div>
    </div>

    <ClientSlider />


    <div className="container container-fluid">
        <section>
            <div className=" d-flex align-items-center flex-column justify-content-center firstsec mb-5">
                <h1 className="all-head">Our Services </h1>
                <p className="all-p text-center">We offer businesses a complete range of blockchain solutions for secure
                    scaling and transparent operations. </p>
            </div>
            <div className="row ">
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                      
                        <h2 className="secondsec-head mt-4">Custom Blockchain Development</h2>
                        <p className="secondsec-p">We offer custom blockchain development services to design and develop
                            bespoke blockchain solutions with a secure infrastructure with customized elements. Our team
                            has hands-on experience as expert blockchain developers utilizing various blockchain
                            platforms and networks to build fast, scalable, and efficient solutions that can help
                            businesses streamline their operations with Web3 technologies.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                   
                        <h2 className="secondsec-head mt-4">Blockchain Analytics Dashboard</h2>
                        <p className="secondsec-p">We offer Blockchain Analytics Dashboard development services to cater to
                            businesses with blockchain solutions' standard scaling and security performance. Our team
                            provides solutions to monitor and analyze critical metrics such as transaction volume,
                            network activity, and user engagement with transparency. We ensure that the decentralized
                            dashboard is designed to be user-friendly, customizable, and easily integrated with existing
                            conventional platforms.

                        </p>
                    </div>

                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                       
                        <h2 className="secondsec-head mt-4">Security Audits</h2>
                        <p className="secondsec-p">We provide security auditing services for enterprises to help test the
                            robustness of their systems. We offer thorough security audits to help your business
                            identify and address vulnerabilities in its blockchain solutions. Our team of security
                            experts uses a customized combination of manual and automated testing techniques to ensure
                            your blockchain solution is secure against various new attacks considering blockchain is a
                            unique space.
                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                   
                        <h2 className="secondsec-head mt-4">Hyperledger Solution</h2>
                        <p className="secondsec-p">We offer Hyperledger development services for businesses to help them get
                            immutable security status with blockchain-led hyper ledger solutions. Our blockchain
                            development team has extensive experience developing innovative blockchain solutions using
                            the Hyperledger framework, designed specifically for enterprise use cases with transparent
                            operations. Our Hyperledger solutions services offer customizable, scalable, and secure
                            blockchain solutions to ensure they solve specific pain points of your business.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                      
                        <h2 className="secondsec-head mt-4">Digital Assets Trading</h2>
                        <p className="secondsec-p">Codiste offers end-to-end digital asset and trading platform development
                            services. We offer custom-built digital assets trading platforms that leverage the latest
                            blockchain technologies to ensure fast, secure, and reliable transactions. Our team provides
                            comprehensive development of trading platforms that can be customized to extend support to
                            multiple or selective digital assets, including cryptocurrencies, NFTs, and other
                            blockchain-based digital assets.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                       
                        <h2 className="secondsec-head mt-4">Custom Smart Contracts</h2>
                        <p className="secondsec-p">We offer customized smart contract developments for enterprises. Our
                            smart contract development team specializes in designing and implementing custom smart
                            contracts that automate business processes and transactions on the blockchain network. We
                            have a team of experienced smart contract developers using a range of programming languages,
                            including Solidity, Python, and Java, to build secure and efficient smart contracts that can
                            help businesses leverage blockchain to streamline their operations and reduce costs.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                     
                        <h2 className="secondsec-head mt-4">Defi Solution</h2>
                        <p className="secondsec-p">Codiste offers robust and decentralized finance solutions for enterprises
                            to help scale in the blockchain space. Our decentralized finance (DeFi) solutions are
                            customized to help you leverage blockchain technology with innovative & new financial
                            products and services. We develop DeFi solutions that can include features and extend
                            support to decentralized exchanges, lending platforms, yield farming, and more. Our team
                            ensures that our solutions are designed to be fast, secure, and highly scalable to eliminate
                            the drawbacks of centralized financial services.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                     
                        <h2 className="secondsec-head mt-4">Crypto Payment Gateway Development</h2>
                        <p className="secondsec-p">We offer crypto payment & gateway development services for
                            trading/exchange platforms and businesses interested in providing decentralized finance
                            solutions to their users. Our team specializes in developing customized payment gateways
                            that allow you to accept cryptocurrency payments. Our payment gateways are built with
                            blockchain to ensure they are highly secure, fast, and reliable and can be customized
                            according to specific requirements regarding cryptocurrency support.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                     
                        <h2 className="secondsec-head mt-4">Web3 Solution Development</h2>
                        <p className="secondsec-p">Codiste offers Web3 solution development services to help enterprises
                            leverage blockchain technology and explore decentralized ecosystems that give users greater
                            control over their data. We have a team of experienced Web3 developers to ensure that you
                            have a seamless Web3 integration experience. Our team allows you to select from multiple
                            programming languages, including Solidity, Java, and Python, to build efficient and secure
                            decentralized applications that can be run on a wide range of blockchain platforms.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                       
                        <h2 className="secondsec-head mt-4">KYC Integration</h2>
                        <p className="secondsec-p">We offer KYC integration services for fintech businesses and e-commerce
                            platforms to facilitate their decentralized blockchain ecosystem with secured finance.
                            Codiste has a team of experts and blockchain professionals to help you integrate Know Your
                            Customer (KYC) procedures into blockchain solutions to ensure compliance with financial
                            regulations and prevent fraud to provide a safer and more secure user experience. We offer
                            enterprises a range of KYC solutions, including digital identity verification and
                            authentication tools, to build fast and regulations-compliant blockchain solutions.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                    
                        <h2 className="secondsec-head mt-4">Crypto Exchange Integration</h2>
                        <p className="secondsec-p">We offer crypto exchange integration services and development support to
                            help decentralized fintech enterprises with exchange integration. Codiste provides a robust
                            and reliable development and integrates cryptocurrency payment solutions into their existing
                            centralized or decentralized platforms & systems. Our team of developers has extensive
                            hands-on experience in integrating with significant cryptocurrency exchanges, such as
                            Binance and Coinbase, and can build custom solutions.

                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 pb-3 ">
                    <div className="service-block p-4 h-100">
                      
                        <h2 className="secondsec-head mt-4">Ethereum & Solana Blockchain Development</h2>
                        <p className="secondsec-p">We offer Ethereum and Solana blockchain development services for
                            businesses and enterprises ready to explore decentralized ecosystems and lead in the
                            blockchain space. Codiste offers enterprise-grade blockchain development using the Ethereum
                            and Solana blockchain platforms. Our expert-led team of developers has in-depth knowledge of
                            these platforms and their programming languages, and we build custom solutions that are
                            fast, secure, and scalable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div className="py-5">
        <div className="container container-fluid">
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
                <h1 className="all-head">Why Choose Us for Blockchain Development? </h1>
                <p className="all-p text-center">Codiste is an emerging leader in building robust, secure, scalable
                    blockchain applications and add-on integrations. Our dedicated team has elite experience and
                    expertise in building enterprise blockchain solutions. Our blockchain development services offer
                    product and platform customization with various blockchain networks and platforms.

                </p>
            </div>

            <div className="row">
                <div className="col-6 col-md-4 text-center p-5 intsec-border">
                  
                    <h2 className="secondsec-head text-center">10+ Blockchain Network Support</h2>
                    <p className="secondsec-p text-center">At Codiste, we have expertise in developing blockchain solutions using more
                        than 10 blockchain networks, including Ethereum, Binance, Hyperledger, Tron, and Solana. Our
                        developers have hands-on experience with each platform and can create customized solutions that
                        help you efficiently leverage each network's unique features. With us, you will work with a team
                        with a deep understanding of features from various blockchain networks to deliver efficient and
                        effective blockchain solutions.

                    </p>
                </div>
                <div className="col-6 col-md-4 text-center p-5 intsec-border">
                    <h2 className="secondsec-head text-center">End-To-End Development</h2>
                    <p className="secondsec-p text-center">We provide end-to-end blockchain development services, from development to
                        deployment and extended ongoing maintenance. Our developers work closely with you to understand
                        specific needs and requirements and create customized applications. We prioritize a robust and
                        smooth user experience with scalability in every project, ensuring our solutions are functional,
                        easy to use, and fit the market.

                    </p>
                </div>
                <div className="col-6 col-md-4 text-center p-5 intsec-borderlast">
                    <h2 className="secondsec-head text-center">Customized Solutions</h2>
                    <p className="secondsec-p text-center">Our team believes that blockchain customizations and personalization are
                        essential to stand out from the masses. We deliver blockchain solutions that cater to your
                        target audience and connect with the user. At Codiste, we offer customized blockchain
                        development for your business goals and pain points.

                    </p>
                </div>
                <div className="col-6 col-md-4 text-center p-5 intsec-borderbelow">
                    <h2 className="secondsec-head text-center">Organizational Transparency</h2>
                    <p className="secondsec-p text-center">At Codiste, we ensure organizational transparency to keep you updated
                        throughout every stage of the development process. We provide regular progress updates through
                        open communication channels and even extend access to all the information you need to make
                        informed decisions about your project.

                    </p>
                </div>
                <div className="col-6 col-md-4 text-center p-5 intsec-borderbelow">
                    <h2 className="secondsec-head text-center">Better Security</h2>
                    <p className="secondsec-p text-center">Security is a top priority of our blockchain development team. We use the
                        latest technologies and best practices to ensure our products are secure and reliable. We
                        conduct regular security audits and implement robust security measures to protect you against
                        fraudulent activities, cyber-attacks, and data breaches. Our team has blockchain security
                        professionals, well-versed in security protocols to ensure that every solution we deliver is
                        secure and meets blockchain industry standards.</p>


                </div>
                <div className="col-6 col-md-4 text-center p-5 ">
                    <h2 className="secondsec-head text-center">Enhanced Scalability</h2>
                    <p className="secondsec-p text-center">We understand the importance and concerns of scalability in the blockchain.
                        Our team has experienced developers to build scalable and robust blockchain applications that
                        are functional and highly scalable. We help businesses to grow and adapt as their needs change
                        with the company scaling with modern technologies. Our team used Layer1 and Layer 2 scaling
                        solutions to ensure that our blockchain applications can handle increased volumes of
                        transactions, users, and data without compromising performance or user experience.
                    </p>
                </div>

            </div>
        </div>
    </div>

    <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between py-3">
            <p>Get Transparent, Decentralized, and Scalable Blockchain Applications </p>
            <Link href="/book-a-call" className="book-btn">Contact Us!</Link>
        </div>
    </div>

    <div className="bg-color py-5 mt-5">
        <div className="container container-fluid">
            <section>
                <div className=" d-flex align-items-center flex-column justify-content-center">
                    <h1 className="all-head">Technology Stack</h1>
                    <p className="all-p me-5 text-center">We pride ourselves on our proven track record with 20+
                        technologies and delivering innovative, customized IT solutions.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="tech-style">
                            <li>
                                <img className='img-fluid' src="assets/images/tech/Binance_Logo.png" />
                            </li>


                            <li>
                                <img className='img-fluid' src="assets/images/tech/Corda.png" />
                            </li>

                            <li>
                            <img className='img-fluid' src="assets/images/tech/ethereum.png" />
                            </li>

                            <li>
                                <img className='img-fluid' src="assets/images/tech/fantom.png" />
                            </li>

                            <li>
                            <img className='img-fluid' src="assets/images/tech/Graphene.png" />
                            </li>

                            <li>
                                <img className='img-fluid' src="assets/images/tech/hyperledger.png" />
                            </li>

                            <li>
                                <img className='img-fluid' src="assets/images/tech/Java.png" />
                            </li>
                                <li>
                            <img className='img-fluid' src="assets/images/tech/polygon.png" />
                            </li>

                            <li>
                                <img className='img-fluid' src="assets/images/tech/python.png" />
                            </li>
                            <li>
                                <img className='img-fluid' src="assets/images/tech/tron logo.png" />
                              </li>

                            <li>
                                <img className='img-fluid' src="assets/images/tech/solidity.png" />
                            </li>
                            <li>
                                <img className='img-fluid' src="assets/images/tech/Solana.png" />
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <div className="py-5">
        <div className="container container-fluid">
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
                <h1 className="all-head">FAQ</h1>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What is blockchain technology?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Blockchain technology is a decentralized digital ledger that
                            automatically records data transactions. These records are stored on multiple devices,
                            providing a secure and transparent way to store and transfer data. Wherever any user or
                            on-chain participant accesses the data, the transaction gets recorded in the ledger and
                            cannot be changed or deleted once done. It is why blockchain is termed an immutable
                            technology.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What are the benefits of using blockchain technology?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Blockchain technology offers several benefits, including improved
                            security, transparency, immutability, efficiency, and cost-effectiveness. It also enables
                            faster transactions, eliminates intermediaries, and provides a secure platform for
                            decentralized applications.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Is blockchain technology secure?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Experts believe blockchain technology is highly secure because of
                            its decentralized nature and cryptographic protocols. Transactions on a blockchain are
                            verified and validated by a network of nodes, making it difficult to tamper with the data.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingfour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsefour" aria-expanded="false"
                            aria-controls="flush-collapsefour">
                            What are the different types of blockchain networks?
                        </button>
                    </h2>
                    <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">There are three types of blockchain networks - public, private, and
                            hybrid. Public blockchains are open to everyone, while private blockchains are accessible to
                            only a select group of users. Hybrid blockchains combine elements of both public and private
                            blockchains.
                        </div>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingfive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsefive" aria-expanded="false"
                            aria-controls="flush-collapsefive">
                            What are smart contracts?
                        </button>
                    </h2>
                    <div id="flush-collapsefive" className="accordion-collapse collapse" aria-labelledby="flush-headingfive"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Smart contracts are self-executing contracts that automatically
                            enforce the terms of an agreement between parties. They are programmed to trigger specific
                            actions when certain conditions are met, making them highly secure and efficient. These are
                            digital contracts where conditions of the agreement are encoded in a code on blockchain
                            networks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingsix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsesix" aria-expanded="false"
                            aria-controls="flush-collapsesix">What is a distributed ledger?
                        </button>
                    </h2>
                    <div id="flush-collapsesix" className="accordion-collapse collapse" aria-labelledby="flush-headingsix"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">A distributed ledger is a database spread across a computer network.
                            Each computer on the web has a copy of the ledger, and any changes made to the ledger are
                            replicated and validated by all computers on the web, making it highly secure and
                            tamper-proof.

                        </div>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingseven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseseven" aria-expanded="false"
                            aria-controls="flush-collapseseven">What is the future of blockchain technology?
                        </button>
                    </h2>
                    <div id="flush-collapseseven" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingseven" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Blockchain technology is expected to revolutionize how businesses
                            and individuals conduct transactions and exchange value/assets. It can potentially disrupt
                            several industries, including finance, healthcare, logistics, and real estate. Its
                            applications are expected to expand to new areas, such as voting systems, digital identity
                            management, and more.


                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>


    <div className="bg-color">
        <div className="container container-fluid py-5">
          <div className=" d-flex align-items-center flex-column justify-content-center">
            <h1 className="all-head">Case Study</h1>
            <p>Resources to help you understand our roles and goals with our blockchain development services for our clients. </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 p-5 d-flex align-items-center justify-content-center flex-column">
              <div className=" ">
                <h1 className="">CounterTen – Solana Marketplace</h1>
                <p className="mt-4">CounterTEN is a Solana-based NFT platform that enables brands to create and sell NFTs for a variety of purposes, from event access and product launches to collectibles and memberships. The platform provides flexibility for businesses to increase revenue and engagement, and has already been used successfully by luxury car and clothing brands. CounterTEN is a game-changer for brands looking to connect with their customers in an innovative way using NFTs.

                </p>
              </div>
           
              <div className="mt-4">
                <button className="book-btn">Read More</button>
              </div>
             
            </div>
            <div className="col-lg-6 col-sm-12 p-5 ">
              <img className='img-fluid d-flex align-items-center justify-content-center'
                style={{height: "450px", width : "auto", margin: "auto", padding: "20px"}} src="assets/images/counter.png" />
            </div>
          </div>
        </div>
      </div>

    <div className="container container-fluid py-5">
        <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
            <h1 className="all-head">Blog</h1>
            <p className="all-p text-center">Knowledge will never be the less, so keep exploring our blogs.</p>
        </div>
        <AllServiceBlogSlider items={blockChainServiceBlogs} />
    </div>

    <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h1 className="all-head">Their Skyrocketing Success is Our Feedback!</h1>
            
            </div>
    
            <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-box" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>Their attention to detail and willingness to work under pressure was impressive.Codiste pvt ltd has completed all assigned tasks and performed well during the engagement. The client lauded their attention to detail and timely delivery of outputs. In the end, no major issues or vulnerabilities were found in the final platform.
                    </h3>
    
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img src="assets/images/iCrowsel.png" className=" " alt="iCrowsel" />
                      <div className="my-5"><img className="circle-img" src="assets/images/Tommy-Bui.png" /></div>
                      <h5>White Hat DAO</h5>
                      <p>Core Contributor<br />Sydney, Australia</p>
                 
                    </div>
                  </div>
    
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>I am pleased to say that working with Codiste Pvt Ltd has been a positive experience for our community. The project is now complete, and the feedback we have received on the platform has been overwhelmingly positive. Throughout the project, Codiste maintained open communication lines, regularly updating us on progress and following the agreed timeline. They delivered an app with impressive functionalities and accepted every challenge we gave them. Overall, we are satisfied with the outcome of the project and would recommend Codiste for their expertise, professionalism, and commitment to delivering high-quality work.
                    </h3>
    
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img src="assets/images/iCrowsel.png" className=" " alt="iCrowsel" />
                      <div className="my-5"><img className="circle-img" src="assets/images/Tommy-Bui.png" /></div>
                      <h5>DiveWallet</h5>
                      <p>CEO<br />Bolivar, New York</p>
                 
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <h3>They communicate clearly and outline the product roadmap for us. It has been very easy to work with them. Made us profitaable on NFT Marketplace and which made amazing journey.
                    </h3>
    
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img src="assets/images/iCrowsel.png" className=" " alt="iCrowsel" />
                      <div className="my-5"><img className="circle-img" src="assets/images/Tommy-Bui.png" /></div>
                      <h5>Ninza NFT</h5>
                      <p>CoFounde<br />Johannesburg, South Africa</p>
                 
                    </div>
                  </div>
                </div>
                
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            </section>
        </div>
      </div>

    <div className="container container-fluid py-5">
        <section>
            <div className="row  d-flex align-items-center">
                <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 needsec">
                    <h1>Have a Project? </h1>
                    <h2 className=""> Let us reach out to you with your details.
                    </h2>

                </div>
                <div className="col-lg-6 col-md-12 ">
                    <div className="need-block h-100">
                        <h2 className="">How Can We <b>Help?</b> </h2>
                        <CaseStudyForm />
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default BlockChainDevelopmentCompany