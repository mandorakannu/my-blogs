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
    console.log(err);
  }
};

export default async function Blog({
  params: { _id },
}: {
  params: { _id: string };
}) {
  const blog: Blogs = await BlogPage(_id);

  return (
      <div className="flex flex-col items-start justify-start border-2 border-gray-200 p-5 m-5 gap-3" key={blog.title}>
        <h1 className="text-2xl">{blog.title}</h1>
        <h3 className="text-base">{blog.description}</h3>
        <p className="text-base" dangerouslySetInnerHTML={{__html: blog.content}}/>
    </div>
  );
}
