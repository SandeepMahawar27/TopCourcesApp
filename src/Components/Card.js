import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
     let course = props.course;
     let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    

   const clickHandler = () => {
      // logic
   if(likedCourses.includes(course.id)){
    // phle se like hua pda tha
         setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));
         toast.warning("like removed");
     }
     else{
      // pehle se like nahi hai ye course
      // insert karna h ye course liked courses me

      if(likedCourses.length === 0){
        setLikedCourses( [course.id]);
      }
      else{
        // non empty phle se
        setLikedCourses( (prev) => [...prev, course.id]);
      }
      toast.success("liked Successfully");
     }
   }

  return (
    <div className='w-[350px] m-2 bg-zinc-600 rounded-md overflow-hidden bg-opacity-80 '>
      <div className='relative'>
           <img src={course.image.url} alt=''/>
       <div className='w-[35px] h-[35px] bg-white rounded-full absolute right-2 bottom-[-13px] 
       grid place-items-center'>
            <button onClick={clickHandler}>
                {
                  likedCourses.includes(course.id) ? 
                  (<FcLike fontSize="1.75rem" />) : 
                  (<FcLikePlaceholder fontSize="1.75rem" />)
                }
            </button>
        </div>
      </div>

       <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
          <p className='mt-2 text-white'>
              {
                course.description.length > 100 ? 
                (course.description.substr(0,100)) + "..." :
                (course.description)
              }
          </p>
       </div>
    </div>
  )
}

export default Card