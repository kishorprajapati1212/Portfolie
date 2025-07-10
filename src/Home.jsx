import Hero from "./Component/About_me/Hero";
import StarRainBackground from "./Component/Home/Star";
import StickySideHUD from "./Component/Home/StickySideHUD";
import AboutMe from "./Component/About_me/AboutMe";
import MyStack from "./Component/About_me/MyStack";
import Expindex from "./Component/Experience/Expindex";
import PersonalProjects from "./Component/Experience/ProjectsIndex";
import React from "react";

const Home = () => {
    return (
        <>
            


            {/* Page content on top */}
            <div className="relative z-10 text-white ">
                <Hero />
                <AboutMe />
                <MyStack />
                <Expindex />
                <PersonalProjects />
            </div>
            <StickySideHUD />
        </>
    )
}

export default Home;