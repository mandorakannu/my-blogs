"use client";
import { useState, ChangeEvent, useRef } from "react";
import { AiOutlineSearch, AiOutlineItalic } from "react-icons/ai";
import { MdFindReplace, MdFormatStrikethrough } from "react-icons/md";
import { FaBold } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";
import { BiLink, BiReset } from "react-icons/bi";
import axios from "axios";

function CreateBlogs() {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const blogTitleRef = useRef<HTMLInputElement>(null);
  const blogDescriptionRef = useRef<HTMLInputElement>(null);
  const [blogContent, setBlogContent] = useState("");
  const onChangeHandlerTextBox = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBlogContent(event.target.value);
  };
  const blogContentUpdate = (functionName: string) => {
    if (contentRef.current) {
      const start = contentRef.current.selectionStart;
      const end = contentRef.current.selectionEnd;
      const selectedText = blogContent.substring(start, end);
      const beforeText = blogContent.substring(0, start);
      const afterText = blogContent.substring(end, blogContent.length);

      switch (functionName) {
        case "onBold":
          setBlogContent(
            `${beforeText}<strong>${selectedText}</strong>${afterText}`
          );
          break;
        case "onItalic":
          setBlogContent(`${beforeText}<em>${selectedText}</em>${afterText}`);
          break;
        case "onStrikeThrough":
          setBlogContent(`${beforeText}<del>${selectedText}</del>${afterText}`);
          break;
        case "onQuotes":
          setBlogContent(
            `${beforeText}<blockquote>${selectedText}</blockquote>${afterText}`
          );
          break;
        case "onLink":
          setBlogContent(
            `${beforeText}<a href="${selectedText}">${selectedText}</a>${afterText}`
          );
          break;
        case "onReset":
          setBlogContent("");
          break;
        default:
          break;
      }
    }
  };
  const onSubmitHandler = async () => {
    if (
      blogTitleRef.current?.value &&
      blogDescriptionRef.current?.value &&
      contentRef.current?.value
    ) {
      const blogTitle = blogTitleRef.current.value;
      const blogDescription = blogDescriptionRef.current.value;
      const blogContent = contentRef.current?.value;
      try {
        const res = await axios.post("/api/newBlog", {
          blogTitle,
          blogDescription,
          blogContent,
        });
        const { message }: { message: string } = res.data;
        if (message !== "success")
          return alert(`Something went wrong! status code ${res.status}`);
        else {
          alert("Blog published successfully");
        }
      } catch (err) {
        console.log("ERROR", err);
      }
    } else window.alert("Please fill all the fields");
  };
  return (
    <>
      <section className="flex items-center gap-10 m-5">
        <input
          type="text"
          name="blog_title"
          id="blog_title"
          className="border-b border-blue-500 outline-none w-full placeholder:font-sans placeholder-gray-400 placeholder:text-sm text-2xl py-2 caret-blue-400"
          placeholder="Blog Title"
          ref={blogTitleRef}
        />
        <input
          type="text"
          name="blog_description"
          id="blog_description"
          className="border-b border-blue-500 outline-none w-full placeholder:font-sans placeholder-gray-400 placeholder:text-sm text-2xl py-2 caret-blue-400"
          placeholder="Blog Description"
          ref={blogDescriptionRef}
        />
        <button
          type="submit"
          className="bg-blue-400 px-6 py-2 text-white rounded"
          onClick={onSubmitHandler}
        >
          Publish
        </button>
      </section>
      <section className="flex items-center gap-5 m-5">
        <AiOutlineSearch title="Search" className="cursor-pointer" />
        <MdFindReplace title="Replace" className="cursor-pointer" />
        <FaBold
          title="Bold"
          className="cursor-pointer"
          onClick={() => blogContentUpdate("onBold")}
        />
        <AiOutlineItalic
          title="Italic"
          className="cursor-pointer"
          onClick={() => blogContentUpdate("onItalic")}
        />
        <MdFormatStrikethrough
          title="Strike Through"
          className="cursor-pointer"
          onClick={() => blogContentUpdate("onStrikeThrough")}
        />
        <BsQuote
          title="Add Quotes"
          className="cursor-pointer"
          onClick={() => blogContentUpdate("onQuotes")}
        />
        <BiLink
          title="Add Link"
          className="cursor-pointer"
          onClick={() => blogContentUpdate("onLink")}
        />
        <BiReset
          title="Reset Button"
          className="cursor-pointer"
          onClick={() => blogContentUpdate("onReset")}
        />
      </section>
      <section className="mx-5 pb-5">
        <textarea
          name="blog_content"
          id="blog_content"
          className="border border-blue-500 outline-none w-full placeholder:font-sans placeholder-gray-400 text-xl py-2 caret-blue-400 h-full p-2"
          placeholder="Blog Content"
          rows={15}
          value={blogContent}
          onChange={onChangeHandlerTextBox}
          ref={contentRef}
        />
      </section>
    </>
  );
}

export default CreateBlogs;
