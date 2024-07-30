import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';

function Card({ course, likedCourses, setLikedCourses }) {
    
    // Log the course data to the console for verification
    // console.log("Course Data:", course);
    function clickHandler() {
        //logic
        if (likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden" key={course.id}>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt} />
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" />)
                                : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>


            <div className='p-4'>
                <h3 className="text-white font-semibold text-lg leading-6 ">{course.title}</h3>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;
