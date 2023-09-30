"use client";

import SLIDER_DATA from "@/constants/sliderDate";
import React, { useCallback, useEffect, useState } from "react";
import sliderStyle from "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import classNames from "classnames";

const _intervalTime = 5000;

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = SLIDER_DATA.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, sliderLength]);
  const prevSlide = useCallback(() => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  }, [currentSlide, sliderLength]);

  useEffect(() => {
    const interval = setInterval(nextSlide, _intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div className={sliderStyle.slider}>
      <AiOutlineArrowLeft
        className={classNames(sliderStyle.arrow, sliderStyle.next)}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className={classNames(sliderStyle.arrow, sliderStyle.prev)}
        onClick={nextSlide}
      />

      {SLIDER_DATA.map((slider, index) => {
        const { image, heading } = slider;
        return (
          <div
            key={heading}
            className={
              index === currentSlide
                ? classNames(sliderStyle.slide, sliderStyle.current)
                : sliderStyle.slide
            }
          >
            {index === currentSlide ? (
              <Image src={image} alt={heading} fill />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
