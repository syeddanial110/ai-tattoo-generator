import UITypography from "@/components/UITypography/UITypography";
import LoginForm from "@/containers/Auth/Login/LoginForm";
import { pathLocations } from "@/utils/navigation";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <p className="text-center text-gray-600 mb-6">
        Please enter your credentials to access your account.
      </p>
      <LoginForm />
      <div className="mt-3 flex justify-center">
        <Link href={pathLocations.register}>Register an Account</Link>
      </div>
    </>
  );
};

export default Login;
