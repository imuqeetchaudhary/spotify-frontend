import React, { useState, useEffect } from "react";
import TracksScreen from "../../Screens/TracksScreen";
import { getAllTracks } from "../../api/track";

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

  const handleClick = () => {};

  return (
    <div>
      <TracksScreen
        tracks={tracks}
        handleClick={handleClick}
        children={{ label: "Play" }}
      />
    </div>
  );
};

export default AllTracksContainer;
