import Link from "next/link";
import { Outfit } from "next/font/google";
import SocialIcons from "@components/Social-Icons";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function PreNavbar() {
  return (
    <>
      <div
        className={`border-t border-b border-black mx-5 flex justify-center items-center max-sm:hidden ${outfit.className}`}
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
        <SocialIcons />
      </div>
    </>
  );
}
