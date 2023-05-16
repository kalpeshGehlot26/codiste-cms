import React from "react";
import Calendly from "../component/bookACall/calendar";

export const metadata = {
    title: "Schedule a Call with Codiste Expert Now | Codiste",
    description: "Got stuck? Get your way out, you're just a click away! Your questions are most welcome."
};

const BookACALL = () => {
	return (
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
    );
};

export default BookACALL;
