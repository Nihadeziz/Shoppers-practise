import React from "react";
import style from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.input}>
          <form action="">
            <i>
              <FaSearch />
            </i>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className={style.logo}>
          <p>SHOPPERS</p>
        </div>
        <div className={style.iconbox}>
          <i>
            <IoPerson />
          </i>
          <i>
            <FaRegHeart />
          </i>
          <i className={style.basket}>
            <SlBasket /> <span>2</span>
          </i>
        </div>
      </div>
      <div className={style.navbar}>
        <nav>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">SHOP</a></li>
                <li><a href="">CATALOGUE</a></li>
                <li><a href="">NEW ARRIVALS</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
