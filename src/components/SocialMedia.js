import React from 'react'
import { Link } from "react-router-dom";
import {Facebook,Instagram,GitHub,LinkedIn} from '@material-ui/icons';
export default function SocialMedia() {

    return (
        <div className="socicn">
            <center>
      <a className="socicnl" href="https://www.facebook.com/akshay.suresh1212"><Facebook  style={{ fontSize: 40 }}/></a>&nbsp;&nbsp;
      <a className="socicnl" href="https://www.instagram.com/akshay_ach/"><Instagram style={{ fontSize: 40 }}/></a>&nbsp;&nbsp;
      <a className="socicnl" href="https://github.com/achu1717"><GitHub style={{ fontSize: 35 }}/></a>&nbsp;&nbsp;
      <a className="socicnl" href="https://in.linkedin.com/in/akshay-suresh17"><LinkedIn style={{ fontSize: 40 }}/></a>&nbsp;&nbsp;
      </center>
        </div>
    )
}
