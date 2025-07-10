import React, { useEffect, useState } from "react";
import HireMeButton from "../Home/HireMeButton";

const Hero = () => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;
    const ratio = Math.min(scrollY / maxScroll, 1);
    setRotation(ratio * 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Inject fly and blink animations
    const styleSheet = document.styleSheets[0] || document.head.appendChild(document.createElement("style")).sheet;
    const fly = `
      @keyframes fly {
        0%   { transform: translate(-50%, -50%) rotate(0deg); }
        25%  { transform: translate(-30%, -80%) rotate(45deg); }
        50%  { transform: translate(-70%, -20%) rotate(90deg); }
        75%  { transform: translate(-20%, -60%) rotate(135deg); }
        100% { transform: translate(-50%, -50%) rotate(180deg); }
      }`;
    const blink = `
      @keyframes blink {
        0%, 100% { opacity: 0.1; transform: translateY(0); }
        50% { opacity: 1; transform: translateY(8px); }
      }`;

    if (![...styleSheet.cssRules].some(r => r.name === "fly")) styleSheet.insertRule(fly, styleSheet.cssRules.length);
    if (![...styleSheet.cssRules].some(r => r.name === "blink")) styleSheet.insertRule(blink, styleSheet.cssRules.length);

    // Inject mobile responsive CSS
    const responsiveCSS = `
      @media (max-width: 768px) {
        .hero-inner {
          flex-direction: column !important;
          text-align: center !important;
          padding: 1rem !important;
        }
        .hero-left, .hero-right {
          text-align: center !important;
          padding: 0 !important;
        }
        .hero-heading {
          // font-size: 1.5rem !important;
        }
        .hero-paragraph {
          // font-size: 0.5rem !important;
          margin: auto !important;
        }
        .hero-metrics div {
          margin-bottom: 0.5rem !important;
        }
      }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = responsiveCSS;
    document.head.appendChild(styleTag);
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          perspective: "1200px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="hero-inner"
          style={{
            transform: `rotateX(${rotation}deg)`,
            transformOrigin: "bottom",
            transition: "transform 0.1s linear",
            width: "100%",
            maxWidth: "1200px",
            padding: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <div className="hero-left" style={{ flex: 1, textAlign: "left", color: "#fff", position: "relative" }}>
            {/* Butterfly */}
            <div
              style={{
                width: "30px",
                height: "30px",
                background: "radial-gradient(circle, #ff00ff, #ff77ff, transparent)",
                borderRadius: "50%",
                boxShadow: "0 0 20px #ff77ff",
                animation: "fly 10s ease-in-out infinite",
                position: "absolute",
                top: "15%",
                left: "80%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            {/* Headings */}
            <h1 className="hero-heading" style={{ fontSize: "clamp(1rem, 6vw, 4rem)", fontWeight: "900", lineHeight: "1.1", marginBottom: "1rem" }}>
              <span style={{ color: "#00ff66" }}>FULL STACK</span><br />
              <span style={{ color: "#ffffff" }}>DEVELOPER</span>
            </h1>

            {/* Paragraph */}
            <p className="hero-paragraph"
              style={{
                fontSize: "clamp(.5rem, 2.5vw, 1.1rem)",
                color: "#ccc",
                maxWidth: "520px",
                lineHeight: "1.6",
              }}
            >
              Hi! I'm <span style={{ fontWeight: "bold", color: "#ffffff" }}>Kishor</span>. With
              <span style={{ fontWeight: "bold", color: "#ffffff" }}> 3+ years </span>
              building full-stack apps using MERN, PHP, and modern 3D tools, I deliver real solutions — fast, scalable, and ready to deploy.
            </p>

            {/* Hire Me Button */}
            <HireMeButton />

            
          </div>

          {/* RIGHT SIDE METRICS */}
          <div className="hero-right hero-metrics" style={{ flex: 1, color: "#fff", textAlign: "right", paddingRight: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)", fontWeight: "900", color: "#00ff66" }}>3+</div>
              <div style={{ fontSize: "clamp(0.5rem, 2.5vw, 1rem)", color: "#ccc" }}>Years of Experience</div>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)", fontWeight: "900", color: "#00ff66" }}>7+</div>
              <div style={{ fontSize: "clamp(0.5rem, 2.5vw, 1rem)", color: "#ccc" }}>Completed Projects</div>
            </div>
            <div>
              <div style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)", fontWeight: "900", color: "#00ff66" }}>500+</div>
              <div style={{ fontSize: "clamp(0.5rem, 2.5vw, 1rem)", color: "#ccc" }}>Hours Worked</div>
            </div>
            {/* Scroll Arrow */}
            <div
              style={{
                marginTop: "3rem",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
                color: "#fff",
                animation: "blink 1.5s infinite",
                opacity: 0.6,
              }}
            >
              ↓
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
