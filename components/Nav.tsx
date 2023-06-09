import Image from "next/image"
import logo from "../assests/Carlos Logo.png"
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from "next/link"


type Props = {}
function Nav({}: Props) {
  return (
    <div className=" lg:bg-[#f6f6f6]  ">
        <div className=" lg:w-[1200px] lg:m-auto   p-4 md:p-10  flex justify-between items-center">

        <Image src={logo} width={250} height={150} alt=" Carlos Castro Logo Image"  className=" w-[150px] "/>  
       <div>

        <Bars3Icon  className="w-6 lg:hidden" />
        <div className=" hidden lg:flex   space-x-8">

        <Link href="" className=" hover:text-blue-400">Home </Link>
        <Link href="" className=" hover:text-blue-400">About </Link>
        <Link href="" className=" hover:text-blue-400">Contact </Link>
        <Link href="" className=" hover:text-blue-400">Blog </Link>
        </div>

       </div>
        </div>
    </div>
  )
}
export default Nav