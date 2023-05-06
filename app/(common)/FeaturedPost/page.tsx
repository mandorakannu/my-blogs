import data from "@jsonsFiles/featurePost.json";
import image from "@images/featured-post.webp"
import Image from "next/image";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})
type MainContent = {
  title: string;
  subTitle: string;
  author: string;
  quote: string;
  urlToImage: string;
};
function FeaturedPost() {
  return (
    <>
      <div className={`grid grid-cols-1 gap-6 justify-start border border-black mx-5 my-10 p-20 ${outfit.className}`}>
        <section className="flex justify-between items-center">
          <span>May 6 · 2 min read</span>
          <span className="scale-150">· · ·</span>
        </section>
        <section className="flex flex-col gap-8 w-4/5 mx-auto my-8">
          {data.map((item: MainContent) => {
            return (
              <>
                <h1 className="text-5xl">{item.title}</h1>
                <h2 className="text-2xl text-zinc-400">{item.subTitle}</h2>
                <Image
                  src={image}
                  alt="Featured Post"
                />
                <h3 className="text-2xl">Author: {item.author}</h3>
                <p className="">Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </p>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}
export default FeaturedPost;
