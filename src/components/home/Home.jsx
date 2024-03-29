// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../navbar/Navbar";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";
import Monitored from "../Monitered/Monitored";
import Card from "../MonitorCard/Card";
import AdvanceFeatures from "../AdvanceFeatures/AdvanceFeatures";
import Downtime from "../Downtime/Downtime";
import KeepUpTime from "../KeepUpTime/KeepUpTime";
import UptimeStatus from "../UptimeStatus/UptimeStatus";
import FreeAccount from "../FreeAccount/FreeAccount";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <Monitored />
      <Card />
      <AdvanceFeatures />
      <Downtime />
      <KeepUpTime />
      <UptimeStatus />
      <FreeAccount />
      <Footer />
    </>
  );
};

export default Home;
