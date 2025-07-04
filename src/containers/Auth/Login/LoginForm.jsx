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
import { loginSchema } from "@/utils/schema";
import { pathLocations } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";
import { setToken } from "@/apis/Auth";
import { useDispatch } from "react-redux";
import { signin } from "@/store/actions/AUTH";

const LoginForm = () => {
  const router = useRouter();
  const disptach = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data, e) {
    e.preventDefault();

    console.log("data", data);
    const dataObj = {
      email: data.email,
      password: data.password,
    };
    apiPost(
      `${ApiEndpoints.auth.base}${ApiEndpoints.auth.login}`,
      dataObj,
      (res) => {
        console.log("res", res);
        if (res?.success) {
          disptach(signin({ data: res?.data }));
          router.push(pathLocations.home);
          toast.success(res?.message);
          setToken(res?.data?.token);
        }
      },
      (err) => {
        toast.error(err?.message);
        console.log("err", err);
      }
    );
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email" // Changed from username to email to match defaultValues
          render={({ field }) => (
            <FormItem>
              <UITextField field={field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <UITextField type="password" field={field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
