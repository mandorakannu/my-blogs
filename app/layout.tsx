import Navigation from "@components/nav/Navigation";
import "./globals.css";
import Link from "next/link";
import { Playfair_Display, Outfit } from "next/font/google";
const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export const metadata = {
  title: "Kannu Mandora | Tech Blogger",
  description:
    "Hello everyone!  My name is Kannu Mandora and I am a budding full-stack developer. I am passionate about learning new technologies and developing innovative solutions.   To help me achieve my goal, I have been writing tech blogs to help me learn more about the tools and processes involved in developing web applications. The blogs also provide me with an opportunity to share my experiences with the community.  I am eager to become a professional full-stack developer and I am thankful for all the help and support I have been receiving from the tech community. With more dedication and hard work, I am sure I can make the dream come true.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div
          className={`font-sans py-6 flex flex-col justify-center items-center gap-10 my-6`}
        >
          <h1 className="text-2xl font-light tracking-[0.5rem]">
            EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
          </h1>
          <h2 className={`text-8xl font-bold ${font.className}`}>
            Train of Thought
          </h2>
        </div>
        <div className={`border-t border-b border-black mx-5 flex justify-center items-center ${outfit.className}`}>
          <Link
            href="/"
            className="border-l border-black py-2.5 px-10 hover:text-red-400 transition delay-100 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="border-l border-black py-2.5 px-10 hover:text-red-400 transition delay-100 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/Blogs"
            className="border-l border-black py-2.5 px-10 hover:text-red-400 transition delay-100 ease-in-out"
          >
            My Blog
          </Link>
          <Link
            href="/Contact"
            className="border-r border-l border-black py-2.5 px-10 hover:text-red-400 transition delay-100 ease-in-out"
          >
            Contact
          </Link>
          <div className="flex border-r border-black py-2.5 gap-4 px-2" >
            <Link href="https://instagram.com/mandorakannu/" target="_blank">
              <BsInstagram className="text-2xl text-black transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
            </Link>
            <Link href="https://github.com/Kannu-Mandora/" target="_blank">
              <BsGithub className="text-2xl text-black transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kannu-mandora-3132b1214/"
              target="_blank"
            >
              <BsLinkedin className="text-2xl text-black transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
            </Link>
            <Link href="https://twitter.com/KannuMandora/" target="_blank">
              <BsTwitter className="text-2xl text-black transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
