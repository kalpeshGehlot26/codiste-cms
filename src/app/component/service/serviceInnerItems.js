"use client";
import React, { useEffect, useState } from "react";

const ServiceInnerItems = ({serviceItems}) => {
	const [serviceCount, setServiceCount] = useState(3);
	const [totalServiceCount, setTotalServiceCount] = useState(null);

	useEffect(() => {
		setTotalServiceCount(serviceItems.length);
	}, [serviceItems]);

	return (
		<div>
			<div className="row ">
				{serviceItems?.map((service, index) => {
					if (serviceCount < index + 1) return;
					return (
						<div
							className="col-xl-4 col-md-6 col-sm-12 pb-3 "
							key={index}
						>
							<div className="service-block p-4 h-100">
								<h2 className="secondsec-head mt-4">
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
						className="book-btn mt-3 "
						onClick={() =>
							setServiceCount((prevState) => prevState + 3)
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
