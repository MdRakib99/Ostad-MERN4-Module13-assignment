import React from "react";
import Navbar from "../components/HomeComponents/Navbar/Navbar";
import ServiceTitle from "../components/ServiceComponents/ServiceTitle/ServiceTitle";
import WebService from "../components/ServiceComponents/WebService/WebService";
import AppService from "../components/ServiceComponents/AppService/AppService";
import UIDesign from "../components/ServiceComponents/UIDesign/UIDesign";

const Service = () => {
  return (
    <div>
      <Navbar />
      <ServiceTitle />
      <WebService />
      <AppService />
      <UIDesign />
    </div>
  );
};

export default Service;
