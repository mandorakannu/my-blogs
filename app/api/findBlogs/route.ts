import { connectDB, disconnectDB } from "@databases/connectionDB";
import posts from "@models/posts/posts";
export async function GET(request: Request) {
  try {
    await connectDB();
    const blogs = await posts.find({});
    await disconnectDB();
    return new Response(JSON.stringify(blogs), {
      headers: {
        "content-type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: {
        "content-type": "application/json",
      },
      status: 500,
    });
  }
}
