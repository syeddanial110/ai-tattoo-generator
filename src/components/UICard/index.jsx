import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import card_img from "../../assets/Images/card_img.webp";
import Link from "next/link";

const UICard = ({ hrefLink }) => {
  return (
    <Link href={hrefLink}>
      <Card className="group overflow-hidden">
        {" "}
        {/* Added overflow-hidden */}
        <CardHeader className="overflow-hidden">
          {" "}
          {/* Added overflow-hidden */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
            {" "}
            {/* Container for image */}
            <Image
              src={card_img}
              alt="Logo"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
              style={{ borderRadius: "16px" }}
            />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            6/9 - 6/13 | 8:30 - 4:00 Ages 3-7 | Mon - Fri STEM, Sports, Ninja
            Fitness Laguna (Kelly) Park, Carlsbad Separated Age Groups
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-center">13 Spots Open</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default UICard;
