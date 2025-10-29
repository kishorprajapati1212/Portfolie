import React, { useEffect, useRef } from "react";

const StickySidebarHUD = () => {
  const progressRef = useRef(null);
  const animationFrameIdRef = useRef(null); // ✅ Use ref for persistent value

  useEffect(() => {
    // console.log("Mounted StickySidebarHUD");

    const updateScroll = () => {
      // console.log("Running updateScroll");
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollableHeight = scrollHeight - clientHeight;
      const scrolled = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      if (progressRef.current) {
        progressRef.current.style.height = `${scrolled}%`;
      }

      animationFrameIdRef.current = null;
    };

    const handleScroll = () => {
      // console.log("Scroll event triggered");
    
      // This will ensure updateScroll always runs
      updateScroll();
    
      // Also throttle with animationFrame for smoother updates
      if (!animationFrameIdRef.current) {
        animationFrameIdRef.current = requestAnimationFrame(updateScroll);
      }
    };
    

    handleScroll(); // Run once on mount

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "2rem",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10000,
        gap: "1rem",
      }}
    >
      <div
        style={{
          width: "5px",
          height: "100px",
          background: "#222",
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          ref={progressRef}
          style={{
            width: "100%",
            height: "0%",
            background: "linear-gradient(to bottom, #00ff66, #00aa55)",
            transition: "height 0.2s ease-out",
            position: "absolute",
            bottom: 0,
          }}
        />
      </div>
    </div>
  );
};

export default StickySidebarHUD;
