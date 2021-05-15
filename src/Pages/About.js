import React from "react";
import {Memory, Home,School,Receipt,Stars,TwoWheeler} from '@material-ui/icons';
export default function About() {
  return (
    <div class="maindiv">
      <h1 className="headings">ABOUT</h1>
      <div class="parentcdv">
        <div class="childcdv">
        <center><Home style={{ fontSize: 190 }}/></center>
          <p className="headingtech">HOMETOWN</p>
         
          <p>
            Currently i live in Kannur, Kerala. Kannur is well known for a ritual
            dance called Theyyam. Theyyam consisted of several thousand-year-old
            traditions, rituals and customs.
          </p>
        </div>
        <div class="childcdv">
        <center><School style={{ fontSize: 190 }}/></center>
          <p className="headingtech">EDUCATION</p>
          <p>Master of Computer Application graduated from Rathnavel Subramaniam college of Arts and Science, Sulur, TamilNadu
          in 2021.</p>
        </div>
        <div class="childcdv">
        <center><Receipt style={{ fontSize: 190 }}/></center>
          <p className="headingtech">CERTIFICATIONS</p>
          <p>Cisco Certified Network Associate, Routing and Switching.</p>
          <p>Cisco Certified Network Professional, Enterprise</p>
          <p>The fundamentals of Digital Marketing from Google</p>
        </div>
      </div>
      <div class="parentcdv">
        <div class="childcdv">
        <center><Stars style={{ fontSize: 190 }}/></center>
          <p className="headingtech">SKILLS</p>
        <p>Frontend:ReactJS, React Native</p>
        <p>backend:NodeJs</p>
        <p>Database:MongoDB</p>
        </div>
        <div class="childcdv">
        <center><TwoWheeler style={{ fontSize: 190 }}/></center>
          <p className="headingtech">HOBBIES</p>
          
        </div>
        <div class="childcdv">
        <center><Memory style={{ fontSize: 190 }}/></center>
          <p className="headingtech">PROJECTS</p>
          
        </div>
      </div>
    </div>
  );
}
