import "./styles.css";
import React from "react";
import ButtonComponent from "../../Components/ButtonComponent";
import InputComponent from "../../Components/InputComponent";

const CreateTrackScreen = ({
  trackName,
  handleTrackNameChange,
  handleTrackFileChange,
  handleSubmit,
}) => {
  return (
    <div className="create-track">
      <h1 className="heading">Create New Track</h1>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label={"Track Name:"}
          type={"text"}
          value={trackName}
          className={"input"}
          handleChange={handleTrackNameChange}
        />
        <br />
        <InputComponent
          label={"Track File:"}
          type={"file"}
          className={"input-image"}
          handleChange={handleTrackFileChange}
        />
        <br />
        <ButtonComponent children={{ label: "Submit" }} />
      </form>
    </div>
  );
};

export default CreateTrackScreen;
