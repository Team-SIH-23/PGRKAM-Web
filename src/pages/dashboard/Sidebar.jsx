import React from "react";
import { Box, ListItem, UnorderedList , Avatar, Text} from "@chakra-ui/react";

const Sidebar = ({ componentData, onItemClick }) => {
  return (
    <>
    <Box

      position="auto"
      left="0"
      height="100vh"
      width="250px"
      bg="gray.200"
      p="4"
      overflowY="auto"
      borderRight="2px solid orange" // Add an orange border
    >
      <Box mb="10px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Avatar size="xl" src='https://bit.ly/broken-link'/> 
      <Text fontWeight="bold" fontSize="20px" color="black">Hi Admin</Text>
      <Text  fontWeight={600} fontSize="15px" color="black">Welcome to your Dashboard</Text>
      </Box>
      <UnorderedList>
        {componentData.map((component, index) => (
          <ListItem
            key={index}
            onClick={() => onItemClick(component)}
            cursor="pointer"
            _hover={{ bg: "gray.300" }} // Add hover effect
            borderRadius="md"
            p="1"
            mb="1"
          >
            {component.name}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
    </>
  );
};

export default Sidebar;
