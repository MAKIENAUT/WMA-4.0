import AboutUsImage from "@/components/molecules/about-us-image";
import { orelega_one } from "@/lib/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WMA",
  description: "",
};

export default function AboutUs() {
  return (
    <section className="px-4 pt-10 sm:px-8 md:pt-12 xl:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-t-xl bg-white px-4 py-8 pb-32 sm:px-8 md:gap-10 md:pb-40 lg:px-14 lg:py-10 lg:pb-44 xl:px-16 xl:py-12 xl:pb-60">
        <AboutUsImage />
        <div className="flex flex-col gap-4">
          <h1
            className={`${orelega_one.className} text-4xl text-black md:text-5xl xl:text-6xl`}
          >
            About Us
          </h1>
          {ABOUT_US_ITEMS.texts.map((text, i) => (
            <p key={i} className="xl:text-lg">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

const ABOUT_US_ITEMS = {
  texts: [
    "Welcome to our employment agency! (West Migration Agency “WMA”).",
    "We are dedicated to providing high-quality services to help individuals achieve their career goals and reunite with loved ones.Our agency offers various services, including study and exchange programs, family-based petitions, and temporary employment.",
    "At West Migration Agency, we believe in providing exceptional service and personalized support to help our clients achieve their goals. We understand that each individual has unique needs and circumstances and are committed to delivering tailored solutions to meet those needs. Contact us today to learn how we can help you with your study and exchange program, family-based petition, or temporary employment needs.",
  ],
};
