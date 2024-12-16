import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import style from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
    <div className={style.container}>
         <Header/>

    <main>{children}</main>
    <Footer/>
    </div>
   
    
    </>
  )
}

export default Layout