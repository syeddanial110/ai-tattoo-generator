"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import UITextField from "@/components/InputField/UITextField";
import { loginSchema, registerSchema } from "@/utils/schema";
import { pathLocations } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import UIFileInput from "@/components/InputField/UIFileInput";
import { apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";

const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const form = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileInput = (e) => {
    setProfileImage(e.target.files[0]);
  };

  function onSubmit(data) {
    // Fixed typo in function name
    console.log("data", data);
    const dataObj = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      image: profileImage,
    };
    console.log("dataObj", dataObj);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("image", profileImage);

    apiPost(
      `${ApiEndpoints.auth.base}${ApiEndpoints.auth.register}`,
      formData,
      (res) => {
        console.log("res", res);
        toast.success(res?.message);
        if (res?.success) router.push(pathLocations.login);
      },
      (err) => {
        console.log("err", err);
        toast.error(err?.message);
      },
      { "Content-Type": "multipart/form-data" }
    );
    // router.push(pathLocations.home);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="First Name"
                placeholder="Your First Name"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Last Name"
                placeholder="Your Last Name"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <UIFileInput
          labelName="Profile Picture"
          name="profileImage"
          onChange={handleFileInput}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Email"
                placeholder="Your Email"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <UITextField
                type="password"
                field={field}
                formLabel="Password"
                placeholder="Use Strong Passwords"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <UITextField
                type="password"
                field={field}
                formLabel="Confirm Password"
                placeholder="Confirm your password"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
