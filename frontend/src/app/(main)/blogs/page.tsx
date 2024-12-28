import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/ui/button";
import {
  Carousel,
  CarouselContent,
  BlogsCarouselDots,
  CarouselItem,
} from "@/components/organisms/carousel";
import { Metadata } from "next";

export const blogs = [
  {
    category: "news",
    posts: [
      {
        url: "addressing-us-teacher-shortage",
        title: "Addressing US Teacher Shortage: A Call to Action",
        image: {
          src: "/teacher.jpg",
          position: "object-[center_-3.5rem]",
          alt: "teacher",
        },
        date: "November 11, 2023",
        text: [
          "The teacher shortage in the United States has been a significant  concern, with various factors contributing to the situation. The U.S.  Department of Education is actively working to address this issue  through a comprehensive policy agenda aimed at recruiting, preparing,  retaining, and supporting a diverse and well-prepared educator  workforce.",
          'This initiative, "Raise the Bar: Lead the World," involves  collaboration with states, tribes, local educational agencies, and  educator preparation programs, including minority-serving institutions,  to eliminate educator shortages and diversify the education  profession​​.  The shortage has been exacerbated by the COVID-19 pandemic, with factors such as low wages, high costs of educator preparation, poor working  conditions, and inequitable funding practices contributing to a decline  in new educators entering the field and high rates of attrition.  Particularly impacted areas include special education, STEM education,  career and  technical education, and bilingual education programs​​. To  combat this, the Department of Education has outlined five key policy  levers: increasing compensation, improving working conditions, expanding access to quality and affordable educator preparation, promoting career advancement opportunities, providing high-quality new teacher induction and ongoing professional learning, and increasing educator diversity​​.',
          "The teacher shortage is not only a policy issue but also a matter of  growing concern among educators themselves. According to the National  Center for Education Statistics, 42% of all school principals in the  U.S. expressed heightened concern about educators leaving the profession in the previous academic year​​. Moreover, 45% of U.S. public schools  had at least one teacher vacancy by the end of October 2022​​. Factors contributing to  these shortages include low salaries, tough working conditions, higher  retirement rates, and a declining interest in teaching as a profession​​.",
          'Statistics from "We Are Teachers" highlight the severity of the problem: 44% of teachers reported burnout, 55% indicated they were ready to leave the profession  earlier than planned, and 35% stated they were likely to quit within the next two years​​.  Furthermore, 78% of educators see low pay as a serious issue, and 84% spend their own money on basic  classroom supplies​​. The lack of respect from the public, as perceived by 45% of teachers, adds  to the challenges​​. Addressing this crisis requires a multifaceted  approach, including competitive compensation, improved working  conditions, simplified and enhanced teacher preparation programs,  reduced administrative burden, and effective mentorship and support​​.  These measures aim not only to fill the current vacancies but also to  create a more sustainable and appealing teaching profession for future  generations.',
          "In addressing the teacher shortage crisis in the United States, West  Migration Agency plays a pivotal role. We work directly with schools that are in urgent  need of qualified educators. For those interested in pursuing teaching opportunities in these  schools, we provide detailed information about eligibility and qualification requirements on our  website. Understanding the challenges faced by schools and educators, our goal is to facilitate the placement of capable and motivated teachers in environments where they are most needed.",
          "If you have any questions or concerns regarding the process,  eligibility, or other related matters, please do not hesitate to reach out to us. We are committed to  providing support and guidance throughout your journey. For more personalized assistance or to start the application process, contact us at admin@westmigrationagency.us. Our team is  dedicated to helping alleviate the teacher shortage by connecting  skilled educators with schools where they can make a significant impact.",
        ],
      },
    ],
  },
  {
    category: "posts",
    posts: [
      {
        url: "addressing-us-teacher-shortage",
        title: "Addressing US Teacher Shortage: A Call to Action",
        image: {
          src: "/teacher.jpg",
          position: "object-[center_-3.5rem]",
          alt: "teacher",
        },
        date: "November 11, 2023",
        text: [
          "The teacher shortage in the United States has been a significant  concern, with various factors contributing to the situation. The U.S.  Department of Education is actively working to address this issue  through a comprehensive policy agenda aimed at recruiting, preparing,  retaining, and supporting a diverse and well-prepared educator  workforce.",
          'This initiative, "Raise the Bar: Lead the World," involves  collaboration with states, tribes, local educational agencies, and  educator preparation programs, including minority-serving institutions,  to eliminate educator shortages and diversify the education  profession​​.  The shortage has been exacerbated by the COVID-19 pandemic, with factors such as low wages, high costs of educator preparation, poor working  conditions, and inequitable funding practices contributing to a decline  in new educators entering the field and high rates of attrition.  Particularly impacted areas include special education, STEM education,  career and  technical education, and bilingual education programs​​. To  combat this, the Department of Education has outlined five key policy  levers: increasing compensation, improving working conditions, expanding access to quality and affordable educator preparation, promoting career advancement opportunities, providing high-quality new teacher induction and ongoing professional learning, and increasing educator diversity​​.',
          "The teacher shortage is not only a policy issue but also a matter of  growing concern among educators themselves. According to the National  Center for Education Statistics, 42% of all school principals in the  U.S. expressed heightened concern about educators leaving the profession in the previous academic year​​. Moreover, 45% of U.S. public schools  had at least one teacher vacancy by the end of October 2022​​. Factors contributing to  these shortages include low salaries, tough working conditions, higher  retirement rates, and a declining interest in teaching as a profession​​.",
          'Statistics from "We Are Teachers" highlight the severity of the problem: 44% of teachers reported burnout, 55% indicated they were ready to leave the profession  earlier than planned, and 35% stated they were likely to quit within the next two years​​.  Furthermore, 78% of educators see low pay as a serious issue, and 84% spend their own money on basic  classroom supplies​​. The lack of respect from the public, as perceived by 45% of teachers, adds  to the challenges​​. Addressing this crisis requires a multifaceted  approach, including competitive compensation, improved working  conditions, simplified and enhanced teacher preparation programs,  reduced administrative burden, and effective mentorship and support​​.  These measures aim not only to fill the current vacancies but also to  create a more sustainable and appealing teaching profession for future  generations.',
          "In addressing the teacher shortage crisis in the United States, West  Migration Agency plays a pivotal role. We work directly with schools that are in urgent  need of qualified educators. For those interested in pursuing teaching opportunities in these  schools, we provide detailed information about eligibility and qualification requirements on our  website. Understanding the challenges faced by schools and educators, our goal is to facilitate the placement of capable and motivated teachers in environments where they are most needed.",
          "If you have any questions or concerns regarding the process,  eligibility, or other related matters, please do not hesitate to reach out to us. We are committed to  providing support and guidance throughout your journey. For more personalized assistance or to start the application process, contact us at admin@westmigrationagency.us. Our team is  dedicated to helping alleviate the teacher shortage by connecting  skilled educators with schools where they can make a significant impact.",
        ],
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Blogs | WMA",
  description: "",
};

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

function NewsCard({ category, post }: NewsCardProps) {
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

export default function BlogsPage() {
  return (
    <section className="bg-white">
      <div className="border-wma-darkTeal mb-2 border-b">
        <h1 className="mx-auto max-w-[1280px] px-4 py-6 text-4xl font-bold sm:py-10 sm:text-5xl md:px-8 md:py-14 md:text-6xl lg:py-20 lg:text-7xl xl:px-20 xl:text-8xl">
          WMA Blogs
        </h1>
      </div>
      <Carousel>
        <BlogsCarouselDots items={blogs} />
        <CarouselContent>
          {blogs.map((blog, i) => (
            <CarouselItem key={i}>
              {blog.posts.map((post, i) => (
                <NewsCard key={i} post={post} category={blog.category} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
