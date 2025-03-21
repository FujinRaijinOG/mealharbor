// filepath: c:\Users\Lenovo\mealharbor\app\(site)\auth\signin\page.tsx
//app/(site)/auth/signin/page.tsx
import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
