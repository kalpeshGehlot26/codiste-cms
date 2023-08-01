"use client";
import React, { useEffect } from "react";
import Link from "next/link";

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
					<div className="col-xl-4 col-md-6 col-sm-12 pb-3 Newservice-block" key={index} 
						// data-aos="fade-up" data-aos-duration="3000"
						>
						<Link className=" p-4 h-100" href={service.ServiceLink}>
							<div className={serviceClass}>
								<div>
									<img
										className="img-fluid firstsecimg-style"
										src={service.url}
										alt={`${service.title} Development services`}
										loading="lazy"
									/>
								</div>
								<div className="ms-2">
									<h2 className="custom-font mb-0">
										{service.title}
									</h2>
									<h3 className="secondsec-head">
										Development Services
									</h3>
								</div>
							</div>
							<p className="secondsec-p mt-4">
								{service.description}
							</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ServiceList;
