import PromiseImage from "../molecules/promise-image";
import PromiseStatement from "../molecules/promise-statement";

export default function PromiseSection() {
  return (
    <section className="relative mb-32 px-4 sm:px-8 lg:mb-96 xl:px-20">
      <div className="mx-auto max-w-[1280px] items-center sm:flex">
        <PromiseStatement />
        <PromiseImage />
      </div>
    </section>
  );
}
