import { DefaultSeo, NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react'


const PillarsOf = () => {
  return (
    <>
      {/* <DefaultSeo
        noindex={true}
      /> */}
      {/* <NextSeo
        noindex={true}
      /> */}
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div>EasyWaysToNFTWhiteListing</div>
    </>
  );
}

export default PillarsOf