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
        <div className="flex flex-col gap-6 md:px-40">
          <p>
            Welcome to my blog! I&apos;m Kannu Mandora, a passionate MERN stack
            web developer and full-stack developer. I&apos;m thrilled to share
            my knowledge and experiences in the world of web development with
            you through this platform.
          </p>
          <p>
            With a deep love for technology and a curiosity for solving complex
            problems, I have dedicated myself to mastering the MERN stack. The
            MERN stack is a powerful combination of technologies comprising
            MongoDB, Express.js, React.js, and Node.js. This comprehensive stack
            allows me to build robust, scalable, and efficient web applications
            from the front end to the back end.
          </p>
          <p>
            My journey in web development began 1.5 years ago, driven by a
            strong desire to create innovative and user-friendly digital
            solutions. I have honed my skills in HTML, CSS, and JavaScript,
            which form the foundation of any web application. However, my true
            passion lies in leveraging the capabilities of the MERN stack to
            develop dynamic and interactive websites.
          </p>
          <p>
            As a full-stack developer, I have experience in both front-end and
            back-end development. On the front end, I excel in building
            responsive user interfaces using modern frameworks such as React.js.
            I strive to create intuitive and visually appealing designs that
            provide an exceptional user experience. Additionally, I am
            well-versed in JavaScript libraries like Redux, which enable
            efficient state management in complex applications.
          </p>
          <p>
            On the back end, I harness the power of Node.js and Express.js to
            create robust server-side solutions. I specialize in building
            RESTful APIs that facilitate seamless communication between the
            front end and the server. With a strong understanding of database
            management, I utilize MongoDB to store and retrieve data
            efficiently.
          </p>
          <p>
            Throughout my career, I have had the privilege of working on various
            projects, ranging from e-commerce platforms to social media
            applications. These experiences have equipped me with a diverse
            skill set and an ability to tackle challenges head-on. I am a firm
            believer in continuous learning and stay updated with the latest
            industry trends and best practices to deliver cutting-edge
            solutions.
          </p>
          <p>
            Through this blog, I aim to provide valuable insights, tutorials,
            and tips related to MERN stack development and the world of web
            development at large. Whether you are a beginner looking to start
            your journey in web development or an experienced developer seeking
            to enhance your skills, this blog will serve as a valuable resource.
          </p>
          <p>
            Thank you for joining me on this exciting adventure. Let&apos;s
            embark on a journey of exploration and growth in the dynamic field
            of web development together!
          </p>
          <p>Happy coding, Kannu Mandora</p>
        </div>
      </div>
      <Form />
    </>
  );
}
