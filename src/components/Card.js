/// this component is used on individual level

import { set } from "mongoose";
import React from "react";
import { FcLike, FcLikePlaceholder, TiHeartFullOutline } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            // check kr rahe hai ki this course is already liked or not, how? if it is present in likedCourse array then this is liked one
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));  // yaha pe ham array pass krr rahe baki wala jisme sirf ye wala course nahi hoga

            // main logic kya hai ki, apne pass ek array hai likedCourses wala jisme like hue hue courses pade hai, ab jab koi usoe click kare to uska matlab usko dislike krna hai so ham kya karenge jo apna array hai liked wala usme sab baki ke entries daal denge siway apne click hue pade course ko chodke
            toast.warning("Like removed!");

            //             Callback Function: (prev) => prev.filter((cid) => cid !== course.id)
            // prev: Represents the previous state of likedCourses, which is an array of course IDs.
            // prev.filter((cid) => cid !== course.id): This line creates a new array by filtering out the course.id from the prev array. The filter method creates a new array with all elements that pass the test implemented by the provided function.
            // cid: Each element (course ID) in the prev array.
            // cid !== course.id: The condition to keep the element in the new array. If the cid is not equal to course.id, it remains in the new array. If it is equal, it is excluded.
        } else {
            // pahle se like nahi hai
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Succesfully!");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} />

                <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-12px] grid  place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.6rem"/>) : (<FcLikePlaceholder fontSize="1.3rem"/>) 
                            // if likedcourse wale me course hai means already liked hai
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-bold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length > 100 
                        ? (course.description.substr(0, 100)+"...") 
                        : (course.description)
                    }
                </p>
            </div>
        </div>

    )
}

export default Card;