import featuredPost from "@images/featured-post.webp";
import { Outfit } from "next/font/google";
import ReadingTime from "@components/blogsContent/ReadingTime";
import BlogFormat from "@components/blogsContent/BlogFormat";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
type MainContent = {
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

const getFeaturedPost = async (): Promise<any> => {
  const BASE_URL = process.env.BASE_URL;
  try {
    const response = await fetch(`${BASE_URL}/api/featuredPost`, {
      cache: "force-cache",
    });
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

async function FeaturedPost(): Promise<JSX.Element> {
  const data: MainContent = await getFeaturedPost();
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
  } = data;
  return (
    <>
      <div
        className={`grid grid-cols-1 gap-6 justify-start border border-black mx-5 my-10 ${outfit.className}`}
      >
        <ReadingTime time={content?.length} date={createdAt} />
        <section className="flex flex-col gap-8 w-4/5 mx-auto my-8">
          <BlogFormat
            title={title}
            subTitle={subTitle}
            urlToImage={featuredPost}
            imageAltText={imageAltText}
            author={author}
            description={description}
            quote={quote}
            quoteDescription={quoteDescription}
            heading={heading}
            content={content}
          />
        </section>
      </div>
    </>
  );
}
export default FeaturedPost;
