import CaseStudyForm from "@/app/component/caseStudyForm/caseStudyForm";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "CounterTen | Solana Marketplace | Codiste",
  description: "CounterTEN is a Solana-based NFT platform that enables brands to create and sell NFTs for a variety of purposes, from event access and product launches to collectibles and memberships.",
  images: "https://www.codiste.com/assets/images/case-couter10/Counterten.png",
	openGraph: {
		title: "CounterTen | Solana Marketplace | Codiste",
    description: "CounterTEN is a Solana-based NFT platform that enables brands to create and sell NFTs for a variety of purposes, from event access and product launches to collectibles and memberships.",
		images: "https://www.codiste.com/assets/images/case-couter10/Counterten.png",
		url: 'https://www.codiste.com/portfolio/counterten-solana-marketplace/'
	},
  alternates: {
		canonical: 'https://www.codiste.com/portfolio/counterten-solana-marketplace',
	}
};

const CounterTenPortfolio = () => {
  return (
    <div>
      <div className="bg-color">
        <div className="container container-fluid">
          <section>
            <div className="row firstsec ">
              <div className="col-12 col-md-8 col-lg-10 d-flex mx-auto flex-wrap my100 align-items-center justify-content-between">
                <div className="col-12 col-lg-5 order-2 order-lg-1">
                  <h1 className="all-head">CounterTen – Solana Marketplace</h1>
                  <p className="all-p me-5 my-4">CounterTEN has proven to be a revolutionary solution for brands seeking innovative ways to connect with their customers using NFTs. Its success is evident from the $380,000 raised in the funding round which will further reinforce its potential in the NFT market. Solana-based infrastructure and diverse use cases, the platform is positioned to continue making a significant impact on the NFT ecosystem and reshape how businesses engage with their audiences.
                  </p>
                  <Link
                    target="_blank"
                    href="/contact"
                    className="book-btn"
                  >
                    Get Expert Advice
                  </Link>
                </div>
                <div className="col-12 col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2"><img className='img-fluid' src="/assets/images/case-couter10/Counterten.png" alt="CounterTen - Digital Collectible platform for Loyalty, Brands and events" /></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container container-fluid py-5">
        <div className=" d-flex align-items-center flex-column justify-content-center">
          <h2 className="all-head">Client Requirement</h2>
        </div>

        <div className="container container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5  d-flex  justify-content-center flex-column order-2 order-lg-1">
              <p className="secondsec-p"> CounterTEN was developed by Codiste, A blockchain application development company
                Where  Blockchain and NFT development team to create a mainstream NFT platform that enables brands to engage with customers beyond what is currently available in the NFT marketplace. The platform aims to provide tools and a flexible platform for brands to create and sell NFTs for revenue, engagement, or both.
              </p>
            </div>
            <div className="col-lg-6 col-12 mb-5 order-1 order-lg-2 text-center">
              <img className='img-fluid' style={{ padding: "20px" }} src="/assets/images/case-couter10/ClientRequirement.png" alt="Diwallet-Case" />
            </div>
          </div>
        </div>
      </div>

      <div className="container container-fluid py-5">
        <div className=" d-flex align-items-center flex-column justify-content-center">
          <h2 className="all-blog">Challenges </h2>
        </div>

        <div className="container container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 text-center">
              <img
                className='img-fluid'
                style={{ width: "auto", padding: "20px" }}
                loading="lazy" src="/assets/images/case-couter10/challanges.png" alt="Diwallet-Case" />
            </div>
            <div className="col-lg-6 col-12 mb-5  d-flex  justify-content-center flex-column">
              <p className="secondsec-p"> The NFT market is rapidly expanding, and brands need a reliable platform to create, sell, and manage NFTs. Additionally, there is a need for a platform that provides flexibility to businesses looking to monetize their work and engage with their customers beyond traditional marketing channels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-color">
        <div className="container container-fluid py-5">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head"> Features of Product</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="diwallet-style">
                  <li className="">
                    <img className='img-fluid' alt='Tamper -proof' loading="lazy" src="/assets/images/case-couter10/Tamper -proof.png" />
                    <p><span className="fs-3">Tamper -proof </span><br /><span className="secondsec-p">CounterTEN is built on the Solana blockchain, providing tamper-proof and easily verifiable digital assets. </span>
                    </p>
                  </li>
                  <li >
                    <img className='img-fluid' alt='Purpose Flexibility' loading="lazy" src="/assets/images/case-couter10/Purpose Flexibility.png" />
                    <p><span className="fs-3">Purpose Flexibility</span><br /><span className="secondsec-p">Brands can create NFTs for a wide range of purposes, including event access, specialized VIP perks, product launches, memberships, property rentals, collectibles, and more. </span>
                    </p>
                  </li>
                  <li>
                    <img className='img-fluid' alt='Revenue' loading="lazy" src="/assets/images/case-couter10/Revenue and Engagement.png" />
                    <p><span className="fs-3">Revenue and Engagement</span><br /><span className="secondsec-p">CounterTEN offers flexibility to businesses looking to increase revenue, engagement, or both.</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Link className="book-btn" href='https://www.counterten.com/' target="_blank">Live Project</Link>
            </div>
          </section>
        </div>
      </div>


      <div className="container container-fluid py-5">
        <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
          <h2 className="all-head text-center my-3 "> What did we deliver?</h2>
          <p className="secondsec-p text-center">CounterTEN provides a game-changing solution for brands looking to connect with customers in a new and innovative way. The platform offers endless possibilities for creating and selling NFTs, enabling businesses to monetize their work and engage with customers beyond traditional marketing channels. With CounterTEN, brands can deepen their relationship with customers and increase revenue. The Solana blockchain provides a reliable and tamper-proof platform for creating and managing NFTs. CounterTEN has already been used successfully by luxury car manufacturers and clothing brands for NFTs that offer exclusive access and early product launches.
          </p>
        </div>
      </div>


      <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head">Witness How We Drive Soul in Ideas!</h2>
            </div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-box" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                  aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
                  aria-label="Slide 6"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img className="img-fluid diwallet-img" alt="CounterTEN" loading="lazy" src="/assets/images/case-couter10/CounterTen-0.png" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img className="img-fluid diwallet-img" alt="CounterTEN" loading="lazy" src="/assets/images/case-couter10/CounterTEN-2.png" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img className="img-fluid diwallet-img" alt="CounterTEN" loading="lazy" src="/assets/images/case-couter10/CounterTEN-3.png" />
                    </div>
                  </div>

                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img className="img-fluid diwallet-img" alt="CounterTEN" loading="lazy" src="/assets/images/case-couter10/CounterTEN-4.png" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img className="img-fluid diwallet-img" alt="CounterTEN" loading="lazy" src="/assets/images/case-couter10/CounterTEN-5.png" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center text-center flex-column custom-crousel">
                    <div className="d-flex align-items-center flex-column custom-crousel">
                      <img className="img-fluid diwallet-img" alt="CounterTEN" loading="lazy" src="/assets/images/case-couter10/CounterTEN-6.png" />
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

      <div className="container container-fluid py-4">
        <section>
          <div className=" d-flex align-items-center flex-column justify-content-center">
            <h2 className="all-blog">Technology Stack</h2>
            <p className="all-p  mb-5 text-center">We pride ourselves on our proven track record with 20+ technologies and delivering innovative, customized IT solutions.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="tech-style">
                <li>
                  <img className='img-fluid' alt='react' loading="lazy" src="/assets/images/tech/React-icon.svg.png" />
                </li>
                <li>
                  <img className='img-fluid' alt='Node.js' loading="lazy" src="/assets/images/tech/Node.png" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="blackdiv px-3">
        <div className=" container container-fluid d-flex align-items-center justify-content-between flex-wrap py-3">
          <p>How you transform your ideas into reality?</p>
          <Link href="https://www.codiste.com/nft-development-company" className="book-btn">
            Explore more
          </Link>
        </div>
      </div>
      <div className="bg-color py-5">
        <div className="container container-fluid">
          <section>
            <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
              <h2 className="all-head text-center">Satisfied clients is our proof of our excellence!</h2>
            </div>
            <div className="carousel-inner career-block">
              <div className="d-flex align-items-center text-center flex-column custom-crousel">
                <h3>I am pleased to say that working with Codiste Pvt Ltd has been a positive experience for our community. The project is now complete, and the feedback we have received on the platform has been overwhelmingly positive. Throughout the project, Codiste maintained open communication lines, regularly updating us on progress and following the agreed timeline. They delivered an app with impressive functionalities and accepted every challenge we gave them. Overall, we are satisfied with the outcome of the project and would recommend Codiste for their expertise, professionalism, and commitment to delivering high-quality work.
                </h3>
                <div className="d-flex align-items-center flex-column">
                  <img loading="lazy" src="/assets/images/iCrowsel.png" className=" " alt="iCrowsel" />
                  <div className="my-3"><img className="img-fluid" alt='Ninza NFT' loading="lazy" src="/assets/images/client-logos/Danketsu-Logo-Blue (Ninja NFT).png" /></div>
                  <h5>Ninza NFT</h5>
                  <p>CoFounder</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container container-fluid py-5">
        <section>
          <div>
            <h2 className="all-head text-center mb-lg-5 mb-0">
              Reach out to Us!
            </h2>
          </div>
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 col-md-12 needsec p-4">
              <h2>
                Get expert advice on adopting and integrating advanced technologies.<br />
                Stay compliant, stay ahead!
              </h2>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="need-block h-100">
                <h2 className="">How Can We <b>Help?</b> </h2>
                <CaseStudyForm text="Let's Discuss" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CounterTenPortfolio;
