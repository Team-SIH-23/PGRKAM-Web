import React from "react";
import { Box, VStack, FormControl, FormLabel, Input, Select, Button } from "@chakra-ui/react";

const Component3 = () => {
  return (
    <VStack spacing="20px">
      {/* Box with text */}
      <Box
        bg="orange.500"
        color="black"
        width="800px"
        p="10px"
        margin="0 auto " // Adjust the margin to remove the gap
        fontSize="xl"
        fontWeight="bold"
      >
        Search Career Councelling
      </Box>

      {/* Box with input fields */}
      <Box border="1px solid orange" p="20px" width="800px" margin="0 auto" position="relative" marginTop="-1px"> {/* Adjust margin and marginTop */}
        <FormControl>
          <FormLabel>Keyword</FormLabel>
          <Input type="text" placeholder="Enter text" />
        </FormControl>
        <FormControl>
          <FormLabel>Session type</FormLabel>
          <Select placeholder="Select option">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Session mode</FormLabel>
          <Select placeholder="Select option">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Education level</FormLabel>
          <Select placeholder="Select option">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" position="relative" top="10px" left="50%" transform="translateX(-50%)">
          Search
        </Button>
      </Box>
    </VStack>
  );
};

export default Component3;
