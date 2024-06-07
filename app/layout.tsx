import "./globals.css";
import Navigation from "@components/nav/Navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Analytics } from "@vercel/analytics/react";
import ProgressBarLoader from "@components/ProgressBarLoader";

interface MetaDataTypes {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  robots: Object;
  httpEquiv: string;
  content: string;
  language: string;
  revisitAfter: string;
  author: string;
  siteName: string;
  images: Array<Object>;
  type: string;
  twitter: Object;
  verification: Object;
  favicon: Object;
  category: string;
}

export const metadata: MetaDataTypes = {
  title: "Kannu Mandora | Tech Blogger",
  description:
    "Hello everyone!  My name is Kannu Mandora and I am a budding full-stack developer. I am passionate about learning new technologies and developing innovative solutions.   To help me achieve my goal, I have been writing tech blogs to help me learn more about the tools and processes involved in developing web applications. The blogs also provide me with an opportunity to share my experiences with the community.  I am eager to become a professional full-stack developer and I am thankful for all the help and support I have been receiving from the tech community. With more dedication and hard work, I am sure I can make the dream come true.",
  keywords: [
    "Kannu",
    "Kannu Mandora",
    "Mandora",
    "Web Developer",
    "Full Stack",
    "MERN Stack",
    "Stack",
    "Full Stack Developer",
    "Mandora Kannu",
    "tech blogger",
    "developer",
    "web development",
    "software engineering",
    "programming languages",
  ],
  httpEquiv: "Content-Type",
  content: "text/html; charset=utf-8",
  language: "English",
  revisitAfter: "1 days",
  author: "Kannu Mandora",
  url: "https://mandorakannu.xyz",
  siteName: "Kannu Mandora | Tech Blogger",
  images: [
    {
      url: "https://mandorakannu.xyz/images/logo.png",
      width: 800,
      height: 600,
      alt: "Kannu Mandora | Tech Blogger",
    },
    {
      url: "https://mandorakannu.xyz/images/logo.png",
      width: 1800,
      height: 1600,
      alt: "Kannu Mandora | Tech Blogger",
    },
  ],
  type: "website",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannu Mandora | Tech Blogger",
    description:
      "Hi, it's me Kannu Mandora. I want to be a Full Stack Developer. I am currently focused on my skills in React, Node, and Express. I am also learning about MySQL and MongoDB. I am also a computer student at the College of SETH G.L. BIHANI S.D. P.G. COLLEGE at Sriganganagar.",
    siteId: "@mandorakannu",
    creator: "@KannuMandora",
    creatorId: "1467726470533754880",
    images: ["https://mandorakannu.tech/images/logo.png"],
  },
  verification: {
    google: "UtDzihBgRyeg8VPV0dIzj1LEjhXWIKMoEFGmBi9XRn8",
    other: {
      me: ["mandorakannu@gmail.com"],
    },
  },
  favicon: {
    ico: "/favicon.ico",
  },
  category: "Tech Blogger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBarLoader />
        <Navigation />
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
