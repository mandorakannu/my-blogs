"use client"
import { Playfair_Display } from "next/font/google";
import { FormEvent } from "react";
const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function Newsletter() {
    const onSubmitHandler =(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        // TODO : Add newsletter functionality
        alert("Newsletter form is not yet functional");
    }
  return (
    <>
      <form method="post" onSubmit={onSubmitHandler} className={` flex justify-between items-center border-t border-b border-red-400 py-10 px-10 mx-5`} >
        <h3 className={`text-3xl font-bold ${font.className}`}>Never Miss a New Post</h3>
        <section className="flex gap-5">
        <input type="text" name="newsletter" id="newsletter" placeholder="Enter your email *" className="border-b invalid:bg-red-400 border-black focus:outline-none" />
        <button className="bg-red-400 hover:bg-black transition delay-75 ease-in-out px-6 py-3 text-white">SUBSCRIBE</button>
        </section>
        </form>
    </>
  );
}
