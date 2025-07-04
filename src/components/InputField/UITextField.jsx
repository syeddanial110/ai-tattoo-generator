"use client";

import React, { useState } from "react";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

const UITextField = ({
  isForm = true,
  type,
  formLabel,
  field,
  placeholder,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {isForm ? (
        <>
          {type == "password" ? (
            <>
              {formLabel && <FormLabel>{formLabel}</FormLabel>}
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...rest}
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
            </>
          ) : (
            <>
              {formLabel && <FormLabel>{formLabel}</FormLabel>}
              <FormControl>
                <Input placeholder={placeholder} {...field} {...rest} />
              </FormControl>
            </>
          )}
        </>
      ) : (
        <Input {...rest} />
      )}
    </>
  );
};

export default UITextField;
