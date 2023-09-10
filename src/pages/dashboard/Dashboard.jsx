 // src/pages/dashboard/Dashboard.jsx
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Component1 from "./components/Component1"; // Import Component1
import Component2 from "./components/Component2"; // Import Component2
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const componentData = [
    { name: "Self Employment", content: <Component1 /> },
    { name: "Queries", content: <Component2 /> },
    { name: "Councelling/ Foreign Councelling", content: <Component3 /> },
    { name: "Discussion Forum", content: <Component4 /> },
    { name: "Apply skill development courses", content: <Component5 /> },
    { name: "Search councellor", content: <Component6 /> },
    // Add more components as needed
  ];

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Flex>
      {/* Sidebar (smaller size and left-aligned) */}
      <Sidebar componentData={componentData} onItemClick={handleComponentClick} />

      {/* Content (on the right) */}
      <Box ml="250px" p="4">
        {selectedComponent ? (
          <div>
            <h2>{selectedComponent.name}</h2>
            {selectedComponent.content}
          </div>
        ) : (
          <p>Select a component to view its content.</p>
        )}
      </Box>
    </Flex>
  );
};

export default Dashboard;

