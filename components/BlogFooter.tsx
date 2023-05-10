import React from "react";
import SocialIcons from "./Social-Icons";
import Link from "next/link";

export default function BlogFooter() {
  return (
    <>
      <hr />
      <section className="flex justify-between items-center">
        <SocialIcons />
        <Link href="/" className="text-lg text-red-400">
          Home
        </Link>
      </section>
    </>
  );
}
