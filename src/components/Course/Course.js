import React, { useState } from 'react';
import courseData from '../../courseData';
import './Course.css';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';
const Course = () => {
    const frist15 = courseData.slice(0,12);
    const [courses, setCourses] = useState(frist15);
    const [cart, setCart] = useState([]);
    
    const handleAddEnroll = (course) =>{
    
        const newCart = [...cart, course];
        setCart(newCart);
}
    return (
        <div className="course-container">
          <div className="course-part">
         
               {
                  courses.map(course => <Subject handleAddEnroll = {handleAddEnroll} course={course}></Subject>) 
               }
          </div>
          <div className="enroll-part">
             <Cart cart={cart}></Cart>
          </div>
           
        </div>
    );
};
export default Course;