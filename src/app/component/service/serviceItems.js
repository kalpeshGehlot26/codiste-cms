"use client";
import React, { useEffect } from "react";

const ServiceList = ({ serviceItems, serviceCount, setTotalServiceCount }) => {
	useEffect(() => {
		setTotalServiceCount(serviceItems.length);
	}, [serviceItems]);
	return (
		<div className="row ">
			{serviceItems?.map((service, index) => {
				const serviceClass =
					service.title === "AI"
						? "d-flex align-items-center"
						: "d-flex align-items-center flex-wrap";
				if (serviceCount < index + 1) return;
				return (
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3" key={index}>
						<div className="service-block p-4 h-100">
							<div className={serviceClass}>
								<div>
									<img
										className="img-fluid firstsecimg-style"
										src={service.url}
										alt={`${service.title} Development services`}
										loading="lazy"
									/>
								</div>
								<div className="ms-3">
									<h2 className="custom-font mb-0">
										{service.title}
									</h2>
									<h2 className="secondsec-head">
										Development Services
									</h2>
								</div>
							</div>
							<p className="secondsec-p mt-4">
								{service.description}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ServiceList;
