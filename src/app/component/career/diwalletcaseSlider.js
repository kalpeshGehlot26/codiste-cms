"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import diwalletItems from "../../data/diwalletItems";

const DiveWalletSlider = () => {
  return (
    <Splide
      hasTrack={false}
      options={{
        type: 'loop',
        drag: 'free',
        pagination: true,
        autoplay: false,
        interval: 2000,
        perPage: 5,
        arrows: false,
        autoScroll: {
          speed: 2,
        },
        breakpoints: {

          1400: {
            perPage: 4,
          },
          1000: {
            perPage: 3,
          },
          700: {
            perPage: 2,
          },
          400: {
            perPage: 1,
          },
        }
      }}
    >
      <SplideTrack>
        {
          diwalletItems?.map((event, index) => {
            return (
              <SplideSlide className="splide__slide" key={index}>
                <img className="img-fluid" alt={event.alt} src={event.url} />
              </SplideSlide>
            )
          })
        }
      </SplideTrack>
    </Splide>
  );
};

export default DiveWalletSlider;
