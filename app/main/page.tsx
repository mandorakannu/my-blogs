"use client";
import axios from "axios";
<<<<<<< HEAD
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
=======
import { useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const path = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const response = await axios.post("/api/verification", {
      email,
      password,
    });
<<<<<<< HEAD
    const { message }: {message: string} = response.data;
    if (message !== "success") {
      setLoading("Submit");
      alert("Kindly Login With Right Credentials");
    } else {
      path.push("/main/dashboard");
=======
    const { message } = response.data;
    if (message !== "success") {
      alert("Kindly Login With Right Credentials");
    } else {
        path.push("/main/dashboard");
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
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
<<<<<<< HEAD
            className="block mb-2 text-sm font-medium text-gray-900"
=======
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
<<<<<<< HEAD
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
=======
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
            placeholder="name@example.com"
            ref={emailRef}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
<<<<<<< HEAD
            className="block mb-2 text-sm font-medium text-gray-900"
=======
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            ref={passwordRef}
<<<<<<< HEAD
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {loading}
=======
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Submit
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
        </button>
      </form>
    </>
  );
}
