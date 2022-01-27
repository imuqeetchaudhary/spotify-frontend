import "./styles.css";
import React from "react";
import { Card } from "react-bootstrap";
import ButtonComponent from "../ButtonComponent";

const TrackCardComponent = ({ src, title, children, handleClick }) => {
  return (
    <div className="single-card">
      <Card>
        <Card.Img src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ButtonComponent
            children={{ label: children.label }}
            handleClick={handleClick}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default TrackCardComponent;
