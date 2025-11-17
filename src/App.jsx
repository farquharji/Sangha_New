import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Team from "./components/Team";
import Media from "./components/Media";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/media" element={<Media />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}
