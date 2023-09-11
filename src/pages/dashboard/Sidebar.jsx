// // // src/pages/dashboard/Sidebar.jsx

// import React from "react";
// import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

// const Sidebar = ({ componentData, onItemClick }) => {
//   return (
//     <Box
//       position="fixed"
//       left="0"
//       top="0"
//       bottom="0"
//       width="250px"
//       bg="gray.200"
//       p="4"
//       overflowY="auto"
//     >
//       <UnorderedList>
//         {componentData.map((component, index) => (
//           <ListItem
//             key={index}
//             onClick={() => onItemClick(component)}
//             cursor="pointer"
//             _hover={{ bg: "gray.300" }}
//             borderRadius="md"
//             p="2"
//             mb="2"
//           >
//             {component.name}
//           </ListItem>
//         ))}
//       </UnorderedList>
//     </Box>
//   );
// };

// export default Sidebar;
import React from "react";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

const Sidebar = ({ componentData, onItemClick }) => {
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      width="250px"
      bg="gray.200"
      p="4"
      overflowY="auto"
      borderRight="2px solid orange" // Add an orange border
    >
      <UnorderedList>
        {componentData.map((component, index) => (
          <ListItem
            key={index}
            onClick={() => onItemClick(component)}
            cursor="pointer"
            _hover={{ bg: "gray.300" }} // Add hover effect
            borderRadius="md"
            p="2"
            mb="2"
          >
            {component.name}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Sidebar;


