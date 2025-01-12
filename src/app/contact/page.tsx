import Link from "next/link";


const Contact = () => {
  return (
    <div>
        <section className=" body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-blue-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
       Let&apos;s get the communication started . Tell us about Yourself we&apos;ll get touch as soon as possible
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2 ">
          <div className="relative ">
            <label htmlFor="name" className="leading-7 text-xl text-blue-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-blue-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-xl text-blue-800 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-blue-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-xl text-blue-800"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-blue-600 focus:border-indigo-500 0 h-32 text-base outline-none  py-1 px-3  leading-6 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <Link href='/'>
          <button className="flex mx-auto text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-900 rounded text-lg">
            Button
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact