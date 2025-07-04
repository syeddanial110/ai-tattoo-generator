import RegisterForm from "@/containers/Auth/Register/RegisterForm";
import { pathLocations } from "@/utils/navigation";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Register Your Account</h1>
      <p className="text-center text-gray-600 mb-6">
        Please enter your information to create your account.
      </p>
      <RegisterForm />
      <div className="mt-3 flex justify-center">
        <Link href={pathLocations.login}>Already have an Account? Login Here</Link>
      </div>
    </>
  );
};

export default Register;
