import React from 'react'
import './Home.css';
import dp from '../images/dp.PNG'
import rct from '../images/rct.png'
import ndjs from '../images/ndjs.png'
import expjs from '../images/expjs.png'
import mongdb from '../images/mngdb.png'
export default function Home() {
    return (
        <div className="maindiv">
        <br/><br/>
        <div className="aboutbx">
          <center><img  className="dp" src={dp}/></center>
          
          <h1 className="head2">AKSHAY SURESH</h1> 
          <h3 className="head3">Full stack Web Developer</h3> 
              <p className="contentss">I am a Master of Computer Application graduate.
Currently working as a freelance frontend developer 
and is always interested in a challenge.</p>
</div>
<div className="tech">
<h1 className="headingtech">Technologies</h1> 
<p className="contentss">I use these Technologies for the Web developement</p>
<center><img  className="tecicon1" src={rct}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img  className="tecicon2" src={ndjs}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img  className="tecicon3" src={expjs}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img  className="tecicon4" src={mongdb}/></center>
</div>
<p className="contentss">Reach out to achuakshay92@gmail.com to connect!</p>
<h1 className="headings">ABOUT</h1> 
         
        </div>
    )
}
