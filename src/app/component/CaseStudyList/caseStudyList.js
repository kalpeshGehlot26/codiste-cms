"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const CaseStudyList = ({ caseStudyItems, caseStudyCount, setTotalCount }) => {
	useEffect(() => {
		setTotalCount(caseStudyItems.length);
	}, [caseStudyItems]);

	return (
		<div className="row">
			{caseStudyItems?.map((item, index) => {
				if (caseStudyCount < index + 1) return;
				return (
					<div className="col-lg-3 col-md-6 col-sm-12 mb-5" key={index}>
						<div>
							<img
								className="img-fluid"
								src={item.image}
								alt={item.title}
							/>
						</div>
						<h5 className="mt-3">{item.title}</h5>
						<Link href={item.url} className=" mt-3 case-btn">
							Read More
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default CaseStudyList;
