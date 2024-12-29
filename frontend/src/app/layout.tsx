import { Toaster } from "@/components/atoms/ui/toaster";
import "./globals.css";
import { dm_sans } from "@/lib/fonts";
import QueryProvider from "@/features/react-query/components/query-provider";
import AuthProvider from "@/features/auth/components/auth-provider";

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
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
