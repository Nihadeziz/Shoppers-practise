import React from 'react'
import style from './SectionOne.module.css'
const SectionOne = () => {
  return (
    <>
    <div className={style.container}>
            <div className={style.text}>
                <h1>Finding Your <br /> Perfect Shoes</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Phasellus at iaculis quam. Integer accumsan <br /> tincidunt fringilla.</p>
                <button>SHOP NOW</button>
            </div>
    </div>
    </>
  )
}

export default SectionOne