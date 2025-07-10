import React from "react";

const LoaderOverlay = () => {
  const panels = new Array(6).fill(0);
  const title = "KISHOR";

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#0a0a0a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      overflow: "hidden",
    }}>
      {/* Branding text: appears first */}
      <div style={{
        zIndex: 10000,
        color: "white",
        textAlign: "center",
        animation: "fadeOutText 2s ease 2.8s forwards"
      }}>
        <h1 style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          fontWeight: 900,
          letterSpacing: "0.1em",
          display: "inline-block",
        }}>
          {title.split("").map((char, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                animation: `fadeInUp 1s ease ${i * 0.05}s forwards`,
                opacity: 0,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      {/* Panels start sliding earlier */}
      {panels.map((_, index) => {
        const baseOpacity = 0.85 - index * 0.1;
        const delay = 1.5 + index * 0.15; // START QUICKER
        const isLast = index === panels.length - 1;

        return (
          <div key={index}
            style={{
              position: "absolute",
              left: `${(100 / 6) * index}%`,
              bottom: 0,
              width: `${100 / 6}%`,
              height: "100%",
              background: `rgba(10, 255, 102, ${baseOpacity})`,
              animation: `slideUp ${isLast ? "0.3s" : "0.6s"} ease ${delay}s forwards`,
              zIndex: 9998,
            }}
          />
        );
      })}

      {/* Keyframe Animations */}
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        @keyframes fadeInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeOutText {
          to { opacity: 0; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default LoaderOverlay;
