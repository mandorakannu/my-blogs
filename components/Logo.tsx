"use client";
import Image from 'next/image'

export default function Logo() {
  return (
    <>
    <Image src="/images/logo.png" alt="Kannu Mandora" width={40} height={40} className="bg-red-600 rounded-full cursor-pointer" onClick={()=> window.scrollTo(0,0)} />
    </>
  )
}
