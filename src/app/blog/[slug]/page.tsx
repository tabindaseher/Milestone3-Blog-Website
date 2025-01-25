// import CommentBox from '@/app/components/comments';
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image';
// import { PortableText } from 'next-sanity';
// import Image from 'next/image';

// type BlogProps = {
//   params: {
//     slug: string;
//   };
// };

// const Blog = async({params: {slug}  }: {params : {slug:BlogProps}}) => {

  
  
//   const query = `*[_type == 'skills' && slug.current == "${slug}"] {
//   title,
//   paragraph,
//   subheading,
//   content,
//   image,
//   author->{bio, image, name}
// }[0]
// `;

//     const post = await client.fetch(query)
// console.log(post);
//   return (
 
       
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
 
//      <div>
//       <h1 className='font-bold text-5xl text-center text-purple-700'>{post.title}</h1>
//       <Image src={urlFor(post.image).url()} 
//       alt={post.title}
//       width={1000}
//       height={800}
//       className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded mt-5"/>
//       <h2 className="lg:w-2/3 mx-auto leading-relaxed text-xl font-bold">
//         {post.subheading}
//       </h2>
    
//       <h4 className="lg:w-2/3 mx-auto leading-relaxed text-lg font-semibold mt-5 text-blue-600">
//         {post.paragraph}
//       </h4>
//       <div className="flex items-center title-font font-medium  text-gray-900 mb-4 md:mb-0 md:ml-40 mt-6">
//       <Image src={urlFor(post.author.image).url()} 
//       alt={post.title}
//       width={50}
//       height={50}
// />
//       <span className=" text-3xl font-bold mt-2 ml-6 ">{post.author.name}

//       </span>
//     </div>
    
//       <section className="lg:w-2/3 mx-auto leading-relaxed text-lg font-normal mt-8"> <PortableText value={post.content} /></section>
//       <div  className="lg:w-2/3 mx-auto leading-relaxed text-lg font-normal mt-8">
//       <h4 className="sm:px-6 py-3 md:w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t text-center">
//        {post.author.bio}
//       </h4>
//       <CommentBox />
//    </div>
//    </div>
//     </div>


     
    

    
//     </div>
 
//   )
// }

// export default Blog



//=====================================================

import CommentBox from '@/app/components/comments';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

type BlogProps = {
  params: {
    slug: string;
  };
};

const Blog = async ({ params }: BlogProps) => {
  const { slug } = params; // Destructure slug from params

  const query = `*[_type == 'skills' && slug.current == "${slug}"] {
    title,
    paragraph,
    subheading,
    content,
    image,
    author->{bio, image, name}
  }[0]`;

  const post = await client.fetch(query);
  console.log(post);

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div>
          <h1 className="font-bold text-5xl text-center text-purple-700">{post.title}</h1>
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            width={1000}
            height={800}
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded mt-5"
          />
          <h2 className="lg:w-2/3 mx-auto leading-relaxed text-xl font-bold">
            {post.subheading}
          </h2>
          <h4 className="lg:w-2/3 mx-auto leading-relaxed text-lg font-semibold mt-5 text-blue-600">
            {post.paragraph}
          </h4>
          <div className="flex items-center title-font font-medium text-gray-900 mb-4 md:mb-0 md:ml-40 mt-6">
            <Image
              src={urlFor(post.author.image).url()}
              alt={post.title}
              width={50}
              height={50}
            />
            <span className="text-3xl font-bold mt-2 ml-6">{post.author.name}</span>
          </div>
          <section className="lg:w-2/3 mx-auto leading-relaxed text-lg font-normal mt-8">
            <PortableText value={post.content} />
          </section>
          <div className="lg:w-2/3 mx-auto leading-relaxed text-lg font-normal mt-8">
            <h4 className="sm:px-6 py-3 md:w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t text-center">
              {post.author.bio}
            </h4>
            <CommentBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;




