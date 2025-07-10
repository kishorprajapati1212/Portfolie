import React, { useState, useRef } from "react";

const HireMeButton = () => {
  const buttonRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 900);
  };

  return (
    <>
      <a
        href="https://www.linkedin.com/in/kishor-prajapati-96372831a/"
        target="_blank"
        rel="noopener noreferrer"
        ref={buttonRef}
        onMouseEnter={createRipple}
        style={{
          position: "relative",
          overflow: "hidden",
          display: "inline-block",
          marginTop: "2rem",
          backgroundColor: "#00C853",
          color: "black",
          padding: "0.75rem 2rem",
          fontWeight: 500,
          fontSize: "clamp(0.6rem, 2.5vw, 1.2rem)",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          textDecoration: "none",
        }}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              position: "absolute",
              top: ripple.y,
              left: ripple.x,
              width: "200px",
              height: "200px",
              background: "rgba(255, 255, 255, 0.4)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%) scale(0)",
              animation: "ripple 0.8s ease-out forwards",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        ))}
        <span style={{ position: "relative", zIndex: 2 }}>HIRE ME</span>
      </a>

      <style>{`
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default HireMeButton;
