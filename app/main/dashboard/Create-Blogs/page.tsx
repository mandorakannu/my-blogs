"use client";
import { FormEvent, useRef, useEffect } from "react";
import { Outfit } from "next/font/google";
import axios from "axios";
import authUser from "@functions/validate";
import { useRouter } from "next/navigation";
const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function CreateBlogs() {
  const router = useRouter();
  useEffect(() => {
    const verifyUser = async () => {
      const res = await authUser();
      if (res !== "success") {
        router.push("/main");
        alert("You are not logged in");
      }
    };
    verifyUser();
  }, [router]);

  const titleRef = useRef<HTMLInputElement>(null);
  const subTitleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const qouteRef = useRef<HTMLInputElement>(null);
  const qouteDescriptionRef = useRef<HTMLInputElement>(null);
  const headingRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const urlOfImageRef = useRef<HTMLInputElement>(null);
  const imageAltTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !titleRef.current?.value ||
      !subTitleRef.current?.value ||
      !descriptionRef.current?.value ||
      !qouteRef.current?.value ||
      !qouteDescriptionRef.current?.value ||
      !headingRef.current?.value ||
      !contentRef.current?.value ||
      !dateRef.current?.value ||
      !authorRef.current?.value ||
      !urlOfImageRef.current?.value ||
      !imageAltTextRef.current?.value
    ) {
      return alert("Please fill all the fields");
    }
    try {
      const response = await axios.post("/api/newBlog", {
        title: titleRef.current?.value,
        subTitle: subTitleRef.current?.value,
        description: descriptionRef.current?.value,
        qoute: qouteRef.current?.value,
        qouteDescription: qouteDescriptionRef.current?.value,
        heading: headingRef.current?.value,
        content: contentRef.current?.value,
        date: dateRef.current?.value,
        author: authorRef.current?.value,
        urlOfImage: urlOfImageRef.current?.value,
        imageAltText: imageAltTextRef.current?.value,
      });
      if (response.status === 200) {
        alert("Blog published successfully");
      } else {
        alert("Error Occured status code: " + response.status);
      }
    } catch (error) {
      alert("Internal Server Error");
    }
  };

  return (
    <>
      <form method="post" onSubmit={submitHandler} className={outfit.className}>
        <section className="flex justify-evenly items-center my-10">
          <div className="flex flex-col justify-start gap-4">
            <label htmlFor="title" className="text-xl font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
              placeholder="Title"
              ref={titleRef}
            />
          </div>
          <div className="flex flex-col justify-start gap-4">
            <label htmlFor="subtitle" className="text-xl font-medium">
              Sub Title
            </label>
            <input
              type="text"
              name="sub-title"
              id="subtitle"
              className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
              placeholder="Sub Title"
              ref={subTitleRef}
            />
          </div>
        </section>
        <section>
          <div className="flex flex-col justify-center mx-20 my-10 gap-4">
            <label htmlFor="description" className="text-xl font-medium">
              Description
            </label>
            <textarea
              name="blog_description"
              id="description"
              rows={5}
              className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
              placeholder="Description"
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col justify-start">
              <label htmlFor="qoute" className="text-xl font-medium">
                Qoute
              </label>
              <input
                type="text"
                name="qoute"
                id="qoute"
                className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
                placeholder="Qoute"
                ref={qouteRef}
              />
            </div>
            <div className="flex flex-col justify-start gap-4">
              <label htmlFor="qouteDescription" className="text-xl font-medium">
                Qoute Description
              </label>
              <input
                type="text"
                name="qouteDescription"
                id="qouteDescription"
                className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
                placeholder="Qoute Description"
                ref={qouteDescriptionRef}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center gap-4 mx-20 my-10">
          <textarea
            name="blog_heading"
            id="blog_heading"
            placeholder="Heading"
            className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
            ref={headingRef}
          ></textarea>
          <textarea
            name="blog_content"
            id="blog_content"
            placeholder="Content"
            rows={5}
            className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
            ref={contentRef}
          ></textarea>
        </section>
        <section className="flex justify-center items-center gap-4">
          <input
            type="date"
            name="blog_date"
            id="blog_date"
            className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
            ref={dateRef}
          />
          <input
            type="text"
            name="blog_author"
            id="blog_author"
            value="Kannu Mandora"
            disabled
            className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
            ref={authorRef}
          />
          <input
            type="text"
            name="blog_urlOfImage"
            id="blog_urlOfImage"
            className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
            placeholder="Url Of Image"
            ref={urlOfImageRef}
          />
          <input
            type="text"
            name="blog_ImageAltText"
            id="blog_ImageAltText"
            className="focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
            placeholder="Alt Text Of Image"
            ref={imageAltTextRef}
          />
        </section>
        <button
          type="submit"
          className="mx-20 my-6 focus:outline-none bg-red-200 text-black py-2 px-1.5 rounded-sm shadow-md placeholder:text-white"
        >
          Submit Details
        </button>
      </form>
    </>
  );
}
