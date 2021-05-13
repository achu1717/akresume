import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="aklogo" onClick={() => setOpen(false)}>
        Logo
      </Link>
      <ul className={open ? "nav-links.active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
      </ul>
      <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}
