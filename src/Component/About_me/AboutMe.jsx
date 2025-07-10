import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef();
  const elementsRef = useRef([]);

  // Attach DOM nodes
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
              scrub: 0.5,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={sectionRef}
  style={{
    minHeight: "100vh",
    padding: "4rem 1.5rem",
    color: "#ffffff",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      justifyContent: "center",
    }}
  >
      {/* Large Header */}
      <h2
        ref={addToRefs}
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
          maxWidth: "900px",
          lineHeight: "1.3",
          fontWeight: 300,
        }}
      >
        I take a user-first approach, building tools that are practical, intuitive, and built for real use — not just visual appeal.
      </h2>

      {/* Divider */}
      <hr
        ref={addToRefs}
        style={{
          borderColor: "#333",
          width: "100%",
        }}
      />

      {/* Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
        }}
      >
        {/* Media Query for 2 columns */}
        <style>
          {`
            @media (min-width: 768px) {
              .about-grid {
                grid-template-columns: 1fr 1fr;
              }
            }
          `}
        </style>

        <div className="about-grid" style={{ display: "grid", gap: "2rem" }}>
          {/* Left Text */}
          <div ref={addToRefs}>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Hi, I'm <span style={{ color: "#00ff66" }}>Kishor</span>.
            </h3>
          </div>

          {/* Right Text */}
          <div
            ref={addToRefs}
            style={{
              color: "#ccc",
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              lineHeight: "1.7",
            }}
          >
            <p>
            I'm a full-stack developer with a focus on building real-world solutions using the MERN stack, animation, and automation.
            </p>
            <br />
            <p>
            My approach blends clean design, responsive UI, and solid backend logic — whether it's automating workflows, integrating AI, or delivering smooth user interactions. I aim to solve problems with purpose, scalability, and a deep attention to detail.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
