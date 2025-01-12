
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"



const Hero = ({elem }: {elem : Post}) => {

  return (
    <div>
      <section >
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex">
      <div className="p-4 ">
        <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden ">
          <Image
            className="lg:h-48 md:h-26 w-full object-cover object-center"
            src={urlFor(elem.image).url()}
            width={720}
            height={410}
            alt={elem.title}
          />
          <div className="p-6">
            <h2 className="tracking-widest  title-font font-bold text-gray-800 mb-1 text-xl">
              {elem.title}
            </h2>
            <h1 className="title-font text-lg font-medium text-blue-500 mb-3">
              {elem.subheading}
            </h1>
            <p className="leading-relaxed mb-3 text-black text-lg">
              {elem.paragraph}
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={`/blog/${elem.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              <p className="p-3 bg-slate-400 font-bold text-black rounded-md">
               Read More
               </p>
             
              </Link>
          
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero