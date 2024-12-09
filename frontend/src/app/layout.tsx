import "./globals.css";
import { dm_sans } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} bg-background overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
