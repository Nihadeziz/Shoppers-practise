import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.navi}>
                    <div>
                        <h4>Navigation</h4>
                        <p>Sell online</p>
                        <p>Features</p>
                        <p>Shopping cart</p>
                        <p>Store builder</p>
                    </div>
                    <div>
                        <p>Mobile commerce</p>
                        <p>Dropshipping</p>
                        <p>Website development</p>
                    </div>
                    <div>
                        <p>Point of sale</p>
                        <p>Hardware</p>
                        <p>Software</p>
                    </div>
                </div>

                <div className={style.contact}>
                    <div className={style.promo}>
                        <h3>Promo</h3>
                        <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt="" />
                        <a href="">Finding Your Perfect Shoes</a>
                        <p>Promo from nuary 15 — 25, 2019</p>
                    </div>

                    <div className={style.info}>
                        <h3>Contact Info</h3>
                        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        <p>+2 392 3929 210</p>
                        <p>emailaddress@domain.com</p>
                      <div className={style.input}>
                       <label htmlFor="email">Subcribe</label>
                       <div className={style.btn}>
                        <input type="email" placeholder='Email' />
                        <button>SEND</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={style.end}>
                    <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
                </div>
            </div>

        </>
    )
}

export default Footer