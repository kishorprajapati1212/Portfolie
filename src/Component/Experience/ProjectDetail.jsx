import { useNavigate, useParams } from "react-router-dom";
import personalProjects from "../../Data/Project";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = personalProjects.find((p) => p.id === parseInt(id));
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    imageRefs.current.forEach((img, i) => {
      if (!img) return;

      gsap.fromTo(
        img,
        { y: 0 },
        {
          y: -90,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  if (!project) {
    return <div style={{ color: "#fff", padding: "4rem" }}>Project not found</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          color: "#ccc",
          padding: "2rem 0.9rem 1rem",
          borderRadius: "6px",
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* Main Container */}
      <div
        ref={containerRef}
        style={{
          color: "#e0e0e0",
          maxWidth: "1100px",
          margin: "0 auto",
          fontFamily: "sans-serif",
          padding: "0 1rem",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: "900",
            color: "#00ff88",
            marginBottom: "1rem",
            wordBreak: "break-word",
          }}
        >
          {project.title}
        </h1>

        {/* Description */}
        <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: "1.7", color: "#c4c4c4" }}>
          This project is a solution that{" "}
          {project.id === 1
            ? "automatically creates AI-powered developer portfolios by analyzing GitHub data, skills, and projects."
            : "provides a 3D product experience using Three.js, allowing users to explore models interactively before purchase."}
        </p>

        {/* Tech Stack */}
        <h3 style={{ marginTop: "2rem", fontSize: "1.2rem", color: "#00ff88" }}>
          Tech Stack
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0.4rem",
          }}
        >
          {project.usestack?.map((tech, i) => (
            <span
              key={i}
              style={{
                background: "#1e1e1e",
                color: "#fff",
                padding: "0.25rem 0.75rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Role */}
        <h3 style={{ marginTop: "2rem", fontSize: "1.2rem", color: "#00ff88" }}>
          My Role
        </h3>
        <p style={{ color: "#bbb", marginTop: "0.5rem", fontSize: "1.05rem" }}>
          I developed both frontend and backend, integrated GSAP animations, and optimized for performance and UX across devices.
        </p>

        {/* Links */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #00ff88",
                color: "#00ff88",
                padding: "0.5rem 1.1rem",
                borderRadius: "8px",
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#00ff88";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#00ff88";
              }}
            >
              Live Site
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #888",
                color: "#ccc",
                padding: "0.5rem 1.1rem",
                borderRadius: "8px",
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#ccc";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ccc";
              }}
            >
              GitHub
            </a>
          )}
        </div>

        {/* Images Section */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {project.webimages?.map((url, i) => (
            <div
            key={i}
            style={{
              width: "100%",
              maxHeight: "500px",           // ✅ Limit height to prevent tall images
              aspectRatio: "3 / 2",         // ⛔ Optional — remove if you use maxHeight
              backgroundColor: "#0e0e0e",
              overflow: "hidden",
              borderRadius: "12px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              src={url}
              alt={`Screenshot ${i + 1}`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",       // ✅ Full image always visible
                transform:"scale(1.2)",
                display: "block",
              }}
            />
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
