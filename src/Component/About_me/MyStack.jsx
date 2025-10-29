import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// 🔧 Tech Stack Data
const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "/MyStackIcon/Frontend/JS.png" },
      { name: "TypeScript", icon: "/MyStackIcon/Frontend/Typescript.svg" },
      { name: "React", icon: "/MyStackIcon/Frontend/react-2.svg" },
      { name: "Next.js", icon: "/MyStackIcon/Frontend/Next.png" },
      { name: "Redux", icon: "/MyStackIcon/Frontend/redux.svg" },
      { name: "Tailwind CSS", icon: "/MyStackIcon/Frontend/tailwindcss.svg" },
      { name: "GSAP", icon: "/MyStackIcon/Frontend/gsap-greensock.svg" },
      { name: "Framer Motion", icon: "/MyStackIcon/Frontend/Framer.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/MyStackIcon/Backend/Node.js_logo.svg" },
      // { name: "Nest.js", icon: "/MyStackIcon/nestjs.svg" },
      { name: "PHP", icon: "/MyStackIcon/Backend/Php.png" },
      { name: "Express.js", icon: "/MyStackIcon/Backend/Express.png" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "/MyStackIcon/Database/mongodb-icon-1.svg" },
      { name: "MySQL", icon: "/MyStackIcon/Database/Mysql.png" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "/MyStackIcon/Tools/git-icon.svg" },
      { name: "Unity", icon: "/MyStackIcon/Tools/unity-69.svg" },
      { name: "Netlify", icon: "/MyStackIcon/Tools/netlify.svg" },
    ],
  },
];

const MyStack = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 50%", // allows enough scroll range
              scrub: 0.5,      // ✅ smooth progress & pause when scrolling stops
              toggleActions: "play reverse play reverse", // ✅ both directions
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const addToRefs = el => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem 12rem", // 👈 extra bottom padding
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", gap: "4rem" }}>
        <h3 style={{ fontSize: "clamp(1rem,3vw,1.2rem)", color: "#ccc", }}>
          MY STACK
        </h3>

        {techStack.map((section, index) => (
          <div key={index} style={{ display: "grid", gridTemplateColumns: "40% 1fr", gap: "2rem" }} className="tech-row">
            <h2 ref={addToRefs} style={{ fontSize: "clamp(1rem,3vw,2.5rem)", fontWeight: 800, color: "#aaa" }}>
              {section.category.toUpperCase()}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {section.items.map((tech, idx) => (
                <div
                  key={idx}
                  ref={addToRefs}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    minWidth: "140px",
                    opacity: 0, // ✅ ensure hidden before scroll
                  }}
                >
                  <img src={tech.icon} alt={tech.name} style={{
                    width: "clamp(32px, 5vw, 60px)",
                    height: "clamp(32px, 5vw, 60px)",
                    objectFit: "contain",
                  }} />
                  <span style={{ fontSize: "clamp(1rem,3vw,2.2rem)", color: "#ccc", lineHeight: "1.5" }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .tech-row {
              display: flex !important;
              flex-direction: column !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default MyStack;
