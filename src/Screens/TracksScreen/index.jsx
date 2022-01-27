import "./styles.css";
import React from "react";
import { CardGroup } from "react-bootstrap";
import TrackCardComponent from "../../Components/TrackCardComponent";
import img from "../../assets/images/track-cover.jpg";

const TracksScreen = ({ tracks, children, handleClick }) => {
  return (
    <div>
      <CardGroup className="card-group">
        {tracks.map((track) => {
          return (
            <TrackCardComponent
              key={track._id}
              src={img}
              title={track.filename}
              handleClick={handleClick}
              children={{ label: children.label }}
            />
          );
        })}
      </CardGroup>
    </div>
  );
};

export default TracksScreen;
