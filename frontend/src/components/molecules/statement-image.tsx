import Image from "next/image";

export default function StatementImage() {
  return (
    <div className="relative w-9/12 max-w-[260px] sm:order-last sm:w-full sm:max-w-[400px]">
      <div className="from-wma-darkTeal to-wma-teal absolute left-0 top-0 ml-2 mt-2 aspect-[1/1] w-full rounded-sm bg-gradient-to-r" />
      <Image
        alt="Image of a woman"
        src="/statement-image.jpg"
        width={2000}
        height={2000}
        className="relative z-10 aspect-[1/1] w-full rounded-sm object-cover object-[70%_0]"
      />
    </div>
  );
}
