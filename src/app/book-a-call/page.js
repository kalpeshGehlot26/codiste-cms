import React from "react";
import Calendly from "../component/bookACall/calendar";

const BookACALL = () => {
	return (
        <div class="container container-fluid py-4 firstsec">
            <div class=" d-flex align-items-center flex-column justify-content-center mb-5">
                <h1 class="all-head text-center my-3 ">Book a Call</h1>
                <p class="secondsec-p text-center">Got stuck? Get your way out, you're just a click away! Your questions are most welcome.
                </p>
            </div>
            <div>
                <Calendly />
            </div>
        </div>
    );
};

export default BookACALL;
