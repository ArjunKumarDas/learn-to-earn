import React from 'react';
import './Subject.css';
const Subject = (props) => {
    const {img, name, author, price} = props.course;
    return (
       
        <div className="item">
                 <div className="bannar">
                <img src={img} alt=""/> 
                 </div> 
                <div>
                <h3 className="tittle">{name}</h3>
                <p>Author : {author}</p>
                <p>${price}</p>
                <button 
                   className="main-button" 
                   onClick={() => props.handleAddEnroll(props.course)}>Enroll Now</button>
                </div>
        </div>
    );
};

export default Subject;