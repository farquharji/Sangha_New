import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaHeart,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaSoundcloud
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) document.body.classList.add("scrolled");
      else document.body.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when navigating (safety if links are clicked)
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* ===== LOGO ===== */}
        <div className="nav-logo">
          <img
            src="/images/sunflower-logo.png"
            alt="Sunflower Sangha Logo"
            className="logo-img"
          />
        </div>

        {/* ===== LINKS ===== */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>

<Link to="/media" className="nav-link">
  SongCircle
</Link>

          <Link to="/team" onClick={closeMenu}>Team</Link>
        </div>

        {/* ===== HAMBURGER ===== */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
