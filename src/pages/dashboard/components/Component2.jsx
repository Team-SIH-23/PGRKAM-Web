// // src/pages/dashboard/components/Component2.jsx
//Raise a new Query (If you want to contact the DBEE of your district, Click here)
import React from "react";
import { Box, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Component2 = () => {
  return (
    <VStack spacing="20px">

      <Box border="1px solid orange" borderTop="50px solid orange" p="20px" width="800px" margin="0 auto" position="relative">
        <FormControl>
          <FormLabel>Type of query </FormLabel>
          <Input type="text" placeholder="Enter text" />
        </FormControl>
        <FormControl>
          <FormLabel>Describe a query</FormLabel>
          <Input type="text" placeholder="Enter text" size="lg" />
        </FormControl>
        <Button colorScheme="blue" position="relative" top="10px" left="50%" transform="translateX(-50%)">
          Button
        </Button>
      </Box>

      <Box border="1px solid orange" borderTop="50px solid orange" p="20px" width="800px" margin="0 auto" position="relative">
        <table>
          <thead>
            <tr>
              <th>#  </th>
              <th>Query-Type</th>
              <th>Raised-on</th>
              <th>Time</th>
              <th> Status</th>
              <th>Ticket-No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No records found</td>
              <td>No records found</td>
              <td>No records found</td>
              <td>No records found</td>
              <td>No records found</td>
              <td>No records found</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </VStack>
  );
};

export default Component2;


