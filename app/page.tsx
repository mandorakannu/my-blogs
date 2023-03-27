import Image from "next/image";
import { Outfit } from "next/font/google";
import Link from "next/link";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center py-20 mx-5">
        <div className="relative border border-red-400">
          <span className="absolute top-0 bg-white text-3xl px-5 py-3 border-r border-b border-red-400">
            FEATURED POST
          </span>
          <Image
            src="/images/featured-post.webp"
            width={1000}
            height={500}
            alt="FEATURED POST"
          />
          <div className={`px-4 ${outfit.className} my-3 flex flex-col justify-center items-start gap-5`} >
          <span className="text-gray-500" >1 Day · &nbsp; 2 min</span>
          <Link href="/FeaturedPost" className="text-4xl">Back to Fiction: What I&apos;m Reading This Summer</Link>
          <span className="text-gray-500 font-normal w-11/12" >Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</span>
          </div>
        </div>
      </div>
    </>
  );
}
