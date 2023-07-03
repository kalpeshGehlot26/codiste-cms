import { DefaultSeo, NextSeo } from "next-seo";
import React from "react";

const buildadex = () => {
  return (
    <>
      <DefaultSeo
        noindex={true}
      />
      <NextSeo
        noindex={true}
      />
      <div>EasyWaysToNFTWhiteListing</div>
    </>
  );
};

export default buildadex;


