import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import UIButton from "../UIButton/UIButton";
import UITypography from "../UITypography/UITypography";
import Link from "next/link";

const UIProgramCard = ({ text, card_img, btnText, href}) => {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription> */}
        <Image
          src={card_img}
          alt="card image"
          width={200}
          height={90}
          style={{
            borderRadius: "16px",
            height: "250px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </CardHeader>
      <CardContent>
        <UITypography text={text} className="text-center capitalize" />
      </CardContent>
      <CardFooter className="flex justify-center">
        {/* <UIButton
          type="contained"
          title={btnText}
          className="bg-main"
          icon={false}
          btnOnclick={btnOnclick}
        /> */}
        <Link href={href} className="bg-main btn rounded-full py-3 px-6 text-white">{btnText}</Link>
      </CardFooter>
    </Card>
  );
};

export default UIProgramCard;
