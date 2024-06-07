import ReadingTime from "@components/blogsContent/ReadingTime";
import BlogFormat from "@components/blogsContent/BlogFormat";
import { connectDB, disconnectDB } from "@databases/connectionDB";
import posts from "@models/posts/posts";

type Blogs = {
  _id: string;
  title: string;
  subTitle: string;
  urlToImage: string;
  imageAltText: string;
  author: string;
  description: string;
  quote: string;
  quoteDescription: string;
  heading: string;
  content: string;
  createdAt: string;
  date: string;
};
const BlogPage = async (_id: string): Promise<any> => {
  await connectDB();
  const blog = await posts.findById(_id);
  disconnectDB().then(() => console.log("DB disconnected"));
  return blog;
};

export default async function Blog({
  params: { _id },
}: {
  params: { _id: string };
}) {
  const res: Blogs = await BlogPage(_id);
  const blog = JSON.parse(JSON.stringify(res));
  const {
    title,
    subTitle,
    urlToImage,
    imageAltText,
    author,
    description,
    quote,
    quoteDescription,
    heading,
    content,
    createdAt,
    date,
  } = blog;
  return (
    <>
      {blog && (
        <>
          <ReadingTime time={content?.length} date={date} />
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
              urlToImage={urlToImage}
            />
          </section>
        </>
      )}
    </>
  );
}
