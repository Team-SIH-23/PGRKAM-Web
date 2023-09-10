import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink from react-router-dom

const Component4 = () => {
  const component3Path = "#";

  const handleLinkClick = () => {
    window.location.href = component3Path;
  };

  return (
    <Box border="1px solid #ccc" padding="20px" borderRadius="5px" display="flex" >

      <div style={{ flex: 1, backgroundColor: "#ccc", padding: "10px", height: "100vh" }}>
        <h3 style={{ color: "orange", fontSize: "20px", fontWeight: "bold" }}>Discussion Forum</h3>

      </div>


      {/* Right Column (White) */}
      <div style={{ flex: 2, backgroundColor: "white", padding: "10px" }}>
        No invitation sent/accepted.{" "}
        {/* Use a regular anchor tag to navigate to Component 3 */}
        <Link as="button" color="blue.500" onClick={handleLinkClick}>
          Click Here
        </Link>{" "}
        to go to jobs search to invite an employer for Chat.
      </div>
    </Box>
  );
};

export default Component4;
