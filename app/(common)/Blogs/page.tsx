import { connectDB, disconnectDB } from "@databases/connectionDB";
import posts from "@models/posts/posts";
import { Outfit } from "next/font/google";
import Link from "next/link";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type BlogsProps = {
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

const getAllBlogs = async () => {
  try {
    await connectDB();
    const blogs = await posts.find({});
    disconnectDB().then(() => console.log("DB disconnected"));
    return blogs;
  } catch (error) {
    console.log(error);
    return [];
  }
};

async function Blogs(): Promise<JSX.Element> {
  const posts: BlogsProps = await getAllBlogs();
  const blogs: BlogsProps = JSON.parse(JSON.stringify(posts));
  return (
    <>
      <section
        className={`grid max-sm:grid-cols-1 md: grid-cols-2 md:grid-cols-3 gap-6 m-6 cursor-default ${outfit.className}`}
      >
        {blogs.map((post) => (
          <div
            key={post._id}
            className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg border"
          >
            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-xl font-bold">{post.title}</h1>
              <h2>{post.subTitle}</h2>
            </div>
            <Link
              href={`/Blogs/${post._id}`}
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
