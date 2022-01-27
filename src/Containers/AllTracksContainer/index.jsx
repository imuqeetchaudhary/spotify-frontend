import React, { useState, useEffect } from "react";
import TracksScreen from "../../Screens/TracksScreen";
import { getAllTracks } from "../../api/track";

const AllTracksContainer = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await getAllTracks();
        console.log(res);
        setTracks(res.data.trackFiles);
      } catch (err) {
        console.log(err.response);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <TracksScreen tracks={tracks} />
    </div>
  );
};

export default AllTracksContainer;
