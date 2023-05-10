import { connectDB, disconnectDB } from "@databases/connectionDB";
import posts from "@models/posts/posts";

export async function POST(request: Request) {
  const _id = await request.json();
  try {
    await connectDB();
    const res = await posts.findById(_id);
    await disconnectDB();
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
