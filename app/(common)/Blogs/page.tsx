"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  __v?: number;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/findBlogs", { cache: "force-cache" });
      const data = await res.json();
      setBlogs(data);
    } catch (err: any) {
      alert("Internal Server Error! status code: 500");
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl text-red-500 mt-10 mb-10">Blogs</h1>
      <div className="w-4/5 mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 grid-flow-row-dense gap-10 my-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-gray-100 rounded-lg shadow-lg p-5">
            <h2 className="text-2xl text-red-500 mb-2">{blog.title}</h2>
            <p className="text-gray-500 mb-2">{blog.description}</p>
            <Link href={`/Blogs/${blog._id}`} className="hover:opacity-50 transition-opacity ease-in-out delay-75">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
