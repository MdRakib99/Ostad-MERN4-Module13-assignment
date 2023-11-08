import React from "react";
import Navbar from "../components/HomeComponents/Navbar/Navbar";
import ContactTitle from "../components/ContactComponents/ContactTitle/ContactTitle";
import FacebookContact from "../components/ContactComponents/FacebookContact/FacebookContact";
import WhatsAppContact from "../components/ContactComponents/WhatsAppContact/WhatsAppContact";
import EmailContact from "../components/ContactComponents/EmailContact/EmailContact";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactTitle />
      <FacebookContact />
      <WhatsAppContact />
      <EmailContact />
    </div>
  );
};

export default Contact;
