import React from "react";
import industryItems from "../../data/AIConsutitems";

const AIConsultindus = () => {
  return (
    <div className="row justify-content-center">
      {
        industryItems?.map((industry, index) => {
          return (
            <div className="col-xl-2 col-md-4 col-sm-6" key={index}>
              <div className="ins-newblock h-100">
                <img src={industry.url} alt={industry.title} loading="lazy" />
                <p className={industry.className}>{industry.title}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default AIConsultindus;