"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import UITypography from "../UITypography/UITypography";
import { CircleArrowUp } from "lucide-react";
import bannerImg1 from "../../assets/Images/bannerImg1.png";
import shadeImg from "../../assets/Images/shadeImg.png";

const BannerCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const carouselData = [
    {
      img: bannerImg1,
      h4: "quality cleaning at a fair price",
      h1: "Specialized",
      h12: "efficient and",
      h13: "through",
      h14: "cleaning services",
      link: "/",
    },
    {
      img: bannerImg1,
      link: "/",
      h4: "quality cleaning at a fair price",
      h1: "Specialized",
      h12: "efficient and",
      h13: "through",
      h14: "cleaning services",
    },
    {
      img: bannerImg1,
      link: "/",
      h4: "quality cleaning at a fair price",
      h1: "Specialized",
      h12: "efficient and",
      h13: "through",
      h14: "cleaning services",
    },
    {
      img: bannerImg1,
      link: "/",
      h4: "quality cleaning at a fair price",
      h1: "Specialized",
      h12: "efficient and",
      h13: "through",
      h14: "cleaning services",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="mx-auto w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent>
          {carouselData.map((item, i) => (
            <CarouselItem key={i} className="pl-30">
              <div className="relative">
                <Image
                  src={shadeImg}
                  alt="shadeImg"
                  style={{ position: "absolute", height: "100%" }}
                />

                <div
                  className="grid grid-cols-1 justify-between"
                  style={{
                    backgroundImage: `url(${item.img.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100%",
                  }}
                >
                  <div className="flex flex-col justify-center items-start">
                    <UITypography
                      variant="h4"
                      className="uppercase"
                      text={item.h4}
                    />
                    <UITypography
                      variant="h1"
                      className="!text-[60px] uppercase !font-medium"
                      text={item.h1}
                    />
                    <div className="flex items-center gap-5">
                      <CircleArrowUp
                        className="rotate-45"
                        size={48}
                        strokeWidth={1}
                      />
                      <UITypography
                        variant="h1"
                        className="!text-[60px] uppercase italic"
                        text={item.h12}
                      />
                    </div>
                    <UITypography
                      variant="h1"
                      className="!text-[60px] uppercase !font-medium"
                      text={item.h13}
                    />
                    <UITypography
                      variant="h5"
                      className="uppercase !font-medium"
                      text={item.h14}
                    />
                  </div>
                  {/* <div>
                    <Image
                      src={item.img}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-[100vh] rounded-lg object-cover"
                      priority={i === 0}
                    />
                  </div> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>

      {/* Dots navigation */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? "bg-main" : "bg-muted"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
