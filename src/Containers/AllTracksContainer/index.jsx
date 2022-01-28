import "./styles.css";
import React, { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import TrackCardComponent from "../../Components/TrackCardComponent";
import { getAllTracks } from "../../api/track";
import img from "../../assets/images/track-cover.jpg";

const AllTracksContainer = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await getAllTracks();
        setTracks(res.data.trackFiles);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchTracks();
  }, []);

  return (
    <CardGroup className="card-group">
      {tracks.map((track) => {
        return (
          <TrackCardComponent
            tracks={tracks}
            src={img}
            id={track._id}
            key={track._id}
            title={track.filename}
          />
        );
      })}
    </CardGroup>
  );
};

export default AllTracksContainer;
