export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center justify-center">
      <section className="w-full px-4">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-8 rounded-lg bg-white p-8">
          {children}
        </div>
      </section>
    </main>
  );
}
