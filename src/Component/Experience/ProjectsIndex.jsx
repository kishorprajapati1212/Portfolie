import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personalProjects from "../../Data/Project";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Expindex = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const hoveredCardRef = useRef(null);

  const [imageSrc, setImageSrc] = useState("");
  const [isCardInView, setIsCardInView] = useState(true);

  const navigate = useNavigate();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Animate on scroll
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 60%",
              scrub: 0.5,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Observe if hovered card is in view
  useEffect(() => {
    if (!hoveredCardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hoveredCardRef.current);

    return () => {
      if (hoveredCardRef.current) observer.unobserve(hoveredCardRef.current);
    };
  }, [hoveredCardRef.current]);

  // Hide image if card scrolled out of view
  useEffect(() => {
    if (!isCardInView && imageRef.current) {
      setImageSrc("");
      gsap.to(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [isCardInView]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const handleMouseEnter = (textRef, image, cardRef) => {
    if (isMobile) return;

    hoveredCardRef.current = cardRef;
    setImageSrc(image);

    gsap.to(textRef.current, {
      backgroundPosition: "0% 0%",
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (textRef) => {
    if (isMobile) return;

    gsap.to(textRef.current, {
      backgroundPosition: "100% 0%",
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    });

    setImageSrc("");
  };

  const handleClick = (url) => {
    gsap.to(overlayRef.current, {
      y: 0,
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        navigate(url);
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem 8rem",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1rem,3vw,1.2rem)",
            fontWeight: "bold",
            color: "#ccc",
            letterSpacing: "0.1em",
          }}
        >
          PERSONAL PROJECTS
        </h3>

        {personalProjects.map((project, idx) => {
          const textRef = useRef(null);
          const iconRef = useRef(null);
          const cardRef = useRef(null);

          return (
            <div
              key={idx}
              ref={(el) => {
                addToRefs(el);
                cardRefs.current[idx] = el;
                cardRef.current = el;
              }}
              onClick={() => handleClick(project.link)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2rem",
                borderBottom: "1px solid #333",
                paddingBottom: "2rem",
                flexWrap: "wrap",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    ref={textRef}
                    onMouseEnter={() => {
                      handleMouseEnter(textRef, project.image, cardRef.current);
                      gsap.to(iconRef.current, {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out",
                      });
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave(textRef);
                      gsap.to(iconRef.current, {
                        x: 20,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.out",
                      });
                    }}
                    style={{
                      fontSize: "clamp(1rem,6vw,3rem)",
                      fontWeight: 700,
                      backgroundImage: `linear-gradient(to right, #00ff88 50%, #ffffff 50%)`,
                      backgroundSize: "200% 100%",
                      backgroundPosition: isMobile ? "0% 0%" : "100% 0%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline",
                      wordBreak: "break-word",
                      lineHeight: "1.2",
                    }}
                  >
                    {project.title}
                  </div>

                  <span
                    ref={iconRef}
                    style={{
                      fontSize: "1.5rem",
                      transform: "translateX(20px)",
                      opacity: 0,
                      color: "#00ff88",
                      transition: "transform 0.3s ease, opacity 0.3s ease",
                      alignSelf: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ↗
                  </span>
                </div>

                <div
                  style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#aaa" }}
                >
                  {project.stack.map((tech, i) => (
                    <span key={i} style={{ padding: "0 10px" }}>
                      ⦾{tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* 🔄 Floating Image (shows only if hovered) */}
      {!isMobile && (
        <div
          ref={imageRef}
          style={{
            position: "fixed",
            top: "50%",
            right: "2rem",
            transform: "translateY(-50%) translateX(100%)",
            width: "35vw",
            height: "20vw",
            opacity: 0,
            zIndex: 999,
            pointerEvents: "none",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          )}
        </div>
      )}

      {/* 🟢 Green Overlay Transition */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#00ff88",
          zIndex: 9999,
          transform: "translateY(100%)",
        }}
      ></div>
    </section>
  );
};

export default Expindex;
