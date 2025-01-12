import Image from "next/image";
import logo from "../../../public/mylogo.jpg"
import Link from "next/link";

const Header = () => {
  return (
    <div>
    
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex items-center title-font font-medium  text-gray-900 mb-4 md:mb-0">
   <Image src={logo } alt="logo" width={100} height={100}/>
      <span className="mr-6 text-3xl font-bold mt-2 ">IT Center</span>
    </div>
    <div className="md:ml-auto flex flex-wrap items-center text-lg font-bold justify-center">

      <Link href='/' className="mr-5 hover:text-gray-500">Home</Link>
      <Link href='/about' className="mr-5 hover:text-gray-500">About</Link>
      <Link href='/contact' className="mr-5 hover:text-gray-500">Contact</Link>
    </div>
    </div>

    </div>
  )
}

export default Header