
import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;


    const total = cart.reduce((total, prd) => total +prd.price, 0);
   
    let shipping = 0;
    if(total > 40){
        shipping = 0;
    }
    else if (total > 30){
        shipping = 5;
    }
    else if (total > 0){
        shipping = 10;
    }
   const tax = Math.round(total / 9);
   const coursePrice = Math.round(total);
   const grandTotal = Math.round(total + shipping + tax);
    return (
        <div className="order">
            <h4>Enroll Sumarry</h4>
             <p>Course Item: {cart.length}</p>
             <p>Course Price: {coursePrice}</p>
             <p>Shipping Cost : {shipping}</p>
             <p>Vat + Tax: {tax}</p>
             <p>Total Price: {grandTotal}</p>
        </div>
        
    );
};

export default Cart;