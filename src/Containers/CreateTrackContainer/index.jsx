import React, { useState } from "react";
import CreateTrackScreen from "../../Screens/CreateTrackScreen";
import { toast } from "react-toastify";
import { createTrack } from "../../api/track";

const CreateTrackContainer = () => {
  const [trackName, setTrackName] = useState("");
  const [trackFile, setTrackFile] = useState("");

  const handleTrackNameChange = (e) => {
    e.preventDefault();
    setTrackName(e.target.value);
  };

  const handleTrackFileChange = (e) => {
    e.preventDefault();
    setTrackFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("track", trackFile);
    formData.append("trackName", trackName);

    try {
      await createTrack(formData);
      toast(`File uploaded successfully`);
    } catch (err) {
      toast(`${err.response.data.message}`);
    }
  };

  return (
    <div>
      <CreateTrackScreen
        trackName={trackName}
        handleTrackNameChange={handleTrackNameChange}
        handleTrackFileChange={handleTrackFileChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateTrackContainer;
