import React from 'react'
import style from './SectionFive.module.css'
const SectionFive = () => {
  return (
    <>
    <section className={style.five}>
        <div className={style.head}>
            <p>Big Sale!</p>
        </div>
        <div className={style.container}>
                <div className={style.img}>
                    <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="" />
                </div>
                <div className={style.text}>
                    <p className={style.less}>50% less in all items</p>
                    <p className={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                    <button>SHOP NOW</button>
                </div>
        </div>
    </section>
    
    </>
  )
}

export default SectionFive