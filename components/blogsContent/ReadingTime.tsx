"use client";
import { useRef, useState } from "react";
import { RiShareForwardFill } from "react-icons/ri";
type Props = {
  date: string;
  time: number;
};

export default function ReadingTime({ date, time }: Props) {
  const sharePostRef = useRef<HTMLSpanElement>(null);
  const [sharePost, setSharePost] = useState("hidden");
  const timeToReadOneWord: number = 0.008;
  const readTimeOfBlogContent = Math.round(time * timeToReadOneWord);

  const sharePostIcon = () => {
    if (sharePostRef.current?.classList.contains("hidden")) {
      setSharePost("block");
    } else {
      setSharePost("hidden");
    }
    sharePostRef.current?.addEventListener("click", () => {
      navigator.share({
        title: "Blog Post",
        text: "Check out this blog post",
        url: window.location.href,
      });
    });
  };

  return (
    <section className="flex justify-between items-center pt-10 mx-auto w-4/5">
      <span>
        {date}&nbsp;·&nbsp;{readTimeOfBlogContent} min read
      </span>
      <div className="relative scale-150 cursor-pointer font-sans">
        <span onClick={sharePostIcon}>···</span>
        <span
          className={`flex items-center my-auto absolute top-5 right-10 bg-white shadow-md text-sm px-5 py-2 ${sharePost}`}
          ref={sharePostRef}
        >
          <RiShareForwardFill /> Share
        </span>
      </div>
    </section>
  );
}
