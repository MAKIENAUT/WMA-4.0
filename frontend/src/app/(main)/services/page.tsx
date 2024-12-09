import ServiceOverviewTemplate from "@/components/templates/ServiceOverviewTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | WMA",
  description: "",
};

export default function services() {
  return <ServiceOverviewTemplate type="page" />;
}
