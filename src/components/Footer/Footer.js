import React from 'react'
import "./Footer.css";
import Twitter from "../../img/twitter.png";
import FaceBook from "../../img/facebook.png";
import LinkedIn from "../../img/linkedin.png";
import Pinterest from "../../img/pinterest.png";
import Instagram from "../../img/instagram.png";
import Language from "../../img/language.png";
import Coin from "../../img/coin.png";
import Accessible from "../../img/accessibility.png"

const Footer = () => {
  return (
    <div className='footer'>
     <div className='footerContainer'>
      <div className='category'>
        <h2>Category</h2>
          <span>Graphics & Design</span>
          <span>DIgital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Anmation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>

      </div>

      <div className='category'>
        <h2>Categories</h2>
          <span>Graphics & Design</span>
          <span>DIgital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Anmation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>

      </div>

      <div className='category'>
        <h2>Categories</h2>
          <span>Graphics & Design</span>
          <span>DIgital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Anmation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>

      </div>

      <div className='category'>
        <h2>Categories</h2>
          <span>Graphics & Design</span>
          <span>DIgital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Anmation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>

      </div>

      <div className='category'>
        <h2>Categories</h2>
          <span>Graphics & Design</span>
          <span>DIgital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Anmation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>


      </div>

     </div>
     <hr className='bottonhr'/>
     <div className='bottom'>
      <div className='leftBottom'>
        <h1>fiverr<span>.</span></h1>
        <span> Fiverr International Ltd 2023</span>
      </div>
      <div className='rightBottom'>
        <img src={Twitter} alt=''/>
        <img src={FaceBook} alt=''/>
        <img src={LinkedIn} alt=''/>
        <img src={Pinterest} alt=''/>
        <img src={Instagram} alt=''/>
        <img src={Language} alt=''/>
        <span>English</span>
        <img src={Coin} alt=''/>
        <span>USD</span>
        <img src={Accessible} alt=''/>







      </div>

     </div>
    </div>
  )
}

export default Footer
