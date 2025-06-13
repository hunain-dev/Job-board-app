import React from "react";
import Header from "../Components/Header";
import SearchList from "../Components/SearchList";
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
