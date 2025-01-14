'use client'

import { useState } from "react"

const CommentBox = () => {
    const [comment , setComment] = useState('')
    const [comments , setComments] = useState<string[]>([])

    // useEffect(()=>{
    //     const saveComments = localStorage.getItem('comments')
    //     if(saveComments){
    //         setComments(JSON.parse(saveComments))
    //     }
    // },[])
  
    const addComments = ()=>{
        if(comment.trim() !== ''){
            const update =[...comments, comment]
            setComments(update)
            setComment('')
             localStorage.setItem('comments', JSON.stringify(update))
        }
    }
   
  return (
    <div>
        <h1 className='text-2xl font-bold text-purple-700 mt-5'>Comments:</h1>
        <input
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
         type='text' placeholder='Write your comments' className=' border-2 border-purple-500 w-72 rounded-md
        mt-4 p-2'/>
        <br/>
        <button onClick={addComments} className='p-2 w-36 bg-purple-600 m-2 rounded-md font-bold mt-3'>Add Comment</button>
       
            <h2 className='font-bold mt-4 border border-purple-700'> All Comments
            {comments.length === 0? (<p className=" w-60 bg-slate-400 rounded mb-1 ml-1">Kindly Add your Comment</p>):
            <ul className="text-sm">
            {comments.map((data ,index)=>(
                <li className="text-normal" key={index}>{data}</li>
             

            ))}</ul>
            
            }</h2>

       </div>
   
  )
}

export default CommentBox
