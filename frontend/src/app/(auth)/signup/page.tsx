import { Metadata } from "next";
import LoginSignupFormTemplate from "@/components/templates/login-signup-form-template";

export const metadata: Metadata = {
  title: "Signup | WMA",
  description: "",
};

export default function page() {
  return <LoginSignupFormTemplate variant="signup" />;
}
