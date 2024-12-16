import React from "react";
import style from "./SectionThree.module.css";
const SectionThree = () => {
  return (
    <>
    <section className={style.three}>
         <div className={style.container}>
        <div className={style.card}>
          {/* <img
            src="https://preview.colorlib.com/theme/shoppers/images/women.jpg"
            alt="sekil"
          /> */}
          <div className={style.text}>
            <p>COLLECTIONS</p>
          <h1>WOMEN</h1>
          </div>
          
        </div>
        <div className={style.cardd}>
          {/* <img
            src="https://preview.colorlib.com/theme/shoppers/images/children.jpg"
            alt="sekil"
          /> */}
          <div className={style.text}>
            <p>COLLECTIONS</p>
          <h1>CHILDREN</h1>
          </div>
          
        </div>
        <div className={style.carddd}>
          {/* <img
            src="https://preview.colorlib.com/theme/shoppers/images/men.jpg"
            alt="sekil"
          /> */}
          <div className={style.text}>
              <p>COLLECTIONS</p>
          <h1>MEN</h1>
          </div>
        
        </div>
      </div>
    </section>
     
    </>
  );
};

export default SectionThree;
