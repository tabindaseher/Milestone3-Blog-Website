import Image from "next/image";
import logo from "../../../public/mylogo.jpg"
import Link from "next/link";
 import { FaGithub } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-900 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex items-center title-font font-medium  text-gray-900 mb-4 md:mb-0">
   <Image src={logo } alt="logo" width={100} height={100}/>
      <span className="mr-6 text-3xl font-bold mt-2 ">IT Center</span>
    </div>
      <p className="text-sm text-black  font-semibold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-2 mt-4">
        © Copyright 2025  All Right Reserved
        </p>

      <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 items-center">
       <Link href='#'> <FaGithub className="w-8 h-8"/></Link>
       <Link href='#'> <FaLinkedin className="w-8 h-8"/></Link>
       <Link href='#'> <MdFacebook className="w-10 h-10"/></Link> 
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer