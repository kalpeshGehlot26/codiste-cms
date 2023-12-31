import React from "react";
import Calendly from "../component/bookACall/calendar";
import jsonData from "../data/schema";

export const metadata = {
    title: "Schedule a Call with Codiste Expert Now | Codiste",
    description: "Got stuck? Get your way out, you're just a click away! Your questions are most welcome.",
    images: "https://www.codiste.com/assets/images/featuredImg.webp",
    openGraph: {
        title: "Schedule a Call with Codiste Expert Now | Codiste",
        description: "Got stuck? Get your way out, you're just a click away! Your questions are most welcome.",
        images: "https://www.codiste.com/assets/images/featuredImg.webp",
        url: 'https://www.codiste.com/book-a-call/'
    },
    alternates: {
        canonical: 'https://www.codiste.com/book-a-call',
    }
};

const BookACALL = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData.Bookcall) }}
            />
            <div className="container container-fluid py-4 firstsec">
                <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
                    <h1 className="all-head text-center my-3 ">Book a Call</h1>
                    <p className="secondsec-p text-center">Got stuck? Get your way out, you're just a click away! Your questions are most welcome.
                    </p>
                </div>
                <div>
                    <Calendly />
                </div>
            </div>
        </div>

    );
};
export default BookACALL;
