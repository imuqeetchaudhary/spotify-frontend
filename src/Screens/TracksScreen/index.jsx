import "./styles.css";
import React from "react";
import { CardGroup } from "react-bootstrap";
import TrackCardComponent from "../../Components/TrackCardComponent";
import img from "../../assets/images/track-cover.jpg";

const TracksScreen = ({ tracks }) => {
  return (
    <div>
      <CardGroup className="card-group">
        {tracks.map((track) => {
          return (
            <TrackCardComponent
              key={track._id}
              src={img}
              title={track.filename}
            />
          );
        })}
      </CardGroup>
    </div>
  );
};

export default TracksScreen;
