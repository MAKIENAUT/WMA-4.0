import { ServiceProps } from "@/types/service-type";
import ServiceSection from "../organisms/service-section";
import services from "@/data/service.json";

export default function ServiceOverviewTemplate({
  type,
}: {
  type: ServiceProps;
}) {
  // const services = [
  //   {
  //     title: "Study And Exchange",
  //     description:
  //       "Our study and exchange programs offer excellent opportunities for those looking to further their education or gain international experience. We work with top universities and institutions worldwide to provide our clients with access to high-quality educational programs. In addition, we work with different school districts across the United States that partner with visa sponsors. Our team is committed to helping you find the program that best suits your needs and supports you throughout the application process.",
  //     imageUrl: "/student-services.jpg",
  //     buttonLabel: "Learn more",
  //     route: "/services/study-and-exchange",
  //   },
  //   {
  //     title: "Family Based",
  //     description:
  //       "Family is important to us, and we understand the challenges of family-based petitions. That's why we offer a personalized approach to help reunite families. Our experienced team will guide you through the process, from filing the petition to preparing for the interview. We understand the emotional, and legal complexities involved and are here to support you every step of the way.",
  //     imageUrl: "/family-services.jpg",
  //     buttonLabel: "Learn more",
  //     route: "/services/family-based",
  //   },
  //   {
  //     title: "Temporary Employment",
  //     description:
  //       "We also offer temporary employment services, which can be an excellent option for individuals looking to gain work experience, explore new industries, or earn extra income. Our team works with employers across various industries to provide opportunities for our clients. We take the time to understand your skills and career goals to match you with the right temporary job.",
  //     imageUrl: "/forklift-services.jpg",
  //     buttonLabel: "Learn more",
  //     route: "/services/temporary-employment",
  //   },
  //   {
  //     title: "Web Development",
  //     description:
  //       "Our web development services are tailored to bring your digital vision to life. Whether you need a simple website or a complex web application, our team of skilled developers specializes in creating responsive, user-friendly, and scalable solutions. We work closely with you to ensure the design and functionality align perfectly with your business goals.",
  //     imageUrl: "/web-development.jpg",
  //     buttonLabel: "Explore now",
  //     route: "/services/web-development",
  //   },
  // ];

  return <ServiceSection services={services.services} type={type} />;
}
