import React from 'react'
import style from './SectionTwo.module.css'
import { FaTruck } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
const SectionTwo = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.free}>
            <i><FaTruck /></i>
            <div className={style.text}>
                <h1>FREE SHIPPING</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
           
        </div>
        <div className={style.free}>
            <i><IoReloadCircle /></i>
            <div className={style.text}>
                <h1>FREE RETURNS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
           
        </div>
        <div className={style.free}>
            <i><FaRegQuestionCircle /></i>
            <div className={style.text}>
                <h1>CUSTOMER SUPPORT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
           
        </div>
      
    </div>
    </>
  )
}

export default SectionTwo