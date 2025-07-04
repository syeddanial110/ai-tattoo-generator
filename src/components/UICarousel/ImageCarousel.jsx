import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import scroll1 from "../../assets/Images/scroll1.png";
import scroll2 from "../../assets/Images/scroll2.png";
import scroll3 from "../../assets/Images/scroll3.png";
import scroll4 from "../../assets/Images/scroll4.png";
import Image from "next/image";
import Link from "next/link";

const ImageCarousel = ({ carouselItemPerView }) => {
  const carouselData = [
    {
      img: scroll1,
      link: "/",
    },
    {
      img: scroll2,
      link: "/",
    },
    {
      img: scroll3,
      link: "/",
    },
    {
      img: scroll4,
      link: "/",
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
            <CarouselItem key={i} className={`md:basis-1/2 lg:basis-1/3`}>
              <Link href={item.link}>
                <Image
                  src={item.img}
                  alt="img"
                  height={220}
                  style={{ width: "100%" }}
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

export default ImageCarousel;
