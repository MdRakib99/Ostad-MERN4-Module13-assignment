import React, { useState } from "react";
import "./callToActionStyle.css";

const CallToAction = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <div className='cta-button'>
      <button onClick={handleClick}> Click me</button>
      <p>Button Clicked: {clickCount} times</p>
    </div>
  );
};

export default CallToAction;
