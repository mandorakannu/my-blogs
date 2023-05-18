import { Outfit } from "next/font/google";
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
    const VERCEL_URL = process.env.VERCEL_URL;
    const res = await fetch(`https://${VERCEL_URL}/api/findBlogs`,{
      cache: "no-cache",
      next: {revalidate: 10}
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
        className={`grid max-sm:grid-cols-1 md: grid-cols-2 md:grid-cols-3 gap-6 m-6 cursor-default ${outfit.className}`}
      >
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg border"
          >
              <div className="flex flex-col justify-start gap-2">
                <h1 className="text-xl font-bold">{blog.title}</h1>
                <h2>{blog.subTitle}</h2>
              </div>
              <Link
                href={`/Blogs/${blog._id}`}
                className="text-red-500 my-3 w-fit hover:underline underline-offset-4"
              >
                Read More...
              </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Blogs;
