"use client";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import PreNavbar from "./nav/PreNavbar";
const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Header() {
  const router = usePathname();
  return (
    <>
      {router === "/dashboard" ? null : (
        <div
          className={`font-sans py-6 flex flex-col justify-center items-center gap-10 my-6`}
        >
          <h1 className="text-2xl text-center font-light tracking-[0.5rem]">
            EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
          </h1>
          <h2 className={`text-6xl text-center font-bold ${font.className}`}>
            Train of Thought
          </h2>
        </div>
      )}
      <PreNavbar />
    </>
  );
}
