import React from "react";
import Navbar from "../components/HomeComponents/Navbar/Navbar";
import MyProject from "../components/ProjectComponents/MyProject/MyProject";
import ExpressProject from "../components/ProjectComponents/ExpressProject/ExpressProject";
import ReactProject from "../components/ProjectComponents/ReactProject/ReactProject";
import MongoDbProject from "../components/ProjectComponents/MongoDbProject/MongoDbProject";

const Project = () => {
  return (
    <div>
      <Navbar />
      <MyProject />
      <ExpressProject />
      <ReactProject />
      <MongoDbProject />
    </div>
  );
};

export default Project;
