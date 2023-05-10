import data from "@jsonsFiles/featurePost.json";
import image from "@images/featured-post.webp"
import Image from "next/image";
import { Outfit } from "next/font/google";
import BlogFooter from "@components/BlogFooter";
import { Fragment } from "react";
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
function FeaturedPost(): JSX.Element {
  return (
    <>
      <div className={`grid grid-cols-1 gap-6 justify-start border border-black mx-5 my-10 p-20 ${outfit.className}`}>
        <section className="flex justify-between items-center">
          <span>May 6&nbsp;·&nbsp;2 min read</span>
          <span className="scale-150">· · ·</span>
        </section>
        <section className="flex flex-col gap-8 w-4/5 mx-auto my-8">
          {data.map((item: MainContent) => {
            return (
              <Fragment key={item.title}>
                <h1 className="text-5xl">{item.title}</h1>
                <h2 className="text-2xl font-normal text-zinc-400">{item.subTitle}</h2>
                <Image
                  src={image}
                  alt="Featured Post"
                />
                <h3 className="text-2xl">Author: {item.author}</h3>
                <p className="text-lg">Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </p>
                <section className="flex flex-col justify-center items-start gap-8">
                  <h1 className="font-bold text-xl">Design with Ease</h1>
                  <p className="text-lg bg-yellow-100 p-4 border-2 border-red-100">{item.quote}</p>
                  <p className="text-lg">Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.</p>
                </section>
                <BlogFooter />
              </Fragment>
            );
          })}
        </section>
      </div>
    </>
  );
}
export default FeaturedPost;
