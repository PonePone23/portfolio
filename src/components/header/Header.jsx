import React from 'react'
import Myinfo from './Myinfo'
import Myimg from '../../assets/Pone.png'
import "./header.css"
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
     <div className="info_txt">
     <h5>Hello I am </h5>
      <h1>Myo Pone Pone Swe</h1>
      <h5>Junior Web Developer</h5>
     </div>
      <Myinfo/>
      <HeaderSocial/>
      <div className="me">
        <img src={Myimg} alt="" />
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
