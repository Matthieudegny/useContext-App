import React, { useState } from 'react';
import { IoAccessibilitySharp } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import '../style/card.css'

function Card({name, price}) {
    return(
        <div className='card'>
            <div className='product-box'>
                <IoAccessibilitySharp />
            </div>
            <div className='purchase'>
                <h3>{name}</h3>
                <AiFillShopping />
            </div>
            <h4>${price}</h4>
        </div>
    )
}

export default Card

