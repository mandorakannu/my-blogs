import { ObjectId } from "mongoose";
import Link from "next/link";

type BlogsProps = {
  _id: ObjectId;
  title: string;
  description: string;
  content: string;
  createdAt: Date;
};

const fetchBlogs = async () => {
  const url = process.env.BASE_URL;
  try {
    const res = await fetch(`${url}/api/findBlogs`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("ERROR IN SERVER COMPONENT");
  }
};

export default async function Blogs() {
  const blogs = await fetchBlogs();
  return (
    <>
      <h1 className="text-center text-4xl text-red-500 mt-10 mb-10">Blogs</h1>
      <div className="w-4/5 mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 grid-flow-row-dense gap-10">
        {blogs.map((blog: BlogsProps) => {
          return (
            <Link href={`/Blogs/${blog._id}`} key={blog.title}>
              <div className="flex flex-col items-start justify-start border-2 border-gray-200 p-5 mb-5">
                <h1 className="text-2xl hover:text-red-400 transition-colors delay-75 ease-in-out">{blog.title}</h1>
                <h3 className="text-base">{blog.description}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
