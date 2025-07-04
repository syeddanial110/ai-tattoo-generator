import Image from "next/image";
import React from "react";
import UITypography from "../UITypography/UITypography";

const UIIconCard = ({ icon, heading, description }) => {
  return (
    <div className="w-full flex flex-col gap-y-1 items-center justify-center">
      <Image src={icon} alt="icon" height={80} width="100%" />
      <UITypography className="text-center" variant="h5" text={heading} />
      <UITypography className="text-center" variant="p" text={description} />
    </div>
  );
};

export default UIIconCard;
