import { NextRequest } from "next/server";
import { connectDB, disconnectDB } from "@databases/connectionDB";
import { connection } from "mongoose";
import Post from "@models/posts/posts";

export async function POST(request: NextRequest) {
  const { blogTitle, blogDescription, blogContent } = await request.json();
  try {
    if (connection.readyState === 0) await connectDB();
    else {
      const res = await Post.create({
        title: blogTitle,
        description: blogDescription,
        content: blogContent,
      });
      res.save();
    }
  } catch (err) {
    await disconnectDB();
    return new Response(JSON.stringify({ message: "error", error: err }), {
      headers: { "content-type": "application/json" },
    });
  }
  await disconnectDB();
  return new Response(JSON.stringify({ message: "success" }), {
    headers: { "content-type": "application/json" },
  });
}
