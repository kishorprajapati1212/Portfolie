import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// 🔧 Tech Stack Data
const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
      { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Next.js", icon: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png" },
      { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
      { name: "GSAP", icon: "https://static.cdnlogo.com/logos/g/31/gsap-greensock.svg" },
      { name: "Framer Motion", icon: "https://cdn.dribbble.com/userupload/28046663/file/still-879bd5f88faa2c210d4013090939ae0e.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "Nest.js", icon: "https://cdn.worldvectorlogo.com/logos/nestjs.svg" },
      { name: "Express.js", icon: "https://img.icons8.com/ios7/512/FFFFFF/express-js.png" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { name: "MySQL", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--QOg031QC40qi7WX2phlzs7PK8YnINn8Za96WRC6fVLIqGKonR6E07eOxECqph3Hasw&usqp=CAU" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
      { name: "Unity", icon: "https://cdn.worldvectorlogo.com/logos/unity-69.svg" },
      { name: "Netlify", icon: "https://cdn.worldvectorlogo.com/logos/netlify.svg" },
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
