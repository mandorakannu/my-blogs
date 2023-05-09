import { NextRequest } from "next/server";
import { connectDB, disconnectDB } from "@databases/connectionDB";
import Post from "@models/posts/posts";

export async function POST(request: NextRequest) {
  const { blogTitle, blogDescription, blogContent } = await request.json();
  try {
    await connectDB();
    const res = await Post.create({
      title: blogTitle,
      description: blogDescription,
      content: blogContent,
    });
    await res.save();
  } catch (err) {
    return new Response(JSON.stringify({ message: "error", error: err }), {
      headers: { "content-type": "application/json" },
    });
  }
  await disconnectDB();
  return new Response(JSON.stringify({ message: "success" }), {
    headers: { "content-type": "application/json" },
  });
}
