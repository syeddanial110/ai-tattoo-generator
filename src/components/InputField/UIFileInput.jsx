"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const UIFileInput = ({ onChange, labelName, multiple, name, ...props }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">{labelName}</Label>
      <Input
        id="picture"
        type="file"
        name={name}
        multiple={multiple}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default UIFileInput;
