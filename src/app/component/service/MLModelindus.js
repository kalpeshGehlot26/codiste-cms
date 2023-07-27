import React from "react";
import MLModelItems from "../../data/MLModelItems";

const MLModelindus = () => {
  return (
    <div className="row justify-content-center">
      {
        MLModelItems?.map((industry, index) => {
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

export default MLModelindus;