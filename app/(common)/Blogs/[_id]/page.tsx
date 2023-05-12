import ReadingTime from "@components/blogsContent/ReadingTime";
import BlogFormat from "@components/blogsContent/BlogFormat";
import imagePost from "@images/featured-post.webp";

type Blogs = {
  _id: string;
  title: string;
  subTitle: string;
  imageAltText: string;
  author: string;
  description: string;
  quote: string;
  quoteDescription: string;
  heading: string;
  content: string;
  createdAt: string;
};
const BlogPage = async (_id: string): Promise<any> => {
  const BASE_URL = process.env.BASE_URL;
  try {
    const res = await fetch(`${BASE_URL}/api/searchBlog`, {
      cache: "force-cache",
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
  const {
    title,
    subTitle,
    imageAltText,
    author,
    description,
    quote,
    quoteDescription,
    heading,
    content,
    createdAt,
  } = blog;
  return (
    <>
      <ReadingTime time={content?.length} date={createdAt} />
      <section className="flex flex-col gap-8 w-4/5 mx-auto my-8">
        <BlogFormat
          title={title}
          subTitle={subTitle}
          imageAltText={imageAltText}
          author={author}
          description={description}
          quote={quote}
          quoteDescription={quoteDescription}
          heading={heading}
          content={content}
          urlToImage={imagePost}
        />
      </section>
    </>
  );
}
