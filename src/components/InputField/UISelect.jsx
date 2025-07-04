import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UITypography from "../UITypography/UITypography";

const UISelect = ({
  isLabel,
  labelName,
  placeholder,
  onValueChange,
  value,
  children,
}) => {
  return (
    <>
      {isLabel ? (
        <>
          <UITypography
            variant="h6"
            text={labelName}
            className="!text-[14px]"
          />
          <Select
            onValueChange={onValueChange}
            value={value}
            className="text-black"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>{children}</SelectContent>
          </Select>
        </>
      ) : (
        <Select
          onValueChange={onValueChange}
          value={value}
          className="text-black"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>{children}</SelectContent>
        </Select>
      )}
    </>
  );
};

export default UISelect;
