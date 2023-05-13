"use client";
import styles from "@styles/Hambar.module.css"
import Logo from "@components/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100","200","300","400", "700"],
})

export default function Hambar() {
  const [hambar, setHambar] = useState("hidden");
  const hambarMenu = (): void => {
  setHambar(hambar === "hidden" ? "" : "hidden");
  };
  return (
    <>
      <div className="sm:hidden flex justify-between items-center py-2 px-4  border-b-4 border-red-400 sticky top-0 bg-white z-50">
        <Logo />
        <RxHamburgerMenu className="text-2xl" onClick={hambarMenu} />
      </div>
      <div
        className={`${hambar} ${outfit.className} flex flex-col justify-around items-end border-b-2 fixed border-b-red-400 px-3 z-40 w-full bg-red-300 transition-all delay-150 ease-in-out ${styles.slide} `}
        onClick={hambarMenu}
      >
        <Link href="/" className="p-4 border-b border-white w-full text-end">Home</Link>
        <Link href="/About" className="p-4 border-b border-white w-full text-end">About</Link>
        <Link href="/Blogs" className="p-4 border-b border-white w-full text-end">Blogs</Link>
        <Link href="/Contact" className="p-4 w-full text-end">Contact</Link>
      </div>
    </>
  );
}
