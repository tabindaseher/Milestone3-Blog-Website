import React from 'react'
import Hero from './components/hero'
import { client } from '@/sanity/lib/client'

const Home = async() => {
      const query = `*[_type == 'skills']  | order(_createdAt asc){
      title, subheading , paragraph , image , 
        "slug": slug.current}`

    const posts : Post[] =await client.fetch(query)
    console.log(posts);

    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      { 
      posts.map((elem: Post)=>(
<Hero  elem ={elem} key ={elem.slug}/>
      ))
      
      }
    </div>
  )
}

export default Home