import Link from "next/link";
import { Outfit } from "next/font/google";
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function PreNavbar() {
  return (
    <>
      <div
        className={`border-t border-b border-black mx-5 flex justify-center items-center ${outfit.className}`}
      >
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
        <div className="flex border-r border-black py-2.5 gap-4 px-2">
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
    </>
  );
}
