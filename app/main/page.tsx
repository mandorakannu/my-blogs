"use client";
import axios from "axios";
import { useRef, FormEvent, useState } from "react";
import { Rings } from "react-loader-spinner";
import { useRouter } from "next/navigation";
export default function Dashboard(): JSX.Element {
  const path = useRouter();
  const [loading, setLoading] = useState<string | JSX.Element>("Submit");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rings: JSX.Element = (
    <Rings
      height="20"
      width="50"
      color="white"
      radius="6"
      visible={true}
      ariaLabel="rings-loading"
    />
  );

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(rings);
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const response = await axios.post("/api/verification", {
      email,
      password,
    });
    const { message }: {message: string} = response.data;
    if (message !== "success") {
      setLoading("Submit");
      alert("Kindly Login With Right Credentials");
    } else {
      path.push("/main/dashboard");
    }
  };
  return (
    <>
      <h1 className="text-center text-2xl font-bold font-sans py-5">
        Authentication
      </h1>

      <form className="h-[60vh] mx-20" onSubmit={onSubmitHandler}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@example.com"
            ref={emailRef}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            ref={passwordRef}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {loading}
        </button>
      </form>
    </>
  );
}
