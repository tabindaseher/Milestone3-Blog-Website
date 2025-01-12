

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
   
        <title>TS IT Center</title>
      
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-900">Welcome to Cener IT Center</h1>
          <p className="mt-4 text-xl text-gray-900">
            Empowering learners with the latest technologies and industry insights.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-lg text-gray-700">
            <h2 className="text-2xl font-semibold text-blue-900">Our Mission</h2>
            <h5 className="mt-4 text-lg text-blue-500">
              At TS IT Center, our mission is to provide high-quality educational resources that help individuals master the latest technologies, including Next.js, HTML, CSS, TypeScript, and AI. Whether you are a beginner or an experienced developer, we offer structured learning paths that empower you to build the future of technology.
            </h5>
          </div>

          <div className="text-lg text-gray-700">
            <h2 className="text-2xl font-semibold text-blue-900">What We Offer</h2>
            <p className="mt-4">
              Our platform offers expert-led tutorials, hands-on exercises, and insightful blog posts covering a range of topics:
              <ul className="list-disc ml-6 mt-4">
                <li><strong className='text-purple-700'>Next.js:</strong> Build modern web apps with React and Next.js, including server-side rendering (SSR) and static site generation (SSG).</li>
                <li><strong className='text-purple-700'>HTML & CSS:</strong> Learn the fundamentals of web design, responsive layouts, and modern CSS techniques.</li>
                <li><strong className='text-purple-700'>TypeScript:</strong> Type-safe JavaScript for building scalable, maintainable code.</li>
                <li><strong className='text-purple-700'>AI & Machine Learning:</strong> Dive into the world of artificial intelligence and explore practical AI applications.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-blue-900">Join Us Today</h3>
          <p className="mt-4 text-lg text-gray-900">
            Whether you&apos;re new to tech or looking to upskill, TS IT Center provides everything you need to advance in the tech industry. Start learning with us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
