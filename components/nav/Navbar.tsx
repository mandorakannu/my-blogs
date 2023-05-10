import Logo from "@components/Logo";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai"
import { MdDarkMode } from "react-icons/md"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center max-sm:hidden border-b-4 border-red-400 sticky top-0 bg-white z-50">
        <div className="flex justify-center items-center gap-4 p-4">
          <Logo />
          <Link href="/" className={`${outfit.className} font-bold`} >KANNU MANDORA</Link>
        </div>
        <div className="flex items-center justify-center gap-4 p-4">
          <input type="search" name="search" id="searchBtn" placeholder="Search" className={`${outfit.className} border-b-2 border-red-400 focus:outline-none p-2 caret-red-400`} />
          <AiOutlineSearch className="text-2xl text-red-400 cursor-pointer" />
          <MdDarkMode className="text-2xl text-red-400 cursor-pointer"/>
        </div>
      </div>
    </>
  );
}
