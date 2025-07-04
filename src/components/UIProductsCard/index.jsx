import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import card_img from "../../assets/Images/card_img.webp";
import card_img2 from "../../assets/Images/card_img2.webp";
import UITypography from "../UITypography/UITypography";
import Link from "next/link";

const UIProductCard = ({
  mainImg,
  hoverImg,
  title,
  description,
  slots,
  href,
}) => {
  return (
    <Link href={href}>
      <Card className="group hover:cursor-pointer">
        <CardHeader>
          <div className="h-[300px] w-full relative">
            {/* Main Image */}
            <Image
              src={mainImg}
              alt="Card image"
              fill
              className="object-cover group-hover:opacity-0 transition-opacity duration-300"
            />
            {/* Hover Image */}
            <Image
              src={hoverImg}
              alt="Card hover image"
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </CardHeader>
        <CardContent>
          <UITypography variant="h5" text={title} className="text-center" />
          <p className="text-center">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-center">{slots}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default UIProductCard;
