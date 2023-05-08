"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import authUser from "@functions/validate";
import Link from "next/link";
export default async function Dashboard(): Promise<JSX.Element> {
  const router = useRouter();
  const path = usePathname();
  const [user, setUser] = useState<boolean>(false);
  useEffect(() => {
    const verifyUser = async () => {
      const res = await authUser();
      if (res !== "success") {
        setUser(false);
        alert("You are not logged in");
        router.push("/main");
      }
      else setUser(true);
    };
    verifyUser();
  }, [router]);
  return (
    <>
      {!user ? null : (
        <div className="flex flex-col justify-center items-center h-[50vh] mb-20">
          <h1 className="text-center text-2xl font-bold font-sans py-5">
            Dashboard
          </h1>
          <div className="flex justify-center items-center gap-10 py-10">
          <Link href={`${path}/Create-Blogs`} className="bg-red-400 px-6 py-2 text-white rounded" >Create Blogs</Link>
          <Link href={`${path}/Manage-Blogs`} className="bg-red-400 px-6 py-2 text-white rounded" >Manage Blogs</Link>
          </div>
        </div>
      )}
    </>
  );
}
