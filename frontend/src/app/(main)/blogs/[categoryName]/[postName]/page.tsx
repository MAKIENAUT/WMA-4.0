import Image from "next/image";
import blogs from "@/data/blogs.json";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type MetadataProps = {
  params: Promise<{ categoryName: string; postName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { categoryName, postName } = await params;
  const data = blogs.blogs
    .find((data) => data.category === categoryName)
    ?.posts.find((post) => post.url === postName) as DataProps;

  if (!data) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: data.title + " | WMA",
    description: data.text[0],
  };
}

type DataProps = {
  url: string;
  title: string;
  image: {
    src: string;
    position: string;
    alt: string;
  };
  date: string;
  text: string[];
};

export default async function page({
  params,
}: {
  params: Promise<{ categoryName: string; postName: string }>;
}) {
  const { categoryName, postName } = await params;
  const data = blogs.blogs
    .find((data) => data.category === categoryName)
    ?.posts.find((post) => post.url === postName) as DataProps;

  if (!data) {
    notFound();
  }

  return (
    <section className="bg-white pb-32">
      <div className="mx-auto max-w-[768px] px-4 pt-4 sm:px-8 lg:px-0">
        <div className="relative flex flex-col gap-4 lg:gap-0">
          <div className="inline-flex size-fit lg:sticky lg:top-[calc(80px+1rem)]">
            <Button
              asChild
              variant="link"
              size="none"
              className="text-wma-darkTeal w-fit gap-0 text-sm lg:absolute lg:right-[calc(100%+2rem)] xl:right-[calc(100%+4rem)]"
            >
              <Link href="/blogs">
                <ChevronLeft /> Go back
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={data.image.src}
                fill
                className={cn("rounded-sm object-cover", data.image.position)}
                alt={data.image.alt}
              />
            </div>
            <div className="inline-flex flex-col gap-4 lg:gap-8">
              <div className="inline-flex flex-col gap-2">
                <p className="text-wma-teal text-sm font-semibold">
                  {data.date}
                </p>
                <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                  {data.title}
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                {data.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
