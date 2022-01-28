import React, { useState, useEffect } from "react";
import TracksScreen from "../../Screens/TracksScreen";
import { getAllMyPublishedTracks } from "../../api/track";

const PublisherTracksContainer = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await getAllMyPublishedTracks();
        setTracks(res.data.trackFiles);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <TracksScreen
        tracks={tracks}
        setTracks={setTracks}
        component={"delete"}
      />
    </div>
  );
};

export default PublisherTracksContainer;
