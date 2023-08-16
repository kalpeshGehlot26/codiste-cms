"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ServiceInnerItems = ({ serviceItems }) => {
	const [serviceCount, setServiceCount] = useState(6);
	const [totalServiceCount, setTotalServiceCount] = useState(null);

	useEffect(() => {
		setTotalServiceCount(serviceItems.length);
	}, [serviceItems]);

	return (
		<div >
			<div className="row  firstsec-link justify-content-center">
				{serviceItems?.map((service, index) => {
					{/* console.log("service", service) */ }
					if (serviceCount < index + 1) return;

					if (service?.slug) {
						return (
							<Link
								className=" col-xl-4 col-md-6 col-sm-12 pb-3 "
								key={index}
								href={`/${service.slug}`}
							>
								<div className="service-block p-4 h-100">
									<h2 className="secondsec-head">
										{service.title}
									</h2>
									<p className="secondsec-p">
										{service.description}
									</p>
								</div>
							</Link>
						);
					}

					return (

						<div
							className=" col-xl-4 col-md-6 col-sm-12 pb-3 "
							key={index}
						>
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head">
									{service.title}
								</h2>
								<p className="secondsec-p">
									{service.description}
								</p>
							</div>
						</div>
					);


				})}
			</div>
			{totalServiceCount > serviceCount ? (
				<div className="d-flex align-items-center justify-content-center">
					<button
						className="book-btn mt-3 mb-3"
						onClick={() =>
							setServiceCount((prevState) => prevState + 6)
						}
					>
						Show more
					</button>
				</div>
			) : null}
		</div>
	);
};

export default ServiceInnerItems;
