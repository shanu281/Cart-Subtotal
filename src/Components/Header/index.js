import React from 'react'
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = (props) => {
  return (
    <div className='header'>
        <div>
        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='FlipCart' />
        </div>

        <div className='cart'>
            
        <FaShoppingCart style={{color: "white" , fontSize:"40px"}}  />
        <p>{props.quantity}</p>
        </div>

    </div>
  )
}

export default Header;