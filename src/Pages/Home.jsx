import React from "react";
import CardList from "../Components/CardList";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="Home">
      <CardList />
    </div>
  );
};

export default Home;
