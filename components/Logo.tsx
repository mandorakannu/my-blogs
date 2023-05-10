import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
    <Link href="/" >
    <Image src="/images/logo.png" alt="Kannu Mandora" width={40} height={40} className="bg-red-600 rounded-full cursor-pointer" />
    </Link>
    </>
  )
}
