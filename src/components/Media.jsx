// src/components/Media.jsx
import React from "react";
import "./Media.css";

export default function Media() {
  return (
    <section className="media-page">

      {/* ===== HERO SECTION (same as Team) ===== */}
      <div className="media-hero">
        <img
          src="/images/bitmap10.png"
          alt="Sunflower Sangha Media"
          className="media-hero-img"
        />
        <div className="media-hero-overlay"></div>

        <div className="media-hero-text">
          <h1>Sangha Songcircle</h1>
          <p className="media-hero-description">
            Moments from our song circles, gatherings, kirtans, and community offerings.
          </p>
        </div>
      </div>

      {/* ===== MOSAIC BELOW ===== */}
      <div className="media-content">
        <div className="mosaic-grid">
          {/* IMAGES */}
          {Array.from({ length: 14 }).map((_, i) => (
            <img
              key={`img-${i}`}
              src={`/images/songcircle/SongCircleImage${i + 1}.jpg`}
              className="mosaic-item"
              alt=""
            />
          ))}

          {/* VIDEOS */}
          {Array.from({ length: 4 }).map((_, i) => (
            <video
              key={`vid-${i}`}
              src={`/images/songcircle/SongCircleVideo${i + 1}.mp4`}
              className="mosaic-item"
              loop
              muted
              autoPlay
              playsInline
            />
          ))}
        </div>
      </div>

    </section>
  );
}
