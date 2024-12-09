export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      {children}
    </main>
  );
}
