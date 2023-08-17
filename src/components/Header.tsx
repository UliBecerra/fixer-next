import Image from 'next/image'
import Link from 'next/link'
export default function Header() {

  return (
    <div className='fixed top-0 left-0 flex justify-between w-full items-center pr-4 border-b-4 border-gray-400 backdrop-blur-sm bg-opacity-70  z-50'>
      <Link href='/'> <Image
      src="/icon.png"
      alt="Home"
      className=" cursor-pointer hidden sm:block"
      width={100}
      height={24}
      priority/>
      <Image
      src="/icon.png"
      alt="Home"
      className=" cursor-pointer sm:hidden block"
      width={60}
      height={16}
      priority/>
</Link>
      
      <Link  href='/Currencies' className='cursor-pointer hover:text-shadow-decription pr-[30%]' >Mercado </Link></div>
  )
}
