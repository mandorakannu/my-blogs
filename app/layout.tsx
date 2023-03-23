import './globals.css'

export const metadata = {
  title: 'Kannu Mandora | Tech Blogger',
  description: "Hello everyone!  My name is Kannu Mandora and I am a budding full-stack developer. I am passionate about learning new technologies and developing innovative solutions.   To help me achieve my goal, I have been writing tech blogs to help me learn more about the tools and processes involved in developing web applications. The blogs also provide me with an opportunity to share my experiences with the community.  I am eager to become a professional full-stack developer and I am thankful for all the help and support I have been receiving from the tech community. With more dedication and hard work, I am sure I can make the dream come true.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
