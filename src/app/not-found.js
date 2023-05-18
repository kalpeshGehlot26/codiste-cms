import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="container container-fluid firstsec">
    <div className=" d-flex align-items-center flex-column justify-content-center mb-5">
        <img className="img-fluid my-4" alt="" src="assets/images/main/Error.png" />
        <p className="secondsec-p text-center my-5">
            Oops! Looks like our AI developers took a detour into the
            unknown. We're sorry, but it seems we've hit an uncharted
            404 page.
        </p>
        <Link href="/" className="book-btn">Go Back to Home Page</Link>
    </div>
</div>
  )
}

export default NotFound