import "./styles.css";
import React from "react";
import { Card } from "react-bootstrap";
import ButtonComponent from "../ButtonComponent";
import { deleteTrack } from "../../api/track";
import { toast } from "react-toastify";

const TrackCardComponent = ({
  id,
  src,
  title,
  tracks,
  setTracks,
  component,
}) => {
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
    <div className="single-card">
      <Card>
        <Card.Img src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <audio controls>
            <source
              src={`http://localhost:8000/tracks/${id}`}
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
          <br />
          {component === "delete" && (
            <ButtonComponent
              children={{
                label: "Delete",
              }}
              handleClick={(e) => handleDeleteClick(e, id)}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default TrackCardComponent;
