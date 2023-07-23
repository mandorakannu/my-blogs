import Link from 'next/link'
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

export default function SocialIcons({classes}: {classes?: string}) {
  return (
    <div className={`flex py-2.5 gap-4 px-2 ${classes}`}>
          <Link href="https://instagram.com/mandorakannu/" target="_blank">
            <BsInstagram className="text-2xl transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
          </Link>
          <Link href="https://github.com/mandorakannu/" target="_blank">
            <BsGithub className="text-2xl transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mandorakannu"
            target="_blank"
          >
            <BsLinkedin className="text-2xl transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
          </Link>
          <Link href="https://twitter.com/KannuMandora/" target="_blank">
            <BsTwitter className="text-2xl transition-all delay-75 ease-in-out rounded p-1 hover:bg-red-200" />
          </Link>
        </div>
  )
}
