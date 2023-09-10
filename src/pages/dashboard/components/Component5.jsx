
import React, { useState } from "react";
import { Box, VStack, FormControl, FormLabel, Select, Button, Text } from "@chakra-ui/react";

const Component5 = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate fetching search results based on the selected options
    // Replace this with actual API calls or search logic
    const results = [
      "Result 1",
      "Result 2",
      "Result 3",
    ];

    setSearchResults(results);
  };

  return (
    <VStack spacing="4">
      {/* Box for Dropdowns and Submit Button */}
      <Box border="1px solid orange" borderTop="50px solid orange" padding="20px" borderRadius="5px" width="800px">
        <FormControl>
          <FormLabel>Select Option 1</FormLabel>
          <Select
            placeholder="Choose an option"
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Select Option 2</FormLabel>
          <Select
            placeholder="Choose an option"
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Select Option 3</FormLabel>
          <Select
            placeholder="Choose an option"
            value={selectedOption3}
            onChange={(e) => setSelectedOption3(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" position="relative" top="10px" left="50%" transform="translateX(-50%)">
          Button
        </Button>
      </Box>

      {/* Box for Search Results */}
      <Box
        border="1px solid orange"
        borderTop="50px solid orange"
        padding="20px"
        borderRadius="5px"
        width="800px"
        display={searchResults.length > 0 ? "block" : "none"}
      >
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <Text key={index}>{result}</Text>
          ))
        ) : (
          <Text fontSize="xl" fontWeight="bold" color="black">
            No results found
          </Text>
        )}
      </Box>
    </VStack>
  );
};

export default Component5;
