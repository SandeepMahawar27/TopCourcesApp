import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
   
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    // console.log("Prinnting data");
    // console.log(courses);

    function getCourses() {
      if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
      }
      else{
        // main sirf specific categiry ka data array kruga
        return courses[category];
      }
       
    }
  return (
    <div className='flex justify-center flex-wrap'>
        {
            getCourses().map( (course) => (
              <Card key={course.id} 
              course={course} 
              likedCourses = {likedCourses} 
              setLikedCourses = {setLikedCourses}/>
            ))
        }
   
    </div>
  )
}

export default Cards