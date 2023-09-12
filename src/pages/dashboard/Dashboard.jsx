 // src/pages/dashboard/Dashboard.jsx
import React, { useState,useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Navbar from "../../components/navbar/Navbar"
import Component1 from "./components/Component1"; // Import Component1
import Component2 from "./components/Component2"; // Import Component2
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";
import Component7 from "./components/Component7";
import Component8 from "./components/Component8";
import Component9 from "./components/Component9";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState({ name: "Profile Details", content:<Component7/>});
  
  const componentData = [
    { name: "Profile Details", content:<Component7/>},
    { name: "Hall Ticket", content:<Component8/>},
    { name: "My Job Interest", content:<Component9/>},
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
    <>
    <Navbar/>
    <Flex>
      {/* Sidebar (smaller size and left-aligned) */}
      <Sidebar componentData={componentData} onItemClick={handleComponentClick} />

      {/* Content (on the right) */}
      <Box ml="50px" p="4">
        {selectedComponent ? (
          <div>
            {selectedComponent.content}
          </div>
        ) : (
          <p>Hello</p>
        )}
      </Box>
    </Flex>
    </>
  );
};

export default Dashboard;

