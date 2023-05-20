"use client";
import { FormEvent, useRef } from "react";
import axios from "axios";
export default function Form() {
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    try{
      if(email === "" || message === "") {
       return alert("please fill all fields");
      }
      console.log(email, message)
      const response = await axios.post("/api/contact", {email, message});
      const {result} = response.data;
      if(result === "success"){
        alert("message sent successfully");
        emailRef.current!.value = "";
        messageRef.current!.value = "";
      }
      else{
        alert("Something went wrong, please try again later. Status Code: " + response.status);
      }
      
    } catch(error){
      alert("Internal Server Error, please try again later.");
      console.log(error);
    }
  };
  return (
    <>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know.
          </p>
          <form className="space-y-8" onSubmit={onSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                ref={messageRef}
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white bg-red-500 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
