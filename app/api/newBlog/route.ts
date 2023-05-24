import { NextRequest } from "next/server";
import { connectDB, disconnectDB } from "@databases/connectionDB";
import Post from "@models/posts/posts";

export async function POST(request: NextRequest) {
  const { title, subTitle, description,qoute,qouteDescription,heading,content,date,author,urlToImage,imageAltText } = await request.json();
  try {
    await connectDB();
    await Post.create({
      title,
      subTitle,
      description,
      qoute,
      qouteDescription,
      heading,
      content,
      date,
      author,
      urlToImage,
      imageAltText
    });
    await disconnectDB();
    return new Response(JSON.stringify({ message: "success" }), {
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "error", error: err }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
}