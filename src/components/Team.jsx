import React from "react";
import "./Team.css";
import { FaInstagram, FaSpotify, FaSoundcloud, FaPatreon, FaWhatsapp, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Team() {
  const team = [
    { name: "Guy", role: "Vision", image: "/images/Guy.png"/*, instagram: "https://instagram.com/", soundcloud: "https://soundcloud.com/" */ },
    { name: "Lucy", role: "Harmony", image: "/images/lucy.png" },
    { name: "Ketan", role: "Manifestor", image: "/images/Ketan.png"/*, instagram: "https://instagram.com/" */},
    { name: "Natasha", role: "Anchor", image: "/images/Tasha.png"},
    { name: "Ben", role: "Composer", image: "/images/ben.png" },
    { name: "Evelina", role: "Alter Queen", image: "/images/Evelina.png"},
    { name: "Kelly", role: "Space Holder", image: "/images/Kelly.png" },
    
    { name: "Fine Feathers", role: "Wellness Hub", image: "/images/Feather.png" },
  ];

  return (
    <section className="team-page">

      {/* ===== HERO SECTION ===== */}
      <div className="team-hero">
        <img src="/images/bitmap13.png" alt="Sunflower Sangha Team – community of musicians" className="team-hero-img" />
        <div className="team-hero-overlay"></div>
       <div className="team-hero-text">
  <h1>Meet the Sangha</h1>
  <p className="team-hero-description">
    <strong>Sunflower Sangha</strong> is a family of musicians, friends, and facilitators flowing on the same path of sacred sound.
  </p>
</div>

      </div>

      {/* ===== TEAM CONTENT ===== */}
      <div className="team-content">
        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <p><strong>{member.role}</strong></p>
              <p>{member.offering}</p>

              <div className="social-links">
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noreferrer" aria-label={`${member.name} Instagram`}>
                    <FaInstagram />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`}>
                    <FaLinkedin />
                  </a>
                )}
                {member.spotify && (
                  <a href={member.spotify} target="_blank" rel="noreferrer" aria-label={`${member.name} Spotify`}>
                    <FaSpotify />
                  </a>
                )}
                {member.soundcloud && (
                  <a href={member.soundcloud} target="_blank" rel="noreferrer" aria-label={`${member.name} SoundCloud`}>
                    <FaSoundcloud />
                  </a>
                )}
                {member.patreon && (
                  <a href={member.patreon} target="_blank" rel="noreferrer" aria-label={`${member.name} Patreon`}>
                    <FaPatreon />
                  </a>
                )}
                {member.whatsapp && (
                  <a href={member.whatsapp} target="_blank" rel="noreferrer" aria-label={`${member.name} WhatsApp`}>
                    <FaWhatsapp />
                  </a>
                )}
                {member.website && (
                  <a href={member.website} target="_blank" rel="noreferrer" aria-label={`${member.name} Website`}>
                    <FaGlobe />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
