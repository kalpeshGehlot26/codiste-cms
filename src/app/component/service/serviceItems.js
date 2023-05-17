"use client";
import React, { useEffect } from "react";

const ServiceList = ({serviceItems, serviceCount, setTotalServiceCount}) => {
    useEffect(() => {
        setTotalServiceCount(serviceItems.length)
    },[serviceItems])
	return (
		<div className="row ">
			{
                serviceItems?.map((service, index) => {
                    if(serviceCount < index + 1) return
                    return(
                        <div className="col-xl-4 col-md-6 col-sm-12 pb-3" key={index}>
                            <div className="service-block p-4 h-100">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img
                                        className="img-fluid firstsecimg-style"
                                        src={service.url}
                                        alt={`${service.title} Development services`} 
                                    />
                                    <h2 className="secondsec-head  ms-3">
                                        <span className="custom-font">{service.title}</span>{" "}
                                        Development services
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
};

export default ServiceList;
