import React from "react";
import Header from "../components/HomeComponents/Header/Header";
import FeatureCard from "../components/HomeComponents/FeatureCard/FeatureCard";
import CallToAction from "../components/HomeComponents/CalltoAction/CallToAction";
import Footer from "../components/HomeComponents/Footer/Footer";
import Navbar from "../components/HomeComponents/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeatureCard
        icon='🚀'
        title='Fast Performance'
        description='Our website loads quickly and provides a great user experience.'
      />
      <FeatureCard
        icon='🎨'
        title='Beautiful Design'
        description='We have a stunning and user-friendly design that catches your eye.'
      />
      <FeatureCard
        icon='📱'
        title='Mobile-Friendly'
        description='Our website is responsive and works well on all devices.'
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
