import type { Metadata } from "next";
import { SidebarProvider } from "@/components/atoms/ui/sidebar";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";

export const metadata: Metadata = {
  title: "West Migration Agency (WMA)",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <Navbar />
      <main className="mt-[56px] sm:mt-[72px] md:mt-[80px]">{children}</main>
      <Footer />
    </SidebarProvider>
  );
}
