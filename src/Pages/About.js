import React from "react";
import {Memory, Home,School,Receipt,Stars,TwoWheeler} from '@material-ui/icons';

import Footer from '../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function About() {
  return (
    <div class="maindiv">
      <br/><br/>
      <h1 className="headings">ABOUT</h1>
      <div class="parentcdv">
        <div class="childcdv ">
        <center><Home style={{ fontSize: 190 }}/></center>
        <br/>
          <p className="headingtech">HOMETOWN</p>
          <p className="abtcont">
          Currently, I live in Kannur, Kerala. Kannur is well known for a ritual dance called Theyyam. Theyyam consisted of several thousand-year-old traditions, rituals, and customs.
          </p>
          <br/>
          <p className="abtcont">Kannur is also well known for a driving beach Muzhapilangad Beach. This beach is the longest Drive-In Beach in Asia </p>
        </div>
        <div class="childcdv">
        <center><School style={{ fontSize: 190 }}/></center>
        <br/>
          <p className="headingtech">EDUCATION</p>
          <p className="abtcont"><b>Master of Computer Application </b>graduated from Rathnavel Subramaniam college of Arts and Science, Sulur, TamilNadu
          in 2021.</p>
          <br/>
         <p className="abtcont"><b>Bachelor of Computer Application</b> from Rathnavel Subramaniam college of Arts and Science, Sulur, TamilNadu in 2018.</p>
         <br/>
         <p className="abtcont"><b>10th and 12th</b> grade from International Indian School Al-Jubail Saudi Arabia.</p>
        </div>
        <div class="childcdv">
        <center><Receipt style={{ fontSize: 190 }}/></center>
        <br/>
          <p className="headingtech">CERTIFICATIONS</p>
          <p className="abtcont">Cisco Certified Network Associate, Routing and Switching. <b>(CCNA R&S)</b></p>
          <br/>
          <p className="abtcont">Cisco Certified Network Professional, Enterprise. <b>(CCNP)</b></p>
          <br/>
          <p className="abtcont">The fundamentals of Digital Marketing from Google</p>
        </div>
      </div>
      <div class="parentcdv">
        <div class="childcdv">
        <center><Stars style={{ fontSize: 190 }}/></center>
        <br/>
          <p className="headingtech">SKILLS AND TECHNOLOGIES</p>
          <br/>
          <p className="abtcont"><b>Web Developement</b></p>
        <p className="abtcont">Frontend Developement: ReactJS, React Native</p>
        <p className="abtcont">Backend Developement :NodeJs</p>
        <p className="abtcont">Database Management  :MongoDB</p>
        <p className="abtcont">Postman</p>
        <p className="abtcont">Git Usage</p>
        <br/>
        <p className="abtcont"><b>Networking:</b></p>
        <p className="abtcont">TCP/IP</p>
        <p className="abtcont">Network Troubleshooting and Management</p>
        </div>
        <div class="childcdv">
        <center><TwoWheeler style={{ fontSize: 190 }}/></center>
          <p className="headingtech">HOBBIES</p>
          <p className="abtcont">Sports,
          Music, Traveling,
          Art and Design,
          Video Gaming and
          Reading</p>
        </div>
        <div class="childcdv">
        <center><Memory style={{ fontSize: 190 }}/></center>
          <p className="headingtech">PROJECTS</p>
          <p className="abtcont">Yellowfie e-commerce mobile application for the OneWhistle company. Yellowfie is developed using Reactive Native as the frontend Nodejs for the backend and mongoDB for the Database.
          Postman is used to test the backend APIs.</p>
          <br/>
          <p className="abtcont"><b>My contributions are:</b></p>
          <p className="abtcont">Reusable Alert Component.</p>
          <p className="abtcont">Create post API.</p>
          <p className="abtcont">Suggestion list component.</p>
          <p className="abtcont">Some of the bug fixes.</p>
          <br/>
        </div>
      </div>
      <p className="contentss">
        Reach out achuakshay92@gmail.com to connect!
      </p>
      <div>
    
      </div>
      <Footer/>
    </div>
  );
}
