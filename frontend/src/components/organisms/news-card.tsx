import Image from "next/image";
import { Button } from "../atoms/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NewsCardProps = {
  category: string;
  post: {
    url: string;
    title: string;
    image: { src: string; position?: string; alt: string };
    date: string;
    text: string[];
  };
};

export default function NewsCard({ category, post }: NewsCardProps) {
  return (
    <Link
      className="focus-visible:ring-wma-gold h-fit rounded-xl bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ring-offset-white transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      href={`/blogs/${category}/${post.url}`}
    >
      <div className="mb-2 px-2 pt-2">
        <div className="relative aspect-[16/9]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            className={cn("rounded-sm object-cover", post.image.position)}
          />
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-wma-teal text-sm font-semibold">{post.date}</p>
        <h1 className="mb-4 text-2xl font-semibold xl:text-3xl">
          {post.title}
        </h1>
        <p className="mb-6 line-clamp-4 text-[#4D4D4D]">
          {post.text.slice(0, 1)}
        </p>
        <Button
          asChild
          variant="link"
          size="none"
          className="text-wma-teal hover:text-wma-darkTeal gap-1 font-semibold"
        >
          <div>
            Read more
            <ChevronRight width={16} />
          </div>
        </Button>
      </div>
    </Link>
  );
}
