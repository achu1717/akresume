import React from "react";
import "./Home.css";
import dp from "../images/dp.PNG";
import rct from "../images/rct.png";
import ndjs from "../images/ndjs.png";
import expjs from "../images/expjs.png";
import mongdb from "../images/mngdb.png";
import Particles from "react-tsparticles";
import SocialMedia from '../components/SocialMedia'
export default function Home() {
  return (
    <div className="maindiv">
       <br />
       <br />
        <div className="aboutbx">
          
         <center>
          
          <img className="dp" src={dp} />
         </center>

        <h1 className="head2">AKSHAY SURESH</h1>
        <h3 className="head3">Full stack Web Developer</h3>
        <p className="contentss">
          I am a Master of Computer Application graduate. Currently working as a
          freelance frontend developer and is always interested in a challenge.
        </p>
      </div>
      {/* <Particles
      className="particles"
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /> */}
     
  
      <div className="tech">
      <div id="abtboxin">
        <h1 className="headingtech">Technologies</h1>
        <p className="contentss">
          I use these Technologies for the Web developement
        </p>
        <center>
          <img className="tecicon1" src={rct} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="tecicon2" src={ndjs} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="tecicon3" src={expjs} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="tecicon4" src={mongdb} />
        </center>
        </div>
      </div>
      <p className="contentss">
        Reach out achuakshay92@gmail.com to connect!
      </p>
      <div>
      <SocialMedia/>
      </div>
    </div>
  );
}
