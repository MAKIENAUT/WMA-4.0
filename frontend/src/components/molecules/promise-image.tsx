import Image from "next/image";

export default function PromiseImage() {
  return (
    <div className="absolute left-[-4rem] top-[-8rem] mr-2 max-w-[2000px] sm:left-[-20rem] sm:top-auto sm:mr-8 md:left-[-30rem] lg:mr-12 xl:mr-20">
      <Image
        src="/promise-plane.png"
        alt="airplane"
        width={2000}
        height={2000}
      />
    </div>
  );
}
