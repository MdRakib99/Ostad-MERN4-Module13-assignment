import React from "react";
import Navbar from "../components/HomeComponents/Navbar/Navbar";

import AboutUs from "../components/AboutComponents/AboutUs/AboutUs";
import MissionVission from "../components/AboutComponents/MissionVision/MissionVission";
import TeamMembers from "../components/AboutComponents/TeamMembers/TeamMembers";
import Ourpromise from "../components/AboutComponents/OurPromise/Ourpromise";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <MissionVission />
      <TeamMembers />
      <Ourpromise />
    </div>
  );
};

export default About;
