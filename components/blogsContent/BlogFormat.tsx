import Image, { StaticImageData } from "next/image";
import BlogFooter from "./BlogFooter";

type Props = {
  title: string;
  subTitle: string;
  urlToImage: string | StaticImageData;
  imageAltText: string;
  author: string;
  description: string;
  quote: string;
  quoteDescription: string;
  heading: string;
  content: string;
};

export default function BlogFormat({
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
}: Props) {
  return (
    <>
      <h1 className="max-lg:text-3xl text-4xl">{title}</h1>
      <h2 className="text-xl font-normal text-zinc-400">{subTitle}</h2>
      <Image src={urlToImage} alt={imageAltText} width={1175} height={661} />
      <h3 className="text-2xl">Author: {author}</h3>
      <p className="text-lg">{description}</p>
      <blockquote className="text-lg bg-yellow-100 p-4 border-2 border-red-100">
        {quote}
      </blockquote>
      <p className="text-lg">{quoteDescription}</p>
      <section className="flex flex-col justify-center items-start gap-8">
        <h1 className="font-bold text-xl">{heading}</h1>
        <p className="text-lg">{content}</p>
      </section>
      <BlogFooter />
    </>
  );
}
