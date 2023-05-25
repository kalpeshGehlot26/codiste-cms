import React from "react";
import industryItems from "../../data/industriesItems";

const Industries = () => {
    return (
        <div className="row">
            {
                industryItems?.map((industry, index) => {
                    return (
                        <div className="col-xl-2 col-md-4 col-sm-6 pb-3 " key={index}>
                            <div className="ins-newblock h-100">
                                <img src={industry.url} alt={industry.title} />
                                <p className={industry.className}>{industry.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Industries;
