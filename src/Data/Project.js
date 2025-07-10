const projects = [
  {
    id: 1,
    title: "AI Warranty Automation Dashboard",
    timeline: "2025 – Personal ",
    image: "/website_ss/Ai_Warranty/Home_warrantylookup.png" ,
    stack: ["React", "Node.js", "MongoDB"],
    usestack: ["React", "Node.js", "MongoDB", "Express.js", "Axios", "GoogleAuth" ],
    liveLink: "https://warrantylookup.netlify.app/",
    github: "https://github.com/kishorprajapati1212/warrenty_Look_Up.git", // if available
    webimages: [
      "/website_ss/Ai_Warranty/Home_warrantylookup.png" ,
      "/website_ss/Ai_Warranty/login_warranty.png",
      "/website_ss/Ai_Warranty/logndin_ss_waranty.png",
      "/website_ss/Ai_Warranty/File_uplode_warranty.png",
      "/website_ss/Ai_Warranty/Dashboard_warranty.png",

    ],
    description:
      "An AI-based automation platform that extracts expiry details from uploaded warranty PDFs and sets reminders in a dashboard calendar. Built with a focus on automation, data handling, and clean UX."
  },
  {
    id: 2,
    title: "Zombie Survival Game (Unity)",
    timeline: "2023 – Personal ",
    image: "/website_ss/Zombie_game/Start_zombie.png",
    // image: "https://raw.githubusercontent.com/kishorprajapati1212/Screen_Shot/main/website_ss/Zombie_game/Start_zombie.png",
    stack: ["Unity", "C#"],
    usestack: ["Unity", "C#", "Blender", "Mixamo"],
    liveLink: "",
    github: "https://github.com/kishorprajapati1212/zombie_survival", // if available
    webimages: [
      "/website_ss/Zombie_game/Start_zombie.png",
      "/website_ss/Zombie_game/first_look_zombie.png",
      "/website_ss/Zombie_game/Attack_zombie.png",
      "/website_ss/Zombie_game/second-Look_zombie.png",
      "/website_ss/Zombie_game/player_attack_zombie.png",
      "/website_ss/Zombie_game/End_zombie.png"
    ],
    description:
      "A 3D zombie survival game for PC built with Unity. Includes shooting mechanics, waves of enemies, and basic health/pickup system. Intended for local play."
  }
];

  
  const personalProjects = projects.map((p) => ({
    ...p,
    link: `/project/${p.id}`,
  }));
  
  export default personalProjects;
  