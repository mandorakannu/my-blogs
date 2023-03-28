import Image from "next/image";
import React from "react";
import { Outfit } from "next/font/google";
import Form from "@components/Form";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function page() {
  return (
    <>
      <div
        className={`${outfit.className} flex flex-col justify-center items-center my-20 mx-5 border border-red-400 p-20 max-sm:px-5`}
      >
        <Image
          src="/images/typewriter.jpg"
          width={1000}
          height={300}
          alt="About Me"
        />
        <h1 className="text-5xl my-10 text-center">
          Hey! So Glad You&apos;re Here.
        </h1>
        <div className="flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            veritatis necessitatibus culpa voluptatem sapiente porro,
            perferendis reprehenderit impedit itaque ab. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quibusdam obcaecati eum maxime.
            Illo molestias vitae consequuntur temporibus explicabo deleniti.
            Error fuga maxime fugiat corrupti at non labore quaerat numquam
            placeat. Fugiat in libero vitae autem quasi amet laudantium magni
            voluptatibus vero minus voluptate sed nemo officia necessitatibus
            aliquam, quas maxime eum ipsam a harum atque officiis facilis. Amet
            ipsam quas esse consequatur ullam, inventore ipsa quam cum itaque
            corrupti, qui facilis magnam voluptatum sapiente dolores quo
            reiciendis quibusdam cupiditate libero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            veritatis necessitatibus culpa voluptatem sapiente porro,
            perferendis reprehenderit impedit itaque ab. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quibusdam obcaecati eum maxime.
            Illo molestias vitae consequuntur temporibus explicabo deleniti.
            Error fuga maxime fugiat corrupti at non labore quaerat numquam
            placeat. Fugiat in libero vitae autem quasi amet laudantium magni
            voluptatibus vero minus voluptate sed nemo officia necessitatibus
            aliquam, quas maxime eum ipsam a harum atque officiis facilis. Amet
            ipsam quas esse consequatur ullam, inventore ipsa quam cum itaque
            corrupti, qui facilis magnam voluptatum sapiente dolores quo
            reiciendis quibusdam cupiditate libero?
          </p>
        </div>
      </div>
      <Form />
    </>
  );
}
