import React from 'react'
import icon1 from '../images/icon-facebook.svg'
import icon2 from '../images/icon-instagram.svg'
import icon3 from '../images/icon-pinterest.svg'
import icon4 from '../images/icon-twitter.svg'


export default function Footer() {
	return (
		<div className="footer">
		<h3>Sunnyside</h3>	
		<nav> 
		<a href="">  About
  </a>
		<a href="">Services
  </a>
		<a href="">Projects
  </a>
  <a href="">Contact</a>
		</nav>
<nav id="nav-icons">
 <img src={icon1} alt="" />
 <img src={icon2} alt="" />
 <img src={icon3} alt="" />
 <img src={icon4} alt="" />
</nav>
		</div>
	)
}