import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const freelanceProjects = [
    {
        type: "AICTE Project",
        title: "Full Stack Developer – Cultural website",
        timeline: "July 2024 - Dec 2024",
    },
    {
        type: "Freelance SaaS Project",
        title: "AI Developer – Image & Video Generation Platform",
        timeline: "Jan 2024 - May 2024",
    },
    {
        type: "Freelance Project",
        title: "Full Stack Developer – Admin Panel for Business Tool",
        timeline: "Sep 2023 - Dec 2023",
    },
    
];

const Expindex = () => {
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            itemRefs.current.forEach((el) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "top 50%",
                            scrub: 0.5,
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el);
        }
    };

    return (
        <section
            ref={sectionRef}
            style={{
                minHeight: "100vh",
                padding: "4rem 1.5rem 8rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                }}
            >
                <h3 style={{ fontSize: "clamp(1rem,3vw,1.2rem)", color: "#ccc", }}>
                    MY EXPERIENCE
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {freelanceProjects.map((exp, idx) => (
                        <div
                            key={idx}
                            ref={addToRefs}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.2rem",
                                opacity: 0,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                                    fontFamily: "monospace",
                                    color: "#999",
                                    fontWeight: "400",
                                }}
                            >
                                {exp.type}
                            </span>
                            <span
                                style={{
                                    fontSize: "clamp(1rem,6vw,2.5rem)",
                                    fontWeight: "700",
                                    color: "#ffffff",
                                }}
                            >
                                {exp.title}
                            </span>
                            <span
                                style={{
                                    fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                                    fontFamily: "'Courier New', Courier, monospace",
                                    color: "#999",
                                    fontWeight: "400",
                                    marginBottom:"2%"
                                }}
                            >
                                {exp.timeline}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expindex;
