import NewsCard from "@/components/organisms/news-card";
import {
  NewsCarousel,
  NewsCarouselContent,
  NewsCarouselDots,
  NewsCarouselItem,
} from "@/components/organisms/news-carousel";
import blogs from "@/data/blogs.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | WMA",
  description: "",
};

export default function page() {
  return (
    <section className="bg-white">
      <div className="border-wma-darkTeal mb-2 border-b">
        <h1 className="mx-auto max-w-[1280px] px-4 py-6 text-4xl font-bold sm:py-10 sm:text-5xl md:px-8 md:py-14 md:text-6xl lg:py-20 lg:text-7xl xl:px-20 xl:text-8xl">
          WMA Blogs
        </h1>
      </div>
      <NewsCarousel>
        <NewsCarouselDots data={blogs.blogs} />
        <NewsCarouselContent>
          {blogs.blogs.map((blog, i) => (
            <NewsCarouselItem key={i}>
              {blog.posts.map((post, i) => (
                <NewsCard key={i} post={post} category={blog.category} />
              ))}
            </NewsCarouselItem>
          ))}
        </NewsCarouselContent>
      </NewsCarousel>
    </section>
  );
}
