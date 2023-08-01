"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import caseStudyItems from "@/app/data/caseStudyItems";

const CaseStudyList = () => {
	const [caseStudyCount, setCaseStudyCount] = useState(6);
	const [totalCount, setTotalCount] = useState(null);

	useEffect(() => {
		setTotalCount(caseStudyItems.length);
	}, [caseStudyItems]);

	return (
		<Fragment>
			<div className="container container-fluid py-5">
				<div className="row g-5 casestudylink">
					{caseStudyItems?.map((item, index) => {
						if (caseStudyCount < index + 1) return;
						return (
							<div
								className="col-lg-4 col-md-6 col-sm-12"
								key={index}
							>
								<Link href={item.url} className={item.className}>
									<div className="case-position">
										{" "}
										<img
											className="img-fluid "
											alt={item.title}
											src={item.image}
											loading="lazy"
										/>
									</div>
									<div className="mb-5">
										<h3 className="case-head">
											{item.title}
										</h3>
										<span
											// href={item.url}
											className="case-pera"
										>
											Read More &gt;&gt;
										</span>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
			{totalCount > caseStudyCount ? (
				<div className="text-center">
					<button
						className="book-btn"
						onClick={() =>
							setCaseStudyCount((prevState) => prevState + 3)
						}
					>
						Explore More
					</button>
				</div>
			) : null}
		</Fragment>
	);
};

export default CaseStudyList;
