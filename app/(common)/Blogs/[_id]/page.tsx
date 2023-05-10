type Blogs = {
  _id: string;
  title: string;
  description: string;
  content: HTMLElement;
  createdAt: Date;
};
const BlogPage = async (_id: string) => {
  const url = process.env.BASE_URL;
  try {
    const res = await fetch(`${url}/api/searchBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("ERROR IN SERVER COMPONENT");
  }
};

export default async function Blog({
  params: { _id },
}: {
  params: { _id: string };
}) {
  const author: string = process.env.AUTHOR!;
  const blog: Blogs = await BlogPage(_id);
  const blogContent = () => {
    console.log(blog.content);
    return { __html: blog.content };
  };

  return (
    <div className="w-1/2 mx-auto my-6 py-4" key={blog.title}>
      <div className="flex flex-col items-start justify-start border-2 border-gray-200 p-5 mb-5">
        <h1 className="text-2xl">{blog.title}</h1>
        <h3 className="text-base">{blog.description}</h3>
        <p className="text-base" dangerouslySetInnerHTML={blogContent()}></p>
        <span>Author: {author}</span>
      </div>
    </div>
  );
}
