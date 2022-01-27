import "./styles.css";
import React from "react";
import CarouselScreen from "../CarouselScreen";
import AllTracksContainer from "../../Containers/AllTracksContainer";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <CarouselScreen />
      <AllTracksContainer />
    </div>
  );
};

export default HomeScreen;
