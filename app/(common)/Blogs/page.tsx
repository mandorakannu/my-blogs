import imagePost from "@images/featured-post.webp";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Blogs = {
  _id: string;
  title: string;
  subTitle: string;
  imageAltText: string;
  author: string;
  description: string;
  quote: string;
  quoteDescription: string;
  heading: string;
  content: string;
  createdAt: string;
}[];

const getAllBlogs = async (): Promise<any> => {
  try {
    const BASE_URL = process.env.BASE_URL;
    const res = await fetch(`${BASE_URL}/api/findBlogs`,{
      cache: "no-cache",
      next: {revalidate: 60}
    });
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

async function Blogs(): Promise<JSX.Element> {
  const blogs: Blogs = await getAllBlogs();
  return (
    <>
      <section
        className={`grid max-sm:grid-cols-1 md: grid-cols-2 md:grid-cols-3 gap-6 m-6 ${outfit.className}`}
      >
        {blogs.map((blog) => (
          <Link
            href={`/Blogs/${blog._id}`}
            key={blog.title}
            className="flex flex-col items-start justify-start w-full h-full space-y-8 bg-white border-2 border-gray-200"
          >
            <Image
              src={imagePost}
              alt={blog.imageAltText}
              className="w-full h-full"
            />
            <span
              className="text-2xl text-gray-800 hover:text-gray-700 px-1"
              key={blog.title}
            >
              {blog.title}
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Blogs;
