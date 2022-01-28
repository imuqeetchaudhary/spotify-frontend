import "./styles.css";
import React from "react";
import { CardGroup } from "react-bootstrap";
import TrackCardComponent from "../../Components/TrackCardComponent";
import img from "../../assets/images/track-cover.jpg";

const TracksScreen = ({ tracks, setTracks, component }) => {
  return (
    <div>
      <CardGroup className="card-group">
        {tracks.map((track) => {
          return (
            <TrackCardComponent
              tracks={tracks}
              setTracks={setTracks}
              src={img}
              id={track._id}
              key={track._id}
              title={track.filename}
              component={component}
            />
          );
        })}
      </CardGroup>
    </div>
  );
};

export default TracksScreen;
