import { connectDB, disconnectDB } from "@databases/connectionDB";
import posts from "@models/posts/posts";

export async function GET() {
  try {
    const _id = process.env.FEATURED_POST_ID;
    await connectDB();
    const featuredPost = await posts.findById(_id);
    await disconnectDB();
    return new Response(JSON.stringify(featuredPost), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err }), { status: 500 });
  }
}
