import { Metadata } from "next";
import SignupForm from "@/components/organisms/signup-form";

export const metadata: Metadata = {
  title: "Signup | WMA",
  description: "",
};

export default function SignupPage() {
  return <SignupForm />;
}
