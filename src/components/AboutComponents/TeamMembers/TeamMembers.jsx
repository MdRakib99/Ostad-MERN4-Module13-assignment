import React from "react";
import("./teamMembersStyle.css");
const TeamMembers = () => {
  return (
    <div className='team-members'>
      <h2>Our Team</h2>
      <ul>
        <li>MD.Rakib - CEO</li>
        <li>John Doe - CTO</li>
        <li>Tom Johnson - Designer</li>
      </ul>
    </div>
  );
};

export default TeamMembers;
