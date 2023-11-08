import React from "react";
import { BiLogoGmail } from "react-icons/bi";

const EmailContact = () => {
  return (
    <div className='container'>
      <h2>Contuct us with Email</h2>
      <span>
        <BiLogoGmail />
      </span>
      <a href='#'>Get Email Address</a>
    </div>
  );
};

export default EmailContact;
