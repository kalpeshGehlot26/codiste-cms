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
					<div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={index}>
						<div className="card h-100">
							<img
								className="card-img-top img-fluid casestudy-img"
								src={item.image}
								alt={item.title}
							/>
							<div className="card-body cardsec-clr">
								<h5 className="card-title">{item.title}</h5>
								<Link href={item.url} className="btn book-btn mt-3">
									Read More
								</Link>
							</div>
						</div>

					</div>
				);
			})}
		</div>
	);
};

export default CaseStudyList;