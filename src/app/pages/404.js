import Link from "next/link";
import React from "react";

const PageNotFound = () => {
	return (
		<div class="container container-fluid firstsec">
			<div class=" d-flex align-items-center flex-column justify-content-center mb-5">
				{/* <h1 class="all-head text-center my-4">ERROR</h1> */}
				<img class="img-fluid" alt="" src="assets/images/main/Error.png" />
				<p class="secondsec-p text-center my-5">
					Oops! Looks like our AI developers took a detour into the
					unknown. We're sorry, but it seems we've hit an uncharted
					404 page.
				</p>
				<Link href="/" class="book-btn">Go Back to Home Page</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
