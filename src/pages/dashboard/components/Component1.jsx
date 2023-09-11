// // src/pages/dashboard/components/Component1.jsx
// // search self employment schemes ones

import React from "react";
import { Box, VStack, FormControl, FormLabel, Select, Button, Text } from "@chakra-ui/react";

const Component1 = () => {
  return (
    <Box border="1px solid orange" borderTopWidth="50px" p="20px" margin="0 auto" width="800px">
      <div style={{ color: "black" }}>
        <Text fontSize="xl" fontWeight="bold">
          Search Employment Scheme
        </Text>
      </div>
      <VStack spacing="4">
        <FormControl>
          <FormLabel>District</FormLabel>
          <Select placeholder="Select district">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Tehsil</FormLabel>
          <Select placeholder="Select tehsil">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Education level</FormLabel>
          <Select placeholder="Select education level">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue">Button</Button>
      </VStack>
    </Box>
  );
};

export default Component1;
