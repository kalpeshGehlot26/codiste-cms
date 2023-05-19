"use client";
import React, { useEffect } from "react";

const ServiceList = ({ serviceItems, serviceCount, setTotalServiceCount }) => {
<<<<<<< Updated upstream
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
									/>
								</div>
								<div className="ms-3">
									<h2 className="custom-font mb-0">
										{service.title}
									</h2>
									<h2 className="secondsec-head">
										Development services
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
=======
    useEffect(() => {
        setTotalServiceCount(serviceItems.length)
    }, [serviceItems])
    return (
        <div className="row ">
            {
                serviceItems?.map((service, index) => {
                    if (serviceCount < index + 1) return
                    return (
                        <div className="col-xl-4 col-md-6 col-sm-12 pb-3" key={index}>
                            <div className="service-block p-4 h-100">
                                <div className="d-flex align-items-center ms-3">
                                    <img
                                        className="img-fluid firstsecimg-style"
                                        src={service.url}
                                        alt={`${service.title} Development services`}
                                    />
                                    <h2 className="secondsec-head  ms-3">
                                        <span className="custom-font">{service.title}</span>{" "}
                                        Development Services
                                    </h2>
                                </div>
                                <p className="secondsec-p mt-4">{service.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
>>>>>>> Stashed changes
};

export default ServiceList;
