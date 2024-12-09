import StatementImage from "../molecules/statement-image";

export default function StatementSection() {
  return (
    <section className="mb-12 px-4 sm:px-8 md:mb-16 lg:mb-24 xl:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-6 rounded-xl bg-white px-4 py-8 sm:flex-row sm:px-8 md:gap-8 md:p-12 lg:px-20 lg:py-10 xl:gap-20 xl:px-24 xl:py-12">
        <StatementImage />
        <p className="text-wma-darkTeal font-semibold sm:w-full md:text-lg xl:text-2xl">
          Welcome to our employment agency! (West Migration Agency “ WMA”). We
          are dedicated to providing high-quality services to help individuals
          achieve their career goals and reunite with loved ones. Our agency
          offers various services, including study and exchange programs,
          family-based petitions, and temporary employment.
        </p>
      </div>
    </section>
  );
}
