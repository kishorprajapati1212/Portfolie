import React from "react";

const Footer = () => {
    return (
      <footer
        style={{
          padding: "4rem 1rem",
          textAlign: "center",
          color: "#ccc",
          fontFamily: "sans-serif",
        }}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Have a project in mind?
        </p>
        <a
          href="mailto:tasmirolislam@gmail.com"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
            wordBreak: "break-word",
          }}
        >
          kishorprajapati1014@gmail.com
        </a>
      </footer>
    );
  };
  
  export default Footer;
  