import React from "react";
import "./FeatureCardStyle.css";
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='feature-card'>
      <div className='icon'>{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
