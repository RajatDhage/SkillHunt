// used to display all the cards
//map is used on single array, so here we have multiple arrays so we need to convert into single array

import React, { useState } from "react";
import Card from "./Card"; 

const Cards = (props)=>{

    const [likedCourses, setLikedCourses] = useState([]);  // will be used to store whether this course is liked or not
    let category = props.category;
    let courses = props.courses;
    let allCourses = [];

    function getCourses (){
        if(category === "All"){
            Object.values(courses).forEach(courseCategory=>{
                courseCategory.forEach(data=>{
                    allCourses.push(data);
                })
            })
            return allCourses;
        }else{
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course)=>{
                    return <Card key={course.id} course={course} likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/>
                })
            }
        </div>
    )
}

export default Cards;