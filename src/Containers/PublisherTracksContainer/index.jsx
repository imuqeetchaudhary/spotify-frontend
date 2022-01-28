import React, { useState, useEffect } from "react";
import TracksScreen from "../../Screens/TracksScreen";
import { getAllMyPublishedTracks, deleteTrack } from "../../api/track";
import { toast } from "react-toastify";

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

  const handleDeleteClick = async (e, id) => {
    e.preventDefault();

    const tempTracks = [...tracks];

    try {
      setTracks(tracks.filter((track) => track._id !== id));
      const res = await deleteTrack(id);
      toast(`${res.data.message}`);
    } catch (err) {
      setTracks(tempTracks);
      toast(`${err.response.data.message}`);
    }
  };

  return (
    <div>
      <TracksScreen
        tracks={tracks}
        handleClick={handleDeleteClick}
        children={{ label: "Delete" }}
      />
    </div>
  );
};

export default PublisherTracksContainer;
