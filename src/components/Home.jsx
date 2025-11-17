import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <img
          src="/images/bitmap6.png"
          alt="Sunflower Sangha – devotional music and songcircle"
          className="hero-img"
        />
        

        <div className="hero-overlay"></div>
      </div>

      <div className="home-content">
        <h1>Welcome to Sunflower Sangha</h1>

<p className="lead">
  Sunflower Sangha is a collective of musicians and facilitators who lead mantras and medicine songs.
  <span className="continuation">
    We perform mantras and devotional music from around the world. We also run frequent song circles in Brighton & Hove,
    where we invite others to play, lead and share.
  </span>
</p>


        {/* 
        <div className="about-card">
          <h2>About Sunflower Sangha</h2>
          <p>
            We first connected through our study of India’s kirtan and bhakti yoga music traditions.
            Our journey has since expanded to embrace sacred music from cultures around the globe,
            and we continue to walk the path of learning and sharing.
          </p>
        </div>
        */}

     


        <div className="social">
          <a href="https://chat.whatsapp.com/F50FmTWF6Ot0WDVyd8PAPO?mode=wwt" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/sunflower_sangha?igsh=dzB0Zm9ia2VydXNx" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/sunflowersangha" target="_blank" rel="noreferrer" caria-label="Facebook">
  <FaFacebook />
  
</a>


       
          <a
            href="https://on.soundcloud.com/MeT2TuP6Qwh2Qt2ntX"
            target="_blank"
            rel="noreferrer"
            aria-label="SoundCloud"
          >
            <FaSoundcloud />
          </a>
        </div>


      </div>

      
    </section>

    
  );
}
