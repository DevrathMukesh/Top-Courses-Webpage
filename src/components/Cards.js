import React, { useState } from 'react';
import Card from './Card';

function Cards({ courses, selectedCategory }) {
    const [likesCourses, setLikedCourses] = useState([]);
    // Flatten the courses from different categories into a single array
    function getCourses() {
        if (selectedCategory === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //main sirf specific categiry ka data array krunga  
            return courses[selectedCategory];
        }

    }

    const courseList = getCourses();

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {courseList.map((course) => (
                // Explicitly return the JSX element
                <Card key={course.id} course={course} likedCourses={likesCourses} setLikedCourses={setLikedCourses} />
            ))}
        </div>
    );
}

export default Cards;
