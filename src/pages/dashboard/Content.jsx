// src/pages/dashboard/Content.jsx
import React from "react";

const Content = ({ selectedComponent }) => {
  return (
    <div>
      <h2>{selectedComponent ? selectedComponent.name : "Select a component"}</h2>
      <p>{selectedComponent ? selectedComponent.content : "Click a component to view its content."}</p>
    </div>
  );
};

export default Content;

