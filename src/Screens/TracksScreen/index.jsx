import "./styles.css";
import React from "react";
import { CardGroup } from "react-bootstrap";
import TrackCardComponent from "../../Components/TrackCardComponent";
import img from "../../assets/images/track-cover.jpg";

const TracksScreen = () => {
  return (
    <div>
      <CardGroup className="card-group">
        <TrackCardComponent src={img} title={"Track 1"} />
        <TrackCardComponent src={img} title={"Track 2"} />
        <TrackCardComponent src={img} title={"Track 3"} />
        <TrackCardComponent src={img} title={"Track 4"} />
        <TrackCardComponent src={img} title={"Track 5"} />
      </CardGroup>
    </div>
  );
};

export default TracksScreen;
