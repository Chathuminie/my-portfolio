import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SafeSynthDetails from "./components/SafeSynthDetails";
import HeartPairDetails from "./components/HeartPairDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showSafeSynth, setShowSafeSynth] = useState(false);
  const [showHeartPair, setShowHeartPair] = useState(false);

  useEffect(() => {
    if (showSafeSynth) {
      const section = document.getElementById("safesynth-details");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [showSafeSynth]);

  useEffect(() => {
    if (showHeartPair) {
      const section = document.getElementById("heartpair-details");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [showHeartPair]);

  const handleViewSafeSynth = () => {
    setShowHeartPair(false);
    setShowSafeSynth(true);
  };

  const handleViewHeartPair = () => {
    setShowSafeSynth(false);
    setShowHeartPair(true);
  };

  const handleCloseSafeSynth = () => {
    setShowSafeSynth(false);

    setTimeout(() => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleCloseHeartPair = () => {
    setShowHeartPair(false);

    setTimeout(() => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <Projects
        onViewSafeSynth={handleViewSafeSynth}
        onViewHeartPair={handleViewHeartPair}
      />

      {showSafeSynth && (
        <SafeSynthDetails
          onClose={handleCloseSafeSynth}
        />
      )}

      {showHeartPair && (
        <HeartPairDetails
          onClose={handleCloseHeartPair}
        />
      )}

      <Contact />
      <Footer />
    </div>
  );
}

export default App;