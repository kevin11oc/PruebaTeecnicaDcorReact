"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

//Imagenes para el banner
const items = [
  {
    src: require("../../public/banner.jpg"),
    altText: "Banner 1",
    caption: "Banner 1",
    key: 1,
  },
  {
    src: require("../../public/banner2.webp"),
    altText: "Banner 2",
    caption: "Banner 2",
    key: 2,
  },
  {
    src: require("../../public/banner3.jpg"),
    altText: "Banner 3",
    caption: "Banner 3",
    key: 3,
  },
];

function Carrusel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  //controles para el carrusel
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image
          className="w-full h-80 object-fit-cover"
          src={item.src}
          alt={item.altText}
        />

      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel;
