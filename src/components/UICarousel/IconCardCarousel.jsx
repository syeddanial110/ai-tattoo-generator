import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import scroll1 from "../../assets/Icons/icon1.png";
import scroll2 from "../../assets/Icons/icon2.png";
import scroll3 from "../../assets/Icons/icon3.png";
import scroll4 from "../../assets/Icons/icon4.png";
import scroll5 from "../../assets/Icons/icon5.png";
import scroll6 from "../../assets/Icons/icon6.png";
import scroll7 from "../../assets/Icons/icon7.png";
import Image from "next/image";
import Link from "next/link";
import UITypography from "../UITypography/UITypography";
import UIIconCard from "../UIIconCard/UIIconCard";

const IconCardCarousel = () => {
  const carouselData = [
    {
      img: scroll1,
      link: "/",
      heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      img: scroll4,
      link: "/",
      heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      img: scroll4,
      link: "/",
      heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      img: scroll4,
      link: "/",
      heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      img: scroll5,
      link: "/",
      heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      img: scroll6,
      link: "/",
      heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      img: scroll7,
      link: "/",
      heading: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {carouselData.map((item, i) => {
          return (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Link href={item.link}>
                <UIIconCard
                  icon={item.img}
                  heading={item.heading}
                  description={item.description}
                />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default IconCardCarousel;
