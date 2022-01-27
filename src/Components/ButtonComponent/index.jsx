import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ children }) => {
  return (
    <Button variant="primary" type="submit">
      {children.label}
    </Button>
  );
};

export default ButtonComponent;
